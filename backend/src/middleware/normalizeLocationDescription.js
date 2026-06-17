export const normalizeLocationDescription = (req, res, next) => {
  if (typeof req.body.description === "string") {
    req.body.description = req.body.description
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .trim();
  }

  next();
};
