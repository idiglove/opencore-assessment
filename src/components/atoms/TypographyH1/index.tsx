import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const TypographyH1 = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        "text-primary font-semibold text-4xl tracking-[-0.02em]",
        className
      )}
    >
      {children}
    </h1>
  );
};

type Props = {
  children: ReactNode;
  className?: string;
};

export default TypographyH1;
