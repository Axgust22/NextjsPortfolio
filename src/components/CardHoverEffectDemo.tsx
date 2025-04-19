import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { HoverEffect } from "./ui/card-hover-effect";
import { RiReactjsFill } from "react-icons/ri";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      {/* Pass the projects array to HoverEffect */}
      <HoverEffect items={projects} />
    </div>
  );
}

// Define the projects array with icons and titles
export const projects = [
  {
    icon: <SiHtml5 />,
  },
  {
    icon: <SiCss3 />,
  },
  {
    icon: <SiTailwindcss />,
  },
  {
    icon: <SiBootstrap />,
  },
  {
    icon: <SiJavascript />,
  },
  {
    icon: <SiNextdotjs />,
  },
  {
    icon: <RiReactjsFill />,
  },
  {
    icon: <SiNodedotjs />,
  },
  {
    icon: <SiExpress />,
  },
  {
    icon: <SiMongodb />,
  },
  {
    icon: <SiMysql />,
  },
  {
    icon: <SiGithub />,
  },
];
