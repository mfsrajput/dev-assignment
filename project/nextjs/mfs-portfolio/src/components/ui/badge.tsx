import { cn } from "@/lib/utils"

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span className={cn("px-2 py-1 text-sm font-medium bg-primary text-white rounded-md", className)} {...props} />
  )
}
