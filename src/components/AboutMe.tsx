"use client";
import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <div>
      <div id="AboutMe" className="min-h-screen py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-bold p-5 m-5">
            <SparklesText className="text-4xl md:text-6xl">
              About Me
            </SparklesText>
          </h1>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16 mt-10">
            {/* Image Container */}
            <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] relative">
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <Image
                  src="/Me1.jpg"
                  alt="Me"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex-1 max-w-2xl">
              <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-600 dark:text-gray-400">
                My name is Cheang Seyha, I am a 20-year-old student currently
                based in Phnom Penh, which also happens to be my birthplace. I
                am in my 3rd year of study at the Institute of Technology of
                Cambodia (ITC), majoring in Information and Communication
                Engineering. I am very passionate about technology and excited
                to explore what this field has in store. Outside of the
                classroom, I enjoy going to the gym and finding peaceful
                settings to refresh myself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
