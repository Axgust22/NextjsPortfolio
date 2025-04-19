"use client";
import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { HeroParallaxDemo } from "./HeroParallaxDemo";

export default function Skills() {
  return (
    <div>
      <div id="Skills" className="min-h-screen py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skills Header */}
          <h1 className="text-center font-bold p-4 ml-4">
            <SparklesText className="text-4xl sm:text-6xl">Skills</SparklesText>
          </h1>

          {/* Technical Skills Section */}
          <div className="mt-10 text-start">
            <h1 className="text-2xl p-4 md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              Technical Skills
            </h1>
            {/* Render the CardHoverEffectDemo */}
            <CardHoverEffectDemo />
          </div>
          <div className="mt-10 text-start">
            <h1 className="text-2xl p-4 md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              Soft Skills
            </h1>
            <HeroParallaxDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
