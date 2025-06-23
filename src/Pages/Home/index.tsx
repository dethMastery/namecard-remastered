import { CardSwitch } from "../../Components/CardSwitch";
import { useEffect, useState } from "react";
import { Nav } from "../../Components/Nav";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const location = useLocation();
  const [swPath, setSwPath] = useState<string>("");
  const [isPhoto, setPhoto] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);

  const pathName = location.pathname.slice(1);

  // Card Animation
  if (animation) {
    setTimeout(() => {
      setAnimation(false);
      setPhoto(!isPhoto);
    }, 500);
  }

  useEffect(() => {
    if (pathName === "fe6e6f" || pathName === "photo") {
      setPhoto(true);
    } else {
      setPhoto(false);
    }
  }, []);

  return (
    <>
      <title>
        {pathName === "fe6e6f" || pathName === "photo"
          ? "fe6e6f - Photographer"
          : "Suphakit P. - Web Developer / Music Producer"}
      </title>
      <div
        className="w-full h-screen !bg-center !bg-cover !bg-no-repeat"
        style={{ background: "url(https://picsum.photos/1920/1080)" }}
      >
        {/* Card */}
        <div className="w-full h-screen bg-overlay backdrop-blur-md flex justify-center items-center">
          <CardSwitch animation={animation} cardType={isPhoto} />
        </div>

        {/* NavBar */}
        <Nav
          pathname={pathName}
          setAnimation={setAnimation}
          setSW={setSwPath}
          sw={swPath}
        />

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
    </>
  );
};
