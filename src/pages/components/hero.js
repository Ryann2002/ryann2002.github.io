import * as React from "react";
import perfil from "../../images/perfil.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex gap-[100px] justify-center items-center relative overflow-hidden">
      <p className="font-[Kanit] absolute top-2 left-4 text-3xl point font-bold">
        Ryan
      </p>
      <div className="flex justify-center items-center h-14 absolute right-14 top-0 origin-top-right gap-8">
        <a href="https://www.linkedin.com/in/ryan-barbosa-792b661a1/" className="font-[Kanit] text-lg font-bold hover:scale-110 transition-transform">
          Linkedin
        </a>
        <a href="https://github.com/Ryann2002" className="font-[Kanit] text-lg font-bold hover:scale-110 transition-transform">
          Github
        </a>

        <a href="mailto:ryan.barbosapro@gmail.com" className="font-[Kanit] text-lg font-bold hover:scale-110 transition-transform">
          ryan.barbosapro@gmail.com
        </a>
      </div>

      <h1 className="font-extrabold font-[Kanit] text-5xl">Olá, me chamo Ryan e sou <br/> <span className="text-[#3176E0]">Frontend developer</span> </h1>

      <div
        className="flex w-[400px] h-[400px] rounded-full relative"
        id="custom-gr"
      >
        <div className="w-full h-full absolute overflow-hidden rounded-full">
          <img className="w-full translate-y-5" src="../../../perfil.png" alt="profile img" />
        </div>
      </div>

      <div className="w-10 absolute bottom-4 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
        </svg>
      </div>
    </section>
  );


};

export default Hero;
