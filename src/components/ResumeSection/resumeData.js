// src/data/resumeData.js
import ImplantPilotsImg from "../../assets/images/implantPilots.jpg";
import UCLALogo from "../../assets/images/UCLA_School_of_Dentistry_logo-1200px.png";
import InvisalignLogo from "../../assets/images/invisalign.png";
import DGOILogo from "../../assets/images/DGOI.png";
import MIULogo from "../../assets/images/MIU_logo.png";
import AachenLogo from "../../assets/images/aachen.png";
const resumeData = {
  position: "Associate Dentist at White Dental Clinic",
  education: [
    "DDS | UCLA School of Dentistry (2019 - 2021)",
    "BDS | MISR International University (2008 - 2013)",
  ],
  awards: [
    "Comprehensive Patient Care Award | UCLA",
    "Excellence in Restorative Dentistry Award | UCLA",
    "Excellence in Clinical Care Award | UCLA",
    "High Honors Award | MIU",
  ],
  certifications: [
    "Certified General Dentist in Ca, USA",
    "Certified General Dentist in Egypt",
    "Active Invisalign Provider",
    "Active Clear Correct Provider",
    "Member of the DGOI (German Society of Oral Implantology)",
    "Member of the ADA (American Dental Association)",
    "Member of the CDA (California Dental Association)",
    "Member of the AACD (American Academy of Cosmetic Dentistry)",
  ],
  courses: [
    {
      title: "Implants mini-fellowship",
      duration: "Mar 2023 - Oct 2023",
      instructor: "Implant Pilots",
      type: "Hands on",
      providerLink:
        "https://www.facebook.com/p/Implant-Pilots-Academy-100077402004894/",
      image: {
        src: ImplantPilotsImg,
        alt: "Implants Image",
        link: "https://www.facebook.com/p/Implant-Pilots-Academy-100077402004894/",
      },
      details: [
        "Free-Hand Implant placement and restoration",
        "Guided Implant placement and restoration",
        "Simple guided and stackable guides",
        "Immediate implants",
        "Direct and Indirect sinus lift",
      ],
    },
    {
      title: "Suturing Workshop",
      duration: "Feb 2020",
      instructor: "Dr. Otomo Corgel",
      type: "Hands on",
      providerLink: "https://dentistry.ucla.edu",
      image: {
        src: UCLALogo,
        alt: "Suturing Image",
        link: "https://dentistry.ucla.edu/",
      },
      details: ["Advanced suturing techniques on chicken breasts"],
    },
    {
      title: "Implant Workshop",
      duration: "Oct 2019",
      instructor: "Perio Study Club UCLA",
      type: "Hands on",
      providerLink: "https://dentistry.ucla.edu",
      image: {
        src: UCLALogo,
        alt: "Implant Workshop Image",
        link: "https://dentistry.ucla.edu/",
      },
      details: ["Implant placement in pig head"],
    },
    {
      title: "Invisalign Course",
      duration: "Oct 2019",
      instructor: "Ortho Study Club UCLA",
      type: "Didactic",
      providerLink: "https://dentistry.ucla.edu/",
      image: {
        src: InvisalignLogo,
        alt: "Invisalign Image",
        link: "https://dentistry.ucla.edu/",
      },
      details: [
        "3 hours",
        "Invisalign from start to finish",
        "To get certified as Invisalign provider",
      ],
    },
    {
      title: "Implant & Periodontology Course",
      duration: "Sep 2013 - Feb 2014",
      instructor: "DGOI",
      type: "Didactic",
      providerLink: "https://www.miuegypt.edu.eg/academics/faculty-of-oral/",
      image: {
        src: DGOILogo,
        alt: "DGOI logo",
        link: "https://www.dgoi.info/international-corner/",
      },
      details: [
        "6 months",
        "Includes 1 live surgery",
        "Basic to Advanced Periodontal management for Implants",
      ],
    },
    {
      title: "Orthodontic Workshop",
      duration: "Nov 2013",
      instructor: "Prof. Dr. Winfried Rudolf Harzer",
      type: "Hands on",
      providerLink: "https://www.dgoi.info/international-corner/",
      image: {
        src: MIULogo,
        alt: "MIU",
        link: "https://www.miuegypt.edu.eg/academics/faculty-of-oral/",
      },
      details: [
        "3 hours",
        "Wire bending",
        "Simulated braces treatment in wax model",
      ],
    },
    {
      title: "LASER Course",
      duration: "Mar 2014",
      instructor: "Endorsed by Aachen University",
      type: "Hands on",
      providerLink: "https://www.miuegypt.edu.eg/academics/faculty-of-oral/",
      image: {
        src: AachenLogo,
        alt: "Aachen University",
        link: "https://www.medizin.rwth-aachen.de/",
      },
      details: ["8 hours", "Er-Yag and Diode LASERS", "Hands on Sheep head"],
    },
  ],
};

export default resumeData;
