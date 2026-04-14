import type { Metadata } from "next"
import Link from "next/link"
import { CalendlyInlineWidget } from "@/components/CalendlyWidgets"
import { JsonLd } from "@/components/JsonLd"
import { NAPDisplay } from "@/components/NAPDisplay"
import { PageViewTracker } from "@/components/PageViewTracker"
import { buildPageMetadata, DEFAULT_OG_IMAGE_PATH } from "@/lib/metadata"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./page.module.css"

const PATH = "/schedule"
const TITLE = `Schedule a Consultation | ${SITE_CONFIG.businessName}`
const DESCRIPTION = `Book a 15-minute real estate consultation with Dr. Jan Duffy for Pewter Valley Estates, Silverado Ranch, and nearby Las Vegas/Henderson areas.`

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImagePath: DEFAULT_OG_IMAGE_PATH,
})

const scheduleFaqs = [
  {
    question: "What is covered in the 15-minute consultation?",
    answer:
      "We cover your goals, timeline, and the most practical next steps for buying, selling, or investing in Pewter Valley Estates and nearby Silverado Ranch areas.",
  },
  {
    question: "Can I reschedule if needed?",
    answer:
      "Yes. Calendly allows rescheduling from your confirmation email, or you can call the office directly for quick adjustments.",
  },
]

export default function SchedulePage() {
  const webPage = generateWebPageSchema(TITLE, DESCRIPTION, PATH)
  const crumbs = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Schedule", url: `${SITE_CONFIG.url}${PATH}` },
  ])
  const faqSchema = generateFAQSchema(scheduleFaqs)

  return (
    <div className={styles.wrap}>
      <JsonLd data={webPage} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqSchema} />
      <PageViewTracker pageTitle="Schedule Consultation" />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Schedule</li>
          </ol>
        </nav>

        <h1 className={styles.h1}>Schedule a 15-Minute Consultation</h1>
        <p className={styles.p}>
          Choose a time that works for you. For urgent questions, call{" "}
          <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>.
        </p>

        <NAPDisplay showGoogleReviewsLink showDirections variant="compact" />
        <CalendlyInlineWidget title="Book your consultation now" />
      </div>
    </div>
  )
}
