"use client"
import { builder, useIsPreviewing, BuilderContent } from "@builder.io/react";
import { RenderBuilderContent } from "./builder";
import "../builder-registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BuilderLiveDataPreviewProps = {
    templateModelName: string;
    templateModelData: object;
    dataModelName: string;
    dataModelData: object;
}

export function RenderBuilderLiveDataPreview({ dataModelData, dataModelName, templateModelData, templateModelName}: BuilderLiveDataPreviewProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();///(Builder.isPreviewing || Builder.isEditing)
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.

  if (dataModelData || templateModelData || isPreviewing) {
    return (
      <>
        <BuilderContent model={dataModelName} content={dataModelData}> 
            {(data, loading, content) => {
                if (loading) return <div>Loading...</div>;
                    return (
                        <RenderBuilderContent content={templateModelData} model={templateModelName} data={{ data }} />
                    );
                }}
        </BuilderContent>
      </>
    );
  }
  return null;
}
