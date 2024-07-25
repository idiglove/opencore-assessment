import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const TypographyP1 = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        `text-2xl text-medium text-textColor
        leading-9 font-medium tracking-[-0.01em]`,
        className
      )}
    >
      {children}
    </p>
  );
};

type Props = {
  children: ReactNode;
  className?: string;
};

export default TypographyP1;
