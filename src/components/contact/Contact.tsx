import github from "../../assets/img/GitHub-logo.jpg";
import linkedin from "../../assets/img/Logo-Linkedin.png";
import telegram from "../../assets/img/telegrama.png";
function Contact() {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex justify-center mt-4">
        <h2 className="relative lg:text-3xl md:text-5xl">Contáctame</h2>
      </div>
      <div className="flex justify-center relative top-4">
        <div className="h-2 w-52  border-t-4 border-[#ffd819]"></div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="flex justify-start">
          <img
            className="w-80 cursor-pointer max-sm:w-30 max-sm:h-20"
            src={github}
            alt="github"
          />
        </div>

        <div className="flex justify-center">
          <img
            className="w-80 h-20 cursor-pointer max-sm:w-30 max-sm:h-20"
            src={linkedin}
            alt="linkedin"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-28 h-28 max-sm:w-20 max-sm:h-20 mt-6 cursor-pointer"
            src={telegram}
            alt="telegram"
          />
        </div>
      </div>
      {/* <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <div className="flex justify-center max-sm:text-xs">
          <a href="https://github.com/alexisyordano" target="_blank">
            <button className="button-yellow">Ver mi perfil</button>
          </a>
        </div>
        <div className="flex justify-center max-sm:text-xs">
          <a href="https://www.linkedin.com/in/alexis-lozada" target="_blank">
            <button className="button-yellow">Ver mi perfil</button>
          </a>
        </div>
        <div className="flex justify-center max-sm:text-xs">
          <a href="https://t.me/alozada" target="_blank">
            <button className="button-yellow">!Hablemos!</button>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
