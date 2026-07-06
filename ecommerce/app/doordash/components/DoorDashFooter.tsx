const solutionsLinks = [
  { label: "Marketplace", href: "https://merchants.doordash.com/en-us/products/marketplace" },
  { label: "Commerce Platform", href: "https://merchants.doordash.com/en-us/products/commerce-platform" },
  { label: "Integrations", href: "https://merchants.doordash.com/en-us/integrations" },
  { label: "Pricing", href: "https://merchants.doordash.com/en-us/pricing" },
];

const businessTypeLinks = [
  { label: "Restaurants", href: "https://merchants.doordash.com/en-us/business/restaurants" },
  { label: "Grocery", href: "https://merchants.doordash.com/en-us/business/grocery" },
  { label: "Alcohol", href: "https://merchants.doordash.com/en-us/business/alcohol" },
  { label: "Convenience", href: "https://merchants.doordash.com/en-us/business/convenience" },
  { label: "Flower Shops", href: "https://merchants.doordash.com/en-us/business/flower-shops" },
  { label: "Pet Stores", href: "https://merchants.doordash.com/en-us/business/pet-stores" },
  { label: "Retail", href: "https://merchants.doordash.com/en-us/business/retail" },
];

const resourceLinks = [
  { label: "Merchant Blog", href: "https://merchants.doordash.com/en-us/blog" },
  { label: "Learning Center", href: "https://merchants.doordash.com/en-us/learning-center" },
  { label: "Guides & Webinars", href: "https://merchants.doordash.com/en-us/resources" },
  { label: "Advocacy & Access", href: "https://merchants.doordash.com/en-us/about/advocacy-access" },
  { label: "Merchant Support", href: "https://help.doordash.com/merchants/s/merchant-support" },
];

const aboutLinks = [
  { label: "About DoorDash", href: "https://about.doordash.com/en-us" },
  { label: "Consumers", href: "https://www.doordash.com/" },
  { label: "Dashers", href: "https://dasher.doordash.com/en-us" },
  { label: "Businesses", href: "https://business.doordash.com/en-us" },
  { label: "Advertisers", href: "https://advertising.doordash.com/en-us" },
  { label: "Investor Relations", href: "https://ir.doordash.com/" },
  { label: "Careers", href: "https://careersatdoordash.com/" },
  { label: "Newsroom", href: "https://about.doordash.com/en-us/news" },
  { label: "Block Party", href: "https://blog.doordash.com/en-us" },
  { label: "Help Center", href: "https://help.doordash.com/" },
];

const legalLinks = [
  { label: "Terms", href: "https://help.doordash.com/legal/document?type=mx-terms-of-service&region=us&locale=en-us" },
  { label: "Privacy", href: "https://help.doordash.com/legal/document?type=cx-privacy-policy&region=us&locale=en-us" },
  { label: "Referral Program", href: "https://merchants.doordash.com/en-us/about/merchant-referral-program" },
  { label: "Do Not Sell or Share My Personal Information", href: "https://www.doordash.com/en-US/consent" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold tracking-[-0.14px] text-[var(--dd-text-primary)]">{title}</h3>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.label} className="text-sm text-[var(--dd-text-medium)]">
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DoorDashFooter() {
  return (
    <footer className="doordash-theme relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white">
      <section className="bg-[var(--dd-red)] text-white">
        <div className="mx-auto flex max-w-[1272px] items-center justify-between px-6 py-8">
          <div className="flex items-center gap-2">
            <svg width="28" height="16" viewBox="0 0 99.5 56.5" fill="white" aria-hidden="true">
              <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16" />
            </svg>
            <span className="text-[18px] font-bold tracking-[-0.9px]">
              DoorDash <span className="font-normal">for Merchants</span>
            </span>
          </div>
          <a href="https://merchants.doordash.com/en-us/products/commerce-platform#" className="text-sm font-medium hover:underline">
            Become a Partner
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-[1144px] px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col items-start gap-8 text-left">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://apps.apple.com/us/app/doordash-food-delivery/id719972451" className="flex items-center gap-3 text-sm font-medium text-[var(--dd-text-primary)]">
                  DoorDash for iOS
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.dd.doordash&hl=en" className="flex items-center gap-3 text-sm font-medium text-[var(--dd-text-primary)]">
                  DoorDash for Android
                </a>
              </li>
            </ul>
            <ul className="flex gap-4">
              <li>
                <a aria-label="twitter" href="https://x.com/ddformerchants" target="_blank" rel="noopener" className="text-[var(--dd-text-primary)]">
                  X
                </a>
              </li>
              <li>
                <a aria-label="facebook" href="https://facebook.com/doordash" target="_blank" rel="noopener" className="text-[var(--dd-text-primary)]">
                  FB
                </a>
              </li>
              <li>
                <a aria-label="instagram" href="https://www.instagram.com/doordashformerchants" target="_blank" rel="noopener" className="text-[var(--dd-text-primary)]">
                  IG
                </a>
              </li>
              <li>
                <a aria-label="linkedin" href="https://www.linkedin.com/company/doordash" target="_blank" rel="noopener" className="text-[var(--dd-text-primary)]">
                  IN
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-24">
            <FooterColumn title="Solutions" links={solutionsLinks} />
            <FooterColumn title="Business Types" links={businessTypeLinks} />
            <FooterColumn title="Resources" links={resourceLinks} />
          </div>
        </div>

        <ul className="my-8 flex flex-wrap justify-center gap-6 border-y border-[var(--dd-text-primary)] px-4 py-4 text-sm font-medium text-[var(--dd-text-primary)]">
          {aboutLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[var(--dd-text-medium)] sm:flex-row">
          <ul className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a rel="noopener" href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div>
            © 2026 <a href="https://about.doordash.com/en-us" className="hover:underline">DoorDash</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
