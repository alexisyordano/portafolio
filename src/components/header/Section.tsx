import devImg from "../../assets/img/dev.png";
// type Props = {}

function Section() {
  return (
    <div>
      <div className="starsection">
        <div className="grid grid-flow-col auto-cols-max p-32 justify-start max-sm:flex flex-col">
          <div className="w-full text-center px-4">
            <h1 className="text-4xl max-sm:text-4xl max-sm:-mt-24 md:text-4xl md:-ml-24 lg:text-7xl lg:ml-5 font-bold text-white animations">
              Alexis Lozada
            </h1>
            <h1 className="text-xl max-sm:text-lg max-sm:mt-6  md:text-3xl md:-ml-24 mt-2 lg:ml-5 font-bold animations-two text-white">
              Web Developer Full Stack
            </h1>
          </div>
          <div className="w-full ml-0 max-sm:mt-40 md:flex flex-col mt-0 md:mt-12 lg:mt-6 lg:ml-44">
            <img
              className="relative h-40 w-full imgpage md:h-60 md:w-80 lg:h-80 lg:w-96 -top-40 mx-auto"
              src={devImg}
              alt="Dev"
            />
          </div>
        </div>
      </div>
      <div className="endsection">
        <div className="flex content-center max-sm:ml-24 md:ml-32 lg:ml-72">
          <a href="mailto:alexvivex69@gmail.com">
            <button className="button-yellow">Contacto</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section;
