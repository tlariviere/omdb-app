import type { RequestHandler, NextFunction } from "express";

const asyncHandler = (
  fn: (...args: Parameters<RequestHandler>) => void | Promise<void>
): RequestHandler => {
  return (...args) => {
    const result = fn(...args);
    const next = args[args.length - 1] as NextFunction;
    return Promise.resolve(result).catch(next);
  };
};

export default asyncHandler;
