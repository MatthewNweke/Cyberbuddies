import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    const wa_btnSetting = {
      btnColor: "#16BE45",
      ctaText: "WhatsApp Us",
      cornerRadius: 40,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      btnPosition: "right",
      whatsAppNumber: "2349159521960",
      welcomeMessage: "Welcome to nanocodes programming",
      zIndex: 999999,
      btnColorScheme: "light",
    };

    script.onload = () => {
      window._waEmbed(wa_btnSetting);
    };

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section>
        <Helmet>
          <script
            async
            src="https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js"
          />
        </Helmet>
        <Navbar />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
