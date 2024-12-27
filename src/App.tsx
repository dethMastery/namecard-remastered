function App() {
  return (
    <div
      className="w-full h-screen !bg-center !bg-cover !bg-no-repeat"
      style={{ background: "url(https://picsum.photos/1920/1080)" }}
    >
      {/* Card */}
      <div className="w-full h-screen bg-overlay backdrop-blur-md flex justify-center items-center">
        <div className="min-w-[18rem] max-w-[22rem] bg-whitesmoke text-jet rounded-xl">
          <div className="p-4">
            <img
              src="https://avatars.githubusercontent.com/u/25049577?v=4"
              alt="profile picture"
              className="w-[80%] h-auto rounded-full p-2 border-solid border-4 border-living-coral mx-auto hover:border-2 hover:scale-105 hover:p-1"
            />
          </div>
          <div className="pb-6">
            <div className="mx-auto py-2">
              <p className="text-3xl w-full text-center mb-2">Suphakit P.</p>
              <p className="px-4 text-center opacity-60 mt-2">
                a music composer with full-stack web dev. skill :D
              </p>
            </div>
            <div className="flex flex-row justify-center py-2 gap-4">
              <a
                href="https://fb.com/detzz.in.th"
                target="_blank"
                className="w-[50px] h-[50px] hover:scale-90 bg-[#3b5998] text-whitesmoke flex justify-center items-center text-2xl rounded-full hover:opacity-60"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/detzz.in.th/"
                target="_blank"
                className="w-[50px] h-[50px] hover:scale-90 text-whitesmoke flex justify-center items-center text-2xl rounded-full hover:opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 10% 107%, rgb(253, 244, 151) 0%, rgb(253, 244, 151) 5%, rgb(253, 89, 73) 45%, rgb(214, 36, 159) 60%, rgb(40, 90, 235) 90%)",
                }}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://discordid.netlify.app/?id=387465159322632202"
                target="_blank"
                className="w-[50px] h-[50px] hover:scale-90 text-whitesmoke bg-[#7289da] flex justify-center items-center text-2xl rounded-full hover:opacity-60"
              >
                <i className="fa-brands fa-discord"></i>
              </a>
              <a
                href="https://github.com/dethMastery"
                target="_blank"
                className="w-[50px] h-[50px] hover:scale-90 bg-jet text-whitesmoke flex justify-center items-center text-2xl rounded-full hover:opacity-60"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-whitesmoke text-jet py-6 text-center text-lg">
        &copy; 2024{" "}
        <a
          href="https://suphakit.net"
          target="_blank"
          className="underline hover:no-underline hover:opacity-60"
        >
          Suphakit P.
        </a>{" "}
        All Right Reserved.
      </div>
    </div>
  );
}

export default App;
