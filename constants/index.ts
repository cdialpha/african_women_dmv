import bloomberg from "../public/bloomberg.png";
import wsj from "../public/wsj.png";
import forbes from "../public/forbes.png";
import secplus from "../public/secplus.png";
import cc from "../public/cc.png";
import cap from "../public/cap.png";

export type Article = {
  id: string;
  site: string;
  title: string;
  img: StaticImageData;
  alt: string;
  date: string;
  url: string;
};

export const articles = [
  {
    id: "0",
    site: "Forbes",
    title: "The Fast-Growing Job With A Huge Skills Gap: Cyber Security",
    img: forbes,
    alt: "Forbes Article that reads the fast-growing job with a huge skills gap is Cybersecurity",
    date: "Mar 16th, 2017",
    url: "https://www.forbes.com/sites/jeffkauflin/2017/03/16/the-fast-growing-job-with-a-huge-skills-gap-cyber-security/?sh=3a1ecaf35163",
  },
  {
    id: "1",
    site: "Wall Street Journal",
    title: "It’s a Good Time to Find a Cybersecurity Job",
    img: wsj,
    alt: "Wall Stree Journal Article that reads 'It's a good time to find a cybersecurity job'",
    date: "May 29th, 2018",
    url: "https://www.wsj.com/articles/its-a-good-time-to-find-a-cybersecurity-job-1527646081",
  },
  {
    id: "2",
    site: "Bloomberg",
    title: "Hackers’ Path Eased as 600,000 U.S. Cybersecurity Jobs Sit Empty",
    img: bloomberg,
    alt: "Bloomberg article that reads '600,000 empty US Cybersecurity jobs'",
    date: "Mar 30th, 2022",
    url: "https://www.bloomberg.com/news/articles/2022-03-30/hackers-path-is-eased-as-600-000-cybersecurity-jobs-sit-empty?leadSource=uverify%20wall",
  },
];

export type Cert = {
  id: string;
  abbrev: string;
  cert: string;
  img: StaticImageData;
  alt: string;
  shortDescription: string;
  longDescription: string;
  agenda: string[];
};
export type CertProps = {
  props: Cert;
};

export const certs = [
  {
    id: "1",
    abbrev: "secplus",
    cert: "CompTIA Security+",
    img: secplus,
    alt: "CompTIA Security+ certification",
    shortDescription:
      "CompTIA Security+ is the first security certification IT professionals should earn. Security+ is an entry-level vendor-neutral security certification that builds off of the network security knowledge covered by the Network+ certification. ",
    longDescription:
      "CompTIA Security+ is a global certification that validates the baseline skills you need to perform core security functions and pursue an IT security career. CompTIA Security+ is the first security certification IT professionals should earn. It establishes the core knowledge required of any cybersecurity role and provides a springboard to intermediate-level cybersecurity jobs. Security+ incorporates best practices in hands-on troubleshooting to ensure security professionals have practical security problem-solving skills. Cybersecurity professionals with Security+ know how to address security incidents – not just identify them",
    agenda: [""],
  },
  {
    id: "2",
    abbrev: "cc",
    cert: "Certified in Cybersecuirty",
    img: cc,
    alt: "Certified in cybersecurity certification",
    shortDescription:
      "(ISC)² developed the Certified in Cybersecurity (CC) credential for newcomers to the field, to recognize the growing trend of people entering the cybersecurity workforce without direct IT experience.",
    longDescription:
      "Take the first step to a rewarding career and get Certified in Cybersecurity from (ISC)², the world’s leading cybersecurity professional organization known for the CISSP®. You don’t need experience — just the passion and drive to enter a field that opens limitless opportunities around the globe. Getting Certified in Cybersecurity provides employers with the confidence that you have a solid grasp of the right technical concepts",
    agenda: [
      "Security Principles",
      "Business Continuity (BC), Disaster Recovery (DR) & Incident Response Concepts",
      "Access Controls Concepts",
      "Network Security",
      "Security Operations",
      "Course Summary and Exam Details",
    ],
  },
  {
    id: "3",
    abbrev: "cap",
    cert: "Certified Auth Professional",
    alt: "certified auth professional cert",
    img: cap,
    shortDescription:
      "The CAP provides knowledge to understand Governance, Risk and Compliance (GRC) and can authorize and maintain information systems utilizing various risk management frameworks, as well as best practices, policies and procedures.",
    longDescription:
      "Earning the CAP certification is a proven way to build your career and demonstrate your expertise within the risk management framework (RMF). The RMF steps are Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor in accordance with NIST SP 800-53 Rev 2. Training provides a comprehensive review of information systems security concepts and industry best practices, covering the seven domains of the CAP Common Body of Knowledge",
    agenda: [
      "Information Security Risk Management Program",
      "Scope of the Information System",
      "Selection and Approval of Security and Privacy Controls",
      "Implementation of Security and Privacy Controls",
      "Assessment/Audit of Security and Privacy Controls",
      "Authorization/Approval of Information System",
      "Continuous Monitoring",
    ],
  },
];
