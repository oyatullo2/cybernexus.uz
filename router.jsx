import { Routes, Route } from "react-router-dom";
import { Welcome } from "./src/Pages/Welcome/welcome";
import { App } from "./src/Pages/App/app";
import { Layout } from "./src/Layout/layout";
import { News } from "./src/Pages/News/news";
import { About } from "./src/Pages/About/about";
import { Contact } from "./src/Pages/Contact/contact";
import { Help } from "./src/Pages/Help/help";
import { Error } from "./src/Pages/Error/error";
import { Cyberflow } from "./src/Pages/Cyberflow/cyberflow";
import { Terminal } from "./src/Pages/Terminale/terminal";
import QRCodeGenerator from "./src/Pages/Qr/qr";
import Base64Tool from "./src/Pages/Base64/base64";
import HashGeneral from "./src/Pages/Hash/hash";
import NasaImage from "./src/Pages/Nasa/kosmos";
import UuidGenerator from "./src/Pages/UUID/uuid";
import CertificateGenerator from "./src/Pages/Certificate/certificate";

export const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="premium-app" element={<App />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cyberflow" element={<Cyberflow />} />
        <Route path="/ctf-challenge" element={<Terminal />} />
        <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
        <Route path="/base64-code" element={<Base64Tool />} />
        <Route path="/uuid-generator" element={<UuidGenerator />} />
        <Route path="/hash-service" element={<HashGeneral />} />
        <Route path="/nasa-gallery" element={<NasaImage />} />
        <Route path="/cybernexus-certificate" element={<CertificateGenerator />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
