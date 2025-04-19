"use client";
import React from "react";
import { Button } from "./ui/button";
import { BorderBeam } from "./magicui/border-beam";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Heropage() {
  return (
    <div id="Heropage" className="h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col gap-10 md:flex-row jutify-between items-center justify-center">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-gray-800 dark:text-white">
              Hello, I&apos;m <br />
              <TypeAnimation
                sequence={[
                  "Seyha",
                  1000,
                  "Web Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  color: "skyblue",
                }}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="mt-4 md:mb-4 text-sm lg:text-lg text-gray-600 dark:text-gray-400">
              Welcome to my portfolio! I&apos;m a passionate web developer and
              UI/UX designer with a love for creating visually stunning and
              user-friendly websites.
            </p>
            {/* Button */}
            <Button
              className="relative overflow-hidden w-32 h-10 md:w-36 md:h-12 mt-4 mx-auto md:mx-0"
              size="lg"
              variant="outline"
            >
              Download CV
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
          </div>

          {/* Image Section */}
          <div className="relative w-[280px] h-[300px] md:w-[400px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/e20221098.jpg"
              alt="Me"
              fill
              priority
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
