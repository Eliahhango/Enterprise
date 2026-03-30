import { defineSchemaDocument, defineSchemaField } from "./_types";

export const serviceSchema = defineSchemaDocument({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineSchemaField({ name: "orderRank", title: "Order Rank", type: "number" }),
    defineSchemaField({ name: "title", title: "Title", type: "string" }),
    defineSchemaField({ name: "slug", title: "Slug", type: "slug" }),
    defineSchemaField({ name: "summary", title: "Summary", type: "text" }),
    defineSchemaField({ name: "hero", title: "Hero", type: "object" }),
    defineSchemaField({ name: "problems", title: "Problems", type: "array", of: [{ type: "object" }] }),
    defineSchemaField({ name: "capabilities", title: "Capabilities", type: "array", of: [{ type: "object" }] }),
    defineSchemaField({ name: "outcomes", title: "Outcomes", type: "array", of: [{ type: "string" }] }),
    defineSchemaField({ name: "process", title: "Process", type: "array", of: [{ type: "object" }] }),
    defineSchemaField({ name: "whyChooseUs", title: "Why Choose Us", type: "array", of: [{ type: "object" }] }),
    defineSchemaField({ name: "proof", title: "Proof", type: "array", of: [{ type: "object" }] }),
    defineSchemaField({ name: "faqs", title: "FAQs", type: "array", of: [{ type: "object" }] }),
    defineSchemaField({ name: "finalCta", title: "Final CTA", type: "object" }),
    defineSchemaField({ name: "seo", title: "SEO", type: "object" }),
  ],
});
