import Link from "next/link";
import { cn } from "@/lib/utils";

export type SiteHeaderVariant = "home" | "products";

type SiteHeaderProps = {
  variant?: SiteHeaderVariant;
};

const linkClass =
  "text-[13px] font-medium tracking-wide text-ink-dim transition-colors hover:text-ink";

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  if (variant === "products") {
    return (
      <nav
        data-site-nav="products"
        className="fixed top-0 right-0 left-0 z-[200] flex items-center justify-between border-b border-border-subtle bg-bg/80 px-6 py-6 backdrop-blur-md lg:px-14"
      >
        <Link
          href="/"
          className="font-display text-sm font-extrabold tracking-[0.14em] text-ink uppercase"
        >
          Longevity Protocol
        </Link>
        <ul className="hidden items-center gap-9 lg:flex">
          <li>
            <Link href="/#how" className={linkClass}>
              How it works
            </Link>
          </li>
          <li>
            <Link href="/#quiz" className={linkClass}>
              The Quiz
            </Link>
          </li>
          <li>
            <Link href="/products" className={linkClass}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/#philosophy" className={linkClass}>
              Philosophy
            </Link>
          </li>
        </ul>
        <Link
          href="/landing"
          className="rounded bg-ink px-5 py-2.5 font-display text-xs font-bold tracking-[0.1em] text-bg uppercase transition hover:bg-[#1e1c16] active:translate-y-px"
        >
          Request Access
        </Link>
      </nav>
    );
  }

  return (
    <nav
      data-site-nav="home"
      className="fixed top-0 right-0 left-0 z-[200] flex items-center justify-between border-b border-border-subtle bg-bg/80 px-6 py-6 backdrop-blur-md lg:px-[60px]"
    >
      <Link
        href="/"
        className="font-display text-sm font-extrabold tracking-[0.14em] text-ink uppercase"
      >
        Longevity Protocol
      </Link>
      <ul className="hidden items-center gap-9 lg:flex">
        <li>
          <Link href="/#how" className={linkClass}>
            How it works
          </Link>
        </li>
        <li>
          <Link href="/#quiz" className={linkClass}>
            The Quiz
          </Link>
        </li>
        <li>
          <Link href="/#products" className={linkClass}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/#philosophy" className={linkClass}>
            Philosophy
          </Link>
        </li>
        <li>
          <Link href="/#science" className={linkClass}>
            Science
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Link
          href="/products"
          className={cn(
            "hidden text-xs font-semibold tracking-[0.08em] text-ink-dim uppercase transition-colors hover:text-ink sm:inline",
          )}
        >
          View products
        </Link>
        <Link
          href="/landing"
          className="rounded bg-ink px-5 py-2.5 font-display text-xs font-bold tracking-[0.1em] text-bg uppercase transition hover:bg-[#1e1c16] active:translate-y-px"
        >
          Request Access
        </Link>
      </div>
    </nav>
  );
}
