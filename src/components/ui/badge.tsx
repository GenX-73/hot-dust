import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "muted",
  ...props
}: React.ComponentProps<"span"> & { tone?: "ember" | "ash" | "muted" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 stamp text-[11px] leading-none",
        tone === "ember" && "border-ember/50 bg-ember/15 text-ember-hot",
        tone === "ash" && "border-ash/30 bg-ash/10 text-ash",
        tone === "muted" && "border-line bg-elevated text-muted",
        className,
      )}
      {...props}
    />
  );
}
