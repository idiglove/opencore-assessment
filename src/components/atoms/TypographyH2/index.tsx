import { cn } from "@/lib/utils";
import { ReactHTML, ReactNode } from "react";

const TypographyH2 = ({ children, className, Component = "h2" }: Props) => {
  return (
    <Component
      className={cn(
        "text-secondary text-2xl leading-9 font-medium tracking-[-0.01em]",
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

export default TypographyH2;
