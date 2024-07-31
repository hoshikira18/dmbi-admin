import { clsx } from "clsx";
import { formatAmount } from "medusa-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
