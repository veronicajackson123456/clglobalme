import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, FileCheck2, Users } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const trustSignals = [
  { icon: BriefcaseBusiness, title: "Defined capabilities", text: "Roadside, transport, airport, retail, and digital advertising services are described by format and scope." },
  { icon: Users, title: "Named leadership", text: "The company publishes the names and responsibilities of its CEO and functional leadership team." },
  { icon: FileCheck2, title: "Responsible due diligence", text: "Confidential corporate information is shared privately with authorized counterparties during formal onboarding." },
]

export function HappyClientsSection() {
  return (
    <section className="bg-foreground py-20 text-background md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-background/60">Corporate transparency</p>
          <h2 className="text-balance text-3xl font-semibold md:text-5xl">Trust starts with clear, accountable information.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-background/70">We present our services as capabilities, identify the people responsible for delivery, and keep confidential due-diligence records within the appropriate private process.</p>
        </AnimatedSection>
        <div className="grid gap-px bg-background/20 md:grid-cols-3">
          {trustSignals.map((item, index) => {
            const Icon = item.icon
            return <AnimatedSection key={item.title} animation="fade-up" delay={index * 100} className="bg-foreground p-7 md:min-h-64"><Icon aria-hidden="true" className="text-primary" /><h3 className="mt-16 text-xl font-semibold">{item.title}</h3><p className="mt-3 leading-relaxed text-background/65">{item.text}</p></AnimatedSection>
          })}
        </div>
        <Link href="/about" className="mt-10 inline-flex items-center gap-2 border-b border-background pb-1 font-medium">View the company profile <ArrowRight aria-hidden="true" size={18} /></Link>
      </div>
    </section>
  )
}
