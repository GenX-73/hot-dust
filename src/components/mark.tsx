import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("shrink-0", className)}>
      <rect width="32" height="32" rx="3" fill="#16110e" />
      <circle cx="16" cy="15" r="8" fill="#d4451a" />
      <circle cx="16" cy="15" r="4.2" fill="#ead9c4" />
      <path
        d="M4 26h24M8 22l4 6M16 20v8M24 22l-4 6"
        stroke="#9a8570"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}
