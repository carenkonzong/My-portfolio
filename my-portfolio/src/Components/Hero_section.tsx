function Hero_section() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1700px] items-center grid grid-cols-2 gap-20">
          <div className=" px-15">
            <div className="text-5xl mb-5 font-mono">
              Hi, I'm Edwin Nkonzong
            </div>
            <div className="text-6xl font-extrabold mb-7  bg-gradient-to-r bg-clip-text text-transparent from-[#0521be] to-[#56fde4]">
              Front-End Developer
            </div>
            <div className="text-2xl mb-10 font-light font-serif">
              I build responsive and scalable web applications using React and
              TypeScript. I specialize in writing clean, maintainable and
              efficient code optimizing performance, and delivering seamless
              user experiences.
            </div>
            <div className="flex items-center">
              <a
                href=""
                className="p-2 mr-5 text-white font-bold text-lg bg-gradient-to-b from-[#97e1f7] to-[#3ccdf9] rounded-2xl"
              >
                See Projects
              </a>
              <img
                className="w-10 mr-5 h-10"
                src="/github_mini.png"
                alt="github"
              />
              <img className="w-10 h-10" src="/linkedin.png" alt="linkedin" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center flex-col relative">
              <img src="/code.png" alt="code" className="absolute right-125" />
              <img src="/code2.png" alt="code" className="absolute left-120" />
              <img
                src="/image.png"
                alt="image"
                className="w-160 z-10 right-10"
              />
              <div
                className="flex flex-row justify-around items-center self-center rounded-2xl px-6 py-3 
              bg-gradient-to-r from-white/25 via-white/15 to-white/10
              backdrop-blur-xl border border-white/30 shadow-lg shadow-black/10 
              [background-clip:padding-box]"
              >
                <div className="w-30">10+ years industry Experience</div>
                <div className="w-30">50+ Code industry projects</div>
                <div className="w-30">100+ star industry review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_section;
