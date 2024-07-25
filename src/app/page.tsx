import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <Hero />
      <div className="h-[100px] w-[100px]"></div>
      <div className="h-[100px] w-[100px]"></div>
      <div className="h-[100px] w-[100px]"></div>
    </main>
  );
}
