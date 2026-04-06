import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Longevity Protocol</div>
          <p className="footer-tagline">
            A longevity protocol platform. Not a supplement brand. The quiz is the product. The data is the moat.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Products</div>
          <ul className="footer-links">
            <li>
              <Link href="/products#cellular">CELLULAR</Link>
            </li>
            <li>
              <Link href="/products#restore">RESTORE</Link>
            </li>
            <li>
              <Link href="/products#sleep">SLEEP</Link>
            </li>
            <li>
              <Link href="/products">The Daily System</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Platform</div>
          <ul className="footer-links">
            <li>
              <Link href="/index#quiz">Take the Quiz</Link>
            </li>
            <li>
              <Link href="/index#how">How it works</Link>
            </li>
            <li>
              <Link href="/index#science">The Science</Link>
            </li>
            <li>
              <Link href="/index#philosophy">Our Philosophy</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Access</div>
          <ul className="footer-links">
            <li>
              <Link href="/">Request Access</Link>
            </li>
            <li>
              <Link href="#">Waitlist</Link>
            </li>
            <li>
              <Link href="#">Member referral</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Longevity Protocol. All rights reserved.</p>
        <div className="footer-legal">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
