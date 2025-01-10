"use client";

import ContactForm from "../components/contact/cardform";
import ContactHeader from "../components/contact/cardheader";
import ContactInfo from "../components/contact/contactinfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHeader />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
