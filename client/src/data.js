import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DiscountIcon from "@mui/icons-material/Discount";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import SecurityIcon from "@mui/icons-material/Security";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import UpgradeIcon from "@mui/icons-material/Upgrade";

const navLinks = [
  {
    link: "Home",
    to: "heroContainer",
  },
  {
    link: "Features",
    to: "featuresContainer",
  },
  {
    link: "Pricing",
    to: "pricingContainer",
  },
  {
    link: "Questions",
    to: "faqContainer",
  },
  {
    link: "TOS",
    path: "/tos",
  },
  {
    link: "Discord",
    path: "https://discord.com/invite/sXfV6jcp8T",
    newTab: true,
  },
];

const features = [
  {
    icon: VisibilityOffIcon,
    title: "Undetected",
    description:
      "Hidden from all public anti-cheat solutions on the market, we ensure your safety when using Adverse.",
  },
  {
    icon: DiscountIcon,
    title: "Affordable",
    description:
      "Adverse is competitively priced compared to other scripts on the market while also being a better option.",
  },
  {
    icon: DisplaySettingsIcon,
    title: "Quality Modules",
    description:
      "All of our modules are carefully developed allowing for a balanced level of customizability and ease of use.",
  },
  {
    icon: SecurityIcon,
    title: "Secure",
    description:
      "We use industry-standard encryption and hashing methods to ensure your sensitive data is stored securely and out of eyes from any attacker.",
  },
  {
    icon: ContactSupportIcon,
    title: "Fast Support",
    description:
      "Our support team is always ready to answer your questions and assist you when necessary. Create a ticket on our discord if you need assistance.",
  },
  {
    icon: UpgradeIcon,
    title: "Frequent Updates",
    description:
      "Adverse receives constant updates ensuring our modules stay up-to-date and fitting the needs of our users.",
  },
];

const stats = [
  {
    stat: "100%",
    description: "Satisfaction",
  },
  {
    stat: "40k",
    description: "Registered",
  },
  {
    stat: "400k+",
    description: "Launches",
  },
];

const plans = [
  {
    plan: "Monthly",
    short: "mo",
    hint: "30 days",
    description: "Great for trying out Adverse or if you're on a budget.",
    price: 10,
    unit: "$",
    id: "615615bea6faa",
  },
  {
    plan: "Lifetime",
    short: "lifetime",
    hint: "of Adverse",
    description:
      "Lifetime ownership of Adverse, can't get any better than this.",
    price: "30",
    unit: "$",
    id: "615616cfa4a5a",
  },
];

const faq = [
  {
    question: "What versions does Adverse support",
    answers: ["All Windows 10 versions", "All Windows 11 versions"],
    imgs: [],
    links: [],
  },
  {
    question: "What payment methods do you support",
    answers: [
      "Our payment system is built using Sellix which allows you to purchase with a credit or debit card. We also have resellers that support payment methods such as CashApp, Apple Pay, Venmo, and more.",
    ],
    imgs: [],
    links: [],
  },
  {
    question: "Can I share or resell my key",
    answers: [
      "No, your Adverse account belongs to you and you only. Our system checks for account redistribution and your account will be terminated if it is not used by you only. Read our Terms of Service for more info.",
    ],
    imgs: [],
    links: [],
  },
];

export { navLinks, features, stats, plans, faq };
