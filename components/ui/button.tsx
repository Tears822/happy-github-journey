
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden btn-custom",
  {
    variants: {
      variant: {
        default: "bg-gold text-white hover:bg-gold-dark hover:translate-y-[-2px] hover:shadow-md active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-gold bg-transparent text-gold hover:bg-gold/10 hover:text-gold",
        secondary: "bg-neutral text-white hover:bg-neutral-dark hover:translate-y-[-2px] hover:shadow-md active:translate-y-0",
        ghost: "hover:bg-gold/10 hover:text-gold",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-primary text-white hover:bg-primary-dark hover:translate-y-[-2px] hover:shadow-md active:translate-y-0"
      },
      size: {
        default: "h-10 px-4 py-2 rounded-full",
        sm: "h-9 rounded-full px-3",
        lg: "h-11 rounded-full px-8",
        icon: "h-10 w-10 rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
