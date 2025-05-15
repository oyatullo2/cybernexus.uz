import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const CertificateGenerator = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [achievement, setAchievement] = useState("CTF Champion");
  const canvasRef = useRef(null);

  const achievements = [
    "CTF Champion",
    "Cyber Warfare Specialist",
    "Digital Forensics Expert",
    "Malware Analyst",
    "Penetration Expert",
    "Security Overlord",
    "Network Defender",
    "Vulnerability Hunter",
    "Incident Responder",
    "Threat Intelligence Analyst",
    "Cybersecurity Architect",
    "Ethical Hacker",
    "Red Team Leader",
    "Blue Team Strategist",
    "Cybersecurity Researcher",
    "Security Consultant",
    "Cryptography Specialist",
    "Risk Management Expert",
    "Compliance Officer",
    "Security Awareness Trainer",
    "Incident Handler",
    "Security Operations Center Analyst",
    "Application Security Tester",
    "Cloud Security Specialist",
  ];

  useEffect(() => {
    // Rotate achievements with glitch effect
    const interval = setInterval(() => {
      setAchievement((prev) => {
        const currentIndex = achievements.indexOf(prev);
        return achievements[(currentIndex + 1) % achievements.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Canvas settings
    canvas.width = 1600;
    canvas.height = 1200;

    // Dark futuristic background
    ctx.fillStyle = "#0a0a12";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add circuit board pattern
    ctx.strokeStyle = "rgba(0, 255, 100, 0.1)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 200; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Add binary code rain effect in background
    ctx.fillStyle = "rgba(0, 255, 100, 0.05)";
    ctx.font = "16px Monospace";
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillText(Math.random().toString(2).substring(2, 10), x, y);
    }

    // Glowing border
    ctx.strokeStyle = "#00ff88";
    ctx.shadowColor = "#00ff88";
    ctx.shadowBlur = 20;
    ctx.lineWidth = 15;
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
    ctx.shadowBlur = 0;

    // Cyber Nexus holographic logo
    ctx.font = "bold 80px 'Courier New', monospace";
    ctx.fillStyle = "rgba(0, 255, 150, 0.8)";
    ctx.textAlign = "left";
    ctx.fillText(">_", 100, 150);

    // Main header with glitch effect
    ctx.font = "bold 90px 'Orbitron', sans-serif";
    ctx.fillStyle = "#00ffaa";
    ctx.textAlign = "center";

    // Glitch effect
    ctx.fillText("CYBER NEXUS", canvas.width / 2 + 3, 180);
    ctx.fillStyle = "#ff00aa";
    ctx.fillText("CYBER NEXUS", canvas.width / 2 - 3, 180);
    ctx.fillStyle = "#00ffaa";
    ctx.fillText("CYBER NEXUS", canvas.width / 2, 180);

    // Certification type with animation
    ctx.font = "italic 40px 'Rajdhani', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(
      "CERTIFICATE OF ACHIEVEMENT IN CYBERSECURITY",
      canvas.width / 2,
      250
    );

    // OSEE badge with glow
    const centerX = canvas.width / 2;
    const centerY = 400;

    // Badge outer circle
    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      120
    );
    gradient.addColorStop(0, "#00ff88");
    gradient.addColorStop(1, "#005533");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
    ctx.fill();

    // Badge inner circle
    ctx.fillStyle = "#0a0a12";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
    ctx.fill();

    // OSEE text
    ctx.font = "bold 60px 'Orbitron', sans-serif";
    ctx.fillStyle = "#00ff88";
    ctx.fillText("CNX", centerX, centerY + 20);

    // Recipient information
    ctx.font = "bold 72px 'Rajdhani', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("THIS CERTIFIES THAT", centerX, 550);

    // Name with dynamic font size based on length
    const fullName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
    let fontSize = 96; // Default font size
    ctx.font = `bold ${fontSize}px 'Orbitron', sans-serif`;
    let textWidth = ctx.measureText(fullName).width;
    const maxWidth = canvas.width - 200; // Maksimal kenglik (chetlar uchun 100px bo'sh joy)

    // Fontni dinamik ravishda moslashtirish
    while (textWidth > maxWidth && fontSize > 40) {
      // Minimal font o‘lchami 40px
      fontSize -= 2; // Har safar 2px kichraytirish
      ctx.font = `bold ${fontSize}px 'Orbitron', sans-serif`;
      textWidth = ctx.measureText(fullName).width;
    }

    ctx.shadowColor = "#00ff88";
    ctx.shadowBlur = 15;
    ctx.fillStyle = "#00ffcc";
    ctx.fillText(fullName, centerX, 650);
    ctx.shadowBlur = 0;

    // Achievement
    ctx.font = "italic 54px 'Rajdhani', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("HAS DEMONSTRATED EXCEPTIONAL SKILLS AS A", centerX, 750);

    ctx.font = "bold 64px 'Orbitron', sans-serif";
    ctx.fillStyle = "#00ff88";
    ctx.fillText(achievement.toUpperCase(), centerX, 830);

    // Motivational quote
    const quotes = [
      "BREAKING SYSTEMS TO MAKE THEM STRONGER",
      "FROM VULNERABILITY COMES STRENGTH",
      "THE MATRIX HAS YOU... BUT YOU CONTROL THE MATRIX",
      "ACCESS GRANTED TO ALL SYSTEMS",
      "YOUR CODE IS LAW IN THESE SYSTEMS",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    ctx.font = "italic 36px 'Rajdhani', sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.fillText(randomQuote, centerX, 900);

    // Validation section
    ctx.font = "24px 'Courier New', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "right";
    ctx.fillText(
      "CERTIFICATION ID: CN-CNX-" +
        Math.random().toString(36).substring(2, 10).toUpperCase(),
      canvas.width - 100,
      1050
    );

    const today = new Date();
    ctx.fillText(
      "DATE OF ISSUE: " +
        today.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      canvas.width - 100,
      1080
    );

    // Cyber Nexus seal
    ctx.beginPath();
    ctx.arc(canvas.width - 200, 1150, 60, 0, Math.PI * 2);
    ctx.strokeStyle = "#00ff88";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.font = "bold 24px 'Courier New', monospace";
    ctx.fillStyle = "#00ff88";
    ctx.textAlign = "center";
    ctx.fillText("CYBER", canvas.width - 200, 1140);
    ctx.fillText("NEXUS", canvas.width - 200, 1165);

    // Holographic validation QR placeholder
    ctx.strokeStyle = "rgba(0, 255, 150, 0.5)";
    ctx.lineWidth = 2;
    ctx.strokeRect(canvas.width - 350, 1020, 200, 200);

    ctx.font = "16px 'Courier New', monospace";
    ctx.fillStyle = "rgba(0, 255, 150, 0.7)";
    ctx.fillText("SCAN TO VERIFY", canvas.width - 250, 1240);
  };

  const downloadCertificate = () => {
    if (!firstName || !lastName) {
      alert(
        "Please enter both first and last name to generate your certificate!"
      );
      return;
    }
    generateCertificate();
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = `CyberNexus_${firstName}_${lastName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // Glitch animatsiyasi uchun variantlar
  const glitchVariants = {
    hidden: {
      opacity: 0,
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        repeat: 2,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-neon-green font-mono flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-xl bg-black bg-opacity-80 border-2 border-neon-green rounded-lg p-6 shadow-neon"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 animate-pulse">
          CYBER NEXUS CERTIFICATE
        </h2>

        <div className="mb-6">
          <label className="block text-neon-green mb-2">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-800 text-neon-green rounded-md border border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green"
          />

          <label className="block text-neon-green mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-800 text-neon-green rounded-md border border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green"
          />

          <div className="mb-6">
            <label className="block text-neon-green mb-2">
              Achievement Title
            </label>
            <motion.div
              key={achievement}
              className="text-xl font-bold text-neon-green h-12 flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={glitchVariants}
              style={{
                textShadow: "0 0 5px #00ffcc, 0 0 10px #00ffcc",
                background: "rgba(0, 255, 204, 0.1)",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
              }}
            >
              {achievement}
            </motion.div>
          </div>
        </div>

        <motion.button
          onClick={downloadCertificate}
          className="w-full py-2 bg-gradient-to-r from-neon-green to-neon-blue text-black rounded-md font-semibold mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GENERATE CERTIFICATE
        </motion.button>

        <div className="mt-6 text-center text-neon-green text-sm">
          <p>Your achievement will be forever recorded in the Cyber Nexus</p>
          <p className="text-xs opacity-70 mt-2">
            Certificate includes holographic validation seal
          </p>
        </div>
      </motion.div>

      <canvas ref={canvasRef} className="hidden" />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap");

        body {
          background: radial-gradient(
            ellipse at center,
            #0a0a12 0%,
            #000000 100%
          );
        }

        input::placeholder {
          color: #4a6b5a;
        }
      `}</style>
    </div>
  );
};

export default CertificateGenerator;
