import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

function CustomCaptcha({ mode }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [errorsList, setErrorsList] = useState([]);
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomNum2 = Math.floor(Math.random() * 10);
    setNum1(randomNum1);
    setNum2(randomNum2);
    setUserAnswer("");
    setError("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = num1 + num2;

    if (parseInt(userAnswer) === correctAnswer) {
      setCorrectCount((prev) => prev + 1);
      setError("");
      if (correctCount + 1 >= 3) {
        setIsVerified(true);
        console.log("Inson tasdiqlandi!");
        setTimeout(() => {
          navigate("/faq"); // Root ga qaytish
        }, 1000);
      } else {
        generateCaptcha();
      }
    } else {
      setError("Noto‘g‘ri javob!");
      setErrorsList((prev) => [
        ...prev,
        `${num1}+${num2}=${userAnswer} (${correctAnswer})`,
      ]);
      generateCaptcha();
    }
  };

  const resetCaptcha = () => {
    setCorrectCount(0);
    setErrorsList([]);
    setIsVerified(false);
    generateCaptcha();
  };

  return (
    <div
      className={classNames(
        "min-h-screen flex mt-[-50px] items-center justify-center p-4 transition-colors duration-300",
        {
          "bg-gray-900": mode === "dark",
          "bg-gray-50": mode === "light",
        }
      )}
    >
      <div
        className={classNames(
          "w-full  border-[1px] p-4 sm:p-6 rounded-xl shadow-lg",
          {
            "bg-gray-800": mode === "dark",
            "bg-gradient-to-br from-gray-100 to-blue-100": mode === "light",
          }
        )}
      >
        <h3
          className={classNames(
            "text-lg sm:text-xl font-semibold text-center mb-4",
            {
              "text-white": mode === "dark",
              "text-gray-800": mode === "light",
            }
          )}
        >
          Inson ekanligingizni tasdiqlang
        </h3>
        {isVerified ? (
          <div>
            <p
              className={classNames("text-lg font-bold text-center", {
                "text-green-400": mode === "dark",
                "text-green-600": mode === "light",
              })}
            >
              Tasdiqlandi! ✅
            </p>
            <button
              onClick={resetCaptcha}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors block mx-auto text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Qayta boshlash
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p
              className={classNames(
                "text-lg sm:text-xl text-center mb-4 p-3 rounded-lg shadow-inner",
                {
                  "bg-gray-700 text-gray-200": mode === "dark",
                  "bg-white text-gray-600": mode === "light",
                }
              )}
            >
              {num1} + {num2} = ?
            </p>
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Javob"
              className={classNames(
                "w-full  mx-auto text-black block p-2 sm:p-3 mb-4 border-2 rounded-lg focus:outline-none transition-colors text-sm sm:text-base text-center",
                {
                  "bg-gray-900 border-gray-600 focus:border-blue-500": mode === "dark",
                  "bg-white border-gray-300 focus:border-blue-500": mode === "light",
                }
              )}
              disabled={isVerified}
            />
            <div className="flex justify-center gap-2 sm:gap-3">
              <button
                type="submit"
                className={classNames(
                  "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base",
                  {
                    "opacity-50 cursor-not-allowed": isVerified,
                  }
                )}
                disabled={isVerified}
              >
                Tekshirish
              </button>
              <button
                type="button"
                onClick={generateCaptcha}
                className={classNames(
                  "px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base",
                  {
                    "opacity-50 cursor-not-allowed": isVerified,
                  }
                )}
                disabled={isVerified}
              >
                Yangilash
              </button>
            </div>
            {error && (
              <p
                className={classNames("text-xs sm:text-sm text-center mt-2", {
                  "text-red-400": mode === "dark",
                  "text-red-500": mode === "light",
                })}
              >
                {error}
              </p>
            )}
            <p
              className={classNames("text-xs sm:text-sm text-center mt-2", {
                "text-gray-300": mode === "dark",
                "text-gray-700": mode === "light",
              })}
            >
              To‘g‘ri: {correctCount}/3
            </p>
          </form>
        )}
        {errorsList.length > 0 && (
          <div className="mt-4">
            <h4
              className={classNames("text-sm sm:text-base font-semibold", {
                "text-gray-200": mode === "dark",
                "text-gray-800": mode === "light",
              })}
            >
              Xatolar:
            </h4>
            <div
              className={classNames(
                "max-h-16 overflow-y-auto text-xs sm:text-sm",
                {
                  "text-gray-400": mode === "dark",
                  "text-gray-600": mode === "light",
                }
              )}
            >
              {errorsList.map((err, index) => (
                <p key={index} className="truncate">
                  {err}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomCaptcha;