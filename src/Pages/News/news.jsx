import classNames from "classnames";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalState/globalstate";
import { motion } from "framer-motion";

export const News = () => {
  const { mode } = useContext(GlobalContext);

  const newsItems = [
    {
      title: "Verizon and Accenture Enhance Cybersecurity Readiness",
      description:
        "Verizon Business and Accenture are advancing enterprise security with AI-driven services, reported May 2025.",
      details:
        "The partnership leverages AI to improve threat detection, with 89% of organizations using AI for threat understanding, per Cisco’s 2025 Readiness Index.",
      source: "Cisco News",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2nsi11kavWBzGzQLvaeNqstcjTXoiyPWaQ&s",
      link: "https://www.cisco.com/c/en/us/solutions/security/2025-cybersecurity-readiness-index.html",
    },
    {
      title: "CISO Global Partners with Cyber Assurance Group",
      description:
        "CISO Global announced a strategic partnership with Cyber Assurance Group in April 2025, enhancing cybersecurity offerings.",
      details:
        "The CyberSimple initiative aims to provide cyber resilience, expecting $5M in software bookings and 75% margins in 2025.",
      source: "Yahoo Finance",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://finance.yahoo.com/news/ciso-global-inc-nasdaq-ciso-150800840.html",
    },
    {
      title: "US-Russia Cyber Tensions Rise with New Malware",
      description:
        "Google identified 'LOSTKEYS' malware linked to Russia’s Cold River group, targeting Western officials in May 2025.",
      details:
        "Attacks hit advisers and NGOs, raising concerns amid ongoing US-Russia cyber tensions, despite no recent pause confirmation.",
      source: "Reuters",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.reuters.com/technology/cybersecurity/google-identifies-new-malware-linked-russia-based-hacking-group-2025-05-07/",
    },
    {
      title: "China-Linked SAP NetWeaver Exploit Expands",
      description:
        "A second wave of China-linked attacks targets SAP NetWeaver, reported May 2025.",
      details:
        "Hundreds of compromises across critical infrastructure exploit CVE-2025-31324, per Onapsis and CISA alerts.",
      source: "Cybersecurity Dive",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIWbKm_OGwUIvet1EuKkOpV74wlQn__Vu2w&s",
      link: "https://www.cybersecuritydive.com/news/sap-netweaver-exploitation-second-wave/723123/",
    },
    {
      title: "Healthcare Cybersecurity Rules Tighten in 2025",
      description:
        "New 2025 rules mandate encryption and MFA for healthcare providers, effective June.",
      details:
        "Non-compliance risks $1M fines, addressing rising ransomware claims, down 7% in 2024 per Coalition.",
      source: "HIPAA Journal",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.hipaajournal.com/cyber-insurance-provider-reports-fall-in-claims-frequency-in-2024/",
    },
    {
      title: "Lockbit Ransomware Group Hacked",
      description:
        "Analysts confirm a breach of the Lockbit ransomware group in May 2025.",
      details:
        "A rogue post and data leak suggest internal compromise, impacting their extortion operations.",
      source: "Reuters",
      image:
        "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.reuters.com/technology/cybersecurity/ransomware-group-lockbit-appears-have-been-hacked-analysts-say-2025-05-09/",
    },
    {
      title: "Southern Water Recovers from 2024 Attack",
      description:
        "Southern Water’s £4.5M recovery from a February 2024 ransomware attack updated in May 2025.",
      details:
        "Disrupted billing systems required extensive restoration efforts, highlighting resilience needs.",
      source: "BleepingComputer",
      image:
        "https://www.shutterstock.com/image-illustration/cyber-attack-breaking-news-daily-600nw-1699077571.jpg",
      link: "https://www.bleepingcomputer.com/news/security/southern-water-cyberattack-costs-5-7m/",
    },
    {
      title: "Belgium Probes Ongoing Chinese Espionage",
      description:
        "Belgium investigates a persistent Chinese hack on its State Security Service, May 2025.",
      details:
        "The breach targets intelligence data, raising European espionage concerns.",
      source: "BleepingComputer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQF9r6jn6KcTdQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681124508062?e=2147483647&v=beta&t=N-SQoi5S7Q3XA_Kl5JiDi9DGS3ABkyWTvyU1zkdIboQ",
      link: "https://www.bleepingcomputer.com/news/security/belgium-chinese-hack-state-security/",
    },
    {
      title: "Qilin Ransomware Targets Expand",
      description:
        "Qilin ransomware hit Lee Enterprises in 2025, with new targets emerging in May.",
      details:
        "Data leaks continue to disrupt operations, posted on dark web forums.",
      source: "BleepingComputer",
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQGOT9LcuWVGsA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684486842001?e=2147483647&v=beta&t=lH6wkvU7f2zNih6ICXrVFujBaFWSvRyRZBTJPIYpeJs",
      link: "https://www.bleepingcomputer.com/news/security/qilin-ransomware-lee-enterprises/",
    },
    {
      title: "Microsoft Warns of AI Deepfake Threats",
      description:
        "Microsoft identifies a gang bypassing AI guardrails for deepfakes, May 2025.",
      details:
        "Tools for illicit content threaten digital trust, prompting new defenses.",
      source: "BleepingComputer",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.bleepingcomputer.com/news/security/microsoft-ai-deepfake-gang/",
    },
    {
      title: "CISA Strengthens US Defenses",
      description:
        "CISA reaffirms focus on US infrastructure protection against cyber threats, May 2025.",
      details:
        "Efforts counter rising attacks, including Russia-linked malware, despite Pentagon shifts.",
      source: "Infosecurity Magazine",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.infosecurity-magazine.com/news/cisa-denies-shift-russian-threats/",
    },
    {
      title: "Turkey Probes Twitch Breach Fallout",
      description:
        "Turkey investigates ongoing issues from a 2025 Twitch data breach, May update.",
      details: "Exposed user data prompts continued regulatory scrutiny.",
      source: "Reuters",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1NBqUbAzW0aeYFt0E6HE6uYe_WdKRSmkQA&s",
      link: "https://www.reuters.com/technology/cybersecurity/turkey-fines-twitch-2m-lira-data-breach/",
    },
    {
      title: "T-Mobile Confirms Chinese Telecom Hack",
      description:
        "T-Mobile verifies a Chinese-led breach affecting call records, May 2025.",
      details:
        "Linked to broader telecom attacks, raising industry-wide concerns.",
      source: "Reuters",
      image:
        "https://www.redseal.net/wp-content/uploads/2024/04/Cyber-news-roundup.png",
      link: "https://www.reuters.com/technology/cybersecurity/t-mobile-hacked-chinese-breach/",
    },
    {
      title: "Hungary Probes State-Sponsored Hack",
      description:
        "Hungary investigates a suspected state-sponsored defense agency breach, May 2025.",
      details: "Exposed military contracts suggest espionage motives.",
      source: "Reuters",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJO-p8gmdIH6JKxtfC0GE9JtXV715Jlv_ZQ&s",
      link: "https://www.reuters.com/technology/cybersecurity/hungary-defense-agency-hacked/",
    },
    {
      title: "Thales Expands Cyber Profit Forecast",
      description:
        "Thales raises profit outlook after cyber asset acquisitions, May 2025.",
      details:
        "New deals enhance cybersecurity capabilities, boosting revenue.",
      source: "Reuters",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbC28FgAnR0NBzECc4xFf1ilQSFQj-OT3F2g&s",
      link: "https://www.reuters.com/business/defence-firm-thales-eyes-profit-growth-cyber-expansion/",
    },
    {
      title: "Cisco Leads with AI Security Gear",
      description:
        "Cisco exceeds earnings with AI-driven networking solutions, May 2025.",
      details:
        "Strong demand reflects growing cybersecurity needs, per 2025 Readiness Index.",
      source: "Reuters",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.reuters.com/technology/cisco-beats-earnings-ai-networking-gear/",
    },
    {
      title: "Italy Fines Intesa for Data Breach",
      description:
        "Italy imposes a €500K fine on Intesa for a 2025 data breach, May update.",
      details: "Exposed banking data triggers regulatory action.",
      source: "Reuters",
      image:
        "https://www.shutterstock.com/image-illustration/cyber-attack-security-breach-breaking-600nw-2230182511.jpg",
      link: "https://www.reuters.com/technology/cybersecurity/italy-fines-intesa-data-breach/",
    },
    {
      title: "South Korea Links Russia to Cyberattacks",
      description:
        "South Korea attributes recent cyberattacks to pro-Russia groups, May 2025.",
      details: "Targets include government systems amid geopolitical tensions.",
      source: "Reuters",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSU1A5Qmc5yMF9ckMJU4HCcEEMrE18Pap9nQ&s",
      link: "https://www.reuters.com/world/south-korea-pro-russia-cyberattacks/",
    },
    {
      title: "Cyber A.I. Group Showcases AI at SXSW",
      description:
        "Cyber A.I. Group highlights AI cybersecurity at SXSW 2025, May update.",
      details: "CEO Walter Hughes presents innovative protection strategies.",
      source: "Yahoo Finance",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://finance.yahoo.com/news/latest-news-ai-chips-cybersecurity/",
    },
    {
      title: "Quantum Computing Threatens Encryption",
      description:
        "Quantum advances by Google and Microsoft raise cybersecurity concerns, May 2025.",
      details: "Milestones challenge current encryption, urging new standards.",
      source: "Dark Reading",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtsEzc22YgWJ0e7ZukVA5NIAJyNrZwCCQKw&s",
      link: "https://www.darkreading.com/cybersecurity-operations/quantum-computing-advances-2025/",
    },
    {
      title: "Thailand Nabs DESORDEN Cybercriminal",
      description:
        "Thailand arrests a DESORDEN member for extorting 90+ organizations, May 2025.",
      details: "Seized data leaks highlight international cybercrime efforts.",
      source: "BleepingComputer",
      image:
        "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.bleepingcomputer.com/news/security/thailand-arrests-desorden-cybercriminal/",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black font-mono text-neon-green px-4 sm:px-6 pt-6 pb-10 overflow-x-hidden">
      <motion.div
        className="w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center tracking-wider text-neon-green">
          Cybersecurity News Worldwide
        </h2>
        <div className="space-y-6 overflow-y-auto  flex-1 scrollbar-thin scrollbar-thumb-neon-green scrollbar-track-black">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              className={classNames(
                "flex flex-col sm:flex-row items-start p-4 rounded-lg border-2 border-neon-green bg-black bg-opacity-80 shadow-neon hover:animate-glitch",
                "transition-all duration-300"
              )}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + index * 0.2,
                ease: "easeInOut",
              }}
              whileHover={{
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
                borderColor: "#00f0ff",
              }}
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-32 sm:w-40 h-24 sm:h-28 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6 border border-neon-blue shadow-neon-blue"
              />
              <div className="flex-1">
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-semibold mb-2 hover:underline text-neon-green hover:text-neon-blue"
                >
                  {news.title}
                </a>
                <p className="text-sm sm:text-base leading-relaxed mb-2 text-neon-green opacity-80">
                  {news.description}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-neon-green opacity-70">
                  {news.details}
                </p>
                <p className="text-xs sm:text-sm mt-2 italic text-neon-green opacity-70">
                  Source:{" "}
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-neon-blue"
                  >
                    {news.source}
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default News;
