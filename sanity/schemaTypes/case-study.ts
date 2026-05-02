import { defineSchemaDocument, defineSchemaField } from "./_types";

export const caseStudySchema = defineSchemaDocument({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineSchemaField({ name: "orderRank", title: "Order Rank", type: "number" }),
    defineSchemaField({ name: "title", title: "Title", type: "string" }),
    defineSchemaField({ name: "slug", title: "Slug", type: "slug" }),
    defineSchemaField({ name: "sector", title: "Sector", type: "string" }),
    defineSchemaField({ name: "industry", title: "Industry", type: "string" }),
    defineSchemaField({ name: "summary", title: "Summary", type: "text" }),
    defineSchemaField({ name: "challenge", title: "Challenge", type: "text" }),
    defineSchemaField({ name: "solution", title: "Solution", type: "text" }),
    defineSchemaField({ name: "resultSummary", title: "Result Summary", type: "text" }),
    defineSchemaField({ name: "results", title: "Results", type: "array", of: [{ type: "string" }] }),
    defineSchemaField({ name: "relatedServices", title: "Related Services", type: "array", of: [{ type: "reference" }] }),
    defineSchemaField({ name: "seo", title: "SEO", type: "object" }),
  ],
});
