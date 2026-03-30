export type CmsSchemaField = {
  name: string;
  title: string;
  type: string;
  description?: string;
  options?: Record<string, unknown>;
  initialValue?: unknown;
  fields?: CmsSchemaField[];
  of?: Array<{ type: string; name?: string }>;
};

export type CmsSchemaDocument = {
  name: string;
  title: string;
  type: "document" | "object";
  fields: CmsSchemaField[];
  preview?: Record<string, unknown>;
  groups?: Array<{ name: string; title: string }>;
};

export function defineSchemaDocument(schema: CmsSchemaDocument) {
  return schema;
}

export function defineSchemaField(field: CmsSchemaField) {
  return field;
}
