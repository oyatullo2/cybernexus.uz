import React, { useContext } from 'react';
import classNames from 'classnames';
import { GlobalContext } from '../../GlobalState/globalstate';

export const App = () => {
  const { mode } = useContext(GlobalContext);

  // Cybersecurity ilovalari va OS lar ro‘yxati
  const appsData = [
    {
      name: 'Tor Browser',
      description: 'Internetda maxfiylik va anonimlikni ta‘minlaydigan bepul brauzer. IP manzilingizni yashiradi va xavfsiz ko‘rish imkonini beradi.',
      downloadLink: 'https://www.torproject.org/download/',
      platforms: 'Windows, macOS, Linux, Android',
      imageUrl: 'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/tor-512.png',
    },
    {
      name: 'NordVPN',
      description: 'Dunyo bo‘ylab tezkor va xavfsiz VPN xizmati. Ma’lumotlaringizni shifrlaydi va onlayn maxfiylikni ta’minlaydi.',
      downloadLink: 'https://nordvpn.com/offer/pricing/',
      platforms: 'Windows, macOS, Linux, Android, iOS',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/nordvpn-282693.png',
    },
    {
      name: 'Tails OS',
      description: 'Maxfiylik va anonimlik uchun mo‘ljallangan Linux distributivi. Barcha trafikni Tor tarmog‘i orqali yo‘naltiradi va iz qoldirmaydi.',
      downloadLink: 'https://tails.net/install/',
      platforms: 'USB/DVD (Live OS)',
      imageUrl: 'https://static-00.iconduck.com/assets.00/distributor-logo-tails-icon-2048x2048-xotkvpic.png',
    },
    {
      name: 'Kali Linux',
      description: 'Xavfsizlikni sinovdan o‘tkazish va pentesting uchun maxsus Linux distributivi. Hackerlar va mutaxassislar uchun ideal.',
      downloadLink: 'https://www.kali.org/get-kali/',
      platforms: 'Windows (VM), Linux, USB',
      imageUrl: 'https://www.kali.org/images/kali-logo.svg',
    },
    {
      name: 'Wireshark',
      description: 'Tarmoq trafikini tahlil qilish uchun ochiq kodli vosita. Paketlarni ushlab, batafsil ko‘rish imkonini beradi.',
      downloadLink: 'https://www.wireshark.org/download.html',
      platforms: 'Windows, macOS, Linux',
      imageUrl: 'https://ubunlog.com/wp-content/uploads/2019/03/Logo-de-Wireshark.png',
    },
    {
      name: 'ProtonVPN',
      description: 'Maxfiylikka yo‘naltirilgan VPN xizmati. Bepul va pulli tariflari bilan xavfsiz internet ulanishini ta’minlaydi.',
      downloadLink: 'https://protonvpn.com/download',
      platforms: 'Windows, macOS, Linux, Android, iOS',
      imageUrl: 'https://logowik.com/content/uploads/images/proton-vpn-new-20226695.logowik.com.webp',
    },
    {
      name: 'Qubes OS',
      description: 'Xavfsizlikka asoslangan operatsion tizim. Virtual mashinalar yordamida ilovalarni izolyatsiya qiladi.',
      downloadLink: 'https://www.qubes-os.org/downloads/',
      platforms: 'PC (Dedicated Hardware)',
      imageUrl: 'https://www.qubes-os.org/favicon.ico',
    },
    {
      name: 'Burp Suite',
      description: 'Veb-ilovalarning xavfsizligini sinash uchun professional vosita. Pentesterlar orasida juda mashhur.',
      downloadLink: 'https://portswigger.net/burp/releases',
      platforms: 'Windows, macOS, Linux',
      imageUrl: 'https://w7.pngwing.com/pngs/548/381/png-transparent-burp-suite-alt-macos-bigsur-icon.png',
    },
    {
      name: 'Metasploit',
      description: 'Penetration testing uchun ochiq kodli framework. Tizimlarning zaifliklarini aniqlashda yordam beradi.',
      downloadLink: 'https://www.metasploit.com/download',
      platforms: 'Windows, macOS, Linux',
      imageUrl: 'https://play-lh.googleusercontent.com/PjfzpTbZMKywkKDtX1dLkzZroAZCLTwGrwIL3acVg_-DGeP4dYkKt_Z6R8bpaOReLQ',
    },
    {
      name: 'Parrot OS',
      description: 'Xavfsizlik va maxfiylikka yo‘naltirilgan Linux distributivi. Pentesting va dasturchilar uchun qulay.',
      downloadLink: 'https://parrotsec.org/download/',
      platforms: 'Windows (VM), Linux, USB',
      imageUrl: 'https://w0.peakpx.com/wallpaper/468/927/HD-wallpaper-parrot-os-parrot-security.jpg',
    },
    {
      name: 'Orbot',
      description: 'Android uchun Tor tarmog‘iga ulanish imkonini beruvchi ilova. Maxfiylikni oshiradi va trafikni shifrlaydi.',
      downloadLink: 'https://play.google.com/store/apps/details?id=org.torproject.android',
      platforms: 'Android',
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e738c17-7f3c-422e-8225-f8c782b08626/d8pdygf-0e1a6812-d7ed-4d3d-92e8-5527da582763.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlNzM4YzE3LTdmM2MtNDIyZS04MjI1LWY4Yzc4MmIwODYyNlwvZDhwZHlnZi0wZTFhNjgxMi1kN2VkLTRkM2QtOTJlOC01NTI3ZGE1ODI3NjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ad95xVVq2Jftj5_bhf02XIhIXKuawm32wPEMJ7Oco-A',
    },
    {
      name: 'Bitdefender Mobile Security',
      description: 'Telefoningizni viruslar va zararli dasturlardan himoya qiluvchi xavfsizlik ilovasi.',
      downloadLink: 'https://www.bitdefender.com/solutions/mobile-security-android.html',
      platforms: 'Android, iOS',
      imageUrl: 'https://play-lh.googleusercontent.com/tL3Ii6vPXxDTGKds9HZT2uaOQuVOi6VDQnEZjCE4YuZQfcn0gXWd3l_d-NSfkvRH_p0',
    },
    {
      name: '1Password',
      description: 'Parollarni xavfsiz saqlash va boshqarish uchun ilova. Kuchli shifrlash bilan maxfiylikni ta’minlaydi.',
      downloadLink: 'https://1password.com/downloads/',
      platforms: 'Android, iOS',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQxY8r_syyFzRnFOoLOJf3qFv8__11S5wHQ&s',
    },
    {
      name: 'Malwarebytes Mobile',
      description: 'Telefoningizni zararli dasturlar va reklamalardan himoya qiluvchi engil va samarali ilova.',
      downloadLink: 'https://www.malwarebytes.com/mobile/',
      platforms: 'Android, iOS',
      imageUrl: 'https://e1.pngegg.com/pngimages/545/728/png-clipart-malwarebytes-v1-2-ios-style-icons-mmac-app3-thumbnail.png',
    },
    {
      name: 'DuckDuckGo Privacy Browser',
      description: 'Maxfiylikka yo‘naltirilgan mobil brauzer. Reklamalarni bloklaydi va kuzatuvdan himoya qiladi.',
      downloadLink: 'https://duckduckgo.com/app',
      platforms: 'Android, iOS',
      imageUrl: 'https://duckduckgo.com/assets/logo_homepage.normal.v108.png',
    },
    {
      name: 'LastPass',
      description: 'Parollarni xavfsiz saqlash va avtomatik to‘ldirish uchun mobil ilova. Maxfiylik va qulaylikni birlashtiradi.',
      downloadLink: 'https://www.lastpass.com/',
      platforms: 'Android, iOS',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/lastpass-282195.png',
    },
  ];

  const handleDownload = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={classNames(
        'w-full h-screen pb-2 max-h-[94vh] mt-[2px] animate-[header-top-animation_1.5s_ease-in-out] flex flex-col items-center px-4 transition-colors duration-300',
        {}
      )}
    >
      {/* App Section */}
      <div
        className={classNames(
          'w-full overflow-y-scroll h-screen max-w-4xl p-6 rounded-lg shadow-lg',
          {
            'bg-gray-800': mode === 'dark',
            'bg-white': mode === 'light',
          }
        )}
      >
        <h1
          className={classNames('text-3xl md:text-4xl font-bold mb-6 text-center', {
            'text-white': mode === 'dark',
            'text-[#f04a4f]': mode === 'light',
          })}
        >
          Cybersecurity Ilovalari
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appsData.map((app, index) => (
            <div
              key={index}
              className={classNames(
                'flex flex-col md:flex-row items-center p-5 rounded-lg shadow-md transition-all duration-300',
                {
                  'bg-gray-700': mode === 'dark',
                  'bg-gray-50': mode === 'light',
                }
              )}
            >
              <img
                src={app.imageUrl}
                alt={app.name}
                className="w-24 h-auto mb-4 md:mb-0 md:mr-5 rounded-md"
              />
              <div className="flex-1 text-center md:text-left">
                <h2
                  className={classNames('text-xl font-semibold mb-2', {
                    'text-white': mode === 'dark',
                    'text-gray-800': mode === 'light',
                  })}
                >
                  {app.name}
                </h2>
                <p
                  className={classNames('text-base leading-relaxed mb-3', {
                    'text-gray-300': mode === 'dark',
                    'text-gray-700': mode === 'light',
                  })}
                >
                  {app.description}
                </p>
                <p
                  className={classNames('text-sm mb-3', {
                    'text-gray-400': mode === 'dark',
                    'text-gray-600': mode === 'light',
                  })}
                >
                  <strong>Qo‘llab-quvvatlanadi:</strong> {app.platforms}
                </p>
                <button
                  onClick={() => handleDownload(app.downloadLink)}
                  className="bg-purple-600 text-white py-2 px-5 rounded-md text-base font-medium hover:bg-purple-800 transition-colors"
                >
                  Yuklab olish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;