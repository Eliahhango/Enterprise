import { defineSchemaDocument, defineSchemaField } from "./_types";

export const homepageSchema = defineSchemaDocument({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineSchemaField({ name: "hero", title: "Hero", type: "object" }),
    defineSchemaField({ name: "trustItems", title: "Trust Items", type: "array", of: [{ type: "string" }] }),
    defineSchemaField({ name: "serviceOverview", title: "Service Overview", type: "object" }),
    defineSchemaField({ name: "valuePillars", title: "Value Pillars", type: "array", of: [{ type: "object" }] }),
    defineSchemaField({ name: "problemSolution", title: "Problem Solution", type: "object" }),
    defineSchemaField({ name: "process", title: "Process", type: "object" }),
    defineSchemaField({ name: "caseStudies", title: "Case Studies", type: "object" }),
    defineSchemaField({ name: "industries", title: "Industries", type: "object" }),
    defineSchemaField({ name: "testimonials", title: "Testimonials", type: "object" }),
    defineSchemaField({ name: "finalCta", title: "Final CTA", type: "object" }),
    defineSchemaField({ name: "seo", title: "SEO", type: "object" }),
  ],
});
