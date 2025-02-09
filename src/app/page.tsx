"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Quote from "@/components/Quote";
import WorkedWith from "@/components/WorkedWith";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stranger from "@/components/Stranger";
import Contact from "@/components/Contact";
import Banner from "@/components/Banner";

// Extract the logic that uses useSearchParams into a separate component
const ScrollHandler = () => {
  const searchParams = useSearchParams();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    const handleNavigation = () => setHasNavigated(true);

    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("pushstate", handleNavigation);
    window.addEventListener("replacestate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("pushstate", handleNavigation);
      window.removeEventListener("replacestate", handleNavigation);
    };
  }, []);

  useEffect(() => {
    const scrollTo = searchParams.get("scroll");

    if (scrollTo === "about" && hasNavigated) {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams, hasNavigated]);

  return null; // This component doesn't render anything
};

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Quote />
      <WorkedWith />

      <div id="project">
        <Projects />
      </div>

      {/* Wrap only the ScrollHandler in Suspense */}
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>

      <div id="about">
        <About />
      </div>
      <Stranger />

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;