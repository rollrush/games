import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  dym,
  capsule,
  roulette,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [dym, capsule];

export const brainwaveServices = [
  "AI-Driven Game Generation",
  "Dynamic Game Enhancements",
  "Seamless Blockchain Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Layer 2 Rollups",
    text: "Implement rollup technology to scale game transactions, enhancing speed and reducing costs for players.",
    date: "Sep 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "NFT Marketplace",
    text: "Launch a decentralized marketplace for in-game assets, ensuring players truly own their collectibles and skins.",
    date: "Oct 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Interoperability",
    text: "Enable cross-chain transfers of game assets between Dymension, ICP, and Solana, ensuring compatibility across ecosystems.",
    date: "Nov 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "AI-Driven Proctoring",
    text: "Integrate AI to secure decentralized tournaments and competitions, ensuring fair play and transparent results.",
    date: "Dec 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With decentralized architecture and robust security, Rollrush ensures seamless gameplay and asset ownership for gamers.";

export const collabContent = [
  {
    id: "0",
    title: "Decentralized Hosting",
    text: collabText,
  },
  {
    id: "1",
    title: "Cross-Chain Compatibility",
  },
  {
    id: "2",
    title: "Player-Owned Assets",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Player",
    description:
      "Access basic games, earn rewards, and own your in-game assets.",
    price: "0",
    features: [
      "Access to basic decentralized games",
      "Earn rewards and NFTs",
      "Player-owned assets",
    ],
  },
  {
    id: "1",
    title: "Pro Gamer",
    description: "Advanced games, exclusive tournaments, and pro player tools.",
    price: "9.99",
    features: [
      "Access to premium decentralized games",
      "Exclusive tournaments and leaderboard rewards",
      "Advanced pro player tools and analytics",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:
      "Custom games, large-scale tournaments, and dedicated support.",
    price: null,
    features: [
      "Custom decentralized game development",
      "Large-scale tournaments and events",
      "Dedicated game hosting and support",
    ],
  },
];

export const games = [
  {
    id: "0",
    title: "Roulette",
    text: "Spin the wheel and win big with blockchain-backed rewards and secure asset transfers.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: roulette,
  },
  {
    id: "1",
    title: "Magnetic Chess",
    text: "Experience a new twist on classic games with magnetic interactions and blockchain-backed assets.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Slot Machines",
    text: "Enjoy classic slot machines with blockchain-backed rewards and secure asset transfers.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
