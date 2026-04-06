import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/index" className="nav-logo">
        Longevity Protocol
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/index#how">How it works</Link>
        </li>
        <li>
          <Link href="/index#quiz">The Quiz</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/index#philosophy">Philosophy</Link>
        </li>
        <li>
          <Link href="/index#science">Science</Link>
        </li>
      </ul>
      <div className="nav-cta">
        <Link href="/products" className="btn-nav-ghost">
          View products
        </Link>
        <Link href="/" className="btn-nav-solid">
          Request Access
        </Link>
      </div>
    </nav>
  );
}
