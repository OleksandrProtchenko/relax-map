import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PRIVATE_PREFIX_ROUTES = ['/locations/add'];
const AUTH_ROUTES = ['/login', '/register'];


const EDIT_LOCATION_PATTERN = /^\/locations\/[^/]+\/edit\/?$/;

function matchesRoute(pathname: string, routes: string[]): boolean {
  return routes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

function isPrivate(pathname: string): boolean {
  if (pathname === '/profile') return true;
  if (EDIT_LOCATION_PATTERN.test(pathname)) return true;
  return matchesRoute(pathname, PRIVATE_PREFIX_ROUTES);
}

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;

  const hasAccessToken = request.cookies.has('accessToken');
  const hasRefreshToken = request.cookies.has('refreshToken');

  let isAuthenticated = hasAccessToken || hasRefreshToken;
  let rotatedCookies: string[] = [];

  if (!hasAccessToken && hasRefreshToken) {
    try {
      const refreshResponse = await fetch(
        `${process.env.API_URL}/auth/refresh`,
        {
          method: 'POST',
          headers: { cookie: request.headers.get('cookie') ?? '' },
          cache: 'no-store',
        }
      );

      if (refreshResponse.ok) {
        rotatedCookies = refreshResponse.headers.getSetCookie();
      } else {
        isAuthenticated = false;
      }
    } catch {
      isAuthenticated = false;
    }
  }

  const withRotatedCookies = (response: NextResponse): NextResponse => {
    for (const cookie of rotatedCookies) {
      response.headers.append('set-cookie', cookie);
    }
    return response;
  };

  if (isPrivate(pathname) && !isAuthenticated) {
    return withRotatedCookies(
      NextResponse.redirect(new URL('/login', request.url))
    );
  }

  if (matchesRoute(pathname, AUTH_ROUTES) && isAuthenticated) {
    return withRotatedCookies(NextResponse.redirect(new URL('/', request.url)));
  }

  return withRotatedCookies(NextResponse.next());
}

export const config = {
  matcher: [
    '/profile/:path*',
    '/locations/add/:path*',
    '/locations/:locationId/edit',
    '/login',
    '/register',
  ],
};
