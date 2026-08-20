import { EmailSection } from "./EmailSection";
import { LandingFooter } from "./LandingFooter";
import { LandingHero } from "./LandingHero";
import { ModuleMap } from "./ModuleMap";
import { Payoff } from "./Payoff";
import { ToneTeaser } from "./ToneTeaser";
import styles from "./landing.module.css";

export function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <LandingHero />
      <main id="main-content">
        <ToneTeaser />
        <ModuleMap />
        <Payoff />
        <EmailSection />
      </main>
      <LandingFooter />
    </div>
  );
}
