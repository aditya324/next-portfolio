"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Quote from "@/components/Quote";
import WorkedWith from "@/components/WorkedWith";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stranger from "@/components/Stranger";
import Contact from "@/components/Contact";
import Banner from "@/components/Banner";

const HomePage = () => {
  const searchParams = useSearchParams();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    // Detect if navigation happened using Link (not a page refresh)
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

  return (
    <div>
      <Banner/>
      <Quote />
      <WorkedWith />

      <div id="project">
        <Projects />
      </div>

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
