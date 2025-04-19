import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "2011-2016",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Baktouk Primary School
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I studied at Baktouk Primary School from Grade 1 to Grade 6.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            After passing the final exam, I continued my studies in Grade 7 at
            Baktouk High School.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/primary.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-62 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015-2021",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Northline School
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I studied English at Northline School from Grade 4 (Primary School)
            until Grade 11 (High School).
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            This helped improve my English speaking and communication skills.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I stopped studying English during Grade 12 to focus more on extra
            classes in preparation for the 2022 Baccalaureate II (BacII) exam.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/northline.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-78 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017-2022",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Baktouk High School
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I studied at Baktouk High School from Grade 7 to Grade 12.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I took the BacII exam in 2022 and graduated from high school.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/highschool.jpeg" // Add a leading slash for local images
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-78 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },

    {
      title: "2022-Now",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Institute of Technology of Cambodia
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            After graduating from high school, I applied for and passed the
            entrance exam to study at the Institute of Technology of Cambodia
            (ITC).
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/university.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-78 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022-Now",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Australian Centre for Education
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In addition to ITC, I also applied for and passed the entrance test
            to study at ACE (Australian Centre for Education).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ace.jpeg" // Add a leading slash for local images
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-44 lg:h-78 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
