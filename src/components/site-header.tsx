import Link from "next/link";
import { CookingPot } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="Foodplanner home">
          <CookingPot aria-hidden="true" size={19} strokeWidth={1.7} />
          <span>Foodplanner</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link className="nav-link" href="/#recipes">
            Browse recipes
          </Link>
        </nav>
      </div>
    </header>
  );
}
