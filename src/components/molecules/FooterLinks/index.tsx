import TypographyP from "@/components/atoms/TypographyP";

const FooterLinks = () => {
  const leftLinks = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About us",
      href: "#",
    },
    {
      label: "Work",
      href: "#",
    },
  ];

  const rightLinks = [
    {
      label: "Services",
      href: "#",
    },
    {
      label: "Contact us",
      href: "#",
    },
  ];
  return (
    <div className="w-[248px] flex justify-between">
      <div className="flex flex-col gap-[13px]">
        {leftLinks.map((link, index) => {
          return (
            <a key={index} href={link.href}>
              <TypographyP variant="p2" className="text-base md:text-xl">
                {link.label}
              </TypographyP>
            </a>
          );
        })}
      </div>
      <div className="flex flex-col gap-[13px]">
        {rightLinks.map((link, index) => {
          return (
            <a key={index} href={link.href}>
              <TypographyP variant="p2" className="text-base md:text-xl">
                {link.label}
              </TypographyP>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default FooterLinks;
