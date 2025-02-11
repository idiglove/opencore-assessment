import Banner from "@/components/organisms/Banner";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import Navbar from "@/components/organisms/Navbar";
import ResourcesGrid from "@/components/organisms/ResourcesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenCore - Resources page",
  description: "OpenCore's resources page",
};

export default function Home() {
  return (
    <div
      className={`before:content-[''] before:bg-grid-btm-mob md:before:bg-grid-top before:absolute before:w-full 
        before:h-[155px] md:before:h-[100px] before:top-0 before:left-0 before:rounded-[24px] before:bg-no-repeat
        before:bg-[size:100%_100%]`}
    >
      <Navbar />
      <main className="flex flex-col p-4 md:p-24 pt-0 md:pt-0">
        <Hero className="mb-6 md:mb-23" />
        <ResourcesGrid className="mb-8 md:mb-[127px]" />
        <Banner />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
