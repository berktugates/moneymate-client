interface ITerm {
  id: number;
  title: string;
  description: string;
}
export const terms: ITerm[] = [
  {
    id: 1,
    title: "Acceptance of Terms",
    description:
      "By accessing or using the Moneymate application, you agree to be bound by these Terms of Use. If you do not agree with these terms, you should not use the application.",
  },
  {
    id: 2,
    title: "Service Description",
    description:
      "Moneymate is a mobile application designed to help users manage their personal finances, track income and expenses, and analyze financial data.",
  },
  {
    id: 3,
    title: "User Responsibilities",
    description: `By using Moneymate, you agree to:
    - Use the application only for lawful purposes.
    - Keep your account information confidential and secure.
    - Not provide false, misleading, or illegal information within the application.`,
  },
  {
    id: 4,
    title: "Intellectual Property",
    description:
      "All content, design, and trademarks related to Moneymate are protected under applicable intellectual property laws. You may not copy, reproduce, or distribute any part of the application without prior written consent.",
  },
  {
    id: 5,
    title: "Third-Party Services",
    description:
      "The Moneymate application may contain links to third-party services. We are not responsible for the content, privacy policies, or practices of any third-party services.",
  },
  {
    id: 6,
    title: "Account Termination",
    description:
      "You may terminate your account at any time. Moneymate reserves the right to suspend or terminate accounts that violate these Terms of Use or engage in unauthorized activities.",
  },
  {
    id: 7,
    title: "Disclaimer",
    description:
      "The information and services provided by Moneymate are for informational purposes only and should not be considered financial advice. Users are solely responsible for any financial decisions made based on the information provided in the application.",
  },
];
