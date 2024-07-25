import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import MenuIcon from "@/assets/MenuIcon";

const Navbar = () => {
  return (
    <div
      className={`sticky left-[50%] translate-x-[-50%] top-[52px] mx-auto 
        z-50 w-[140px] h-14 md:w-[176px] md:h-[88px]`}
    >
      <Button
        className={`border rounded-tl-full rounded-bl-full border-border-2 rounded-tr-none rounded-br-none
            w-[50%] px-[22px] py-[25px] h-full absolute top-0 left-0 hover:bg-opacity-100 bg-white `}
      >
        <Image
          src="/assets/resources/OcSmallLogo.png"
          alt="Logo"
          width={38}
          height={38}
        />
      </Button>
      <Button
        className={`border rounded-tr-full rounded-br-full border-border-2 rounded-tl-none rounded-bl-none
            w-[50%] px-[22px] py-[25px] h-full absolute top-0 right-0 hover:bg-opacity-100 bg-white`}
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Navbar;
