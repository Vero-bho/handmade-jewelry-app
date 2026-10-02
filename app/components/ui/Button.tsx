import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    "px-6 py-3 rounded-xl text-lg transition-colors disabled:opacity-50";

  const variants = {
    primary:
      "bg-brand-mauve text-brand-bg hover:bg-brand-white",
    outline:
      "border border-brand-mauve text-brand-mauve hover:bg-brand-mauve hover:text-brand-bg",
  };

  return (
    <button
      className={`${baseClass} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}