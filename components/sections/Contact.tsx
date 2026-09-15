import { siteConfig } from "@/data/site";

export function Contact() {
  const { email, linkedin, github } = siteConfig.contact;
  const hasContact = Boolean(email || linkedin || github);

  return (
    <footer id="contact" className="contact-section section-shell">
      <div className="contact-meta">
        <span>GROUND LINK</span>
        <span>END OF DESCENT / START OF CONVERSATION</span>
      </div>
      <div className="contact-main">
        <h2>Let’s build something useful.</h2>
        <div className="contact-links">
          {email && <a href={`mailto:${email}`}>Email ↗</a>}
          {linkedin && <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
          {github && <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>}
          {!hasContact && (
            <span className="contact-link-placeholder">
              Contact channels are intentionally unfilled until launch.
            </span>
          )}
        </div>
      </div>
      <div className="contact-footer">
        <span>ETHIAN CHIU</span>
        <span>PRODUCT ENGINEERING / AI / ANALYTICS / SYSTEMS</span>
        <span>VERTICAL//CITY / v1.4</span>
      </div>
    </footer>
  );
}
