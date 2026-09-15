import { CityField } from "@/components/city/CityField";
import { Architecture } from "@/components/sections/Architecture";
import { Contact } from "@/components/sections/Contact";
import { Experiments } from "@/components/sections/Experiments";
import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { SelectedSystems } from "@/components/sections/SelectedSystems";
import { LevelRail } from "@/components/shell/LevelRail";
import { SiteHeader } from "@/components/shell/SiteHeader";

export default function HomePage() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#selected-systems">
        Skip to selected work
      </a>
      <CityField />
      <SiteHeader />
      <LevelRail />
      <Hero />
      <SelectedSystems />
      <Architecture />
      <Experiments />
      <Profile />
      <Contact />
    </main>
  );
}
