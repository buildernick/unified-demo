import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/src/components/builder";
import "../doordash-theme.css";
import { DoorDashHeader } from "../components/DoorDashHeader";
import { DoorDashFooter } from "../components/DoorDashFooter";

export const dynamic = "force-dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function DoorDashCmsPage(props: PageProps) {
  const builderModelName = "doordash-page";
  const locale = "en-US";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      locale,
    })
    .toPromise();

  return (
    <div className="doordash-theme flex min-h-screen flex-col">
      <DoorDashHeader />

      <main className="flex-1 pt-[72px]">
        <RenderBuilderContent
          locale={locale}
          content={content}
          model={builderModelName}
          options={{ enrich: true }}
        />
      </main>

      <DoorDashFooter />
    </div>
  );
}
