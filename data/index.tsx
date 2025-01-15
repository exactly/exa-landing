import Link from "@mui/material/Link";

export const steps = [
  {
    id: 1,
    image: "/exa-card.svg",
    title: "Enable",
    text: "Verify your identity and enable the Exa Card",
  },
  {
    id: 2,
    image: "/arrow-down-to-line.svg",
    title: "Top-up",
    text: "Add funds to your Exa App account",
  },
  {
    id: 3,
    image: "/add-wallets.svg",
    title: "Add",
    text: "Add the card to your Apple or Google wallet.",
  },
  {
    id: 4,
    image: "/success-paid.svg",
    title: "Purchase",
    text: "Pay contactless in-store or online.",
  },
];

export const cards = [
  {
    title: "Exa Card",
    image: "/exa-card.svg",
    features: [
      {
        icon: "/icons/credit-card.svg",
        text: "All-in-one debit and credit card",
      },
      {
        icon: "/icons/columns-4.svg",
        text: "Up to 6 installments",
      },
      {
        icon: "/icons/bitcoin.svg",
        text: "Credit line backed with your crypto",
      },
      {
        icon: "/icons/key.svg",
        text: "Self-custodial",
      },
      {
        icon: "/icons/smartphone.svg",
        text: "Easy to use mobile app",
      },
      {
        icon: "/icons/banknote.svg",
        text: "Cashback",
        info: "coming soon",
      },
    ],
  },
  {
    title: "Bank Cards",
    image: "/cards/bank-card.svg",
    features: [
      {
        icon: "/icons/credit-card.svg",
        secondIcon: "/icons/credit-card.svg",
        text: "Separate debit and credit cards",
      },
      {
        icon: "/icons/columns-4.svg",
        text: "Installments",
      },
      {
        icon: "/icons/file-text.svg",
        text: "Credit line with scoring check",
      },
      {
        icon: "/icons/lock.svg",
        text: "Centralized",
      },
      {
        icon: "/icons/smartphone.svg",
        text: "Mobile app",
      },
      {
        icon: "/icons/award.svg",
        text: "Points",
      },
    ],
  },
  {
    title: "Centralized Cards",
    image: "/cards/centralized-card.svg",
    features: [
      {
        icon: "/icons/credit-card.svg",
        secondIcon: "/icons/credit-card.svg",
        text: "Separate debit and credit cards",
      },
      {
        icon: "/icons/columns-4.svg",
        text: "Installments",
      },
      {
        icon: "/icons/bitcoin.svg",
        text: "Credit line backed with your crypto",
      },
      {
        icon: "/icons/lock.svg",
        text: "Centralized",
      },
      {
        icon: "/icons/smartphone.svg",
        text: "Easy to use mobile app",
      },
      {
        icon: "/icons/banknote.svg",
        text: "Cashback",
      },
    ],
  },
  {
    title: "DeFi Cards",
    image: "/cards/onchain-card.svg",
    features: [
      {
        icon: "/icons/credit-card.svg",
        text: "Only debit card",
      },
      {
        icon: "/icons/cross-circle.svg",
        text: "No installments plans",
      },
      {
        icon: "/icons/cross-circle.svg",
        text: "No credit line",
      },
      {
        icon: "/icons/key.svg",
        text: "Self-cutodial",
      },
      {
        icon: "/icons/cross-circle.svg",
        text: "No mobile app",
      },
      {
        icon: "/icons/bitcoin.svg",
        text: "Token rewards",
      },
    ],
  },
];

export const faqs = [
  {
    question: "How does the Exa Card work?",
    answer:
      "After downloading the Exa App, adding funds, and going through a 3-minute KYC process, an all-in-one card (credit and debit) is created. You can configure it as debit or credit from the “Card” screen\n\nIf you have configured your Exa Card as a debit card, the value of every purchase you make will be directly deducted from your balance. You will have the option to set which assets you want to spend first.\n\nIf you have configured your Exa card as credit card, every time you use it, you take out a loan within Exactly Protocol, using the crypto you selected as collateral.\n\nYou will have previously defined the number of installments on the card page. This variable, among others related to the usage of the protocol and liquidity (that you can check in the Exactly Protocol documentation), defines the interest that you will pay for your loan.",
  },
  {
    question: "Where is the Exa card issued?",
    answer: "The Exa Card is issued in Hong Kong.",
  },
  {
    question: "What fees are associated with the usage of the Exa Card?",
    answer:
      "There is no fee associated with the issuance of the card or maintenance of any kind; it’s completely free to get and maintain your Exa Card.\n\nThere is no Gas fees for onchain transactions since we will be sponsoring Gas.\n\nFor debit card purchases made in USD, there are no fees asociated.\n\nFor purchases made in other currencies, there is a 1.5% fee included in the currency rates.",
  },
  {
    question: "What’s the Exa Card's conversion rate for non-USD purchases?",
    answer: (
      <>
        The currency of the Exa Card is USD. Every purchase you make in a
        currency other than USD will be charged a 1.5% FX fee for the currency
        conversion.
        {"\n\n"}
        You can check the currency conversion rate in this{" "}
        <Link
          href="https://usa.visa.com/support/consumer/travel-support/exchange-rate-calculator.html"
          target="_blank"
          rel="noreferrer noopener"
          underline="always"
          color={"#0070f3"}
        >
          link
        </Link>
        {" Be sure that the 'Bank fee' is 1.5%."}
      </>
    ),
  },
  {
    question: "Is there a physical card?",
    answer:
      "No, there are no physical cards available at the moment.\n\nAs a mobile-centered solution, we prioritize usability and security. Physical cards are less secure than virtual ones and require users to carry them for payments. Instead, we offer the option to add your Exa Card to mobile wallets like Apple Pay and Google Wallet.",
  },
  {
    question:
      "Do I have to undergo Know Your Customer (KYC) to utilize the Exa App?",
    answer:
      "All users who wish to use the Exa Card and access all the functionalities of the Exa App must undergo a KYC process to ensure we remain compliant with the regulations and successfully merge with the existing payment rails in the real world.",
  },
  {
    question: "Where is the Exa Card Available?",
    answer:
      "The Exa Card is available worldwide, the only countries where it is not available are:\n\nAfganistán, Belarus, Bulgaria, Burundi, North Korea, Croatia, Cuba, Eritrea, Ethiopia, Guinea-Bisáu, Haiti, Iraq, Iran, Lebanon, Liberia, Libya, Mali, Myanmar, Nicaragua, Centroafrican Republic, Democratic Republic of the Congo, Rwanda, Russia, Sierra Leona, Syria, Somalia, Sudan, South Sudan, Ucrania, Venezuela, Yemen and Zimbabwe.",
  },
];

export const carrouselImages = [
  {
    src: "/carrousel/carrousel-1.png",
    alt: "carrousel-1",
    icon: "/icons/arrow-right-left.svg",
    buttonText: "Instant transfers",
    title: "Send assets globally at any time, instantly.",
    subtitle:
      "Unlike traditional banking, you can send assets anywhere in the world instantly, for free!",
  },
  {
    src: "/carrousel/carrousel-2.png",
    alt: "carrousel-2",
    icon: "/icons/globe.svg",
    buttonText: "180+ countries",
    title: "Available worldwide in 180+ countries.",
    subtitle:
      "Create an account, enable your virtual card and start spending right with your smartphone.",
  },
  {
    src: "/carrousel/carrousel-3.jpg",
    alt: "carrousel-3",
    icon: "/icons/bill.svg",
    buttonText: "Trully cost-less",
    title: "Cost-less, zero-hassle, onchain experience.",
    subtitle:
      "Say goodbye to transaction fees, no costs for card issurance, maintenance or usage.",
  },
  {
    src: "/carrousel/carrousel-4.png",
    alt: "carrousel-4",
    icon: "/icons/file-check.svg",
    buttonText: "No credit score check",
    title: "Your credit limit is backed by your assets.",
    subtitle:
      "The more funds you deposit in your account, the more you can borrow to spend. No credit score check needed.",
  },
];
