import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">Foodplanner</p>
          <p className="muted">Simple recipes that scale with your week.</p>
        </div>
        <Link className="text-link" href="/#recipes">
          All recipes
        </Link>
      </div>
    </footer>
  );
}
