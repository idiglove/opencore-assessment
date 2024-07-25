import { Badge } from "@/components/atoms/Badge";

const SocialBadge = ({ icon }: Props) => {
  return (
    <a href="#">
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
};

export default SocialBadge;
