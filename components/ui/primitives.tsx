import { forwardRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Button --------------------------------------------------------- */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out",
    "focus-visible:outline-none",
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
    variant === "primary" &&
      "bg-ink text-paper hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(18,19,16,0.45)]",
    variant === "secondary" &&
      "border border-ink/15 text-ink hover:-translate-y-0.5 hover:border-ink/40",
    variant === "ghost" && "text-ink hover:text-bronze",
    className
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

/* Input ------------------------------------------------------------ */

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full border-0 border-b border-ink/15 bg-transparent py-3 text-base text-ink placeholder:text-graphite/60",
        "focus:border-bronze focus:outline-none transition-colors duration-300",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

/* Textarea ----------------------------------------------------------- */

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full resize-none border-0 border-b border-ink/15 bg-transparent py-3 text-base text-ink placeholder:text-graphite/60",
        "focus:border-bronze focus:outline-none transition-colors duration-300",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

/* Badge / eyebrow label ---------------------------------------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("section-index inline-flex items-center gap-2", className)}>
      <span className="h-px w-6 bg-blueprint/60" />
      {children}
    </span>
  );
}
