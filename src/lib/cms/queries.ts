export const cmsQueries = {
  siteSettings: `*[_type == "siteSettings"][0]{
    companyName,
    shortLabel,
    contact,
    navigation,
    seo
  }`,
  homepage: `*[_type == "homepage"][0]{
    hero,
    trustItems[],
    serviceOverview,
    valuePillars[],
    problemSolution,
    process,
    caseStudies,
    industries,
    testimonials,
    finalCta,
    seo
  }`,
  services: `*[_type == "service"]|order(orderRank asc){
    title,
    slug,
    summary,
    hero,
    problems[],
    capabilities[],
    outcomes[],
    process[],
    whyChooseUs[],
    proof[],
    faqs[],
    finalCta,
    seo
  }`,
  serviceBySlug: `*[_type == "service" && slug.current == $slug][0]{
    title,
    slug,
    summary,
    hero,
    problems[],
    capabilities[],
    outcomes[],
    process[],
    whyChooseUs[],
    proof[],
    faqs[],
    finalCta,
    seo
  }`,
  caseStudies: `*[_type == "caseStudy"]|order(orderRank asc){
    title,
    slug,
    sector,
    industry,
    summary,
    challenge,
    solution,
    resultSummary,
    results[],
    relatedServices[]->{title, slug},
    seo
  }`,
  caseStudyBySlug: `*[_type == "caseStudy" && slug.current == $slug][0]{
    title,
    slug,
    sector,
    industry,
    summary,
    challenge,
    solution,
    resultSummary,
    results[],
    relatedServices[]->{title, slug},
    seo
  }`,
  industries: `*[_type == "industry"]|order(orderRank asc){
    title,
    slug,
    summary,
    challenge,
    fit,
    services[]->{title, slug},
    seo
  }`,
  pages: `*[_type == "page"]{
    title,
    slug,
    layout,
    intro,
    content,
    seo
  }`,
  testimonials: `*[_type == "testimonial"]|order(orderRank asc){
    quote,
    name,
    role,
    company,
    featured
  }`,
} as const;
