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
      } min-w-[18rem] max-w-[22rem] bg-whitesmoke text-jet rounded-xl`}
    >
      <div className="p-4">
        <img
          src={data.image}
          alt="profile picture"
          className="w-[80%] h-auto rounded-full p-2 border-solid border-4 border-living-coral mx-auto hover:border-2 hover:scale-105 hover:p-1"
        />
      </div>
      <div className="pb-6">
        <div className="mx-auto py-2">
          <p className="text-3xl w-full text-center mb-2">{data.name}</p>
          <p className="px-4 text-center opacity-60 mt-2">{data.desp}</p>
        </div>
        <div className="flex flex-row justify-center py-2 gap-4">
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
        </div>
      </div>
    </div>
  );
};
