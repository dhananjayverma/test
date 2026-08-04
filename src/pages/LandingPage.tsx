import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Menu,
  X,
  Download,
  ExternalLink,
  Layers,
  Users,
  BookOpen,
  Package,
  Lightbulb,
  BarChart3,
  MessageSquare,
  Star,
  CheckCircle,
  Zap,
  Globe,
  ChevronDown,
  Send,
  Calendar,
  Building2,
  UserCircle,
  Mail,
  FileText,
} from "lucide-react";

// ─── Brand tokens ─────────────────────────────────────────────
const B = {
  blue:       "#005B9A",
  blueDark:   "#003D6B",
  blueLight:  "#E8F4FD",
  blueAlt:    "#0078D4",
  emerald:    "#059669",
  emeraldL:   "#D1FAE5",
  orange:     "#D97706",
  orangeL:    "#FEF3C7",
  purple:     "#7C3AED",
  purpleL:    "#EDE9FE",
  coral:      "#DC2626",
  coralL:     "#FEE2E2",
  sky:        "#0EA5E9",
  skyL:       "#E0F2FE",
};

// ─── SVG Illustrations ────────────────────────────────────────

function WorkshopIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <pattern id="wdots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill={B.purple} fillOpacity="0.14" />
        </pattern>
        <filter id="ws1">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={B.purple} floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="400" height="260" rx="0" fill={B.purpleL} />
      <rect width="400" height="260" fill="url(#wdots)" />

      {/* Whiteboard */}
      <g filter="url(#ws1)">
        <rect x="60" y="30" width="240" height="150" rx="10" fill="white" />
        <rect x="60" y="30" width="240" height="8" rx="10" fill={B.purple} />
        <rect x="60" y="35" width="240" height="3" fill={B.purple} />
      </g>

      {/* Wireframe on board */}
      <rect x="76" y="50" width="100" height="70" rx="5" fill={B.purpleL} />
      <rect x="82" y="56" width="80" height="5" rx="2.5" fill={B.purple} fillOpacity="0.5" />
      <rect x="82" y="65" width="88" height="3" rx="1.5" fill={B.purple} fillOpacity="0.2" />
      <rect x="82" y="72" width="68" height="3" rx="1.5" fill={B.purple} fillOpacity="0.2" />
      <rect x="82" y="79" width="76" height="3" rx="1.5" fill={B.purple} fillOpacity="0.2" />
      <rect x="82" y="90" width="88" height="14" rx="7" fill={B.purple} fillOpacity="0.35" />
      <rect x="82" y="108" width="50" height="6" rx="3" fill={B.purple} fillOpacity="0.2" />

      {/* Sticky notes */}
      <rect x="190" y="46" width="48" height="46" rx="4" fill="#FCD34D" />
      <rect x="196" y="54" width="36" height="3" rx="1.5" fill="#92400E" fillOpacity="0.4" />
      <rect x="196" y="61" width="28" height="3" rx="1.5" fill="#92400E" fillOpacity="0.25" />
      <rect x="196" y="68" width="32" height="3" rx="1.5" fill="#92400E" fillOpacity="0.25" />
      <rect x="196" y="75" width="24" height="3" rx="1.5" fill="#92400E" fillOpacity="0.2" />
      <rect x="244" y="42" width="44" height="44" rx="4" fill={B.orange} fillOpacity="0.75" />
      <rect x="250" y="50" width="32" height="3" rx="1.5" fill="white" fillOpacity="0.65" />
      <rect x="250" y="57" width="24" height="3" rx="1.5" fill="white" fillOpacity="0.45" />
      <rect x="250" y="64" width="28" height="3" rx="1.5" fill="white" fillOpacity="0.45" />
      <rect x="190" y="100" width="46" height="46" rx="4" fill={B.purple} fillOpacity="0.5" />
      <rect x="196" y="108" width="34" height="3" rx="1.5" fill="white" fillOpacity="0.5" />
      <rect x="196" y="115" width="26" height="3" rx="1.5" fill="white" fillOpacity="0.35" />
      <rect x="244" y="94" width="44" height="44" rx="4" fill={B.emerald} fillOpacity="0.5" />
      <rect x="250" y="102" width="32" height="3" rx="1.5" fill="white" fillOpacity="0.5" />
      <rect x="250" y="109" width="24" height="3" rx="1.5" fill="white" fillOpacity="0.35" />

      {/* Journey map row */}
      <g filter="url(#ws1)">
        <rect x="76" y="130" width="208" height="40" rx="6" fill="white" fillOpacity="0.9" />
      </g>
      {[B.purple, B.blue, B.emerald, B.orange].map((c, i) => (
        <g key={i}>
          <circle cx={92 + i * 52} cy={150} r={11} fill={c} fillOpacity="0.75" />
          <text x={92 + i * 52} y={154} textAnchor="middle" fontFamily="Inter" fontSize="9" fill="white" fontWeight="700">{i + 1}</text>
          {i < 3 && <path d={`M ${103 + i * 52} 150 L ${121 + i * 52} 150`} stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 2" />}
        </g>
      ))}

      {/* People */}
      <circle cx="34" cy="130" r="16" fill={B.purple} fillOpacity="0.45" />
      <rect x="20" y="148" width="28" height="38" rx="7" fill={B.purple} fillOpacity="0.28" />
      <circle cx="366" cy="120" r="16" fill={B.blue} fillOpacity="0.45" />
      <rect x="352" y="138" width="28" height="38" rx="7" fill={B.blue} fillOpacity="0.28" />

      {/* Laptop */}
      <rect x="130" y="194" width="140" height="36" rx="5" fill="#1E293B" />
      <rect x="136" y="198" width="128" height="26" rx="3" fill="#334155" />
      <rect x="118" y="230" width="164" height="5" rx="2.5" fill="#0F172A" />

      {/* Floating card */}
      <g filter="url(#ws1)">
        <rect x="10" y="50" width="44" height="28" rx="5" fill="white" />
        <rect x="15" y="56" width="24" height="3.5" rx="1.5" fill={B.purple} />
        <rect x="15" y="63" width="34" height="3" rx="1.5" fill="#CBD5E1" />
        <rect x="15" y="69" width="22" height="3" rx="1.5" fill="#CBD5E1" />
      </g>
      <g filter="url(#ws1)">
        <rect x="346" y="170" width="44" height="28" rx="5" fill="white" />
        <rect x="351" y="176" width="24" height="3.5" rx="1.5" fill={B.emerald} />
        <rect x="351" y="183" width="34" height="3" rx="1.5" fill="#CBD5E1" />
        <rect x="351" y="189" width="22" height="3" rx="1.5" fill="#CBD5E1" />
      </g>
    </svg>
  );
}

function DesignSystemIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <pattern id="dsgrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke={B.blue} strokeWidth="0.55" strokeOpacity="0.22" />
        </pattern>
        <filter id="ds1">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={B.blue} floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="400" height="260" fill={B.blueLight} />
      <rect width="400" height="260" fill="url(#dsgrid)" />

      {/* Typography card */}
      <g filter="url(#ds1)">
        <rect x="20" y="24" width="160" height="100" rx="10" fill="white" />
      </g>
      <text x="36" y="58" fontFamily="Georgia, serif" fontSize="32" fontWeight="800" fill={B.blueDark}>Aa</text>
      <rect x="36" y="66" width="110" height="3" rx="1.5" fill={B.blue} fillOpacity="0.3" />
      <rect x="36" y="74" width="130" height="2.5" rx="1.2" fill="#CBD5E1" />
      <rect x="36" y="81" width="100" height="2.5" rx="1.2" fill="#CBD5E1" />
      <rect x="36" y="88" width="120" height="2.5" rx="1.2" fill="#CBD5E1" />
      <text x="36" y="106" fontFamily="Inter, sans-serif" fontSize="10" fill="#5B7082">Plus Jakarta Sans</text>
      <text x="36" y="118" fontFamily="Inter, sans-serif" fontSize="9" fill="#94A3B8">Display · Body · Mono</text>

      {/* Color swatches */}
      <g filter="url(#ds1)">
        <rect x="192" y="24" width="188" height="70" rx="10" fill="white" />
      </g>
      <text x="208" y="44" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#5B7082">COLOR TOKENS</text>
      {[B.blue, B.sky, B.emerald, B.orange, B.purple, B.coral].map((c, i) => (
        <g key={i}>
          <rect x={208 + i * 26} y="50" width="20" height="34" rx="5" fill={c} />
        </g>
      ))}

      {/* Components panel */}
      <g filter="url(#ds1)">
        <rect x="192" y="104" width="188" height="130" rx="10" fill="white" />
      </g>
      <text x="208" y="122" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#5B7082">COMPONENTS</text>
      <rect x="208" y="128" width="70" height="22" rx="11" fill={B.blue} />
      <rect x="286" y="128" width="70" height="22" rx="11" fill="none" stroke={B.blue} strokeWidth="1.5" />
      <rect x="208" y="158" width="148" height="18" rx="5" fill="#F1F5F9" />
      <rect x="213" y="163" width="50" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="350" y="160" width="10" height="14" rx="2" fill="#94A3B8" />
      {/* Icon grid */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={208 + (i % 8) * 20} y="184"
          width="14" height="14" rx="3"
          fill={[B.blueLight, B.emeraldL, B.orangeL, B.purpleL, B.coralL, B.skyL, B.blueLight, B.emeraldL][i]} />
      ))}
      {/* Token line */}
      <rect x="208" y="204" width="148" height="18" rx="5" fill="#F8FAFC" />
      <text x="213" y="216" fontFamily="'DM Mono', monospace" fontSize="7.5" fill={B.blue}>--color-primary: #005B9A</text>
      <rect x="208" y="226" width="148" height="4" rx="2" fill={B.blueLight} />

      {/* Spacing ruler */}
      <g filter="url(#ds1)">
        <rect x="20" y="134" width="160" height="100" rx="10" fill="white" />
      </g>
      <text x="36" y="152" fontFamily="Inter" fontSize="9" fontWeight="600" fill="#5B7082">SPACING SCALE</text>
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <line x1="36" y1={162 + i * 14} x2="164" y2={162 + i * 14} stroke="#F1F5F9" strokeWidth="1" />
          <rect x="36" y={156 + i * 14} width={[36, 54, 72, 48, 66][i]} height="10" rx="2.5"
            fill={[B.blue, B.emerald, B.purple, B.orange, B.blue][i]} fillOpacity="0.18" />
          <text x="36" y={165 + i * 14} fontFamily="DM Mono, monospace" fontSize="6.5" fill="#94A3B8">{["4", "8", "16", "24", "32"][i]}px</text>
        </g>
      ))}

      {/* Floating token chip */}
      <g filter="url(#ds1)">
        <rect x="6" y="198" width="56" height="18" rx="9" fill={B.blue} />
        <text x="34" y="210" textAnchor="middle" fontFamily="Inter" fontSize="7.5" fill="white" fontWeight="700">Tokens</text>
      </g>
    </svg>
  );
}

function CustomerAdvisorIllustration() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <pattern id="cadots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill={B.emerald} fillOpacity="0.12" />
        </pattern>
        <filter id="ca1">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={B.emerald} floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="400" height="260" fill={B.emeraldL} />
      <rect width="400" height="260" fill="url(#cadots)" />

      {/* Dashboard panel */}
      <g filter="url(#ca1)">
        <rect x="16" y="20" width="228" height="150" rx="10" fill="white" />
        <rect x="16" y="20" width="228" height="10" rx="10" fill={B.emerald} />
        <rect x="16" y="26" width="228" height="4" fill={B.emerald} />
      </g>

      {/* KPI chips */}
      <rect x="30" y="42" width="56" height="28" rx="7" fill={B.emeraldL} />
      <text x="58" y="52" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="800" fill={B.emerald}>94%</text>
      <text x="58" y="64" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="#5B7082">CSAT</text>
      <rect x="96" y="42" width="56" height="28" rx="7" fill={B.blueLight} />
      <text x="124" y="52" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="800" fill={B.blue}>+42%</text>
      <text x="124" y="64" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="#5B7082">Growth</text>
      <rect x="162" y="42" width="68" height="28" rx="7" fill={B.orangeL} />
      <text x="196" y="52" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="800" fill={B.orange}>12 min</text>
      <text x="196" y="64" textAnchor="middle" fontFamily="Inter" fontSize="7" fill="#5B7082">Response</text>

      {/* Bar chart */}
      {[65, 85, 55, 100, 78, 90].map((h, i) => (
        <g key={i}>
          <rect x={30 + i * 32} y={150 - h * 0.5} width="22" height={h * 0.5}
            rx="3" fill={i === 3 ? B.emerald : B.blue}
            fillOpacity={i === 3 ? 0.85 : 0.25} />
        </g>
      ))}
      <line x1="26" y1="150" x2="236" y2="150" stroke="#E2E8F0" strokeWidth="1" />

      {/* Chat bubbles */}
      <g filter="url(#ca1)">
        <rect x="256" y="20" width="130" height="46" rx="10" fill={B.emerald} />
        <path d="M 256 55 L 244 64 L 262 60 Z" fill={B.emerald} />
      </g>
      <rect x="268" y="30" width="100" height="4" rx="2" fill="white" fillOpacity="0.75" />
      <rect x="268" y="39" width="78" height="3.5" rx="1.5" fill="white" fillOpacity="0.5" />
      <rect x="268" y="47" width="88" height="3.5" rx="1.5" fill="white" fillOpacity="0.4" />

      <g filter="url(#ca1)">
        <rect x="256" y="82" width="130" height="46" rx="10" fill="white" />
        <path d="M 386 108 L 398 118 L 382 113 Z" fill="white" />
      </g>
      <rect x="268" y="92" width="100" height="4" rx="2" fill={B.blue} fillOpacity="0.5" />
      <rect x="268" y="101" width="78" height="3.5" rx="1.5" fill="#CBD5E1" />
      <rect x="268" y="109" width="88" height="3.5" rx="1.5" fill="#CBD5E1" />

      <g filter="url(#ca1)">
        <rect x="256" y="144" width="130" height="46" rx="10" fill={B.blueLight} />
        <path d="M 256 180 L 244 188 L 262 184 Z" fill={B.blueLight} />
      </g>
      <rect x="268" y="154" width="90" height="4" rx="2" fill={B.blue} fillOpacity="0.5" />
      <rect x="268" y="163" width="70" height="3.5" rx="1.5" fill={B.blue} fillOpacity="0.3" />
      <rect x="268" y="171" width="80" height="3.5" rx="1.5" fill={B.blue} fillOpacity="0.25" />

      {/* Journey timeline */}
      <g filter="url(#ca1)">
        <rect x="16" y="180" width="368" height="60" rx="10" fill="white" />
      </g>
      {["Discover", "Define", "Design", "Deliver"].map((label, i) => (
        <g key={i}>
          <circle cx={56 + i * 92} cy={210} r={14}
            fill={[B.emerald, B.blue, B.purple, B.orange][i]} fillOpacity="0.82" />
          <text x={56 + i * 92} y={214} textAnchor="middle" fontFamily="Inter" fontSize="8" fill="white" fontWeight="700">{label[0]}</text>
          <text x={56 + i * 92} y={228} textAnchor="middle" fontFamily="Inter" fontSize="7.5" fill="#5B7082">{label}</text>
          {i < 3 && <path d={`M ${70 + i * 92} 210 L ${98 + i * 92} 210`} stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 2" />}
        </g>
      ))}

      {/* Person */}
      <circle cx="344" cy="120" r="18" fill={B.emerald} fillOpacity="0.38" />
      <rect x="328" y="140" width="32" height="36" rx="8" fill={B.emerald} fillOpacity="0.22" />
    </svg>
  );
}

function ProductPortfolioIllustration() {
  const labels = ["Analytics", "Platform", "Insights", "Composer", "DataOps", "CloudHub"];
  const colors = [B.blue, B.emerald, B.orange, B.purple, B.coral, B.sky];
  const lightColors = [B.blueLight, B.emeraldL, B.orangeL, B.purpleL, B.coralL, B.skyL];

  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <pattern id="ppdots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill={B.orange} fillOpacity="0.12" />
        </pattern>
        <filter id="pp1">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={B.orange} floodOpacity="0.1" />
        </filter>
      </defs>
      <rect width="400" height="260" fill={B.orangeL} />
      <rect width="400" height="260" fill="url(#ppdots)" />

      {labels.map((label, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 18 + col * 124;
        const y = 16 + row * 116;
        return (
          <g key={i} filter="url(#pp1)">
            <rect x={x} y={y} width="110" height="100" rx="10" fill="white" />
            <rect x={x} y={y} width="110" height="36" rx="10" fill={lightColors[i]} />
            <rect x={x} y={y + 26} width="110" height="10" fill={lightColors[i]} />
            <circle cx={x + 55} cy={y + 18} r="13" fill={colors[i]} fillOpacity="0.82" />
            <text x={x + 55} y={y + 23} textAnchor="middle" fontFamily="Inter" fontSize="9" fill="white" fontWeight="700">{label[0]}</text>
            <rect x={x + 10} y={y + 44} width="90" height="5" rx="2.5" fill={colors[i]} fillOpacity="0.45" />
            <rect x={x + 10} y={y + 54} width="66" height="3.5" rx="1.5" fill="#CBD5E1" />
            <rect x={x + 10} y={y + 61} width="80" height="3.5" rx="1.5" fill="#CBD5E1" />
            <rect x={x + 10} y={y + 68} width="56" height="3.5" rx="1.5" fill="#CBD5E1" />
            <rect x={x + 10} y={y + 80} width="90" height="12" rx="6" fill={colors[i]} fillOpacity="0.15" />
            <text x={x + 55} y={y + 89} textAnchor="middle" fontFamily="Inter" fontSize="7.5" fill={colors[i]} fontWeight="600">{label}</text>
          </g>
        );
      })}

      {/* Connector lines between cards */}
      <line x1="128" y1="66" x2="142" y2="66" stroke={B.orange} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
      <line x1="252" y1="66" x2="266" y2="66" stroke={B.orange} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
      <line x1="73" y1="116" x2="73" y2="132" stroke={B.orange} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
      <line x1="197" y1="116" x2="197" y2="132" stroke={B.orange} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
      <line x1="321" y1="116" x2="321" y2="132" stroke={B.orange} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />

      {/* Bottom pill */}
      <g filter="url(#pp1)">
        <rect x="130" y="236" width="140" height="22" rx="11" fill={B.orange} />
        <text x="200" y="251" textAnchor="middle" fontFamily="Inter" fontSize="9" fill="white" fontWeight="700">18 Products Connected</text>
      </g>
    </svg>
  );
}

// ─── Hero illustration ────────────────────────────────────────
function HeroIllustration() {
  return (
    <svg viewBox="0 0 700 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <pattern id="heroGrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke={B.blue} strokeWidth="0.55" strokeOpacity="0.18" />
        </pattern>
        <radialGradient id="heroBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#EBF5FD" />
          <stop offset="100%" stopColor="#F7FAFD" />
        </radialGradient>
        <filter id="hf1">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor={B.blue} floodOpacity="0.10" />
        </filter>
        <filter id="hf2">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor={B.blue} floodOpacity="0.10" />
        </filter>
      </defs>
      <rect width="700" height="440" rx="24" fill="url(#heroBg)" />
      <rect width="700" height="440" rx="24" fill="url(#heroGrid)" />

      {/* Background blobs */}
      <circle cx="580" cy="80" r="120" fill={B.blueLight} fillOpacity="0.55" />
      <circle cx="100" cy="360" r="90" fill={B.purpleL} fillOpacity="0.4" />
      <circle cx="650" cy="360" r="70" fill={B.orangeL} fillOpacity="0.4" />

      {/* Central hub ring */}
      <circle cx="350" cy="220" r="70" fill="none" stroke={B.blue} strokeWidth="1" strokeOpacity="0.18" strokeDasharray="6 4" />
      <circle cx="350" cy="220" r="46" fill="white" opacity="0.9" filter="url(#hf1)" />
      <text x="350" y="214" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="800" fill={B.blueDark}>HBK</text>
      <text x="350" y="228" textAnchor="middle" fontFamily="Inter" fontSize="8" fill="#5B7082">Experience Hub</text>

      {/* Node: Workshop */}
      <g filter="url(#hf1)">
        <rect x="60" y="70" width="170" height="120" rx="12" fill="white" />
        <rect x="60" y="70" width="170" height="8" rx="12" fill={B.purple} />
        <rect x="60" y="75" width="170" height="3" fill={B.purple} />
      </g>
      <rect x="76" y="92" width="66" height="48" rx="6" fill={B.purpleL} />
      <rect x="82" y="98" width="52" height="4" rx="2" fill={B.purple} fillOpacity="0.5" />
      <rect x="82" y="106" width="58" height="3" rx="1.5" fill={B.purple} fillOpacity="0.2" />
      <rect x="82" y="112" width="44" height="3" rx="1.5" fill={B.purple} fillOpacity="0.2" />
      <rect x="82" y="122" width="58" height="10" rx="5" fill={B.purple} fillOpacity="0.3" />
      <rect x="150" y="90" width="28" height="28" rx="3" fill="#FCD34D" />
      <rect x="182" y="86" width="34" height="28" rx="3" fill={B.orange} fillOpacity="0.7" />
      <rect x="150" y="122" width="66" height="18" rx="4" fill={B.purpleL} />
      <text x="76" y="162" fontFamily="Inter" fontSize="9" fontWeight="700" fill={B.blueDark}>Design Workshop</text>
      <text x="76" y="175" fontFamily="Inter" fontSize="7.5" fill="#5B7082">Collaborate · Ideate</text>

      {/* Node: Design System */}
      <g filter="url(#hf1)">
        <rect x="466" y="70" width="170" height="120" rx="12" fill="white" />
        <rect x="466" y="70" width="170" height="8" rx="12" fill={B.blue} />
        <rect x="466" y="75" width="170" height="3" fill={B.blue} />
      </g>
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={482 + (i%3)*44} y={92 + Math.floor(i/3)*28} width="36" height="20" rx="4"
          fill={[B.blueLight, B.emeraldL, B.purpleL, B.orangeL, B.coralL, B.skyL][i]} />
      ))}
      <rect x="482" y="96" width="36" height="4" rx="2" fill={B.blue} fillOpacity="0.5" />
      <rect x="526" y="96" width="20" height="8" rx="4" fill={B.emerald} />
      <rect x="570" y="96" width="36" height="8" rx="4" fill={B.purple} fillOpacity="0.55" />
      <text x="482" y="162" fontFamily="Inter" fontSize="9" fontWeight="700" fill={B.blueDark}>Design System</text>
      <text x="482" y="175" fontFamily="Inter" fontSize="7.5" fill="#5B7082">Components · Tokens</text>

      {/* Node: Customer Advisor */}
      <g filter="url(#hf1)">
        <rect x="60" y="280" width="170" height="120" rx="12" fill="white" />
        <rect x="60" y="280" width="170" height="8" rx="12" fill={B.emerald} />
        <rect x="60" y="285" width="170" height="3" fill={B.emerald} />
      </g>
      <rect x="76" y="302" width="144" height="64" rx="6" fill={B.emeraldL} />
      {[65,80,50,95,70,88].map((h, i) => (
        <rect key={i} x={80 + i * 22} y={358 - h * 0.4} width="16" height={h * 0.4}
          rx="2.5" fill={i===3 ? B.emerald : B.blue} fillOpacity={i===3 ? 0.8 : 0.3} />
      ))}
      <line x1="76" y1="358" x2="220" y2="358" stroke="#E2E8F0" strokeWidth="1" />
      <text x="76" y="378" fontFamily="Inter" fontSize="9" fontWeight="700" fill={B.blueDark}>Customer Advisor</text>
      <text x="76" y="391" fontFamily="Inter" fontSize="7.5" fill="#5B7082">Research · Guidance</text>

      {/* Node: Product Portfolio */}
      <g filter="url(#hf1)">
        <rect x="466" y="280" width="170" height="120" rx="12" fill="white" />
        <rect x="466" y="280" width="170" height="8" rx="12" fill={B.orange} />
        <rect x="466" y="285" width="170" height="3" fill={B.orange} />
      </g>
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={482 + i*52} y={302} width="44" height="64" rx="6"
            fill={[B.orangeL, B.blueLight, B.emeraldL][i]} />
          <rect x={488 + i*52} y={310} width="32" height="4" rx="2"
            fill={[B.orange, B.blue, B.emerald][i]} fillOpacity="0.65" />
          <rect x={488 + i*52} y={318} width="22" height="3" rx="1.5" fill="#CBD5E1" />
          <rect x={488 + i*52} y={324} width="28" height="3" rx="1.5" fill="#CBD5E1" />
          <rect x={488 + i*52} y={350} width="32" height="10" rx="5"
            fill={[B.orange, B.blue, B.emerald][i]} fillOpacity="0.2" />
        </g>
      ))}
      <text x="482" y="378" fontFamily="Inter" fontSize="9" fontWeight="700" fill={B.blueDark}>Product Portfolio</text>
      <text x="482" y="391" fontFamily="Inter" fontSize="7.5" fill="#5B7082">Ecosystem · Solutions</text>

      {/* Connector paths from hub to each node */}
      <path d="M 280 195 C 240 175 200 165 150 165" stroke={B.purple} strokeWidth="1.5" strokeOpacity="0.3" fill="none" strokeDasharray="5 4" />
      <path d="M 420 195 C 460 175 510 165 550 155" stroke={B.blue} strokeWidth="1.5" strokeOpacity="0.3" fill="none" strokeDasharray="5 4" />
      <path d="M 280 245 C 240 265 200 275 150 305" stroke={B.emerald} strokeWidth="1.5" strokeOpacity="0.3" fill="none" strokeDasharray="5 4" />
      <path d="M 420 245 C 460 265 510 275 548 305" stroke={B.orange} strokeWidth="1.5" strokeOpacity="0.3" fill="none" strokeDasharray="5 4" />

      {/* Floating accent dots */}
      <circle cx="350" cy="44" r="5" fill={B.blue} fillOpacity="0.18" />
      <circle cx="350" cy="396" r="5" fill={B.blue} fillOpacity="0.18" />
      <circle cx="36" cy="220" r="5" fill={B.purple} fillOpacity="0.2" />
      <circle cx="664" cy="220" r="5" fill={B.orange} fillOpacity="0.2" />
    </svg>
  );
}

// ─── Top navigation ───────────────────────────────────────────
const navLinks = ["Design Workshop", "Design System", "Customer Advisor", "Products", "Resources"];

function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe9f2] bg-white px-8 max-[520px]:px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[88px] items-center gap-4 md:h-[68px] lg:gap-7 xl:gap-[42px]">
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-4 max-[520px]:gap-3 md:gap-[17px]">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[16px] text-[22px] font-extrabold text-white max-[520px]:h-11 max-[520px]:w-11 max-[520px]:rounded-[14px] max-[520px]:text-lg md:h-[40px] md:w-[40px] md:rounded-[13px] md:text-[17px]"
              style={{ background: "#0071BC" }}>
              H
            </div>
            <div className="leading-tight">
              <div className="text-[19px] font-extrabold tracking-tight text-[#122033] max-[520px]:text-[17px] md:text-[16px]">HBK</div>
              <div className="mt-[2px] text-[14px] font-normal text-[#607487] max-[520px]:mt-[1px] max-[520px]:text-xs md:text-[12px]">Experience Hub</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden min-w-0 flex-1 items-center gap-5 lg:flex xl:gap-[28px]">
            {navLinks.map(link => {
              if (link === "Design System") {
                return (
                  <Link key={link} to="/design-system" className="whitespace-nowrap text-[14px] font-bold leading-none text-[#5d7184] transition-colors hover:text-[#122033] xl:text-[15px]">
                    {link}
                  </Link>
                );
              }
              return (
                <button key={link}
                  className="whitespace-nowrap text-[14px] font-bold leading-none text-[#5d7184] transition-colors hover:text-[#122033] xl:text-[15px]">
                  {link}
                </button>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-[12px]">
            {/* Search */}
            <div className="hidden h-[36px] w-[132px] cursor-pointer items-center gap-[7px] rounded-[16px] bg-[#eef3f9] px-[12px] text-[13px] font-normal leading-none text-[#607487] transition-colors hover:bg-[#e7edf5] xl:flex">
              <Search size={14} strokeWidth={2.1} className="shrink-0 text-[#607487]" />
              <span className="min-w-0 flex-1 truncate">Search...</span>
              <kbd className="flex h-[18px] min-w-[28px] items-center justify-center rounded-[5px] border border-[#d8e1ea] bg-white px-[5px] font-sans text-[10px] font-semibold leading-none tracking-normal text-[#607487] shadow-[0_1px_2px_rgba(15,31,45,0.08)]">⌘K</kbd>
            </div>
            <button
              className="hidden h-[42px] min-w-[112px] items-center justify-center rounded-[15px] border-[2px] border-[#d3dfeb] bg-white px-[18px] text-[14px] font-extrabold leading-none text-[#122033] transition-colors hover:bg-[#f8fbfd] xl:flex">
              Resources
            </button>
            <button
              className="flex h-[52px] min-w-[156px] items-center justify-center rounded-[16px] px-6 text-[18px] font-extrabold leading-none text-white shadow-[0_8px_16px_rgba(0,91,154,0.18)] transition-all hover:opacity-90 max-[520px]:h-11 max-[520px]:min-w-[132px] max-[520px]:rounded-[14px] max-[520px]:px-4 max-[520px]:text-[15px] md:h-[42px] md:min-w-[126px] md:rounded-[15px] md:px-[20px] md:text-[14px]"
              style={{ background: "#0071BC" }}>
              Get Started
            </button>
            <button className="lg:hidden text-muted-foreground" onClick={() => setMobileOpen(v => !v)}>
              {mobileOpen ? <X size={28} className="max-[520px]:size-6" /> : <Menu size={28} className="max-[520px]:size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[#dbe6f0] pb-9 pt-8 lg:hidden max-[520px]:py-4">
            {navLinks.map(link => {
              if (link === "Design System") {
                return (
                  <Link key={link} to="/design-system" className="block w-full rounded-lg px-4 py-4 text-left text-[16px] font-medium leading-none text-[#607487] transition-colors hover:bg-muted hover:text-foreground max-[520px]:px-2 max-[520px]:py-3.5 max-[520px]:text-[15px]">
                    {link}
                  </Link>
                );
              }
              return (
                <button key={link} className="w-full rounded-lg px-4 py-4 text-left text-[16px] font-medium leading-none text-[#607487] transition-colors hover:bg-muted hover:text-foreground max-[520px]:px-2 max-[520px]:py-3.5 max-[520px]:text-[15px]">
                  {link}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Journey timeline ─────────────────────────────────────────
const journeySteps = [
  { label: "Workshop", desc: "Collaborative ideation and design thinking sessions", color: B.purple, icon: <Lightbulb size={22} /> },
  { label: "Research", desc: "User insights, data analysis, advisory findings", color: B.blue, icon: <Search size={22} /> },
  { label: "Design", desc: "Component creation, prototyping, system definition", color: B.emerald, icon: <Layers size={22} /> },
  { label: "Delivery", desc: "Launch, iterate, and scale across the portfolio", color: B.orange, icon: <Package size={22} /> },
];

// ─── Resource cards ───────────────────────────────────────────
const resources = [
  { title: "Figma Library", tag: "Design", type: "FIGMA", color: B.purple, bg: B.purpleL, icon: <Layers size={20} /> },
  { title: "Design Tokens", tag: "System", type: "JSON", color: B.blue, bg: B.blueLight, icon: <FileText size={20} /> },
  { title: "Workshop Templates", tag: "Workshop", type: "PPTX", color: B.orange, bg: B.orangeL, icon: <BookOpen size={20} /> },
  { title: "Research Toolkit", tag: "Research", type: "PDF", color: B.emerald, bg: B.emeraldL, icon: <Search size={20} /> },
  { title: "UI Components", tag: "System", type: "NPM", color: B.sky, bg: B.skyL, icon: <Package size={20} /> },
  { title: "Icons Library", tag: "Assets", type: "SVG", color: B.coral, bg: B.coralL, icon: <Star size={20} /> },
];

// ─── Workshop registration form ───────────────────────────────
const workshopOptions = [
  "Design Thinking Intensive",
  "UX Research Methods",
  "Product Discovery Sprint",
  "Design System Foundations",
  "Journey Mapping Masterclass",
  "Prototyping & Validation",
];

const roleOptions = ["Designer", "Developer", "Product Manager", "Researcher", "Strategist", "Other"];

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", role: "", workshop: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
          style={{ background: B.emeraldL }}>
          <CheckCircle size={36} style={{ color: B.emerald }} />
        </div>
        <h3 className="text-2xl font-extrabold text-foreground mb-2" style={{ letterSpacing: "-0.01em" }}>
          Registration Received!
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
          Thank you, <strong>{form.name}</strong>. We've received your registration for
          <strong> {form.workshop || "the workshop"}</strong> and will be in touch shortly at {form.email}.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold px-6 py-2.5 rounded-xl text-white"
          style={{ background: B.blue }}>
          Register for Another
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-muted rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 transition-all";
  const inputStyle = { "--tw-ring-color": B.blue + "40" } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
      {/* Name */}
      <div className="relative">
        <UserCircle size={15} className="absolute left-3.5 top-3.5 text-muted-foreground" />
        <input
          required
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={set("name")}
          className={inputClass + " pl-10"}
          style={inputStyle}
        />
      </div>
      {/* Email */}
      <div className="relative">
        <Mail size={15} className="absolute left-3.5 top-3.5 text-muted-foreground" />
        <input
          required
          type="email"
          placeholder="Work Email"
          value={form.email}
          onChange={set("email")}
          className={inputClass + " pl-10"}
          style={inputStyle}
        />
      </div>
      {/* Company */}
      <div className="relative">
        <Building2 size={15} className="absolute left-3.5 top-3.5 text-muted-foreground" />
        <input
          required
          type="text"
          placeholder="Company / Organization"
          value={form.company}
          onChange={set("company")}
          className={inputClass + " pl-10"}
          style={inputStyle}
        />
      </div>
      {/* Role */}
      <div className="relative">
        <ChevronDown size={15} className="absolute right-3.5 top-3.5 text-muted-foreground pointer-events-none" />
        <select
          required
          value={form.role}
          onChange={set("role")}
          className={inputClass + " appearance-none cursor-pointer"}
          style={{ ...inputStyle, color: form.role ? undefined : "#5B7082" }}
        >
          <option value="" disabled>Select Your Role</option>
          {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      {/* Workshop */}
      <div className="md:col-span-2 relative">
        <Calendar size={15} className="absolute left-3.5 top-3.5 text-muted-foreground" />
        <ChevronDown size={15} className="absolute right-3.5 top-3.5 text-muted-foreground pointer-events-none" />
        <select
          required
          value={form.workshop}
          onChange={set("workshop")}
          className={inputClass + " pl-10 appearance-none cursor-pointer"}
          style={{ ...inputStyle, color: form.workshop ? undefined : "#5B7082" }}
        >
          <option value="" disabled>Select a Workshop</option>
          {workshopOptions.map(w => <option key={w} value={w}>{w}</option>)}
        </select>
      </div>
      {/* Message */}
      <div className="md:col-span-2">
        <textarea
          placeholder="Tell us about your team, goals, or any specific topics you'd like covered… (optional)"
          value={form.message}
          onChange={set("message")}
          rows={4}
          className={inputClass + " resize-none"}
          style={inputStyle}
        />
      </div>
      {/* Submit */}
      <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-3 mt-2">
        <button
          type="submit"
          className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-bold px-8 py-3.5 rounded-xl text-white transition-all hover:opacity-90 hover:shadow-xl"
          style={{ background: B.blue, boxShadow: `0 6px 20px ${B.blue}40` }}
        >
          <Send size={15} />
          Register Now
        </button>
        <p className="text-xs text-muted-foreground text-center">
          By registering you agree to HBK's privacy policy. No spam, ever.
        </p>
      </div>
    </form>
  );
}

// ─── Stats ────────────────────────────────────────────────────
const stats = [
  { value: "120+", label: "Design Components", color: B.blue, bg: B.blueLight },
  { value: "45+", label: "Workshops Delivered", color: B.emerald, bg: B.emeraldL },
  { value: "300+", label: "Assets Available", color: B.purple, bg: B.purpleL },
  { value: "18", label: "Products in Portfolio", color: B.orange, bg: B.orangeL },
];

// ─── Testimonials ─────────────────────────────────────────────
const testimonials = [
  { quote: "The HBK Experience Hub transformed how our team approaches product design. Everything we need is in one unified place.", name: "Sarah Chen", role: "Senior Product Designer", initials: "SC", color: B.purple },
  { quote: "The design system documentation is outstanding. Our team shipped consistent UI twice as fast after adopting it.", name: "Marcus Rivera", role: "Lead Frontend Engineer", initials: "MR", color: B.emerald },
  { quote: "Customer advisory sessions backed by the design research toolkit gave us exactly the strategic clarity we needed.", name: "Priya Nair", role: "Customer Success Manager", initials: "PN", color: B.orange },
];

// ─── Benefits ─────────────────────────────────────────────────
const benefits = [
  { title: "Reusable Assets", desc: "Build once, deploy everywhere. Every component and template designed for reuse.", icon: <Layers size={30} />, color: B.blue, bg: B.blueLight },
  { title: "Consistency", desc: "Unified design language ensuring every HBK touchpoint feels cohesive.", icon: <CheckCircle size={30} />, color: B.emerald, bg: B.emeraldL },
  { title: "Collaboration", desc: "Break silos between design, development, and product with shared vocabulary.", icon: <Users size={30} />, color: B.purple, bg: B.purpleL },
  { title: "Scalable", desc: "An architecture built to grow — add teams and products without sacrificing quality.", icon: <Zap size={30} />, color: B.orange, bg: B.orangeL },
];

// ─── Main ─────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      <TopNav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 sm:px-6 md:px-10">
        {/* Soft background gradient */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 60% at 60% 40%, ${B.blueLight} 0%, transparent 70%)` }} />

        <div className="relative z-10 mx-auto max-w-7xl pb-12 pt-8 md:py-16 lg:pt-[72px] lg:pb-12">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,520px)_1fr] xl:grid-cols-[560px_1fr]">
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full px-4 py-2.5 text-[clamp(13px,3.6vw,16px)] font-extrabold leading-none md:mb-6 md:px-4 md:py-1.5 md:text-xs md:font-semibold"
                style={{ background: B.blueLight, color: B.blue }}>
                <Globe size={18} className="shrink-0 md:size-3" />
                <span className="truncate">Unified Design Ecosystem · v2.4</span>
              </div>

              <h1 className="mb-8 text-[clamp(44px,12.5vw,58px)] font-extrabold leading-[1.08] md:mb-5 md:text-6xl"
                style={{ color: B.blueDark, letterSpacing: "-0.03em" }}>
                HBK<br />
                <span style={{ color: B.blue }}>Experience</span><br />
                Hub
              </h1>

              <p className="mb-10 max-w-[620px] text-[clamp(16px,4.2vw,19px)] font-normal leading-[1.5] text-[#607487] md:mb-8 md:max-w-lg md:text-lg md:leading-relaxed">
                Explore our complete design ecosystem — from collaborative workshops and reusable design systems
                to customer advisory services and product portfolio — all in one unified experience.
              </p>

              <div className="mb-[64px] flex flex-col items-start gap-[22px] max-[520px]:mb-10 max-[520px]:gap-4 md:mb-10 md:flex-row md:flex-wrap md:gap-3">
                <button className="flex h-[64px] w-[250px] max-w-full items-center justify-center gap-[18px] rounded-[24px] px-6 text-[20px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl max-[520px]:h-14 max-[520px]:w-[220px] max-[520px]:gap-4 max-[520px]:rounded-[22px] max-[520px]:text-[18px] md:h-auto md:w-auto md:gap-2.5 md:rounded-2xl md:px-7 md:py-3.5 md:text-sm md:font-bold"
                  style={{ background: B.blue, boxShadow: `0 6px 20px ${B.blue}40` }}>
                  Explore Hub
                  <ArrowRight size={22} className="max-[520px]:size-5 md:size-4" />
                </button>
                <button className="flex h-[70px] w-[300px] max-w-full items-center justify-center gap-[16px] rounded-[24px] border-[3px] px-6 text-[20px] font-extrabold text-foreground transition-all duration-200 hover:bg-muted max-[520px]:h-14 max-[520px]:w-[270px] max-[520px]:gap-4 max-[520px]:rounded-[22px] max-[520px]:border-2 max-[520px]:text-[18px] md:h-auto md:w-auto md:gap-2.5 md:rounded-2xl md:border-2 md:px-7 md:py-3.5 md:text-sm md:font-bold"
                  style={{ borderColor: B.blue + "35" }}>
                  View Resources
                  <ExternalLink size={21} className="max-[520px]:size-[19px] md:size-[14px]" />
                </button>
              </div>

              {/* Quick stats */}
              <div className="grid w-full max-w-[560px] grid-cols-3 gap-[42px] max-[520px]:gap-4 md:flex md:flex-wrap md:gap-8">
                {[["120+", "Components"], ["45+", "Workshops"], ["18", "Products"]].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-[48px] font-extrabold leading-none max-[520px]:text-3xl md:text-2xl" style={{ color: B.blue, letterSpacing: "-0.02em" }}>{v}</div>
                    <div className="mt-[10px] text-[26px] leading-none text-muted-foreground max-[520px]:text-sm md:mt-0 md:text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero illustration */}
            <div className="relative hidden md:block">
              <div className="mx-auto aspect-[700/440] w-full max-w-[700px] overflow-hidden rounded-2xl md:rounded-3xl lg:ml-auto" style={{ boxShadow: `0 32px 80px ${B.blue}18` }}>
                <HeroIllustration />
              </div>
              {/* Floating chips */}
              <div className="absolute -left-5 top-12 hidden xl:flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 text-xs font-bold shadow-xl"
                style={{ color: B.purple, border: `1px solid ${B.purple}18` }}>
                <Lightbulb size={13} style={{ color: B.purple }} /> Design Workshop
              </div>
              <div className="absolute -right-5 bottom-16 hidden xl:flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 text-xs font-bold shadow-xl"
                style={{ color: B.orange, border: `1px solid ${B.orange}18` }}>
                <Package size={13} style={{ color: B.orange }} /> Product Portfolio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four category cards ───────────────────────────────── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-end justify-between md:mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: B.blue }}>Core Areas</div>
              <h2 className="text-2xl font-extrabold text-foreground md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
                Explore the Ecosystem
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-1.5 text-sm font-bold" style={{ color: B.blue }}>
              View all <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {[
              { title: "Design Workshop", desc: "Facilitate collaborative workshops, design thinking sessions, ideation, user journeys and product discovery.", Illustration: WorkshopIllustration, color: B.purple, bg: B.purpleL, tag: "Workshop" },
              { title: "Design System", desc: "Access reusable foundations, components, design tokens, documentation and Figma libraries.", Illustration: DesignSystemIllustration, color: B.blue, bg: B.blueLight, tag: "System" },
              { title: "Customer Advisor", desc: "Deliver strategic customer guidance using research insights, design recommendations and domain expertise.", Illustration: CustomerAdvisorIllustration, color: B.emerald, bg: B.emeraldL, tag: "Advisory" },
              { title: "Product Portfolio", desc: "Discover HBK's complete product ecosystem, capabilities, solutions and digital platforms.", Illustration: ProductPortfolioIllustration, color: B.orange, bg: B.orangeL, tag: "Portfolio" },
            ].map(({ title, desc, Illustration, color, bg, tag }) => (
              <div key={title}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 md:rounded-3xl"
                style={{ border: `1.5px solid ${color}18`, boxShadow: `0 2px 16px ${color}0C` }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 48px ${color}22`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 2px 16px ${color}0C`; }}
              >
                {/* Illustration — 58% height */}
                <div className="h-[170px] overflow-hidden transition-transform duration-500 group-hover:scale-[1.03] md:h-[200px]"
                  style={{ background: bg }}>
                  <Illustration />
                </div>
                {/* Card body */}
                <div className="p-5 md:p-6">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3"
                    style={{ background: bg, color }}>
                    {tag}
                  </span>
                  <h3 className="font-extrabold text-base text-foreground mb-2" style={{ letterSpacing: "-0.01em" }}>
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-bold transition-colors" style={{ color }}>
                    Explore
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience Journey ────────────────────────────────── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16"
        style={{ background: `linear-gradient(135deg, #F0F7FF 0%, #F7FAFD 60%, #EEF5FB 100%)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:mb-12">
            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: B.blue }}>Process</div>
            <h2 className="mb-3 text-2xl font-extrabold text-foreground md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
              The Experience Journey
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              From initial workshop to product delivery — a connected process that transforms ideas into impactful digital products.
            </p>
          </div>

          <div className="relative">
            {/* Connector */}
            <div className="absolute top-11 left-0 right-0 h-px hidden lg:block mx-auto"
              style={{ maxWidth: "72%", background: `linear-gradient(to right, ${B.purple}, ${B.blue}, ${B.emerald}, ${B.orange})`, opacity: 0.25 }} />

            <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              {journeySteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl md:h-[88px] md:w-[88px]"
                    style={{ background: step.color, color: "white", boxShadow: `0 8px 24px ${step.color}30` }}>
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-foreground mb-1.5">{step.label}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{step.desc}</div>
                  <div className="mt-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold"
                    style={{ background: step.color }}>
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Join a Workshop – Registration Form ───────────────── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-20" id="register">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            {/* Left: content + illustration */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: B.purple }}>
                Workshop Registration
              </div>
              <h2 className="mb-4 text-2xl font-extrabold text-foreground md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
                Join a Workshop
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                Participate in hands-on design thinking workshops led by HBK experts. Learn methodologies, build skills,
                and create real outcomes with your team.
              </p>

              {/* Workshop highlights */}
              <div className="space-y-4 mb-8">
                {[
                  { title: "Expert-led sessions", desc: "Facilitated by senior HBK designers and strategists", icon: <Star size={16} />, color: B.purple },
                  { title: "Hands-on outcomes", desc: "Walk away with artifacts, prototypes, and clear next steps", icon: <CheckCircle size={16} />, color: B.emerald },
                  { title: "Flexible formats", desc: "Half-day, full-day, and multi-day sprint options available", icon: <Calendar size={16} />, color: B.blue },
                  { title: "Cross-team collaboration", desc: "Designed for mixed teams of designers, devs, and PMs", icon: <Users size={16} />, color: B.orange },
                ].map(h => (
                  <div key={h.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: h.color + "18", color: h.color }}>
                      {h.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{h.title}</div>
                      <div className="text-xs text-muted-foreground">{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini workshop illustration */}
              <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${B.purple}18`, boxShadow: `0 8px 32px ${B.purple}10` }}>
                <WorkshopIllustration />
              </div>
            </div>

            {/* Right: form card */}
              <div className="rounded-2xl bg-white p-5 sm:p-7 md:rounded-3xl md:p-10" style={{ boxShadow: `0 16px 56px ${B.blue}10`, border: `1.5px solid ${B.blue}12` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: B.blueLight }}>
                  <Calendar size={18} style={{ color: B.blue }} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-foreground">Register for a Workshop</h3>
                  <p className="text-xs text-muted-foreground">Spots are limited — secure yours today</p>
                </div>
              </div>

              {/* Upcoming pill */}
              <div className="flex items-center gap-2 p-3 rounded-xl mb-6"
                style={{ background: B.emeraldL, border: `1px solid ${B.emerald}20` }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: B.emerald }} />
                <span className="text-xs font-semibold" style={{ color: B.emerald }}>
                  Next session: Design Thinking Intensive · Aug 14, 2025
                </span>
              </div>

              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Resources ────────────────────────────────── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:py-[92px]"
        style={{ background: `linear-gradient(180deg, #F7FAFD 0%, #EEF3F8 100%)` }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between md:mb-[54px]">
            <div>
              <div className="mb-[10px] text-[13px] font-extrabold uppercase leading-none tracking-[0.18em]" style={{ color: B.blue }}>Downloads</div>
              <h2 className="text-2xl font-extrabold leading-tight text-[#122033] md:text-[38px] md:leading-none" style={{ letterSpacing: "-0.02em" }}>
                Featured Resources
              </h2>
            </div>
            <button className="hidden items-center gap-[10px] text-[15px] font-extrabold leading-none md:flex" style={{ color: B.blue }}>
              All resources <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-[28px]">
            {resources.map(res => (
              <div key={res.title}
                className="group flex min-h-[220px] cursor-pointer flex-col rounded-[18px] border border-[#dbe6f0] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-transparent sm:p-6 md:min-h-[250px] xl:min-h-[265px] xl:p-[31px]"
                style={{ boxShadow: "0 2px 12px rgba(15, 31, 45, 0.05)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 36px ${res.color}16`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(15, 31, 45, 0.05)"; }}
              >
                <div className="mb-5 flex items-start justify-between md:mb-[26px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] md:h-[57px] md:w-[57px] md:rounded-[17px]"
                    style={{ background: res.bg, color: res.color }}>
                    {res.icon}
                  </div>
                  <span className="rounded-[6px] px-[10px] py-[6px] text-[11px] font-extrabold uppercase leading-none tracking-[0.14em]"
                    style={{ background: res.bg, color: res.color }}>
                    {res.type}
                  </span>
                </div>
                <h4 className="mb-[7px] text-[16px] font-extrabold leading-tight text-[#122033]">{res.title}</h4>
                <p className="mb-[28px] text-[13px] font-medium leading-relaxed text-[#607487]">
                  Essential {res.tag.toLowerCase()} resources for the HBK design ecosystem.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="rounded-full px-[12px] py-[6px] text-[11px] font-extrabold leading-none"
                    style={{ background: res.bg, color: res.color }}>
                    {res.tag}
                  </span>
                  <button className="flex h-[36px] items-center gap-[8px] rounded-[15px] px-[16px] text-[13px] font-extrabold leading-none transition-all"
                    style={{ background: res.bg, color: res.color }}>
                    <Download size={13} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why HBK ───────────────────────────────────────────── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:py-[96px]" style={{ background: "#F7FAFD" }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-[72px]">
            <div className="mb-[14px] text-[13px] font-extrabold uppercase leading-none tracking-[0.18em]" style={{ color: B.blue }}>Benefits</div>
            <h2 className="text-2xl font-extrabold leading-tight text-[#122033] md:text-[40px] md:leading-none" style={{ letterSpacing: "-0.03em" }}>
              Why HBK Experience Hub
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-[28px]">
            {benefits.map(b => (
              <div key={b.title}
                className="min-h-[220px] rounded-[18px] border border-[#dbe6f0] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 md:min-h-[280px] md:p-8 xl:min-h-[307px] xl:p-[40px]"
                style={{ boxShadow: `0 2px 12px ${b.color}08` }}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[15px] md:mb-[33px] md:h-[70px] md:w-[70px] md:rounded-[17px]"
                  style={{ background: b.bg, color: b.color }}>
                  {b.icon}
                </div>
                <h4 className="mb-[13px] text-[16px] font-extrabold leading-tight text-[#122033]">{b.title}</h4>
                <p className="text-[13px] font-medium leading-[1.55] text-[#607487]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statistics ────────────────────────────────────────── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-14"
        style={{ background: `linear-gradient(135deg, #EEF5FB 0%, #F0F7FF 100%)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(s => (
              <div key={s.label} className="rounded-2xl p-6 text-center md:p-8"
                style={{ background: s.bg, border: `1.5px solid ${s.color}18` }}>
                <div className="mb-2 text-4xl font-extrabold md:text-5xl" style={{ color: s.color, letterSpacing: "-0.04em" }}>
                  {s.value}
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:py-[92px]" style={{ background: "#F7FAFD" }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-[64px]">
            <div className="mb-[14px] text-[13px] font-extrabold uppercase leading-none tracking-[0.18em]" style={{ color: B.blue }}>Testimonials</div>
            <h2 className="text-2xl font-extrabold leading-tight text-[#122033] md:text-[40px] md:leading-none" style={{ letterSpacing: "-0.03em" }}>
              Loved by Teams Across HBK
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 xl:gap-[28px]">
            {testimonials.map(t => (
              <div key={t.name} className="min-h-[260px] rounded-[18px] border border-[#dbe6f0] bg-white p-6 md:min-h-[320px] md:p-8 xl:min-h-[334px] xl:p-[40px]"
                style={{ boxShadow: `0 4px 20px ${t.color}0A` }}>
                <div className="mb-5 flex gap-[8px] md:mb-[23px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={t.color} color={t.color} />
                  ))}
                </div>
                <div className="relative mb-6 rounded-[18px] px-5 py-5 md:mb-[29px] md:px-[24px] md:py-[24px]" style={{ background: t.color + "0D" }}>
                  <p className="text-[13px] font-medium leading-[1.55] text-[#122033]">"{t.quote}"</p>
                  <div className="absolute -bottom-[8px] left-[28px] h-[16px] w-[16px] rotate-45" style={{ background: t.color + "0D" }} />
                </div>
                <div className="mt-2 flex items-center gap-[16px]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold text-white md:h-[56px] md:w-[56px] md:text-[17px]"
                    style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[16px] font-extrabold leading-tight text-[#122033]">{t.name}</div>
                    <div className="text-[13px] font-medium leading-tight text-[#607487]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contribution banner ───────────────────────────────── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:py-[92px]" style={{ background: "#F7FAFD" }}>
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-0 flex-col items-center gap-8 rounded-[20px] px-5 py-10 sm:px-8 md:min-h-[390px] md:flex-row md:gap-10 md:rounded-[24px] md:px-[54px] md:py-[78px] lg:gap-[66px]"
            style={{ background: `linear-gradient(135deg, ${B.blueLight} 0%, #D6ECFB 100%)`, border: `1.5px solid ${B.blue}18` }}>
            {/* Illustration */}
            <div className="w-full shrink-0 md:w-[260px] lg:w-[310px]">
              <svg width="260" height="180" viewBox="0 0 220 150" fill="none" className="mx-auto h-auto w-full max-w-[220px] sm:max-w-[260px]">
                {/* Three people */}
                <circle cx="44" cy="54" r="20" fill={B.purple} fillOpacity="0.48" />
                <rect x="26" y="76" width="36" height="44" rx="9" fill={B.purple} fillOpacity="0.28" />
                <circle cx="110" cy="44" r="20" fill={B.blue} fillOpacity="0.48" />
                <rect x="92" y="66" width="36" height="54" rx="9" fill={B.blue} fillOpacity="0.28" />
                <circle cx="176" cy="54" r="20" fill={B.emerald} fillOpacity="0.48" />
                <rect x="158" y="76" width="36" height="44" rx="9" fill={B.emerald} fillOpacity="0.28" />
                {/* Speech bubbles */}
                <rect x="2" y="14" width="54" height="26" rx="7" fill="white" />
                <path d="M 18 40 L 12 48 L 28 44 Z" fill="white" />
                <rect x="8" y="20" width="40" height="3.5" rx="1.5" fill={B.purple} fillOpacity="0.4" />
                <rect x="8" y="27" width="32" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="82" y="4" width="54" height="26" rx="7" fill="white" />
                <path d="M 98 30 L 92 38 L 108 34 Z" fill="white" />
                <rect x="88" y="10" width="40" height="3.5" rx="1.5" fill={B.blue} fillOpacity="0.4" />
                <rect x="88" y="17" width="32" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="164" y="14" width="54" height="26" rx="7" fill="white" />
                <path d="M 180 40 L 174 48 L 190 44 Z" fill="white" />
                <rect x="170" y="20" width="40" height="3.5" rx="1.5" fill={B.emerald} fillOpacity="0.4" />
                <rect x="170" y="27" width="32" height="3" rx="1.5" fill="#CBD5E1" />
                {/* Dotted connectors */}
                <path d="M 64 72 L 92 68" stroke={B.blue} strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.4" />
                <path d="M 128 68 L 156 72" stroke={B.blue} strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.4" />
                <text x="110" y="134" textAnchor="middle" fontFamily="Inter" fontSize="10" fontWeight="700" fill={B.blue}>Designers · Developers · PMs</text>
              </svg>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="mb-[13px] text-[13px] font-extrabold uppercase leading-none tracking-[0.18em]" style={{ color: B.blue }}>Contribute</div>
              <h2 className="mb-[17px] text-2xl font-extrabold leading-[1.12] text-[#050b12] sm:text-[30px] md:text-[34px]" style={{ letterSpacing: "-0.03em" }}>
                Help Shape the<br />HBK Experience
              </h2>
              <p className="mb-[32px] max-w-[590px] text-[15px] font-medium leading-[1.55] text-[#050b12]">
                Join designers, developers, and product managers collaborating to build a world-class design ecosystem.
                Your contributions make HBK products better for everyone.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-[16px] md:justify-start">
                <button className="flex h-[46px] w-full items-center justify-center gap-[9px] rounded-[12px] px-[23px] text-[15px] font-extrabold leading-none text-white transition-all hover:opacity-90 sm:w-auto"
                  style={{ background: B.blue }}>
                  <MessageSquare size={16} /> Contact Team
                </button>
                <button className="flex h-[46px] w-full items-center justify-center gap-[9px] rounded-[12px] border-[2px] px-[23px] text-[15px] font-extrabold leading-none text-[#050b12] transition-all hover:bg-white sm:w-auto"
                  style={{ borderColor: B.blue + "30" }}>
                  <BarChart3 size={16} /> Contribute
                </button>
                <button className="flex h-[46px] w-full items-center justify-center gap-[9px] rounded-[12px] px-[23px] text-[15px] font-extrabold leading-none text-[#050b12] transition-all hover:bg-white sm:w-auto">
                  <Users size={16} /> Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-white px-4 py-12 sm:px-6 md:px-10 md:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand col */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm"
                  style={{ background: B.blue }}>
                  H
                </div>
                <div>
                  <div className="text-sm font-extrabold text-foreground">HBK</div>
                  <div className="text-[10px] text-muted-foreground">Experience Hub</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                A unified design ecosystem for HBK teams worldwide.
              </p>
              {/* Mini footer illustration */}
              <svg width="72" height="52" viewBox="0 0 72 52" fill="none" className="opacity-35">
                <circle cx="18" cy="26" r="16" fill={B.blue} />
                <circle cx="40" cy="18" r="11" fill={B.purple} />
                <circle cx="58" cy="34" r="9" fill={B.emerald} />
              </svg>
            </div>

            {[
              { title: "Experience Hub", links: ["Overview", "Design Workshop", "Design System", "Customer Advisor", "Product Portfolio"] },
              { title: "Resources", links: ["Guidelines", "Templates", "Downloads", "Changelog", "API Docs"] },
              { title: "Products", links: ["Analytics", "Platform", "Insights", "DataOps", "CloudHub"] },
              { title: "Company", links: ["About HBK", "Team", "Blog", "Careers", "Contact"] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-xs font-extrabold text-foreground uppercase tracking-widest mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">© 2025 HBK Design System. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy", "Terms", "Accessibility", "Status"].map(l => (
                <a key={l} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
