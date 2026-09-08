import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap stamp text-sm font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  {
    variants: {
      variant: {
        primary:
          "bg-ember text-ember-fg hover:bg-ember-hot rounded-md px-5 py-2.5 min-h-11",
        secondary:
          "border border-line bg-elevated text-fg hover:border-ember/50 hover:text-ember-fg rounded-md px-5 py-2.5 min-h-11",
        ghost: "text-muted hover:text-fg rounded-md px-3 py-2 min-h-11",
        link: "text-ember hover:text-ember-hot underline-offset-4 hover:underline px-0 py-0",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}
