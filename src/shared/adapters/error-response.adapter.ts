import { ErrorResponse } from "../models";

export const getErrorResponseAdapter = (response: any): ErrorResponse => {
  return new ErrorResponse(
    response?.error?.error?.status,
    response?.error?.error?.message
  );
};
