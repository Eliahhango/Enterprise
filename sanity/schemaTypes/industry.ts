import { defineSchemaDocument, defineSchemaField } from "./_types";

export const industrySchema = defineSchemaDocument({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineSchemaField({ name: "orderRank", title: "Order Rank", type: "number" }),
    defineSchemaField({ name: "title", title: "Title", type: "string" }),
    defineSchemaField({ name: "slug", title: "Slug", type: "slug" }),
    defineSchemaField({ name: "summary", title: "Summary", type: "text" }),
    defineSchemaField({ name: "challenge", title: "Challenge", type: "text" }),
    defineSchemaField({ name: "fit", title: "Fit", type: "text" }),
    defineSchemaField({ name: "services", title: "Services", type: "array", of: [{ type: "reference" }] }),
    defineSchemaField({ name: "seo", title: "SEO", type: "object" }),
  ],
});
