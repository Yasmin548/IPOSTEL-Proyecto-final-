import { Response } from "express";
interface response<T> {
  status: number;
  message: string;
  data?: T;
  error?: unknown;
}

export function sendResponse<T>(res: Response, response: response<T>) {
  res.status(response.status).json(response);
}
