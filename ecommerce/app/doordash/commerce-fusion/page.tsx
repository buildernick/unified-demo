import "../doordash-theme.css";
import { DoorDashHeader } from "../components/DoorDashHeader";
import { DoorDashFooter } from "../components/DoorDashFooter";
import { DoorDashEyebrow } from "../components/DoorDashEyebrow";
import { DoorDashHeroSection } from "../components/DoorDashHeroSection";
import { DoorDashFormContainer } from "../components/DoorDashFormContainer";
import { DoorDashFormTextField } from "../components/DoorDashFormTextField";
import { DoorDashFormEmailField } from "../components/DoorDashFormEmailField";
import { DoorDashFormSubmitButton } from "../components/DoorDashFormSubmitButton";
import { DoorDashSplitAccordion } from "../components/DoorDashSplitAccordion";

const heroImages = [
  "https://images.ctfassets.net/trvmqu12jq2l/1zZ8Yh6m2fTMoCQHIyliXT/f1107e7a6e65f215abba4351f83d951c/hero-img-table-phones.avif?w=470&fm=webp&q=80",
  "https://images.ctfassets.net/trvmqu12jq2l/6QHALHTeb99Mps00wKoiK5/b7b0a726093b1f14f5323700785f59f5/hero-img-computer.avif?w=562&fm=webp&q=80",
  "https://images.ctfassets.net/trvmqu12jq2l/1wrdeCzkYvD6wkFdXusIRQ/967c4c73f89f74a5271e983890ceb7c2/hero-img-money.avif?w=470&fm=webp&q=80",
  "https://images.ctfassets.net/trvmqu12jq2l/6OQSDiuz2xbgTkHFl8JZYv/99bf8757a5368fc08fcf39b941d2a8b4/hero-img-delivery-app.avif?w=562&fm=webp&q=80",
];

const accordionItems = [
  {
    title: "Commission-Free Online Ordering",
    description:
      "Add direct ordering to your website in less than a day. Your menu syncs automatically with Marketplace, checkout is optimized to convert, and every delivery is fulfilled by Dashers.",
    href: "https://merchants.doordash.com/en-us/products/online-ordering",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F667f9d4f78594c8da4c4c2d03e83475d?format=webp",
  },
  {
    title: "Branded Mobile App",
    description:
      "A custom-branded mobile app built just for you and designed to drive repeat business with effortless reordering and built-in push notifications that keep you top of mind.",
    href: "https://merchants.doordash.com/en-us/products/mobile-apps",
    image:
      "https://images.ctfassets.net/trvmqu12jq2l/4ppkYC7KOm6DF0UhkDkJg0/77299dc5a7479b3abd4f4d4d5c5c0919/Branded_Mobile_App_-_Tomatillo_Taqueria_-_V1_-_Square.png?q=60&w=1280&fm=webp",
  },
  {
    title: "Cross-channel loyalty program",
    description:
      "A custom-branded mobile app built just for you and designed to drive repeat business with effortless reordering and built-in push notifications that keep you top of mind.",
    href: "https://merchants.doordash.com/en-us/products/mobile-apps",
    image:
      "https://images.ctfassets.net/trvmqu12jq2l/4ppkYC7KOm6DF0UhkDkJg0/77299dc5a7479b3abd4f4d4d5c5c0919/Branded_Mobile_App_-_Tomatillo_Taqueria_-_V1_-_Square.png?q=60&w=1280&fm=webp",
  },
  {
    title: "Branded Website",
    description:
      "A custom-branded mobile app built just for you and designed to drive repeat business with effortless reordering and built-in push notifications that keep you top of mind.",
    href: "https://merchants.doordash.com/en-us/products/mobile-apps",
    image:
      "https://images.ctfassets.net/trvmqu12jq2l/4ppkYC7KOm6DF0UhkDkJg0/77299dc5a7479b3abd4f4d4d5c5c0919/Branded_Mobile_App_-_Tomatillo_Taqueria_-_V1_-_Square.png?q=60&w=1280&fm=webp",
  },
  {
    title: "Guest Experience Management",
    description:
      "A custom-branded mobile app built just for you and designed to drive repeat business with effortless reordering and built-in push notifications that keep you top of mind.",
    href: "https://merchants.doordash.com/en-us/products/mobile-apps",
    image:
      "https://images.ctfassets.net/trvmqu12jq2l/4ppkYC7KOm6DF0UhkDkJg0/77299dc5a7479b3abd4f4d4d5c5c0919/Branded_Mobile_App_-_Tomatillo_Taqueria_-_V1_-_Square.png?q=60&w=1280&fm=webp",
  },
  {
    title: "Automated Email Marketing",
    description:
      "A custom-branded mobile app built just for you and designed to drive repeat business with effortless reordering and built-in push notifications that keep you top of mind.",
    href: "https://merchants.doordash.com/en-us/products/mobile-apps",
    image:
      "https://images.ctfassets.net/trvmqu12jq2l/4ppkYC7KOm6DF0UhkDkJg0/77299dc5a7479b3abd4f4d4d5c5c0919/Branded_Mobile_App_-_Tomatillo_Taqueria_-_V1_-_Square.png?q=60&w=1280&fm=webp",
  },
  {
    title: "Customizable Email and Text Markeing",
    description:
      "A custom-branded mobile app built just for you and designed to drive repeat business with effortless reordering and built-in push notifications that keep you top of mind.",
    href: "https://merchants.doordash.com/en-us/products/mobile-apps",
    image:
      "https://images.ctfassets.net/trvmqu12jq2l/4ppkYC7KOm6DF0UhkDkJg0/77299dc5a7479b3abd4f4d4d5c5c0919/Branded_Mobile_App_-_Tomatillo_Taqueria_-_V1_-_Square.png?q=60&w=1280&fm=webp",
  },
];

export default function DoorDashCommerceFusionPage() {
  return (
    <div className="doordash-theme flex min-h-screen flex-col">
      <DoorDashHeader />

      <main className="flex-1 pt-[72px]">
        <div className="dd-container flex flex-col gap-16 pb-[30px] pt-6">
          <div className="flex flex-col items-center gap-2">
            <div className="mx-auto w-fit">
              <DoorDashEyebrow text="DoorDash Commerce Platform" />
            </div>
            <h1
              className="text-center"
              style={{ color: "var(--dd-red)", fontFamily: "var(--dd-font-primary)", letterSpacing: 0 }}
            >
              Grow your restaurant on
            </h1>
            <p
              className="text-center"
              style={{ fontSize: "var(--dd-text-h1-size)", color: "var(--dd-burgundy)" }}
            >
              your website, app, and our marketplace
            </p>
          </div>

          <DoorDashHeroSection images={heroImages}>
            <DoorDashFormContainer method="POST">
              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex-1">
                    <DoorDashFormTextField name="firstName" label="First Name" />
                  </div>
                  <div className="flex-1">
                    <DoorDashFormTextField name="lastName" label="Last Name" />
                  </div>
                </div>
                <DoorDashFormTextField name="restaurant" label="Restaurant Name" required />
                <DoorDashFormEmailField name="email" label="Email Address" />
                <DoorDashFormSubmitButton text="Submit" />
              </div>
            </DoorDashFormContainer>
          </DoorDashHeroSection>

          <div className="flex flex-col gap-2">
            <p
              className="text-center font-semibold"
              style={{ fontSize: "var(--dd-text-h3-size)", color: "var(--dd-burgundy)" }}
            >
              Everything you need
              <br />
              to run and grow online, in one place
            </p>
            <p className="text-center" style={{ color: "var(--dd-text-muted)" }}>
              DoorDash Commerce Platform brings everything together, from online ordering to
              built-in marketing, so you can drive repeat orders without extra tools.
            </p>
          </div>

          <DoorDashSplitAccordion items={accordionItems} />
        </div>
      </main>

      <DoorDashFooter />
    </div>
  );
}
