import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"
import { urlFor } from "./sanity"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return format(new Date(date), "MMMM dd, yyyy")
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSanityImageUrl(source: any): string {
  return urlFor(source).url()
}

export function getYearsOfExperience(startDate: string | Date): number {
  const start = new Date(startDate)
  const now = new Date()
  return now.getFullYear() - start.getFullYear()
}

export function isExternalLink(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://")
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function generateInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}

