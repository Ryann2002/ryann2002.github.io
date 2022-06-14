import * as React from "react";
import Title from "./title";

const skills = [
  "Resolução de problemas",
  "Flutter",
  "React",
  "Trabalho em equipe",
  "Css",
  "Blade components",
  "Html",
  "Frontend",
  "Laravel",
  "C#",
  "SQL",
  "JS",
];

const Skill = () => {
  return (
    <section>
      <div className="max-w-[800px] mx-auto">
        <Title>Skills</Title>
        <ul className="flex flex-wrap p-4 gap-2 justify-center">
          {skills.map((skill, key) => (
            <li key={key} className="whitespace-nowrap p-2 px-4 rounded-xl bg-[#3176E0] text-white font-[Kanit] hover:scale-105 transition-transform">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;
