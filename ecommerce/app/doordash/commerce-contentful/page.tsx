import { notFound } from "next/navigation";
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
import { getDoorDashProductLanding } from "@/lib/contentful/api";

export const dynamic = "force-dynamic";

export default async function DoorDashCommerceContentfulPage() {
  const page = await getDoorDashProductLanding("doordash/commerce-fusion");

  if (!page) {
    notFound();
  }

  return (
    <div className="doordash-theme flex min-h-screen flex-col">
      <DoorDashHeader />

      <main className="flex-1 pt-[72px]">
        <div className="dd-container flex flex-col gap-16 pb-[30px] pt-6">
          <div className="flex flex-col items-center gap-2">
            <div className="mx-auto w-fit">
              <DoorDashEyebrow text={page.heroEyebrow} />
            </div>
            <h1
              className="text-center"
              style={{ color: "var(--dd-red)", fontFamily: "var(--dd-font-primary)", letterSpacing: 0 }}
            >
              {page.heroHeadline}
            </h1>
            <p
              className="text-center"
              style={{ fontSize: "var(--dd-text-h1-size)", color: "var(--dd-burgundy)" }}
            >
              {page.heroSubheadline}
            </p>
          </div>

          <DoorDashHeroSection images={page.heroImages}>
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
                <DoorDashFormSubmitButton text={page.formSubmitLabel ?? "Submit"} />
              </div>
            </DoorDashFormContainer>
          </DoorDashHeroSection>

          <div className="flex flex-col gap-2">
            <p
              className="text-center font-semibold whitespace-pre-line"
              style={{ fontSize: "var(--dd-text-h3-size)", color: "var(--dd-burgundy)" }}
            >
              {page.sectionHeading}
            </p>
            <p className="text-center" style={{ color: "var(--dd-text-muted)" }}>
              {page.sectionDescription}
            </p>
          </div>

          <DoorDashSplitAccordion items={page.features} />
        </div>
      </main>

      <DoorDashFooter />
    </div>
  );
}
