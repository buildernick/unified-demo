import Link from "next/link";

const primaryNav = [
  { label: "Solutions", href: "https://merchants.doordash.com/en-us" },
  { label: "Business Types", href: "https://merchants.doordash.com/en-us" },
  { label: "Resources", href: "https://merchants.doordash.com/en-us" },
  { label: "Pricing", href: "https://merchants.doordash.com/en-us/pricing" },
  { label: "Contact", href: "https://merchants.doordash.com/en-us/contact" },
];

function DoorDashLogo() {
  return (
    <svg width="28" height="16" viewBox="0 0 99.5 56.5" fill="var(--dd-red)" aria-hidden="true">
      <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16" />
    </svg>
  );
}

export function DoorDashHeader() {
  return (
    <header className="doordash-theme fixed inset-x-0 top-0 z-[100] w-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex min-h-[72px] max-w-[1272px] items-center justify-between gap-4 px-6">
        <a
          href="https://merchants.doordash.com/en-us"
          className="flex items-center gap-2"
          aria-label="DoorDash for Merchants home"
        >
          <DoorDashLogo />
          <span className="font-bold text-[18px] tracking-[-0.9px] text-[var(--dd-red)]">
            DoorDash <span className="font-normal">for Merchants</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="border-b border-transparent py-3 text-sm font-medium text-[var(--dd-text-medium)] transition-colors hover:border-[var(--dd-text-medium)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/dd/components"
            title="Component Gallery"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--dd-text-primary)] hover:bg-[var(--dd-grey-light)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 4a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.5 1.5V5h1a2 2 0 1 1 0 4h-1v1.5A1.5 1.5 0 0 1 8.5 12H7v1a2 2 0 1 1-4 0v-1H1.5A1.5 1.5 0 0 1 0 10.5V9h1a2 2 0 1 0 0-4H0V3.5A1.5 1.5 0 0 1 1.5 2H4Z"
                transform="translate(2 2) scale(0.85)"
                fill="currentColor"
              />
            </svg>
          </Link>
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--dd-text-primary)] hover:bg-[var(--dd-grey-light)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.2105 18 13.7873 17.4274 15.0491 16.4633L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L16.4633 15.0491C17.4274 13.7873 18 12.2105 18 10.5C18 6.35786 14.6421 3 10.5 3ZM5 10.5C5 7.46243 7.46243 5 10.5 5C13.5376 5 16 7.46243 16 10.5C16 13.5376 13.5376 16 10.5 16C7.46243 16 5 13.5376 5 10.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <span className="hidden text-sm font-medium text-[var(--dd-text-primary)] sm:inline">US</span>
          <a
            href="https://merchant-portal.doordash.com/merchant"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-[var(--dd-text-primary)] hover:underline sm:inline"
          >
            Login
          </a>
          <a
            href="https://merchants.doordash.com/en-us"
            className="dd-btn dd-btn-primary !min-h-[40px] !px-6 !text-sm"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
