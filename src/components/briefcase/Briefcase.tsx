import Cards from "../card/Cards";

function Briefcase() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <h2 className="relative lg:text-3xl max-sm:text-3xl md:text-5xl">
          Portafolio
        </h2>
      </div>
      <div className="flex justify-center relative top-4">
        <div className="h-2 w-52  border-t-4 border-[#ffd819]"></div>
      </div>
      <Cards></Cards>
    </>
  );
}

export default Briefcase;
