function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="position relative bg-[#252932] w-full h-52">
      <div className="flex justify-center">
        <label className="text-white font-bold text-md mt-20">
          Hecho con ♥ por Alexis Lozada
        </label>
        <br></br>
      </div>
      <div className="flex justify-center">
        <label className="text-white font-bold text-md mt-2">
          {"</>"}
          {currentYear}
        </label>
      </div>
    </div>
  );
}

export default Footer;
