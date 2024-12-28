export const Links = ({
  linkType,
  link,
}: {
  linkType: string;
  link: string;
}) => {
  const linkBase =
    "w-[50px] h-[50px] hover:scale-90 flex justify-center items-center text-2xl rounded-full hover:opacity-60";

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
    default:
      break;
  }

  return (
    <a href={link} target="_blank" className={linkClass}>
      <i className={linkLogo}></i>
    </a>
  );
};
