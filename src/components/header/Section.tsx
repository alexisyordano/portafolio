import devImg from "../../assets/img/dev.png";
// type Props = {}

function Section() {
  return (
    <div>
      <div className="starsection">
        <div className="grid grid-flow-col max-sm:flex flex-col">
          <div className="w-full mt-32 text-center max-sm:px-0 px-4">
            <h1 className="text-4xl max-sm:text-3xl md:text-4xl  lg:text-7xl lg:ml-5 font-bold text-white animations">
              Alexis Lozada
            </h1>
            <h1 className="text-3xl text-center font-bold animations-two text-white">
              Web Developer Full Stack
            </h1>
          </div>
          <div className="w-full mt-0">
            <img
              className="h-40 w-full imgpage max-sm:w-52 md:h-60 md:w-80 lg:h-80 lg:w-96  mx-auto"
              src={devImg}
              alt="Dev"
            />
          </div>
        </div>
      </div>
      <div className="endsection">
        <div className="max-sm:flex justify-center">
          <div className="max-sm:mt-2 md:ml-32 lg:ml-64">
            <a href="mailto:alexvivex69@gmail.com">
              <button className="button-yellow">Contacto</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
