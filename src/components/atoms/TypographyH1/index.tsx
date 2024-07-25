import { cn } from "@/lib/utils";
import { ReactHTML, ReactNode } from "react";

const TypographyH1 = ({ children, className, Component = "h1" }: Props) => {
  return (
    <Component
      className={cn(
        "text-primary font-semibold text-4xl tracking-[-0.02em]",
        className
      )}
    >
      {children}
    </Component>
  );
};

type Props = {
  children: ReactNode;
  className?: string;
  Component?: keyof ReactHTML;
};

export default TypographyH1;
