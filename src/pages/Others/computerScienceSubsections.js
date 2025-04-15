// API
import LearningRESTAPIs from "../../assets/pdf/CS/API/CertificateOfCompletion_Learning-REST-APIs.pdf";
import LearningRESTAPIsThumb from "../../assets/pdf/CS/API/CertificateOfCompletion_Learning-REST-APIs.jpg";

// Database
import NoSQLEssentialTraining from "../../assets/pdf/CS/Database/CertificateOfCompletion_NoSQL-Essential-Training.pdf";
import NoSQLEssentialTrainingThumb from "../../assets/pdf/CS/Database/CertificateOfCompletion_NoSQL-Essential-Training.jpg";

// IDE
import XcodeEssentialTraining from "../../assets/pdf/CS/IDE/Xcode/CertificateOfCompletion_Xcode-13-Essential-Training.pdf";
import XcodeEssentialTrainingThumb from "../../assets/pdf/CS/IDE/Xcode/CertificateOfCompletion_Xcode-13-Essential-Training.jpg";

// Languages - CSS
import CSSEssentialTraining from "../../assets/pdf/CS/Languages/CSS/CertificateOfCompletion_CSS-Essential-Training.pdf";
import CSSEssentialTrainingThumb from "../../assets/pdf/CS/Languages/CSS/CertificateOfCompletion_CSS-Essential-Training.jpg";

// Languages - HTML
import HTMLEssentialTraining from "../../assets/pdf/CS/Languages/HTML/CertificateOfCompletion_HTML-Essential-Training.pdf";
import HTMLEssentialTrainingThumb from "../../assets/pdf/CS/Languages/HTML/CertificateOfCompletion_HTML-Essential-Training.jpg";

// Languages - Javascript - Express
import NodeExpressRESTful from "../../assets/pdf/CS/Languages/Javascript/Express/CertificateOfCompletion_Building-RESTful-APIs-with-Node.js-and-Express.pdf";
import NodeExpressRESTfulThumb from "../../assets/pdf/CS/Languages/Javascript/Express/CertificateOfCompletion_Building-RESTful-APIs-with-Node.js-and-Express.jpg";
import ExpressEssentials from "../../assets/pdf/CS/Languages/Javascript/Express/CertificateOfCompletion_Express-Essentials-Build-Powerful-Web-Apps-with-Node.js-.pdf";
import ExpressEssentialsThumb from "../../assets/pdf/CS/Languages/Javascript/Express/CertificateOfCompletion_Express-Essentials-Build-Powerful-Web-Apps-with-Node.js-.jpg";

// Languages - Javascript - Vanilla
import JavaScriptEssentialTraining from "../../assets/pdf/CS/Languages/Javascript/Vanilla/CertificateOfCompletion_JavaScript-Essential-Training.pdf";
import JavaScriptEssentialTrainingThumb from "../../assets/pdf/CS/Languages/Javascript/Vanilla/CertificateOfCompletion_JavaScript-Essential-Training.jpg";

// MISC
import SearchTechniques from "../../assets/pdf/CS/MISC/CertificateOfCompletion_Search-Techniques-for-Web-Developers.pdf";
import SearchTechniquesThumb from "../../assets/pdf/CS/MISC/CertificateOfCompletion_Search-Techniques-for-Web-Developers.jpg";

// Microsoft Office - Excel
import ExcelQuickTips2018 from "../../assets/pdf/CS/Microsoft-office/Excel/CertificateOfCompletion_Excel-Quick-Tips-2018.pdf";
import ExcelQuickTips2018Thumb from "../../assets/pdf/CS/Microsoft-office/Excel/CertificateOfCompletion_Excel-Quick-Tips-2018.jpg";

// Networking
import PowerShellLearning from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Learning-PowerShell.pdf";
import PowerShellLearningThumb from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Learning-PowerShell.jpg";

import VirtualizationLearning from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Learning-Virtualization.pdf";
import VirtualizationLearningThumb from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Learning-Virtualization.jpg";

import NetworkingIP from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Networking-Foundations-IP-Addressing.pdf";
import NetworkingIPThumb from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Networking-Foundations-IP-Addressing.jpg";

import NetworkingBasics from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Networking-Foundations-Networking-Basics.pdf";
import NetworkingBasicsThumb from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Networking-Foundations-Networking-Basics.jpg";

import PowerShellAdmin from "../../assets/pdf/IT/Networking/CertificateOfCompletion_PowerShell-Automating-Administration.pdf";
import PowerShellAdminThumb from "../../assets/pdf/IT/Networking/CertificateOfCompletion_PowerShell-Automating-Administration.jpg";

import ServerAdminEssentialTraining from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Server-Administration-Essential-Training.pdf";
import ServerAdminEssentialTrainingThumb from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Server-Administration-Essential-Training.jpg";

import ServerAdmin from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Server-Administration-Essential-Training.pdf";
import ServerAdminThumb from "../../assets/pdf/IT/Networking/CertificateOfCompletion_Server-Administration-Essential-Training.jpg";

const computerScienceSubsections = [
  {
    title: "Information Technology",
    content:
      "Core networking skills, system administration, and virtualization",
    items: [
      "PowerShell basics & automation",
      "Networking foundations (IP, protocols)",
      "Virtualization concepts",
      "Server administration",
    ],
    certificates: [
      {
        title: "Learning PowerShell",
        thumbnail: PowerShellLearningThumb,
        pdf: PowerShellLearning,
        provider: "LinkedIn Learning",
        date: "2024-01-25",
        duration: "01:23",
        skills: ["PowerShell"],
      },
      {
        title: "Learning Virtualization",
        thumbnail: VirtualizationLearningThumb,
        pdf: VirtualizationLearning,
        provider: "LinkedIn Learning",
        date: "2024-01-21",
        duration: "02:11",
        skills: ["Virtualization"],
      },
      {
        title: "Networking Foundations: IP Addressing",
        thumbnail: NetworkingIPThumb,
        pdf: NetworkingIP,
        provider: "LinkedIn Learning",
        date: "2024-01-25",
        duration: "01:32",
        skills: ["IP Addressing"],
      },
      {
        title: "Networking Foundations: Networking Basics",
        thumbnail: NetworkingBasicsThumb,
        pdf: NetworkingBasics,
        provider: "LinkedIn Learning",
        date: "2024-01-19",
        duration: "01:48",
        skills: ["Network Administration"],
      },
      {
        title: "PowerShell: Automating Administration",
        thumbnail: PowerShellAdminThumb,
        pdf: PowerShellAdmin,
        provider: "LinkedIn Learning",
        date: "2024-01-25",
        duration: "01:33",
        skills: ["PowerShell"],
      },
      {
        title: "Server Administration Essential Training",
        thumbnail: ServerAdminEssentialTrainingThumb,
        pdf: ServerAdminEssentialTraining,
        provider: "LinkedIn Learning",
        date: "2024-01-21",
        duration: "02:27",
        skills: ["Network Administration"],
      },
      {
        title: "Server Administration Essential Training",
        thumbnail: ServerAdminThumb,
        pdf: ServerAdmin,
        provider: "LinkedIn Learning",
        date: "2024-01-21", // Matched from certificate
        duration: "02:27", // Matched from certificate
        skills: ["Network Administration"], // Matched from certificate
      },
    ],
  },
  {
    title: "API",
    content: "Design and consumption of RESTful services",
    items: ["REST API fundamentals", "API tools and testing"],
    certificates: [
      {
        title: "Learning REST APIs",
        thumbnail: LearningRESTAPIsThumb,
        pdf: LearningRESTAPIs,
        provider: "LinkedIn Learning",
        date: "2024-01-18", // Updated from 2024-03-01 to match certificate
        duration: "01:06", // Updated from 00:55 to match certificate
        skills: ["REST APIs"], // Updated skills based on certificate
      },
    ],
  },
  {
    title: "Database",
    content: "NoSQL database management and best practices",
    items: ["NoSQL essentials", "Data modeling basics"],
    certificates: [
      {
        title: "NoSQL Essential Training",
        thumbnail: NoSQLEssentialTrainingThumb,
        pdf: NoSQLEssentialTraining,
        provider: "LinkedIn Learning",
        date: "2024-01-18", // Updated from 2024-03-05 to match certificate
        duration: "00:43", // Updated from 01:00 to match certificate
        skills: ["NoSQL"], // Updated skills based on certificate
      },
    ],
  },
  {
    title: "IDE",
    content: "Development environments and tools",
    items: ["Xcode interface", "Swift project setup"],
    certificates: [
      {
        title: "Xcode 13 Essential Training",
        thumbnail: XcodeEssentialTrainingThumb,
        pdf: XcodeEssentialTraining,
        provider: "LinkedIn Learning",
        date: "2023-09-09", // Matched from certificate
        duration: "01:45", // Matched from certificate
        skills: ["Xcode", "iOS Development"], // Matched from certificate
      },
    ],
  },
  {
    title: "Languages",
    content: "Core web technologies and scripting",
    items: ["CSS styling", "HTML structure", "JS interactivity"],
    certificates: [
      {
        title: "CSS Essential Training",
        thumbnail: CSSEssentialTrainingThumb,
        pdf: CSSEssentialTraining,
        provider: "LinkedIn Learning",
        date: "2024-01-19", // Matched from certificate
        duration: "05:26", // Matched from certificate
        skills: ["Cascading Style Sheets (CSS)"], // Matched from certificate
      },
      {
        title: "HTML Essential Training",
        thumbnail: HTMLEssentialTrainingThumb,
        pdf: HTMLEssentialTraining,
        provider: "LinkedIn Learning",
        date: "2024-01-03", // Matched from certificate
        duration: "02:45", // Matched from certificate
        skills: ["HTML"], // Matched from certificate
      },
      {
        title: "JavaScript Essential Training",
        thumbnail: JavaScriptEssentialTrainingThumb,
        pdf: JavaScriptEssentialTraining,
        provider: "LinkedIn Learning",
        date: "2024-01-25", // Matched from certificate
        duration: "05:40", // Matched from certificate
        skills: ["JavaScript"], // Matched from certificate
      },
      {
        title: "Building RESTful APIs with Node.js and Express",
        thumbnail: NodeExpressRESTfulThumb,
        pdf: NodeExpressRESTful,
        provider: "LinkedIn Learning",
        date: "2024-01-17", // Matched from certificate
        duration: "01:17", // Matched from certificate
        skills: ["Express.js", "REST APIs", "Node.js"], // Matched from certificate
      },
      {
        title: "Express Essentials: Build Powerful Web Apps with Node.js",
        thumbnail: ExpressEssentialsThumb,
        pdf: ExpressEssentials,
        provider: "LinkedIn Learning",
        date: "2024-01-16", // Matched from certificate
        duration: "01:59", // Matched from certificate
        skills: ["Express.js"], // Matched from certificate
      },
    ],
  },
  {
    title: "Miscellaneous",
    content: "Supporting skills and tools for web developers",
    items: ["Search strategies", "Advanced tooling"],
    certificates: [
      {
        title: "Search Techniques for Web Developers",
        thumbnail: SearchTechniquesThumb,
        pdf: SearchTechniques,
        provider: "LinkedIn Learning",
        date: "2024-01-19", // Matched from certificate
        duration: "00:55", // Matched from certificate
        skills: ["Web Application Development", "Search"], // Matched from certificate
      },
    ],
  },
  {
    title: "Microsoft Office",
    content: "Productivity and data management",
    items: ["Excel tips", "Spreadsheet optimization"],
    certificates: [
      {
        title: "Excel Quick Tips (2018)",
        thumbnail: ExcelQuickTips2018Thumb,
        pdf: ExcelQuickTips2018,
        provider: "LinkedIn Learning",
        date: "2020-07-21", // Matched from certificate
        duration: "00:26", // Matched from certificate
        skills: ["Microsoft Excel"], // Matched from certificate
      },
    ],
  },
];

export default computerScienceSubsections;
