import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const GridBadge = ({ children, variant }: Props) => {
  return (
    <>
      <Badge
        className={cn("bg-badge-white md:bg-badge", {
          ["rounded-[50px] px-3 py-2"]: variant === "pill",
        })}
      >
        {children}
      </Badge>
    </>
  );
};

type Props = {
  children: ReactNode;
  variant?: string;
};

export default GridBadge;
