import classNames from "classnames";

export const Welcome = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Hayrli kun !</p>
      <p className="text-center">
        Bu saytda Kiber xavfsizlik bo'yicha malumotlar yangiliklar va yordam
        bo'limlari tez orada tashkil etiladi yangiliklardan xabardor bo'ling !
      </p>
      <p>Murojaat uchun : </p>
      <a className="text-blue-400" href="https://t.me/umezhan">
        Admin 1
      </a>
      <a className="text-blue-400" href="https://t.me/cyber01_guardians">
        Admin 2
      </a>
      <a className="text-blue-400" href="https://t.me/snovden_01">
        Admin 3
      </a>
    </div>
  );
};
