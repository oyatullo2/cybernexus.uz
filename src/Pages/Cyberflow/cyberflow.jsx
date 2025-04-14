import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import { FaTelegramPlane, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import classNames from "classnames";

export const Cyberflow = () => {
  const { mode } = useContext(GlobalContext);

  // Postlar massivi
  const posts = [
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/9Rc_HWSh5yE",
      icon: <FaYoutube className={classNames("text-2xl", "text-red-600")} />,
      title: "YouTube Short",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/158",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-blue-500")} />
      ),
      title: "Telegram Post #158",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/3",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-blue-500")} />
      ),
      title: "Telegram Post #3",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/159",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-blue-500")} />
      ),
      title: "Telegram Post #159",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/160",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-blue-500")} />
      ),
      title: "Telegram Post #160",
    },
    {
      type: "telegram",
      postId: "cyber_nexuss/209",
      icon: (
        <FaTelegramPlane className={classNames("text-2xl", "text-blue-500")} />
      ),
      title: "Telegram Post #209",
    },
    {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7304286962587242496",
      icon: (
        <FaLinkedinIn className={classNames("text-2xl", "text-blue-700")} />
      ),
      title: "LinkedIn Post #2",
    },
    {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7317380469455515648",
      icon: (
        <FaLinkedinIn className={classNames("text-2xl", "text-blue-700")} />
      ),
      title: "LinkedIn Post #1",
    },
    {
      type: "linkedin",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7304285927202328576",
      icon: (
        <FaLinkedinIn className={classNames("text-2xl", "text-blue-700")} />
      ),
      title: "LinkedIn Post #3",
    },
  ];

  // Postlarni tasodifiy tartibda aralashtirish
  const shuffledPosts = [...posts].sort(() => Math.random() - 0.5);

  return (
    <>
      <p
        className={classNames(
          "fixed w-full font-[600] mt-[8px] text-[18px] z-[1] animate-[fadeIn_1s_ease] text-center py-[5px] sm:py-[8px]",
          {
            "bg-white border-gray-200": mode === "light",
            "bg-gray-900 border-gray-700": mode === "dark",
          }
        )}
      >
        Cyber Nexus News
      </p>
      <div className="flex mt-[35px] sm:mt-[40px] flex-col gap-6 animate-[fadeIn_1s_ease] p-4 max-w-4xl mx-auto">
        {shuffledPosts.map((post, index) => (
          <div
            key={index}
            className={classNames(
              "rounded-2xl shadow-lg border p-2 sm:p-4 space-y-2",
              {
                "bg-white border-gray-200": mode === "light",
                "bg-gray-900 border-gray-700": mode === "dark",
              }
            )}
          >
            <div className="flex items-center gap-2">
              {post.icon}
              <h2
                className={classNames("text-lg font-semibold", {
                  "text-red-600": mode === "light",
                  "text-white": mode === "dark",
                })}
              >
                {post.title}
              </h2>
            </div>

            {post.type === "linkedin" && (
              <iframe
                src={post.src}
                height="500"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title={post.title}
                className="rounded-lg w-full"
              ></iframe>
            )}

            {post.type === "telegram" && (
              <iframe
                src={`https://t.me/${post.postId}?embed=1`}
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="yes"
                className="w-full"
              ></iframe>
            )}

            {post.type === "youtube" && (
              <iframe
                width="100%"
                height="500"
                src={post.src}
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
