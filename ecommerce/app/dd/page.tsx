import "../doordash/doordash-theme.css";
import { DoorDashHeader } from "../doordash/components/DoorDashHeader";
import { DoorDashFooter } from "../doordash/components/DoorDashFooter";
import { DoorDashHeroSection } from "../doordash/components/DoorDashHeroSection";
import { DoorDashLeadForm } from "../doordash/components/DoorDashLeadForm";
import { DoorDashSplitAccordion } from "../doordash/components/DoorDashSplitAccordion";
import { DoorDashMetricsCarousel } from "../doordash/components/DoorDashMetricsCarousel";
import { DoorDashVerticalSections } from "../doordash/components/DoorDashVerticalSections";
import { heroImages, accordionItems, metrics, verticalSections } from "../doordash/sample-data";

export default function DoorDashHomePage() {
  return (
    <div className="doordash-theme flex min-h-screen flex-col">
      <DoorDashHeader />

      <main className="flex-1 pt-[72px]">
        <section className="flex flex-col items-center px-6 py-12 md:py-16">
          <div className="flex w-full max-w-[1296px] flex-col items-center gap-12 md:gap-16">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="dd-eyebrow">DoorDash Commerce Platform</span>
              <h1 className="dd-h1 max-w-[888px]">
                <span className="block" style={{ color: "var(--dd-red)" }}>
                  Grow your restaurant on
                  <br className="hidden md:block" />
                </span>
                <span className="block" style={{ color: "var(--dd-red-deep)" }}>
                  your website, app, and our marketplace
                </span>
              </h1>
            </div>

            <DoorDashHeroSection images={heroImages}>
              <DoorDashLeadForm
                bare
                heading="Offer commission-free ordering on your own channels"
                submitLabel="Talk to a growth expert"
                consentText={'By clicking "Talk to a growth expert," I agree to receive marketing electronic communications from DoorDash.'}
              />
            </DoorDashHeroSection>
          </div>
        </section>

        <section className="dd-container py-16">
          <h2 className="dd-h2 mb-2">Everything you need to run and grow online, in one place</h2>
          <p className="dd-body mb-8 max-w-[560px] text-[var(--dd-text-medium)]">
            DoorDash Commerce Platform brings everything together, from online ordering to built-in
            marketing, so you can drive repeat orders without extra tools.
          </p>
          <DoorDashSplitAccordion items={accordionItems} />
        </section>

        <section className="dd-container py-16">
          <h2 className="dd-h2 mb-2">Chosen by thousands of restaurants like yours</h2>
          <p className="dd-body mb-6 text-[var(--dd-text-medium)]">
            Real operators. Real results. Powered by DoorDash technology.
          </p>
          <DoorDashMetricsCarousel metrics={metrics} />
        </section>

        <section className="dd-container py-16">
          <h2 className="dd-h2 mb-8 max-w-[560px]">Own your growth everywhere your customers order</h2>
          <DoorDashVerticalSections sections={verticalSections} />
        </section>
      </main>

      <DoorDashFooter />
    </div>
  );
}
