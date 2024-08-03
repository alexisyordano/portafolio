import Navigation from "./components/header/Navigation";
import Section from "./components/header/Section";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Briefcase from "./components/briefcase/Briefcase";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { MenuItem } from "./models/Model";
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const dataItems: MenuItem[] = [
    { id: 1, label: "Sobre mi" },
    { id: 2, label: "Portafolio" },
    { id: 3, label: "Skills" },
    { id: 4, label: "Contáctame" },
  ];
  const [isItem, setItem] = useState(0);
  const handleClick = (item: number) => {
    setItem(item);
    console.log("Item clicked:", isItem);
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="arrowup"></div>
      <Navigation data={dataItems} onClickItemMenu={handleClick} />
      <div id={`item-1`}>
        <Section />
        <About />
      </div>

      <div className="bg-[#252932] border-t-4 border-[#ffd819] w-full h-10"></div>

      <div id={`item-2`}>
        <Briefcase />
      </div>
      <div id={`item-3`}>
        <Skill />
      </div>
      <div id={`item-4`}>
        <Contact />
      </div>

      <div className="Up">
        <a href="#arrowup">
          <button
            className="up"
            style={{ display: showButton ? "block" : "none" }}
          >
            <div className="arrow">
              <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            </div>
          </button>
        </a>
      </div>

      <Footer />
    </>
  );
}

export default App;
