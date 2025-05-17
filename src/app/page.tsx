import Bigection from "@/components/bigapp"
import DesignSection from "@/components/design"
import DiscoverSection from "@/components/discoverd-section"
import HeroSection from "@/components/hero_sec"
import JoinCompanies from "@/components/join"
import TargetSection from "@/components/target"
import ToolsSection from "@/components/tools"
import WorkSection from "@/components/work"

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <HeroSection />
      <div className=" px-4 bg-[#0F172A]  sm:px-[50px] md:px-[105px] gap-y-3">
      <JoinCompanies/>
      <DiscoverSection />
      <ToolsSection />
      <TargetSection/>
      <WorkSection/>
      
      </div>
      <Bigection/>
      <DesignSection/>
    </main>
  )
}
