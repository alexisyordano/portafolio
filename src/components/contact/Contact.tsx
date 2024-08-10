import github from "../../assets/img/GitHub-logo.jpg";
import linkedin from "../../assets/img/Logo-Linkedin.png";
import telegram from "../../assets/img/telegrama.png";
function Contact() {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex justify-center mt-4">
        <h2 className="relative lg:text-3xl max-sm:text-3xl md:text-5xl">
          Contáctame
        </h2>
      </div>
      <div className="flex justify-center relative top-4">
        <div className="h-2 w-52  border-t-4 border-[#ffd819]"></div>
      </div>

      <div className="lg:grid grid-cols-3 max-sm:flex max-sm:flex-col md:flex md:flex-col gap-4 mt-8">
        <div>
          <div className="flex lg:justify-start max-sm:justify-center md:justify-center">
            <img
              className="w-80 cursor-pointer  max-sm:w-40"
              src={github}
              alt="github"
            />
          </div>
          <div className="flex lg:justify-start lg:ml-9 max-sm:flex justify-center">
            <a href="https://github.com/alexisyordano" target="_blank">
              <button className="button-yellow  max-sm:text-lg">
                Ver mi perfil
              </button>
            </a>
          </div>
        </div>

        <div>
          <div className="flex justify-start max-sm:justify-center md:justify-center">
            <img
              className="w-80 h-20 ml-12 cursor-pointer max-sm:ml-5 max-sm:mt-4 max-sm:w-40 max-sm:h-10"
              src={linkedin}
              alt="linkedin"
            />
          </div>
          <div className="flex lg:justify-start lg:ml-24 lg:mt-4 max-sm:flex justify-center">
            <a href="https://www.linkedin.com/in/alexis-lozada" target="_blank">
              <button className="button-yellow max-sm:text-lg">
                Ver mi perfil
              </button>
            </a>
          </div>
        </div>

        <div>
          <div className="flex justify-center min-md:justify-center">
            <img
              className="lg:w-28 lg:h-28 lg:ml-48  md:mt-7 md:w-20 md:h-20 max-sm:w-10 max-sm:h-10 max-sm:mt-3  mt-6 cursor-pointer"
              src={telegram}
              alt="telegram"
            />
          </div>
          <div className="flex lg:justify-start lg:ml-44 lg:mt-10 max-sm:flex justify-center">
            <a href="https://t.me/alozada" target="_blank">
              <button className="button-yellow max-sm:text-lg">
                !Hablemos!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
