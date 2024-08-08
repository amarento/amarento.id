import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructDateTime(date: string, time: string) {
  /** split to hours and minutes */
  const [hours, minutes] = time.split(":").map(Number);
  if (hours === undefined || minutes === undefined)
    return {
      success: false,
      message: "Error constructing date time.",
      data: null,
    };

  /** crate date */
  const _date = new Date(date);

  /** update time */
  _date.setHours(hours, minutes);

  return { success: true, message: null, data: _date };
}
