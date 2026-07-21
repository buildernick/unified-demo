import { LuluButton } from "@/src/lulu/components/LuluButton";

export function LuluFooter() {
  return (
    <section className="bg-lulu-sand px-6 py-12 md:px-10 md:py-12">
      <div className="mx-auto flex max-w-[1560px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="font-lulu-display text-lulu-display-lg text-lulu-ink">
            New to Lulu?
          </h2>
          <p className="mt-4 font-lulu-display text-lulu-body-lg text-lulu-ink">
            Get familiar, get inspired, and get moving.
          </p>
        </div>
        <LuluButton href="/lulu/style-guide">Start Here</LuluButton>
      </div>
    </section>
  );
}
