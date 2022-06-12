import * as React from "react"
import Contato from "../components/contato"

import Experiencia from "../components/experiencia"
import Formacao from "../components/formacao"
import Hero from "../components/hero"
import Skills from "../components/skills"


const IndexPage = () => {
  return (
    <main className="bg-[#EBF0F2]">
      <Hero/>
      <Experiencia/>
      <Formacao/>
      <Skills/>
      <Contato/>
    </main>
  )
}

export default IndexPage
