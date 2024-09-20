"use client";

import { services } from "./services";

const skills = [
  {
    id: 1,
    skillName: "JavaScript",
  },
  {
    id: 2,
    skillName: "ReactJs",
  },
  {
    id: 3,
    skillName: "NextJs",
  },
  {
    id: 4,
    skillName: "NodeJs",
  },
  {
    id: 5,
    skillName: "PostgreSQL",
  },
  {
    id: 6,
    skillName: "ElectronJs",
  },
  {
    id: 7,
    skillName: "Selenium",
  },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {skills.map(({ id, skillName }) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={id}
            >
              <p
                className={`${
                  skillName.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80 hover:text-accent`}
              >
                {skillName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
