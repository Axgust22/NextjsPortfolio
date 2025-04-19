"use client";
import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
import Link from "next/link";

// const ProjectsData = [
//   {
//     title: "Student Management System",
//     image: "/studentManagementSystem.png",
//     github: "https://github.com/seyhaa/Student-Management-System",
//   },
// ];
export default function Projects() {
  return (
    <div id="Projects" className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header */}
        <h1 className="text-center mb-8 sm:mb-20">
          <SparklesText className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Projects
          </SparklesText>
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Student Management System Card */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-white/10 relative overflow-hidden">
            <BorderBeam
              duration={6}
              size={250}
              className="absolute inset-0 from-transparent via-blue-500 to-transparent"
            />
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
              <Image
                src="/StudentManagementSystem.png"
                alt="Student Management System"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                priority
              />
            </div>
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white text-black">
                Student Management System
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-blue-100 dark:bg-blue-900/50 rounded-full text-xs sm:text-sm font-medium dark:text-white text-black">
                  Java
                </span>
                <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-green-100 dark:bg-green-900/50 rounded-full text-xs sm:text-sm font-medium dark:text-white text-black">
                  MongoDB
                </span>
              </div>
              <Link href="https://github.com/Axgust22/StudentManagementSystem">
                <p className="text-sm sm:text-base font-medium dark:text-white text-black">
                  More detail
                </p>
              </Link>
            </div>
          </div>

          {/* Portfolio Card */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-white/10 relative overflow-hidden">
            <BorderBeam
              duration={6}
              size={250}
              className="absolute inset-0 from-transparent via-blue-500 to-transparent"
            />
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
              <Image
                src="/Portfolio.png"
                alt="My Portfolio"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                priority
              />
            </div>
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white text-black">
                My Portfolio
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-purple-100 dark:bg-purple-900/50 rounded-full text-xs sm:text-sm font-medium dark:text-white text-black">
                  Next.js
                </span>
                <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-teal-100 dark:bg-teal-900/50 rounded-full text-xs sm:text-sm font-medium dark:text-white text-black">
                  Tailwind CSS
                </span>
              </div>
              <Link href="">
                <p className="text-sm sm:text-base font-medium dark:text-white text-black">
                  More detail
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
