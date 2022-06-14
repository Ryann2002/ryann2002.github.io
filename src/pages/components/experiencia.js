import * as React from "react";
import Title from "./title";

const experiencias = [
  {
    local: "Inova Sorocaba",
    atividade: "Desenvolvedor",
    regiao: "Sorocaba, São Paulo",
    periodo: "nov, 2021 - Atualmente",
    desc: "Responsável pelo desenvolvimento frontend das aplicações desenvolvidas pelo time.",
  },
  {
    local: "Inova Sorocaba",
    atividade: "Estagiário",
    regiao: "Sorocaba, São Paulo",
    periodo: "jan, 2021 - nov, 2021",
    desc: "Responsável pelo desenvolvimento frontend das aplicações desenvolvidas pelo time.",
  },
  {
    local: "EMPTS - Parque Tecnológico de Sorocaba",
    atividade: "Estagiário",
    regiao: "Sorocaba, São Paulo",
    periodo: "jan, 2020 - jan, 2021",
    desc: "Responsável pelo desenvolvimento de aplicativos.",
  },
];

const Experiencia = () => {
  return (
    <section>
       
      <div className="max-w-[800px] mx-auto">
      <Title>Experiências</Title>
        <ul className="p-4">
          {experiencias.map((expencia, key) => (
            <li key={key} className="flex gap-8 items-center pl-4 group">
              <p className="italic w-[200px] shrink-0">
                {expencia.regiao} <br /> {expencia.periodo}
              </p>
              <div className="border-l border-dashed border-gray-400 p-4">
                <h3 className="font-bold text-xl text-[#3176E0] relative mark">
                  {expencia.atividade}
                </h3>
                <p>{expencia.desc}</p>
                <p className="text-sm font-bold"> {expencia.local} </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiencia;
