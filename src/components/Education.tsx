"use client";
import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import { TimelineDemo } from "./TimelineDemo";

export const Education = () => {
  return (
    <div id="Education" className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-bold p-4">
          <SparklesText className="text-4xl sm:text-6xl">
            Education
          </SparklesText>
        </h1>
        <div>
          <TimelineDemo />
        </div>
      </div>
    </div>
  );
};
