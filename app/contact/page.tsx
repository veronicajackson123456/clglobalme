"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData(current => ({ ...current, [event.target.name]: event.target.value }))
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\n${formData.message}`)
    window.location.href = `mailto:clglobalmediausa@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.png"
            alt="Business meeting and campaign discussion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 md:py-20 lg:px-8">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-primary">Direct contact</p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">Start a clear conversation about your campaign.</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground mx-auto">Contact CL GLOBAL MEDIA LLC using the published details below, or prepare an email using the enquiry form.</p>
        </div>
      </section>

      <section className="bg-card py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <AnimatedSection animation="fade-left">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">Company details</p>
            <h2 className="text-3xl font-semibold">CL GLOBAL MEDIA LLC</h2>
            <div className="mt-10 flex flex-col gap-7">
              <a href="tel:+15852150461" className="flex items-start gap-4 text-muted-foreground transition-colors hover:text-foreground"><Phone className="mt-1 shrink-0 text-primary" aria-hidden="true" /><span><strong className="block text-foreground">Phone</strong>+1 (585) 215-0461</span></a>
              <a href="mailto:clglobalmediausa@gmail.com" className="flex items-start gap-4 break-all text-muted-foreground transition-colors hover:text-foreground"><Mail className="mt-1 shrink-0 text-primary" aria-hidden="true" /><span><strong className="block text-foreground">Email</strong>clglobalmediausa@gmail.com</span></a>
              <div className="flex items-start gap-4 text-muted-foreground"><MapPin className="mt-1 shrink-0 text-primary" aria-hidden="true" /><span><strong className="block text-foreground">Address</strong>99 Wall Street<br />New York 10005<br />USA</span></div>
            </div>
            <div className="mt-12 border-l-2 border-primary pl-5"><h3 className="font-semibold">Corporate enquiries</h3><p className="mt-2 leading-relaxed text-muted-foreground">Authorized counterparties may request corporate and KYB information directly as part of a formal, private due-diligence process.</p></div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right">
            <form onSubmit={handleSubmit} className="border border-border bg-background p-6 md:p-10">
              <div className="mb-8"><h2 className="text-2xl font-semibold">Prepare an email</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Submitting opens your email application with these details. The website does not store or send your message.</p></div>
              <div className="flex flex-col gap-6">
                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="name">Name<input id="name" name="name" required value={formData.name} onChange={handleChange} className="min-h-12 border border-input bg-card px-4 text-base outline-none focus:border-primary" /></label>
                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="email">Email<input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="min-h-12 border border-input bg-card px-4 text-base outline-none focus:border-primary" /></label>
                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="phone">Phone <span className="font-normal text-muted-foreground">Optional</span><input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="min-h-12 border border-input bg-card px-4 text-base outline-none focus:border-primary" /></label>
                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="message">Message<textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="border border-input bg-card p-4 text-base outline-none focus:border-primary" /></label>
                <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"><Send aria-hidden="true" size={18} />Open email</button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Verification Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Located at</p>
            <h2 className="text-3xl font-semibold">99 Wall Street, New York</h2>
          </div>

          {/* Street View Image */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/wall-street-view.png"
                alt="Street view of 99 Wall Street in New York's Financial District"
                fill
                className="object-cover"
              />
            </div>

            {/* Google Map */}
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0067!3d40.7074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7e4e1%3A0x6c296c66261b50d!2s99%20Wall%20St%2C%20New%20York%2C%20NY%2010005!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CL Global Media Office Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
