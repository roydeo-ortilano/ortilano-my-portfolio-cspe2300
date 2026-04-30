"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const styles = {
    primary:
      "bg-cyan-500 text-slate-900 hover:bg-cyan-400 active:bg-cyan-600",

    secondary:
      "bg-slate-600 text-white hover:bg-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600",

    outline:
      "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-slate-900 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}