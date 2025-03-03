import classNames from "classnames";

export const Welcome = () => {
  return (
    <div className="w-full flex flex-col h-full mt-[10px] px-[10px] items-center">
      <div
        className={classNames(
          "w-full mb-[20px] border-2 shadow-md transition-all ease-in-out duration-500 shadow-gray-300 animate-[box-opacity-animation_1s_ease-in-out] border-gray-100 p-[5px] rounded-[5px]",
          "flex flex-col md:flex-row items-center"
        )}
      >
        <div className="w-full max-w-full">
          <img
            src="/welcome.jpg"
            className="rounded-[6px] max-h-[350px] w-full object-cover"
            alt="Rasm bor !"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <h1 className="font-bold text-center text-[20px] mt-[5px]">
            Welcome to Cyber Nexus
          </h1>
          <p className="text-[15px] text-center font-[500]">
            Cyber Nexus - Your Ultimate Cybersecurity Solution
          </p>
        </div>
      </div>
    </div>
  );
};
