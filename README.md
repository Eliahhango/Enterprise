# [Company Name] Website Foundation

Premium multi-service company website built with Next.js App Router and Tailwind CSS 4.

Current implemented scope:
- global layout shell
- premium header and footer
- reusable homepage sections
- service pages
- About, Industries, Case Studies, and How We Work pages
- contact page and thank-you flow
- server-side form validation and email delivery hook
- CMS-ready schema and revalidation scaffolding
- SEO metadata helpers, robots, sitemap, Open Graph image, and not-found page
- build-safe analytics and client monitoring hooks

Services:
- Cybersecurity
- Web Development
- Graphics & Design
- Civil Engineering

Deployment:
- deploy the project from the repository root on Vercel
- Vercel will install dependencies during deployment

Current CMS note:
- the repository now includes build-safe CMS scaffolding, schema definitions, query strings, and a revalidation endpoint
- external CMS packages were not added in this workspace because we are still avoiding local installs
- when you are ready for the full Sanity hookup, the expected install layer will include the Sanity and Next-Sanity packages plus Studio wiring

Environment variables expected now:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `REVALIDATE_SECRET`
- `NEXT_PUBLIC_SITE_URL`

Optional Milestone 7 environment variables:
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_CLARITY_ID`
- `NEXT_PUBLIC_ENABLE_CLIENT_MONITORING`

Future CMS environment variables to add later:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_SANITY_USE_CDN`

Note:
- local dependency installation was not completed in this workspace due to your data constraint, so the app was not locally verified before handoff
- analytics, monitoring, and canonical metadata are wired in a build-safe way and become active only when their environment variables are present

# Enterprise
