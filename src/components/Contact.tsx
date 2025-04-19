"use client";
import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import {
  SiFacebook,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTelegram,
} from "react-icons/si";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { BorderBeam } from "./magicui/border-beam";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <div>
      <div id="Contact" className="min-h-screen py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Header */}
          <h1 className="text-center mb-8 sm:mb-20">
            <SparklesText className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Contact
            </SparklesText>
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-16">
            {/* Contact Info */}
            <div className="w-full md:w-1/2 md:border-r md:border-gray-400 pr-6 h-full self-stretch">
              <div className="flex flex-col text-sm sm:text-base md:text-lg dark:text-white text-black leading-normal">
                <p className="text-sm md:text-lg">
                  Right now I&apos;m looking for internship opportunities.
                </p>
                <p className="text-sm md:text-lg">
                  Let&apos;s connect and work together!
                </p>
              </div>
              <div className="flex flex-col mt-6 p-2 md:p-3 space-y-3 md:space-y-5">
                <span className="flex items-center gap-5 transition-colors hover:text-blue-500 py-2">
                  <FaPhone className="text-lg md:text-2x" />
                  <p className="text-sm md:text-lg">+855 099 623 668</p>
                </span>
                <Link
                  href="https://www.linkedin.com/in/cheang-seyha-1b70a6337/"
                  className="flex items-center gap-5 transition-colors hover:text-blue-500 py-2"
                >
                  <SiLinkedin className="text-lg md:text-2xl" />
                  <p className="text-sm md:text-lg">LinkedIn</p>
                </Link>
                <Link
                  href=""
                  className="flex items-center gap-5 transition-colors hover:text-blue-500 py-2"
                >
                  <SiGmail className="text-lg md:text-2x" />
                  <p className="text-sm md:text-lg">Gmail</p>
                </Link>
                <Link
                  href="https://t.me/AxgusTC"
                  className="flex items-center gap-5 transition-colors hover:text-blue-500 py-2"
                >
                  <SiTelegram className="text-lg md:text-2x" />
                  <p className="text-sm md:text-lg">Telegram</p>
                </Link>
                <Link
                  href="https://web.facebook.com/cheang.seyha.50"
                  className="flex items-center gap-5 transition-colors hover:text-blue-500 py-2"
                >
                  <SiFacebook className="text-lg md:text-2x" />
                  <p className="text-sm md:text-lg">Facebook</p>
                </Link>
                <Link
                  href="https://www.instagram.com/sxyha/"
                  className="flex items-center gap-5 transition-colors hover:text-blue-500 py-2"
                >
                  <SiInstagram className="text-lg md:text-2x" />
                  <p className="text-sm md:text-lg">Instagram</p>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-2/3 mt-8 md:mt-0">
              <div className="rounded-lg justify-center items-center px-5 py-5 md:p-0">
                <h2 className="text-xl text-start font-semibold mb-6 dark:text-white text-black">
                  Send Me a Message
                </h2>
                <form action="" className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black dark:text-white mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white text-black"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black dark:text-white mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 0 dark:text-white text-black"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-black dark:text-white mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Your message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white resize-none"
                      required
                    />
                  </div>
                  <Button
                    className="relative overflow-hidden w-full md:w-md mx-auto block py-3 px-4"
                    size="lg"
                    variant="outline"
                    type="submit"
                  >
                    <span className="relative z-10">Send Message</span>
                    <BorderBeam
                      duration={6}
                      delay={3}
                      size={70}
                      className="from-transparent via-blue-500 to-transparent"
                    />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
