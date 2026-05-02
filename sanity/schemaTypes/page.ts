import { defineSchemaDocument, defineSchemaField } from "./_types";

export const pageSchema = defineSchemaDocument({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineSchemaField({ name: "title", title: "Title", type: "string" }),
    defineSchemaField({ name: "slug", title: "Slug", type: "slug" }),
    defineSchemaField({ name: "layout", title: "Layout", type: "string" }),
    defineSchemaField({ name: "intro", title: "Intro", type: "text" }),
    defineSchemaField({ name: "content", title: "Content", type: "array", of: [{ type: "object" }] }),
    defineSchemaField({ name: "seo", title: "SEO", type: "object" }),
  ],
});
