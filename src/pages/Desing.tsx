import { FunctionComponent } from "react";
import { MessageSquare, BarChart3, Users } from "lucide-react";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import Footer from "../components/Footer";
import styles from "./OurVision.module.css";
import DesignPage from "../inc/DesignPage";


const Design: FunctionComponent = () => {
  return (
    <div className={styles.buttonOverview}>
      <Header hBKNewLogo1="/HBK-New-Logo-1.svg" />
      <main className={styles.bodyLayout}>
        <SideNavigation />
        <section className={styles.mainContentArea}>
          <section className={styles.mainContentAreaInner}>
            <div className={styles.frameContainer}>
              <div className={styles.frameParent2}>
                <div className={styles.chooseYourContextToExploreWrapper}>
                  <div className={styles.chooseYourContext}>Get Started</div>
                </div>
                <div className={styles.buttonParent}>
                  <h2 className={styles.button}>Get Started with Design</h2>
                  <div className={styles.chooseYourContext2}>
                    Set up your design environment—access components, tokens, and design files.
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/design.svg"
                />
              </div>
            </div>
          </section>
          <DesignPage />
          <section className="py-12 px-4 sm:px-6 md:px-12 md:py-16 w-full">
            <div className="flex min-h-0 flex-col items-center gap-6 rounded-[20px] px-5 py-8 sm:px-8 md:min-h-[320px] md:flex-row md:gap-8 md:rounded-[24px] md:px-[54px] md:py-[50px] lg:gap-[50px]"
              style={{ background: `linear-gradient(135deg, #E8F4FD 0%, #D6ECFB 100%)`, border: `1.5px solid #005B9A18` }}>
              {/* Illustration */}
              <div className="w-full shrink-0 md:w-[220px] lg:w-[260px]">
                <svg width="260" height="180" viewBox="0 0 220 150" fill="none" className="mx-auto h-auto w-full max-w-[220px] sm:max-w-[240px]">
                  {/* Three people */}
                  <circle cx="44" cy="54" r="20" fill="#7C3AED" fillOpacity="0.48" />
                  <rect x="26" y="76" width="36" height="44" rx="9" fill="#7C3AED" fillOpacity="0.28" />
                  <circle cx="110" cy="44" r="20" fill="#005B9A" fillOpacity="0.48" />
                  <rect x="92" y="66" width="36" height="54" rx="9" fill="#005B9A" fillOpacity="0.28" />
                  <circle cx="176" cy="54" r="20" fill="#059669" fillOpacity="0.48" />
                  <rect x="158" y="76" width="36" height="44" rx="9" fill="#059669" fillOpacity="0.28" />
                  {/* Speech bubbles */}
                  <rect x="2" y="14" width="54" height="26" rx="7" fill="white" />
                  <path d="M 18 40 L 12 48 L 28 44 Z" fill="white" />
                  <rect x="8" y="20" width="40" height="3.5" rx="1.5" fill="#7C3AED" fillOpacity="0.4" />
                  <rect x="8" y="27" width="32" height="3" rx="1.5" fill="#CBD5E1" />
                  <rect x="82" y="4" width="54" height="26" rx="7" fill="white" />
                  <path d="M 98 30 L 92 38 L 108 34 Z" fill="white" />
                  <rect x="88" y="10" width="40" height="3.5" rx="1.5" fill="#005B9A" fillOpacity="0.4" />
                  <rect x="88" y="17" width="32" height="3" rx="1.5" fill="#CBD5E1" />
                  <rect x="164" y="14" width="54" height="26" rx="7" fill="white" />
                  <path d="M 180 40 L 174 48 L 190 44 Z" fill="white" />
                  <rect x="170" y="20" width="40" height="3.5" rx="1.5" fill="#059669" fillOpacity="0.4" />
                  <rect x="170" y="27" width="32" height="3" rx="1.5" fill="#CBD5E1" />
                  {/* Dotted connectors */}
                  <path d="M 64 72 L 92 68" stroke="#005B9A" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.4" />
                  <path d="M 128 68 L 156 72" stroke="#005B9A" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.4" />
                  <text x="110" y="134" textAnchor="middle" fontFamily="Inter" fontSize="10" fontWeight="700" fill="#005B9A">Designers · Developers · PMs</text>
                </svg>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="mb-[12px] text-[13px] font-extrabold uppercase leading-none tracking-[0.18em]" style={{ color: "#005B9A" }}>Contribute</div>
                <h2 className="mb-[16px] text-2xl font-extrabold leading-[1.12] text-[#050b12] sm:text-[26px] md:text-[32px]" style={{ letterSpacing: "-0.03em" }}>
                  Help Shape the<br />HBK Experience
                </h2>
                <p className="text-sm text-muted-foreground mb-7 max-w-md leading-relaxed">
                  Join designers, developers, and product managers collaborating to build a world-class design ecosystem.
                  Your contributions make HBK products better for everyone.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-[20px] md:justify-start">
                  <button className="flex h-[42px] w-full items-center justify-center gap-[9px] rounded-[12px] px-[20px] text-[14px] font-extrabold leading-none text-white transition-all hover:opacity-90 sm:w-auto"
                    style={{ background: "#005B9A" }}>
                    <MessageSquare size={15} /> Contact Team
                  </button>
                  <button className="flex h-[42px] w-full items-center justify-center gap-[9px] rounded-[12px] border-[2px] px-[20px] text-[14px] font-extrabold leading-none text-[#050b12] transition-all hover:bg-white sm:w-auto"
                    style={{ borderColor: "#005B9A" + "30" }}>
                    <BarChart3 size={15} /> Contribute
                  </button>
                  <button className="flex h-[42px] w-full items-center justify-center gap-[9px] rounded-[12px] px-[20px] text-[14px] font-extrabold leading-none text-[#64748B] transition-all hover:bg-white sm:w-auto">
                    <Users size={15} /> Join Community
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </main>
    </div>
  );
};
export default Design;