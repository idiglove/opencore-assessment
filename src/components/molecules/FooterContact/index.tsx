import FbIcon from "@/assets/FbIcon";
import InstaIcon from "@/assets/InstaIcon";
import { Badge } from "@/components/atoms/Badge";
import TypographyP from "@/components/atoms/TypographyP";
import SocialBadge from "../SocialBadge";
import XIcon from "@/assets/XIcon";
import LinkedInIcon from "@/assets/LinkedInIcon";
import LinkIcon from "@/assets/LinkIcon";

const FooterContact = () => {
  return (
    <div className="border-b-[1px] border-b-badge-secondary pb-8 md:pb-0 mb-8 md:mb-0 ">
      <div className="mb-6 flex md:block flex-col justify-center md:justify-start">
        <TypographyP
          className={`text-light xl:text-dark font-semibold 
            text-center md:text-left mb-2 md:mb-0
            leading-[30px] tracking-[-0.01em] text-xl`}
        >
          Say Hello!
        </TypographyP>
        <TypographyP
          variant="p2"
          className={`text-light font-normal leading-[30px] tracking-[-0.01em]
            text-xl hidden md:block`}
        >
          opencoregroup@gmail.com
        </TypographyP>
        <Badge
          className={`flex md:hidden bg-transparent rounded-md border-border border-[1px] 
          w-max mx-auto px-[30px] py-2`}
        >
          <TypographyP
            variant="p2"
            className={`text-secondaryight font-normal leading-[24px] tracking-[-0.01em]
            text-base block md:hidden mr-2 `}
          >
            opencoregroup@gmail.com
          </TypographyP>
          <LinkIcon />
        </Badge>
      </div>
      <div className="flex justify-between md:justify-start md:gap-8">
        <SocialBadge icon={<InstaIcon />} />
        <SocialBadge icon={<FbIcon />} />
        <SocialBadge icon={<XIcon />} />
        <SocialBadge icon={<LinkedInIcon />} />
      </div>
    </div>
  );
};

export default FooterContact;
