import React from "react";
import Navbar from "@/components/cpl/Navbar";
import Hero from "@/components/cpl/Hero";
import Stats from "@/components/cpl/Stats";
import Services from "@/components/cpl/Services";
import BeforeAfter from "@/components/cpl/BeforeAfter";
import Process from "@/components/cpl/Process";
import QuoteForm from "@/components/cpl/QuoteForm";
import Footer from "@/components/cpl/Footer";

export default function Home() {
  return (
    <div className="cpl-shell min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <BeforeAfter />
        <Process />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}