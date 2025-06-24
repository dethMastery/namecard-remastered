import { dataConst } from "../Modules/data";
import { Links } from "./Links";

export const Card = ({
  data,
  animation,
}: {
  data: dataConst;
  animation: boolean;
}) => {
  return (
    <div
      className={`${
        animation ? "opacity-0" : ""
      } min-w-[18rem] max-w-[22rem] !aspect-[27/43] bg-whitesmoke text-jet rounded-xl`}
    >
      <div>
        <img
          src={data.image}
          alt="profile picture"
          className="w-[100] h-auto mx-auto rounded-t-xl"
        />
      </div>
      <div className="py-4">
        <div className="mx-auto py-2">
          <p className="px-4 text-3xl w-full text-left mb-2">{data.name}</p>
          <p className="px-4 text-left opacity-60 mt-2">{data.desp}</p>
        </div>
        <div className="flex flex-col justify-start items-start px-4 py-2 gap-2">
          <Links linkType="fb" link={data.links.facebook} />
          <Links linkType="ig" link={data.links.instagram} />
          {data.links.discord == undefined ? (
            ""
          ) : (
            <Links linkType="discord" link={data.links.discord} />
          )}
          {data.links.github == undefined ? (
            ""
          ) : (
            <Links linkType="github" link={data.links.github} />
          )}
          {data.links.website == undefined ? (
            ""
          ) : (
            <Links linkType="website" link={data.links.website} />
          )}
        </div>
      </div>
    </div>
  );
};
