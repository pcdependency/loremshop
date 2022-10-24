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
    path: "https://github.com/pcdependency",
    newTab: true,
  },
];

const features = [
  {
    icon: VisibilityOffIcon,
    title: "Adipisicing",
    description: "Anim reprehenderit et ad ullamco Lorem adipisicing veniam.",
  },
  {
    icon: DiscountIcon,
    title: "Laborum",
    description:
      "Excepteur nulla qui dolore ipsum. Dolore laborum velit consectetur ipsum aliqua ex quis incididunt elit deserunt velit.",
  },
  {
    icon: DisplaySettingsIcon,
    title: "Excepteur Consequat",
    description:
      "Ullamco ex magna qui enim ea Lorem fugiat anim excepteur excepteur consequat ad commodo ullamco.",
  },
  {
    icon: SecurityIcon,
    title: "Laboris",
    description:
      "Ullamco duis nisi laboris labore ullamco minim et. Aliqua velit sint sint Lorem consequat laborum occaecat.",
  },
  {
    icon: ContactSupportIcon,
    title: "Dolor Esit",
    description:
      "Dolore magna eu ut labore occaecat elit nisi ipsum commodo laborum labore nulla reprehenderit commodo.",
  },
  {
    icon: UpgradeIcon,
    title: "Lorem Ipsum",
    description:
      "Laboris amet labore aliquip consectetur sint proident fugiat veniam adipisicing Lorem et laboris ullamco.",
  },
];

const stats = [
  {
    stat: "100%",
    description: "Satisfaction",
  },
  {
    stat: "23k",
    description: "Registered",
  },
  {
    stat: "250k+",
    description: "Launches",
  },
];

const plans = [
  {
    plan: "Monthly",
    short: "mo",
    hint: "30 days",
    description: "Est consequat sunt velit incididunt officia dolore.",
    price: 10,
    unit: "$",
    id: "",
  },
  {
    plan: "Lifetime",
    short: "lifetime",
    hint: "of Lorem",
    description:
      "Esse laboris do ipsum duis enim pariatur minim esse ex exercitation nostrud sunt.",
    price: "30",
    unit: "$",
    id: "",
  },
];

const faq = [
  {
    question: "Aliqua amet exercitation ea nostrud velit cillum.",
    answers: [
      "In ullamco excepteur enim dolor do aliqua ut enim mollit.",
      "Et ad reprehenderit laboris exercitation duis culpa id velit cupidatat dolore consectetur laborum.",
    ],
    imgs: [],
    links: [],
  },
  {
    question:
      "Cillum aliqua nisi fugiat consectetur Lorem nostrud esse duis elit occaecat.",
    answers: ["Qui cillum ea incididunt proident."],
    imgs: [],
    links: [],
  },
  {
    question: "Nostrud non cillum dolor ipsum sint eu do.",
    answers: [
      "Dolore eu eiusmod commodo proident dolore. Ut proident est culpa irure nostrud ad aliquip sit sint elit officia elit fugiat.",
    ],
    imgs: [],
    links: [],
  },
];

export { navLinks, features, stats, plans, faq };
