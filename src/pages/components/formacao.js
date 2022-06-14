import * as React from "react";
import Title from "./title";

const formacoes = [
  {
    local: "ETEC. Rubens de Faria e Souza",
    curso: "Técnico em Mecatrônica",
    periodo: "jan, 2020 - Cursando",
  },
  {
    local: "ETEC. Rubens de Faria e Souza",
    curso: "Análise e desenvolvimento de sistemas",
    periodo: "jan, 2017 - dez, 2019",
  },
];

const Formacao = () => {
  return (
    <section>
      <div className="max-w-[800px] mx-auto">
        <Title>Formação</Title>
        <div className="flex p-4 justify-around ">
          {formacoes.map((formacao, key) => (
            <div key={key} className="max-w-[300px] flex flex-col gap-2">
                <h3 className="text-xl text-[#3176E0] font-bold">{formacao.curso}</h3>
                <p>{formacao.local}</p>
                <p className="italic">{formacao.periodo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formacao;
