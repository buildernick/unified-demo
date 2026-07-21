import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

type FooterColumn = {
  heading: string;
  headingHref: string;
  links: { label: string; href: string }[];
};

const columns: FooterColumn[] = [
  {
    heading: "My Account",
    headingHref: "https://shop.lululemon.com/account/login",
    links: [
      { label: "Membership Program", href: "https://shop.lululemon.com/membership" },
      { label: "Sign In", href: "https://shop.lululemon.com/account/login" },
      { label: "Order Status", href: "https://shop.lululemon.com/help/track-order" },
      { label: "Returns", href: "https://shop.lululemon.com/help/returns-and-refunds" },
    ],
  },
  {
    heading: "Help",
    headingHref: "https://shop.lululemon.com/help",
    links: [
      { label: "Ordering", href: "https://shop.lululemon.com/help/orders" },
      { label: "Shipping and Delivery", href: "https://shop.lululemon.com/help/shipping-and-delivery" },
      { label: "Payment", href: "https://shop.lululemon.com/help/payments" },
      { label: "Product and Sizing", href: "https://shop.lululemon.com/help/products-and-sizing" },
      { label: "Stores", href: "https://shop.lululemon.com/help/stores" },
    ],
  },
  {
    heading: "Legal",
    headingHref: "https://shop.lululemon.com/help/legal/privacy-policy",
    links: [
      { label: "Privacy Policy", href: "https://shop.lululemon.com/help/legal/privacy-policy" },
      { label: "Terms of Use", href: "https://shop.lululemon.com/help/legal/terms-of-use" },
      { label: "Accessibility Statement", href: "https://shop.lululemon.com/help/accessibility-statement" },
    ],
  },
  {
    heading: "About Us",
    headingHref: "https://corporate.lululemon.com/about-us",
    links: [
      { label: "Our Business", href: "https://corporate.lululemon.com/our-business" },
      { label: "Careers", href: "https://corporate.lululemon.com/careers" },
      { label: "Sustainability", href: "https://corporate.lululemon.com/our-impact" },
    ],
  },
  {
    heading: "Contact Us",
    headingHref: "https://shop.lululemon.com/contact",
    links: [
      { label: "Live Chat", href: "https://shop.lululemon.com/live-chat" },
      { label: "Store Locator", href: "https://shop.lululemon.com/stores" },
    ],
  },
];

const bottomLinks = [
  { label: "Gift Cards", href: "https://shop.lululemon.com/help/orders/gift-card" },
  { label: "Download the App", href: "https://shop.lululemon.com/about/apps" },
  { label: "Like New Resale", href: "https://likenew.lululemon.com/" },
  { label: "Sitemap", href: "https://shop.lululemon.com/sitemap" },
];

const socials = [
  { label: "Twitter", href: "https://twitter.com/lululemon", Icon: Twitter },
  { label: "Youtube", href: "https://youtube.com/lululemon", Icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/lululemon", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/lululemon", Icon: Instagram },
];

export function LuluSiteFooter() {
  return (
    <footer className="bg-lulu-ink px-6 py-10 font-lulu-display text-lulu-bone md:px-10">
      <div className="mx-auto grid max-w-[1560px] grid-cols-2 gap-8 md:grid-cols-5">
        {columns.map((column) => (
          <div key={column.heading}>
            <Link
              href={column.headingHref}
              className="text-lulu-body-sm font-semibold text-lulu-bone"
            >
              {column.heading}
            </Link>
            <ul className="mt-3 flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-lulu-label text-lulu-bone/90">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-[1560px] flex-col items-start justify-between gap-6 border-t border-lulu-bone/20 pt-6 md:flex-row md:items-center">
        <ul className="flex flex-wrap gap-4">
          {bottomLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-lulu-label text-lulu-bone/90">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer nofollow"
              aria-label={`lululemon's ${label} page`}
              className="text-lulu-bone/80 transition-opacity hover:opacity-60"
            >
              <Icon className="h-5 w-5" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
