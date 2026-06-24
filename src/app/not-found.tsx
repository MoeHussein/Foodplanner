import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404</p>
      <h1>That recipe is not on the menu.</h1>
      <p className="muted">
        It may have moved, or perhaps it is still being tested in the kitchen.
      </p>
      <Link className="primary-button" href="/">
        Return home
      </Link>
    </section>
  );
}
