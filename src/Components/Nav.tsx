import { Link } from "react-router-dom";

export const Nav = ({
  setAnimation,
  pathname,
  setSW,
  sw,
}: {
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setSW: React.Dispatch<React.SetStateAction<string>>;
  sw: string;
  pathname: string;
}) => {
  if (pathname === "fe6e6f" || pathname === "photo") {
    setSW("/");
  } else {
    setSW("/fe6e6f");
  }

  return (
    <div className="w-full fixed top-0 left-0 flex flex-row py-4 px-4 justify-end">
      <Link
        to={sw}
        className="bg-living-coral rounded py-2 px-4 text-whitesmoke hover:opacity-60 hover:scale-90"
        onClick={() => {
          setAnimation(true);
        }}
      >
        Switch
      </Link>
    </div>
  );
};
