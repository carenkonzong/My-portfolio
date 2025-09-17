function Navbar() {
  return (
    <>
      <div className="flex flex-row w-full justify-center">
        <div className="w-full flex max-w-[1700px] py-10 px-15">
          <div className="w-1/2 font-extrabold text-3xl">E. NKONZONG</div>
          <div className="w-1/2 flex justify-between">
            <div>
              <a className="font-semibold" href="">
                HOME
              </a>
            </div>
            <div>
              <a className="font-semibold" href="">
                SKILLS
              </a>
            </div>
            <div>
              <a className="font-semibold" href="">
                PROJECTS
              </a>
            </div>
            <div>
              <a className="font-semibold" href="">
                EXPERIENCE
              </a>
            </div>
            <div>
              <a
                className="text-lg font-bold text-white bg-[#54baaa] bg-gradient-href-b from-[#a0faec] href-[#2bc7b0] p-4 rounded-lg"
                href=""
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
