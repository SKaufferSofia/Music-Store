import "dotenv/config";

export const BASE_URL_PUBLIC =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
