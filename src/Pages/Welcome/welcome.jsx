import classNames from "classnames";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="w-full flex flex-col h-full mt-[10px] px-[10px] items-center">
      <div
        className={classNames(
          "w-full mb-[20px] border-2 shadow-md transition-all ease-in-out duration-500 shadow-gray-300 border-gray-100 p-[5px] animate-[box-opacity-right-animation_0.9s_ease-in-out_0.85s_forwards] opacity-0 rounded-[5px]",
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
      <Link className="w-full" to="/premium-app">
        <div
          className={classNames(
            "w-full mb-[20px] border-2 shadow-md transition-all ease-in-out duration-500 shadow-gray-300 animate-[box-opacity-left-animation_0.9s_ease-in-out_1.5s_forwards] opacity-0 border-gray-100 p-[5px] rounded-[5px]",
            "flex flex-col md:flex-row-reverse items-center"
          )}
        >
          <div className="w-full max-w-full">
            <img
              src="/premium-app.avif"
              className="rounded-[6px] max-h-[350px] w-full object-cover"
              alt="Rasm bor !"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-center text-[20px] mt-[5px]">
              Go to premium app
            </h1>
            <p className="text-[15px] text-center font-[500]">
              Premium App - Your access to premium features
            </p>
          </div>
        </div>
      </Link>
      <Link className="w-full" to={"/news"}>
        <div
          className={classNames(
            "w-full mb-[20px] border-2 shadow-md transition-all ease-in-out duration-500 shadow-gray-300 animate-[box-opacity-right-animation_0.9s_ease-in-out_2.1s_forwards] opacity-0 border-gray-100 p-[5px] rounded-[5px]",
            "flex flex-col md:flex-row items-center"
          )}
        >
          <div className="w-full max-w-full">
            <img
              src="/news.webp"
              className="rounded-[6px] max-h-[350px] w-full object-cover"
              alt="Rasm bor !"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-center text-[20px] mt-[5px]">
              Go to news
            </h1>
            <p className="text-[15px] text-center font-[500]">
              News - Stay updated with the latest cybersecurity news
            </p>
          </div>
        </div>
      </Link>
      <Link className="w-full" to={"/about"}>
        <div
          className={classNames(
            "w-full mb-[20px] border-2 shadow-md transition-all ease-in-out duration-500 shadow-gray-300 animate-[box-opacity-left-animation_0.9s_ease-in-out_3s_forwards] opacity-0 border-gray-100 p-[5px] rounded-[5px]",
            "flex flex-col md:flex-row-reverse items-center"
          )}
        >
          <div className="w-full max-w-full">
            <img
              src="/about.jpg"
              className="rounded-[6px] max-h-[350px] w-full object-cover"
              alt="Rasm bor !"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-center text-[20px] mt-[5px]">
              Go to about
            </h1>
            <p className="text-[15px] text-center font-[500]">
              About - Learn more about Cyber Nexus
            </p>
          </div>
        </div>
      </Link>
      <Link className="w-full" to={"/contact"}>
        <div
          className={classNames(
            "w-full mb-[20px] border-2 shadow-md transition-all ease-in-out duration-500 shadow-gray-300 animate-[box-opacity-right-animation_0.9s_ease-in-out_3.8s_forwards] opacity-0 border-gray-100 p-[5px] rounded-[5px]",
            "flex flex-col md:flex-row items-center"
          )}
        >
          <div className="w-full max-w-full">
            <img
              src="/contact.jpg"
              className="rounded-[6px] max-h-[350px] w-full object-cover"
              alt="Rasm bor !"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-center text-[20px] mt-[5px]">
              Go to contact
            </h1>
            <p className="text-[15px] text-center font-[500]">
              Contact - Get in touch with us
            </p>
          </div>
        </div>
      </Link>
      <Link className="w-full" to={"/help"}>
        <div
          className={classNames(
            "w-full mb-[20px] border-2 shadow-md transition-all ease-in-out duration-500 shadow-gray-300 animate-[box-opacity-left-animation_0.9s_ease-in-out_4.5s_forwards] opacity-0 border-gray-100 p-[5px] rounded-[5px]",
            "flex flex-col md:flex-row-reverse items-center"
          )}
        >
          <div className="w-full max-w-full">
            <img
              src="/help.jpeg"
              className="rounded-[6px] max-h-[350px] w-full object-cover"
              alt="Rasm bor !"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-center text-[20px] mt-[5px]">
              Go to help
            </h1>
            <p className="text-[15px] text-center font-[500]">
              Help - Need help?
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
