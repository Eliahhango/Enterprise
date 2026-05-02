import { caseStudySchema } from "./case-study";
import { homepageSchema } from "./homepage";
import { industrySchema } from "./industry";
import { pageSchema } from "./page";
import { serviceSchema } from "./service";
import { siteSettingsSchema } from "./site-settings";
import { testimonialSchema } from "./testimonial";

export const schemaTypes = [
  siteSettingsSchema,
  homepageSchema,
  serviceSchema,
  caseStudySchema,
  industrySchema,
  testimonialSchema,
  pageSchema,
];
