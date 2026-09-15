import { HeroCity } from "@/components/city/HeroCity";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section id="top" className="hero">
      <HeroCity />

      <div className="section-shell hero-inner">
        <div className="hero-topline" aria-hidden="true">
          <span>VERTICAL//CITY</span>
          <span>00 / ARRIVAL DECK</span>
          <span>PRODUCT × SYSTEMS × AI</span>
        </div>

        <div className="hero-layout">
          <div className="hero-side-meta" aria-hidden="true">
            <span>ETHIAN.CHIU</span>
            <span>PORTFOLIO / 2026</span>
            <i />
            <span>BUILD</span>
            <span>ANALYZE</span>
            <span>SHIP</span>
          </div>

          <Reveal className="hero-copy hero-copy-v2">
            <p className="hero-kicker">Product engineer / systems thinker</p>
            <h1 className="hero-title-v2" aria-label="Ethian Chiu">
              <span className="hero-title-solid">ETHIAN</span>
              <span className="hero-title-outline">CHIU.</span>
            </h1>

            <div className="hero-copy-lower">
              <p className="hero-statement">
                I build systems that turn messy operations into usable software.
              </p>
              <div className="hero-copy-support">
                <p className="hero-disciplines">
                  Product Engineering / AI / Analytics / Systems
                </p>
                <div className="hero-actions">
                  <a className="text-link text-link-primary" href="#selected-systems">
                    Enter selected systems <span>↘</span>
                  </a>
                  <a className="text-link" href="#profile">
                    Profile
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="hero-core-caption" aria-hidden="true">
            <span>INFRASTRUCTURE CORE / 00</span>
            <strong>VERTICAL SYSTEMS</strong>
            <p>
              One city. Multiple layers.
              <br />
              Strategy above. Operations below.
            </p>
          </div>
        </div>

        <div className="hero-bottomline" aria-hidden="true">
          <div><span>01</span><p>Real problems</p></div>
          <div><span>02</span><p>Useful systems</p></div>
          <div><span>03</span><p>Technical clarity</p></div>
          <div className="hero-descend"><span>SCROLL</span><i /></div>
        </div>
      </div>
    </section>
  );
}
