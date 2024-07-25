import Hero from "@/components/organisms/Hero";
import ResourcesGrid from "@/components/organisms/ResourcesGrid";
import SearchBarWithFilters from "@/components/organisms/SearchBarWithFilters";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <Hero className="mb-23" />
      <SearchBarWithFilters className="mb-16" />
      <ResourcesGrid />
      <div className="h-[100px] w-[100px]"></div>
      <div className="h-[100px] w-[100px]"></div>
    </main>
  );
}
