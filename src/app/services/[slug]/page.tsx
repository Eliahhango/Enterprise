import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePage } from "@/components/service/service-page";
import { createPageMetadata } from "@/lib/seo/metadata";
import { isServiceSlug, serviceMap, services } from "@/lib/services";

type ServicePageRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageRouteProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isServiceSlug(slug)) {
    return {};
  }

  const service = serviceMap[slug];

  return createPageMetadata({
    title: service.name,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServicePageRouteProps) {
  const { slug } = await params;

  if (!isServiceSlug(slug)) {
    notFound();
  }

  return <ServicePage service={serviceMap[slug]} />;
}
