import { VariantProps, cva } from "class-variance-authority";
import { Link, Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-foreground/80 hover:text-foreground font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/80",
        destructive: "bg-destructive hover:bg-destructive/80",
        outline: "border border-border hover:bg-accent ",
        ghost: "hover:bg-accent",
        link: "text-primary/80 hover:text-primary",
      },
      size: {
        default: "text-[16px] px-[16px] py-[12px]",
        sm: "text-[12px] px-[8px] py-[6px]",
        lg: "text-[16px] px-[16px] py-[12px]",
        xl: "text-[20px] px-[30px] py-[15px]",
        icon: "h-10 w-10",
        smallIcon: "h-6 w-6",
        avatar: "w-8 h-8 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  Icon?: React.ElementType;
  iconPosition?: "left" | "right";
  iconClassName?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, isLoading, Icon, iconPosition = "left", iconClassName, children, ...props },
    ref
  ) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={props.disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {Icon && iconPosition === "left" && variant !== "link" && (
              <Icon className={twMerge("mr-2 h-4 w-4", iconClassName)} />
            )}
            {variant === "link" && iconPosition === "left" && (
              <Link className={twMerge("mr-2 h-3 w-3", iconClassName)} />
            )}
            {children}
            {variant === "link" && iconPosition === "right" && (
              <Link className={twMerge("ml-2 h-3 w-3", iconClassName)} />
            )}
            {Icon && iconPosition === "right" && variant !== "link" && (
              <Icon className={twMerge("ml-2 h-4 w-4", iconClassName)} />
            )}
          </>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
