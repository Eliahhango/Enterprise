import { defineSchemaDocument, defineSchemaField } from "./_types";

export const siteSettingsSchema = defineSchemaDocument({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineSchemaField({ name: "companyName", title: "Company Name", type: "string" }),
    defineSchemaField({ name: "shortLabel", title: "Short Label", type: "string" }),
    defineSchemaField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        defineSchemaField({ name: "email", title: "Email", type: "string" }),
        defineSchemaField({ name: "phone", title: "Phone", type: "string" }),
        defineSchemaField({ name: "office", title: "Office", type: "string" }),
        defineSchemaField({ name: "businessHours", title: "Business Hours", type: "string" }),
      ],
    }),
    defineSchemaField({
      name: "navigation",
      title: "Navigation",
      type: "object",
      fields: [
        defineSchemaField({ name: "headerItems", title: "Header Items", type: "array", of: [{ type: "string" }] }),
        defineSchemaField({ name: "footerItems", title: "Footer Items", type: "array", of: [{ type: "string" }] }),
      ],
    }),
    defineSchemaField({
      name: "seo",
      title: "Default SEO",
      type: "object",
      fields: [
        defineSchemaField({ name: "title", title: "Default Title", type: "string" }),
        defineSchemaField({ name: "description", title: "Default Description", type: "text" }),
      ],
    }),
  ],
});
