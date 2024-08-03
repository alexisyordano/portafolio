import { useState } from "react";
import reactLogo from "../../assets/img/profile.png";
import { MenuItem } from "../../models/Model";

type Props = {
  data: MenuItem[];
  onClickItemMenu: (item: number) => void;
};

function Navigation({ data, onClickItemMenu }: Props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    console.log("click", isOpenMenu);
  };
  return (
    <div className="header">
      <header
        id="header"
        className="py-2.5 px-5 leading-normal text-[20px] font-bold"
      >
        <nav className="relative flex justify-between items-center p-4 px-6">
          <img className="w-20 cursor-pointer" src={reactLogo} alt="Profile" />
          <ul
            className={`absolute top-0 left-0 w-full h-full  bg-[#252932] z-10 transition-transform duration-500 ease-in-out md:static md:flex justify-end max-sm:-ml-32 md:space-x-20 ${
              isOpenMenu
                ? "translate-x-0 max-md:relative left-56 -top-5"
                : "max-md:-translate-x-full"
            }`}
          >
            {data.map((item) => (
              <li
                onClick={() => onClickItemMenu(item.id)}
                className="hover:bg-[#ffd819]  hover:rounded-3xl max-md:w-32  px-4 py-2"
                key={item.id}
              >
                <a
                  className="text-white hover:text-[#252932] font-bold text-center text-lg"
                  href={`#item-${item.id.toString()}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`md:hidden ${
              isOpenMenu ? "hamburger active" : "hamburger"
            }`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navigation;
