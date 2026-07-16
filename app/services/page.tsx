"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, BarChart3 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const digitalServices = [
  {
    title: "Paid Social Campaigns",
    description: "Paid social campaign planning and management across major platforms. We develop strategy, create campaign content, and manage ongoing optimization.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Pay Per Click Campaigns",
    description: "PPC campaign planning and management tailored to campaign objectives. We develop strategy, manage bids, and optimize for specified KPIs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Influencer Campaigns",
    description: "Influencer campaign planning and coordination across social platforms. We identify relevant partners and manage campaign execution.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop",
  },
]

const onlineServices = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "SEO services including keyword research, website optimization, and technical SEO. We develop and implement SEO strategy aligned with campaign objectives.",
  },
  {
    icon: BarChart3,
    title: "Analytics and Reporting",
    description: "Campaign analytics and reporting services. We track defined metrics, provide performance dashboards, and support data-informed decision-making.",
  },
]

const outdoorExamples = [
  {
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop",
    title: "Billboard Campaign",
    desc: "High-impact visual presence",
  },
  {
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1920&auto=format&fit=crop",
    title: "Digital Display",
    desc: "Dynamic content delivery",
  },
  {
    image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=1920&auto=format&fit=crop",
    title: "Street Advertising",
    desc: "Eye-level engagement",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop"
            alt="Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6 animate-fade-in-up">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100 font-sans">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Comprehensive advertising solutions tailored to elevate your brand across digital and traditional media.
          </p>
        </div>
      </section>
      
      {/* Digital Services Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
              Digital Marketing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
              Digital <span className="gradient-text">Services</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="group bg-black rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 hover-lift h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                    <p className="text-white/50 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Online Advertising Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection animation="fade-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6">
                  Online Presence
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
                  Online <span className="gradient-text">Advertising</span>
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Our online advertising services include paid social, PPC, influencer coordination, SEO, and analytics. We develop campaigns aligned with your objectives and provide ongoing performance tracking.
                </p>
                <p className="text-white/60 leading-relaxed">
                  All services include measurement and reporting to track performance against defined campaign metrics.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right">
              <div className="aspect-video relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1920&auto=format&fit=crop"
                  alt="Online advertising"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {onlineServices.map((service, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 150}>
                <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 hover-lift h-full">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Media Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
              Traditional Media
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
              Outdoor <span className="gradient-text">Media</span>
            </h2>
            <p className="text-white/60 leading-relaxed max-w-3xl">
              We provide outdoor advertising planning and coordination across roadside, transport, airport, retail, and digital formats. Services include format assessment, location planning, and campaign management.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {outdoorExamples.map((example, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={example.image}
                      alt={example.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#d4af37] transition-colors">{example.title}</h3>
                    <p className="text-white/50 text-sm">{example.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="p-12 rounded-3xl gold-border bg-[#0a0a0a]">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
                Discuss Your <span className="gradient-text">Campaign</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
                Contact us to discuss your campaign objectives, advertising formats, and timeline. We&apos;ll evaluate suitable solutions and provide planning recommendations.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] hover:bg-[#b8982f] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/20"
              >
                Contact Us Today
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
