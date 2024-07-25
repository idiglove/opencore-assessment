import Hero from "@/components/organisms/Hero";
import SearchBarWithFilters from "@/components/organisms/SearchBarWithFilters";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <Hero className="mb-23" />
      <SearchBarWithFilters />
      <div className="h-[100px] w-[100px]"></div>
      <div className="h-[100px] w-[100px]"></div>
    </main>
  );
}
