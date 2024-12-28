export const Nav = ({
  setAnimation,
}: {
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full fixed top-0 left-0 flex flex-row py-4 px-4 justify-end">
      <button
        className="bg-living-coral rounded py-2 px-4 text-whitesmoke hover:opacity-60 hover:scale-90"
        onClick={() => {
          setAnimation(true);
        }}
      >
        Switch
      </button>
    </div>
  );
};
