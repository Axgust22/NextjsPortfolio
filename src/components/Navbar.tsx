"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { SparklesText } from "./magicui/sparkles-text";
import { Button } from "./ui/button";
import { BorderBeam } from "./magicui/border-beam";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    const navbarHeight = document.querySelector(".navbar")?.clientHeight || 0; // Adjust selector
    const offset = elem?.offsetTop || 0;

    window.scrollTo({
      top: offset - navbarHeight,
      behavior: "smooth",
    });

    setToggle(false);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 z-40 fixed top-0 left-0 right-0 backdrop-blur-md bg-white/70 dark:bg-black/50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#Heropage" onClick={handleScroll}>
            <SparklesText>Cheang Seyha</SparklesText>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex dark:text-gray-300 text-gray-500 gap-8 text-md font-light cursor-pointer">
            <Link
              href="#AboutMe"
              onClick={handleScroll}
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              <p>About</p>
            </Link>
            <Link
              href="#Education"
              onClick={handleScroll}
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              <p>Education</p>
            </Link>
            <Link
              href="#Skills"
              onClick={handleScroll}
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              <p>Skills</p>
            </Link>
            <Link
              href="#Projects"
              onClick={handleScroll}
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              <p>Projects</p>
            </Link>
          </div>

          {/* Mobile Menu Toggle and Buttons */}
          <div className="flex gap-2 items-center justify-center">
            <div>
              <ModeToggle />
            </div>
            <div className="md:hidden">
              {toggle ? (
                <IoClose
                  className="w-7 h-7 cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              ) : (
                <IoMenu
                  className="w-7 h-7 cursor-pointer"
                  onClick={() => setToggle(true)}
                />
              )}
            </div>

            {/* Contact Button */}
            <Link href="#Contact" onClick={handleScroll}>
              <Button
                className="relative overflow-hidden hidden md:block"
                size="lg"
                variant="outline"
              >
                Contact Me
                <BorderBeam
                  duration={6}
                  size={400}
                  className="from-transparent via-red-500 to-transparent"
                />
                <BorderBeam
                  duration={6}
                  delay={3}
                  size={400}
                  className="from-transparent via-blue-500 to-transparent"
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {toggle && (
          <div
            className={`w-full mx-auto md:hidden mt-4 pt-4 pb-4 flex flex-col justify-center items-center gap-4 text-black dark:text-white text-md font-light cursor-pointer transition-all duration-300 ease-in-out ${
              toggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Link
              href="#AboutMe"
              onClick={handleScroll}
              className="transition-colors hover:text-foreground/80 text-muted-foreground w-full text-center pb-4"
            >
              <p>About</p>
            </Link>

            <Link
              href="#Education"
              onClick={handleScroll}
              className="transition-colors hover:text-foreground/80 text-muted-foreground w-full text-center pb-4"
            >
              <p>Education</p>
            </Link>

            <Link
              href="#Skills"
              onClick={handleScroll}
              className="transition-colors hover:text-foreground/80 text-muted-foreground w-full text-center pb-4"
            >
              <p>Skills</p>
            </Link>

            <Link
              href="#Projects"
              onClick={handleScroll}
              className="transition-colors hover:text-foreground/80 text-muted-foreground w-full text-center pb-4"
            >
              <p>Projects</p>
            </Link>

            <Link href="#Contact" onClick={handleScroll}>
              <Button
                className="relative overflow-hidden px-20 py-2"
                size="lg"
                variant="outline"
              >
                Contact Me
                <BorderBeam
                  duration={6}
                  size={250}
                  className="from-transparent via-red-500 to-transparent"
                />
                <BorderBeam
                  duration={6}
                  delay={3}
                  size={150}
                  className="from-transparent via-blue-500 to-transparent"
                />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
