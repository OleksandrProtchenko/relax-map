import { Joi, Segments } from "celebrate";
import { isValidObjectId } from "mongoose";

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message("Invalid id format") : value;
};

const coordinatesSchema = Joi.object({
  lat: Joi.number().min(-90).max(90).required(),
  lon: Joi.number().min(-180).max(180).required(),
});

export const getAllLocationsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    region: Joi.string().max(64),
    locationType: Joi.string().max(500),
    search: Joi.string().allow("").max(96),
    sort: Joi.string().valid("rating", "newest").allow(""),
  }),
};

export const locationIdSchema = {
  [Segments.PARAMS]: Joi.object({
    locationId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createLocationSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(96).required(),
    locationType: Joi.string().max(64).required(),
    region: Joi.string().max(64).required(),
    description: Joi.string().trim().min(20).max(6000).required(),
    coordinates: coordinatesSchema.required(),
  }),
};

export const updateLocationSchema = {
  [Segments.PARAMS]: Joi.object({
    locationId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(96),
    locationType: Joi.string().max(64),
    region: Joi.string().max(64),
    description: Joi.string().trim().min(20).max(6000),
    coordinates: coordinatesSchema,
  }),
};
