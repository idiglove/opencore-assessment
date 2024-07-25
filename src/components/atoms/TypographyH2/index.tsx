import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const TypographyH2 = ({ children, className }: Props) => {
  return (
    <h2
      className={cn(
        "text-secondary text-2xl leading-9 font-medium tracking-[-0.01em]",
        className
      )}
    >
      {children}
    </h2>
  );
};

type Props = {
  children: ReactNode;
  className?: string;
};

export default TypographyH2;
