"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  // Catemsol
  {
    title: "Camtesol 21st",
    image: "/camtesol1.jpg",
  },
  {
    title: "Camtesol with a Certificate",
    image: "/camtesol2.jpg",
  },
  {
    title: "Camtesol with a Favorite Teacher",
    image: "/camtesol3.jpg",
  },
  {
    title: "Camtesol with a Favorite Teacher again",
    image: "/camtesol4.jpg",
  },
  {
    title: "Camtesol with each other team",
    image: "/camtesol5.jpg",
  },

  // Ace graduation
  {
    title: "Ace graduation",
    image: "/ace1.JPG",
  },
  {
    title: "Ace graduation with a Certificate",
    image: "/ace2.jpg",
  },
  {
    title: "Ace graduation with a Favorite Person",
    image: "/ace3.jpg",
  },
  {
    title: "Ace graduation with a Team and Friends",
    image: "/ace4.jpg",
  },
  {
    title: "Ace graduation with a Team and Friends again",
    image: "/ace5.jpg",
  },

  // Cambodia Robotics Olympiad 2024
  {
    title: "Cambodia Robotics Olympiad 2024",
    image: "/cro1.jpg",
  },
  {
    title: "Cambodia Robotics Olympiad 2024 with each other team",
    image: "/cro2.jpg",
  },
  {
    title: "Cambodia Robotics Olympiad 2024 with each other team and CEO",
    image: "/cro3.jpg",
  },
  {
    title: "Cambodia Robotics Olympiad 2024 with our own team",
    image: "/cro4.jpg",
  },
  {
    title: "Cambodia Robotics Olympiad 2024 with our own team and leaders",
    image: "/cro5.jpg",
  },

  // CamSTEMFAST 2025

  {
    title: "CamSTEMFAST 2025 with our own team",
    image: "/cam2.jpg",
  },
  {
    title: "CamSTEMFAST 2025 with each other team and CEO",
    image: "/cam1.jpg",
  },

  {
    title: "CamSTEMFAST 2025 with each other people",
    image: "/cam3.jpg",
  },
  {
    title: "CamSTEMFAST 2025 with our own team and leaders",
    image: "/cam5.jpg",
  },
];
