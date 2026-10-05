import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "yellow";
  className?: string;
};

const styles = {
  primary: "bg-ch-pink text-white hover:bg-pink-700 shadow-sm",
  secondary: "bg-ch-teal text-white hover:bg-teal-600",
  outline: "border-2 border-ch-pink text-ch-pink hover:bg-ch-pink hover:text-white",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57]",
  yellow: "bg-ch-yellow text-ch-dark hover:bg-yellow-300",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-200";
  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}