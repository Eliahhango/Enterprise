import { defineSchemaDocument, defineSchemaField } from "./_types";

export const testimonialSchema = defineSchemaDocument({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineSchemaField({ name: "orderRank", title: "Order Rank", type: "number" }),
    defineSchemaField({ name: "quote", title: "Quote", type: "text" }),
    defineSchemaField({ name: "name", title: "Name", type: "string" }),
    defineSchemaField({ name: "role", title: "Role", type: "string" }),
    defineSchemaField({ name: "company", title: "Company", type: "string" }),
    defineSchemaField({ name: "featured", title: "Featured", type: "boolean" }),
  ],
});
