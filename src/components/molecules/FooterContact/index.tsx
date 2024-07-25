import FbIcon from "@/assets/FbIcon";
import InstaIcon from "@/assets/InstaIcon";
import { Badge } from "@/components/atoms/Badge";
import TypographyP from "@/components/atoms/TypographyP";
import SocialBadge from "../SocialBadge";
import XIcon from "@/assets/XIcon";
import LinkedInIcon from "@/assets/LinkedInIcon";

const FooterContact = () => {
  return (
    <div>
      <div className="mb-6">
        <TypographyP
          className={`text-dark font-bold leading-[30px] tracking-[-0.01em]
            text-xl`}
        >
          Say Hello!
        </TypographyP>
        <TypographyP
          variant="p2"
          className={`text-light font-normal leading-[30px] tracking-[-0.01em]
            text-xl`}
        >
          opencoregroup@gmail.com
        </TypographyP>
      </div>
      <div className="flex gap-8">
        <SocialBadge icon={<InstaIcon />} />
        <SocialBadge icon={<FbIcon />} />
        <SocialBadge icon={<XIcon />} />
        <SocialBadge icon={<LinkedInIcon />} />
      </div>
    </div>
  );
};

export default FooterContact;
