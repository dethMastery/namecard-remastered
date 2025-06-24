import { linkInterface } from "../Modules/data";

export const Links = ({
  linkType,
  link,
}: {
  linkType: string;
  link: linkInterface | null;
}) => {
  const linkBase =
    "w-[40px] h-[40px] flex justify-center items-center text-xl rounded-full";

  let linkLogo = "";
  let linkClass = "";

  switch (linkType) {
    case "fb":
      linkClass = linkBase + " bg-[#3b5998] text-whitesmoke";
      linkLogo = "fa-brands fa-facebook-f";
      break;
    case "ig":
      linkClass = linkBase + " ig-bg text-whitesmoke";
      linkLogo = "fa-brands fa-instagram";
      break;
    case "discord":
      linkClass = linkBase + " bg-[#7289da] text-whitesmoke";
      linkLogo = "fa-brands fa-discord";
      break;
    case "github":
      linkClass = linkBase + " bg-jet text-whitesmoke";
      linkLogo = "fa-brands fa-github";
      break;
    case "website":
      linkClass = linkBase + " bg-jet text-whitesmoke";
      linkLogo = "fa-solid fa-globe";
      break;
    default:
      break;
  }

  return (
    <a
      href={link?.link}
      target="_blank"
      className={
        "flex flex-row justify-center items-center gap-2 hover:opacity-60 hover:scale-90"
      }
    >
      <span className={`${linkClass}`}>
        <i className={`${linkLogo}`}></i>{" "}
      </span>{" "}
      <span className="text-lg">{link?.name}</span>
    </a>
  );
};
