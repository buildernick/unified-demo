import "../../doordash/doordash-theme.css";
import { DoorDashHeader } from "../../doordash/components/DoorDashHeader";
import { DoorDashFooter } from "../../doordash/components/DoorDashFooter";
import { DoorDashHero } from "../../doordash/components/DoorDashHero";
import { DoorDashHeroSection } from "../../doordash/components/DoorDashHeroSection";
import { DoorDashLeadForm } from "../../doordash/components/DoorDashLeadForm";
import { DoorDashSplitAccordion } from "../../doordash/components/DoorDashSplitAccordion";
import { DoorDashKPICard } from "../../doordash/components/DoorDashKPICard";
import { DoorDashMetricsCarousel } from "../../doordash/components/DoorDashMetricsCarousel";
import { DoorDashVerticalSections } from "../../doordash/components/DoorDashVerticalSections";
import { DoorDashButton } from "../../doordash/components/DoorDashButton";
import { DoorDashPillLink } from "../../doordash/components/DoorDashPillLink";
import { DoorDashEyebrow } from "../../doordash/components/DoorDashEyebrow";
import { heroImages, accordionItems, metrics, verticalSections } from "../../doordash/sample-data";

function GallerySection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-[var(--dd-border)]">
      <div className="w-full bg-[var(--dd-grey-light)]">
        <div className="dd-container py-6">
          <h2 className="dd-h3 mb-2">{title}</h2>
          {description && (
            <p className="dd-body max-w-[640px] text-[var(--dd-text-medium)]">{description}</p>
          )}
        </div>
      </div>
      <div className="dd-container py-8">{children}</div>
    </section>
  );
}

export default function DoorDashComponentGalleryPage() {
  return (
    <div className="doordash-theme flex min-h-screen flex-col">
      <DoorDashHeader />

      <main className="flex-1 pt-[72px]">
        <div className="dd-container py-12">
          <p className="dd-eyebrow uppercase mb-4 inline-flex">Component Gallery</p>
          <h1 className="dd-h1 max-w-[720px] text-[var(--dd-red)]">DoorDash Components</h1>
          <p className="dd-body mt-4 max-w-[640px] text-[var(--dd-text-medium)]">
            Every reusable DoorDash-themed component built so far, in one place, for reference when
            building new pages.
          </p>
        </div>

        <div className="flex flex-col">
            <GallerySection
              id="buttons-badges"
              title="Buttons & badges"
              description="Primary, secondary, and tertiary buttons, pill links, and the eyebrow badge."
            >
              <div className="flex flex-wrap items-center gap-4">
                <DoorDashButton variant="primary" text="Talk to a growth expert" />
                <DoorDashButton variant="secondary" text="Learn more" />
                <DoorDashButton variant="tertiary" text="See how they did it" />
                <DoorDashPillLink text="Learn more" />
                <DoorDashEyebrow text="DoorDash Commerce Platform" />
              </div>
            </GallerySection>

            <GallerySection
              id="doordash-hero"
              title="DoorDashHero"
              description="Simple centered eyebrow + heading, no images or form."
            >
              <div className="dd-card">
                <DoorDashHero
                  eyebrow="DoorDash Commerce Platform"
                  heading="Grow your restaurant on your website, app, and our marketplace"
                  subheading="DoorDash Commerce Platform brings everything together, from online ordering to built-in marketing, so you can drive repeat orders without extra tools."
                />
              </div>
            </GallerySection>

            <GallerySection
              id="doordash-hero-section"
              title="DoorDashHeroSection + DoorDashLeadForm"
              description="Hero image collage with an overlapping lead-gen form card. Hero text (eyebrow/heading) is handled separately at the page level, not by this component."
            >
              <DoorDashHeroSection images={heroImages}>
                <DoorDashLeadForm
                  bare
                  heading="Offer commission-free ordering on your own channels"
                  submitLabel="Talk to a growth expert"
                  consentText={'By clicking "Talk to a growth expert," I agree to receive marketing electronic communications from DoorDash.'}
                />
              </DoorDashHeroSection>
            </GallerySection>

            <GallerySection
              id="doordash-split-accordion"
              title="DoorDashSplitAccordion"
              description="Self-expanding feature list with a shared image panel that swaps per active item."
            >
              <DoorDashSplitAccordion items={accordionItems} />
            </GallerySection>

            <GallerySection
              id="doordash-kpi-card"
              title="DoorDashKPICard"
              description="A single stat card with a background image, KPI value, label, sublabel, and optional attribution. Used by DoorDashMetricsCarousel, but usable on its own too."
            >
              <div className="flex flex-wrap gap-4">
                <DoorDashKPICard
                  value={metrics[0].value}
                  label={metrics[0].label}
                  sublabel={metrics[0].sublabel}
                  name={metrics[0].name}
                  image={metrics[0].image}
                  personName={metrics[0].personName}
                  isActive={false}
                />
                <DoorDashKPICard
                  value={metrics[2].value}
                  label={metrics[2].label}
                  sublabel={metrics[2].sublabel}
                  name={metrics[2].name}
                  image={metrics[2].image}
                  personName={metrics[2].personName}
                  isActive
                />
              </div>
            </GallerySection>

            <GallerySection
              id="doordash-metrics-carousel"
              title="DoorDashMetricsCarousel"
              description="Horizontally scrollable stat cards with prev/next controls, composed from DoorDashKPICard."
            >
              <DoorDashMetricsCarousel metrics={metrics} />
            </GallerySection>

            <GallerySection
              id="doordash-vertical-sections"
              title="DoorDashVerticalSections"
              description="Variable-length list of sections with a scroll-tracked progress line."
            >
              <DoorDashVerticalSections sections={verticalSections} />
            </GallerySection>
        </div>
      </main>

      <DoorDashFooter />
    </div>
  );
}
