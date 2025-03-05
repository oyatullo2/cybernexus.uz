import classNames from "classnames";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";

export const News = () => {
  const { mode } = useContext(GlobalContext);

  const newsItems = [
    {
      title: "Verizon and Accenture Boost Cybersecurity Resilience",
      description: "Verizon Business and Accenture partnered to enhance enterprise security with new management services, announced March 3, 2025.",
      details: "The collaboration aims to cut response times by 40% using advanced threat detection and managed security services against ransomware.",
      source: "Technology Magazine",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2nsi11kavWBzGzQLvaeNqstcjTXoiyPWaQ&s",
      link: "https://technologymagazine.com/articles/verizon-and-accenture-boost-cybersecurity-resilience",
    },
    {
      title: "28+ Cybersecurity M&A Deals in February 2025",
      description: "Over two dozen cybersecurity mergers occurred in February 2025, including Cyber Advisors acquiring Wasatch I.T.",
      details: "The $15M deal expands cloud security offerings, reflecting a trend toward integrated cybersecurity solutions.",
      source: "SecurityWeek",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.securityweek.com/over-28-cybersecurity-ma-deals-in-february-2025/",
    },
    {
      title: "US Halts Cyber Operations Against Russia",
      description: "The US paused offensive cyber operations targeting Russia, reported March 2, 2025.",
      details: "Ordered by Defense Secretary Hegseth, this could weaken US defenses against Russian cyberattacks.",
      source: "CNN Politics",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.cnn.com/2025/03/02/politics/us-suspends-cyber-operations-russia",
    },
    {
      title: "China-Linked Hack Targets SingTel",
      description: "A Chinese group hacked SingTel’s networks, part of a telecom breach, updated March 2025.",
      details: "The attack exposed data across multiple countries, linked to China’s APT groups.",
      source: "Reuters",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIWbKm_OGwUIvet1EuKkOpV74wlQn__Vu2w&s",
      link: "https://www.reuters.com/technology/cybersecurity/china-linked-group-hacks-singtel-2024-11-05/",
    },
    {
      title: "New Healthcare Cybersecurity Rules in 2025",
      description: "Stricter cybersecurity standards for healthcare start in 2025, focusing on encryption.",
      details: "From June 2025, providers must use encryption and MFA, with $1M fines for non-compliance.",
      source: "Dark Reading",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.darkreading.com/cybersecurity-operations/healthcare-cybersecurity-new-rules-2025",
    },
    {
      title: "North Korean Hackers Hit Bybit for $1.5B",
      description: "FBI confirms North Korean hackers stole $1.5B from Bybit, March 2025.",
      details: "The largest crypto heist exploited smart contract flaws, raising regulation concerns.",
      source: "BleepingComputer",
      image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.bleepingcomputer.com/news/security/north-korean-hackers-steal-1-5b-from-bybit/",
    },
    {
      title: "Southern Water Cyberattack Costs £4.5M",
      description: "Southern Water faced £4.5M costs from a February 2024 attack, updated March 2025.",
      details: "The ransomware disrupted billing, requiring extensive recovery efforts.",
      source: "BleepingComputer",
      image: "https://www.shutterstock.com/image-illustration/cyber-attack-breaking-news-daily-600nw-1699077571.jpg",
      link: "https://www.bleepingcomputer.com/news/security/southern-water-cyberattack-costs-5-7m/",
    },
    {
      title: "Belgium Probes Chinese Hack on Security Service",
      description: "Belgium investigates a Chinese hack of its State Security Service, March 2025.",
      details: "The breach targeted intelligence data, raising espionage fears in Europe.",
      source: "BleepingComputer",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQF9r6jn6KcTdQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681124508062?e=2147483647&v=beta&t=N-SQoi5S7Q3XA_Kl5JiDi9DGS3ABkyWTvyU1zkdIboQ",
      link: "https://www.bleepingcomputer.com/news/security/belgium-chinese-hack-state-security/",
    },
    {
      title: "Qilin Ransomware Targets Lee Enterprises",
      description: "Qilin gang hit Lee Enterprises in February 2025, leaking stolen data.",
      details: "The attack disrupted news operations, with data samples posted online.",
      source: "BleepingComputer",
      image: "https://media.licdn.com/dms/image/v2/D4E12AQGOT9LcuWVGsA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684486842001?e=2147483647&v=beta&t=lH6wkvU7f2zNih6ICXrVFujBaFWSvRyRZBTJPIYpeJs",
      link: "https://www.bleepingcomputer.com/news/security/qilin-ransomware-lee-enterprises/",
    },
    {
      title: "Microsoft IDs AI Deepfake Gang",
      description: "Microsoft named a gang bypassing AI guardrails for deepfakes, March 2025.",
      details: "The group created tools for illicit content, threatening digital trust.",
      source: "BleepingComputer",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.bleepingcomputer.com/news/security/microsoft-ai-deepfake-gang/",
    },
    {
      title: "CISA Denies Scaling Back on Russia",
      description: "CISA reaffirms its defense against Russian threats, March 3, 2025.",
      details: "Despite Pentagon shifts, CISA focuses on protecting US infrastructure.",
      source: "Infosecurity Magazine",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.infosecurity-magazine.com/news/cisa-denies-shift-russian-threats/",
    },
    {
      title: "Turkey Fines Twitch 2M Lira",
      description: "Turkey fined Twitch 2M lira for a data breach, March 2025.",
      details: "The breach exposed user data, prompting regulatory action.",
      source: "Reuters",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1NBqUbAzW0aeYFt0E6HE6uYe_WdKRSmkQA&s",
      link: "https://www.reuters.com/technology/cybersecurity/turkey-fines-twitch-2m-lira-data-breach/",
    },
    {
      title: "T-Mobile Breached in Chinese Hack",
      description: "T-Mobile was hit in a Chinese-led telecom hack, March 2025.",
      details: "The breach compromised call records, linked to the SingTel attack.",
      source: "Reuters",
      image: "https://www.redseal.net/wp-content/uploads/2024/04/Cyber-news-roundup.png",
      link: "https://www.reuters.com/technology/cybersecurity/t-mobile-hacked-chinese-breach/",
    },
    {
      title: "Hungary Defense Agency Hacked",
      description: "Hungary’s defense agency was hacked, March 2025.",
      details: "Military contract details were exposed, suspected state-sponsored.",
      source: "Reuters",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJO-p8gmdIH6JKxtfC0GE9JtXV715Jlv_ZQ&s",
      link: "https://www.reuters.com/technology/cybersecurity/hungary-defense-agency-hacked/",
    },
    {
      title: "Thales Boosts Cyber Expansion",
      description: "Thales forecasts profit growth after cyber expansion, March 2025.",
      details: "The firm acquired new assets to enhance cybersecurity offerings.",
      source: "Reuters",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbC28FgAnR0NBzECc4xFf1ilQSFQj-OT3F2g&s",
      link: "https://www.reuters.com/business/defence-firm-thales-eyes-profit-growth-cyber-expansion/",
    },
    {
      title: "Cisco Excels with AI Gear",
      description: "Cisco beat earnings with AI-driven networking gear, March 2025.",
      details: "Demand for AI-enhanced solutions reflects cybersecurity needs.",
      source: "Reuters",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.reuters.com/technology/cisco-beats-earnings-ai-networking-gear/",
    },
    {
      title: "Italy Fines Intesa for Breach",
      description: "Italy fined Intesa €500K for a data breach, March 2025.",
      details: "The breach exposed banking data, leading to regulatory action.",
      source: "Reuters",
      image: "https://www.shutterstock.com/image-illustration/cyber-attack-security-breach-breaking-600nw-2230182511.jpg",
      link: "https://www.reuters.com/technology/cybersecurity/italy-fines-intesa-data-breach/",
    },
    {
      title: "South Korea Ties Attacks to Russia",
      description: "South Korea links cyberattacks to pro-Russia groups, March 2025.",
      details: "The attacks targeted government systems after troop deployments.",
      source: "Reuters",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSU1A5Qmc5yMF9ckMJU4HCcEEMrE18Pap9nQ&s",
      link: "https://www.reuters.com/world/south-korea-pro-russia-cyberattacks/",
    },
    {
      title: "Cyber A.I. Group Plans AI Use",
      description: "Cyber A.I. Group to use AI for cybersecurity at SXSW 2025, March 2025.",
      details: "CEO Walter Hughes will discuss AI-driven protection strategies.",
      source: "Yahoo Finance",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://finance.yahoo.com/news/latest-news-ai-chips-cybersecurity/",
    },
    {
      title: "Quantum Advances Spark Concerns",
      description: "Quantum computing progress raises cybersecurity fears, March 2025.",
      details: "Google and Microsoft’s milestones may challenge current encryption.",
      source: "Dark Reading",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtsEzc22YgWJ0e7ZukVA5NIAJyNrZwCCQKw&s",
      link: "https://www.darkreading.com/cybersecurity-operations/quantum-computing-advances-2025/",
    },
    {
      title: "Thailand Arrests DESORDEN Member",
      description: "Thailand arrested a DESORDEN group member, March 2025.",
      details: "The suspect extorted 90+ organizations, leaking stolen data.",
      source: "BleepingComputer",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.bleepingcomputer.com/news/security/thailand-arrests-desorden-cybercriminal/",
    },
  ];

  return (
    <div
      className={classNames(
        "w-full flex flex-col items-center overflow-hidden", // Ekran balandligi bilan cheklanadi, tashqi scroll yo‘q
        "px-2 sm:px-4 md:px-6 lg:px-8 animate-[header-top-animation_1.5s_ease-in-out]"
      )}
    >
      <div
        className={classNames(
          "w-full max-w-full mt-[2px] h-screen max-h-[94vh] sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl rounded-lg border-[1px] shadow-lg",
          "flex flex-col h-full p-2 pb-5 py-[25px] sm:p-4 md:p-6 lg:px-6 lg:pb-0", // Padding responsiv
          {
            "bg-gray-900 text-white border-gray-700": mode === "dark",
            "bg-white text-gray-800 border-gray-200": mode === "light",
          }
        )}
      >
        <h2
          className={classNames(
            "text-xl sm:text-2xl mt-[-10px] lg:mt-[0px]  md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-6 md:mb-8  lg:mb-5 text-center",
            {
              "text-white": mode === "dark",
              "text-[#f04a4f]": mode === "light",
            }
          )}
        >
          Cybersecurity News Worldwide
        </h2>

        {/* Yangiliklar ro‘yxati - faqat bu qismda scroll */}
        <div
          className={classNames(
            "space-y-4 sm:space-y-6 overflow-y-auto flex-1", // Scroll faqat ichki qismda, bo‘sh joyni to‘ldiradi
            "scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
          )}
        >
          {newsItems.map((news, index) => (
            <div
              key={index}
              className={classNames(
                "flex flex-col sm:flex-row items-start p-2 sm:p-4 rounded-lg border",
                {
                  "bg-gray-800 border-gray-700": mode === "dark",
                  "bg-gray-50 border-gray-200": mode === "light",
                }
              )}
            >
              {/* Rasm */}
              <img
                src={news.image}
                alt={news.title}
                className="w-full sm:w-32 md:w-40 h-20 sm:h-24 object-cover rounded-md mb-2 sm:mb-0 sm:mr-4"
              />
              {/* Matn */}
              <div className="flex-1">
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classNames(
                    "text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 hover:underline",
                    {
                      "text-white hover:text-blue-400": mode === "dark",
                      "text-gray-900 hover:text-blue-600": mode === "light",
                    }
                  )}
                >
                  {news.title}
                </a>
                <p
                  className={classNames(
                    "text-sm sm:text-base leading-relaxed mb-1 sm:mb-2",
                    {
                      "text-gray-300": mode === "dark",
                      "text-gray-700": mode === "light",
                    }
                  )}
                >
                  {news.description}
                </p>
                <p
                  className={classNames(
                    "text-xs sm:text-sm leading-relaxed",
                    {
                      "text-gray-400": mode === "dark",
                      "text-gray-600": mode === "light",
                    }
                  )}
                >
                  {news.details}
                </p>
                <p
                  className={classNames(
                    "text-xs sm:text-sm mt-1 sm:mt-2 italic",
                    {
                      "text-gray-400": mode === "dark",
                      "text-gray-600": mode === "light",
                    }
                  )}
                >
                  Source:{" "}
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {news.source}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;