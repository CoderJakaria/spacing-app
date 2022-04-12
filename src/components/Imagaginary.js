function Imaginary() {
  return (
    <div className="w-full relative">
      <main className="max-w-5xl mx-auto pb-5">
        <h1 className="font-black text-[70px] text-white uppercase relative w-fit">
          what is
          <img
            src="/assets/2.png"
            className="absolute -top-20 right-0 w-[100px] h-[100px] object-cover"
          />
        </h1>
        <h1 className="font-black text-[70px] uppercase text-[#FFDD00] mt-[-30px] relative w-fit">
          imaginary ones?
          <img
            src="/assets/3.png"
            className="absolute -top-20 -right-5 w-[100px] h-[100px] object-cover"
          />
        </h1>
        <p className="text-white text-lg font-medium">
          Imaginary Ones is a delighful 3D animated art with an initial drop of
          8888 unique NFTs on the Ethereum network. The project believes in
          using art to spread love, positivity, and creativity.
        </p>
      </main>
      <img
        src="/assets/1.png"
        className="absolute bottom-0 left-0 w-[100px] h-[100px] object-cover"
      />
      <img
        src="/assets/bottom-illus.png"
        className="absolute bottom-0 right-0 w-[150px]  object-cover"
      />
    </div>
  );
}

export default Imaginary;
