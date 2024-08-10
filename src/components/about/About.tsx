function About() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="relative lg:text-3xl max-sm:text-3xl md:text-5xl -top-32">
          Sobre mi
        </h2>
      </div>
      <div className="flex justify-center relative -top-28">
        <div className="h-2 w-52  border-t-4 border-[#ffd819]"></div>
      </div>
      <div className="flex justify-center relative -top-20">
        <p className="text-center max-w-3xl before-animation text-md animate-text font-mono">
          Amante a la ciencia y tecnología, me considero una persona
          autodidacta, responsable y enfocado a cumplir metas, me apasiona
          programar ya que lo considero como un arte, me motiva aprender cosas
          nuevas para obtener mayor conocimiento
        </p>
      </div>
    </>
  );
}

export default About;
