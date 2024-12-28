import { useSearchParams } from "react-router-dom";
import { CardSwitch } from "../../Components/CardSwitch";
import { useEffect, useState } from "react";
import { Nav } from "../../Components/Nav";

export const HomePage = () => {
  const [param, _setParam] = useSearchParams();
  const [isPhoto, setPhoto] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);

  const photoQuery = param.get("isPhoto");

  if (photoQuery != undefined) {
    setPhoto(true);
  }

  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(false);
        setPhoto(!isPhoto);
      }, 500);
    }
  }, [animation]);

  return (
    <div
      className="w-full h-screen !bg-center !bg-cover !bg-no-repeat"
      style={{ background: "url(https://picsum.photos/1920/1080)" }}
    >
      {/* Card */}
      <div className="w-full h-screen bg-overlay backdrop-blur-md flex justify-center items-center">
        <CardSwitch animation={animation} cardType={isPhoto} />
      </div>

      {/* NavBar */}
      <Nav setAnimation={setAnimation} />

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
};
