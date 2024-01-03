import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'yup';

export const validateSchema = (schema: ObjectSchema<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      res.status(400).send({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }
  };
};
