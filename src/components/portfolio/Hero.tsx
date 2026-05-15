"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Lightbulb, Sparkles, Target } from "lucide-react";
import { ParallaxStarsBackground } from "@/components/parallax/ParallaxStarsBackground";

export function Hero() {
  return (
    <ParallaxStarsBackground showTitle={false} speed={1.15}>
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-20"
      >
      <div className="hero-gradient pointer-events-none absolute inset-0 z-0 opacity-[0.9]" />

      <div className="animate-float absolute top-32 right-12 h-48 w-48 rounded-full border border-coral-500/10 sm:right-48" />
      <div className="animate-float2 absolute top-56 right-20 h-36 w-36 rounded-full border border-amber-400/10 sm:right-64" />
      <div className="animate-float2 absolute bottom-32 left-10 h-24 w-24 rotate-12 rounded-2xl border border-teal-400/10 bg-gradient-to-br from-teal-400/5 to-teal-400/0 sm:left-20" />
      <div className="animate-pulse-glow absolute top-40 left-[25%] h-3 w-3 rounded-full bg-coral-500/40 sm:left-[30%]" />
      <div
        className="animate-pulse-glow absolute bottom-48 right-[30%] h-2 w-2 rounded-full bg-amber-400/50"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="animate-pulse-glow absolute top-[60%] left-[10%] h-2 w-2 rounded-full bg-teal-400/40 sm:left-[15%]"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(28,25,23,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className="lg:col-span-6">
            <div className="animate-slide-up">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-surface-200 bg-white px-4 py-2 shadow-sm shadow-surface-950/5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
                <span className="text-sm font-medium text-surface-700">
                  4+ Years of On-Field Experience
                </span>
              </div>
            </div>

            <h1 className="animate-slide-up delay-100 font-display text-5xl leading-[0.95] tracking-tight text-surface-900 sm:text-6xl xl:text-7xl">
              Dhruv Goyal
              <br />
              <span className="text-gradient-coral">Dhruv Goyal in AI</span>
            </h1>

            <p className="animate-slide-up delay-200 mt-4 max-w-lg text-lg font-medium text-surface-800 sm:text-xl">
              Business <span className="text-gradient-coral">Meets</span> Tech &amp; AI
            </p>

            <p className="animate-slide-up delay-200 mb-10 mt-4 max-w-lg text-base leading-relaxed text-surface-700 sm:text-lg">
              I&apos;m <strong>Dhruv Goyal</strong>, an AI strategist and software
              developer turned business consultant. If you&apos;re searching for{" "}
              <strong>Dhruv Goyal in AI</strong>, you&apos;ll find strategy, machine
              learning, agents, and execution — from models to marketing and
              real-world business outcomes.
            </p>

            <div className="animate-slide-up delay-300 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Link
                id="hero-cta-link"
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-coral-500 to-amber-500 px-8 py-4 font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-coral-500/20"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                id="hero-work-link"
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-surface-300 px-8 py-4 font-bold text-surface-900 transition-all duration-300 hover:bg-white"
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - PROFESSIONAL 3D IMAGE */}
          <div className="animate-slide-up delay-300 lg:col-span-6 flex justify-center lg:justify-end ">
            <div className="relative w-full " style={{overflow: 'visible'}}>
              {/* 3D Container with perspective */}
              <div 
                className="relative rounded-2xl "
                style={{
                  perspective: "1000px",
                  transform: "translateZ(0)",
                }}
              >
                {/* Image with 3D depth effect */}
                <div className="relative h-[600px] w-full sm:h-[700px] lg:h-[900px] group">
                  <Image
                    src="/images/IMG_0676.png"
                    alt="Dhruv Goyal in AI"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  />
                  
                  {/* Gradient overlay for depth */}
                </div>
              </div>

              {/* Floating animation */}
              <style jsx>{`
                @keyframes float-up {
                  0%, 100% {
                    transform: translateY(0px) translateZ(0);
                  }
                  50% {
                    transform: translateY(-20px) translateZ(0);
                  }
                }
                
                .group {
                  animation: float-up 6s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[15]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden
        >
          <path
            d="M0 80V40C240 10 480 0 720 10C960 20 1200 50 1440 40V80H0Z"
            fill="rgb(250,250,249)"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
    </ParallaxStarsBackground>
  );
}