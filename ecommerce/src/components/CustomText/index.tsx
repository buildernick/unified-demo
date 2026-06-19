import React from "react";

function escapeAttribute(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceAnchorsInHtmlString(htmlString: string, links: any[] = []) {
  return String(htmlString ?? "").replace(
    /<a\b([^>]*)href=["']([^"']*)["']([^>]*)>.*?<\/a>/gi,
    (anchor, beforeHref, href, afterHref) => {
      const linkMatch = links.find((link) => href.endsWith(link.key));

      if (!linkMatch) {
        return anchor;
      }

      const handle = linkMatch?.product?.value?.data?.handle;
      const target = linkMatch?.target ? ` target="${escapeAttribute(linkMatch.target)}"` : "";
      const rel = linkMatch?.rel ? ` rel="${escapeAttribute(linkMatch.rel)}"` : "";
      const label = escapeHtml(linkMatch?.label ?? "");

      return `<a${beforeHref}href="/products/${escapeAttribute(handle ?? "")}"${target}${rel}${afterHref}>${label}</a>`;
    }
  );
}

const CustomText = (props: any) => {
  const updatedHtmlString = replaceAnchorsInHtmlString(props.text, props.links);

  return <div dangerouslySetInnerHTML={{ __html: updatedHtmlString }}></div>;
};

export default CustomText;
