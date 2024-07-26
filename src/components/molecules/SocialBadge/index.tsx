import { Badge } from "@/components/atoms/Badge";

const SocialBadge = ({ icon, className }: Props) => {
  return (
    <a href="#" className={className}>
      <Badge
        variant="secondary"
        className="flex items-center justify-center p-2 w-10 h-10"
      >
        {icon}
      </Badge>
    </a>
  );
};

type Props = {
  icon: React.ReactNode;
  className?: string;
};

export default SocialBadge;
