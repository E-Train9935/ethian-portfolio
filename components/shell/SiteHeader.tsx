import Link from "next/link";
import { navItems } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="Ethian Chiu home">
        <span className="brand-mark">EC</span>
        <span className="brand-copy">
          Build systems
          <br />
          that clarify
        </span>
      </Link>

      <nav aria-label="Primary navigation">
        <ol className="nav-list">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <Link className="header-contact" href="/#contact">
        Product / AI / systems
      </Link>
    </header>
  );
}