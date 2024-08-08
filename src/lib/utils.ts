import { type ClassValue, clsx } from "clsx";
import { alphabet, generateRandomString } from "oslo/crypto";
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

export function getInitials(name1: string, name2: string): string {
  /** split name */
  const parts1 = name1.split(" ");
  const parts2 = name2.split(" ");

  /** take first letter */
  const initials = [
    ...parts1.map((part) => part.charAt(0)),
    ...parts2.map((part) => part.charAt(0)),
  ];

  /** initials ready */
  return initials.join("").toUpperCase();
}

export function constuctClientCode(initial: string) {
  const random = generateRandomString(4, alphabet("A-Z", "0-9"));
  return `${initial}${random}`;
}
