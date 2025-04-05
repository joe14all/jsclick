import SeverelyCurvedMolarPreOp from "../../../assets/images/severlycurvedmolar/preop-1000px.jpg";
import SeverelyCurvedMolarIAF from "../../../assets/images/severlycurvedmolar/IAF.jpg";
import SeverelyCurvedMolarMAC from "../../../assets/images/severlycurvedmolar/MAC.jpg";
import SeverelyCurvedMolarCompleted from "../../../assets/images/severlycurvedmolar/completed-1000px.jpg";

const caseSix = {
  id: 6,
  title: "Severely Curved Molar",
  categories: ["endodontics"],
  thumbnail: {
    img: SeverelyCurvedMolarCompleted,
    alt: "Severely Curved Molar",
  },
  caseStudy: {
    carousel: [
      {
        img: SeverelyCurvedMolarPreOp,
        alt: "Before",
        caption: "Pre-Treatment Simulation Model",
        modality: "Periapical radiograph",
        date: "2019-06-19",
        tags: ["pre-op", "treatment-planning", "diagnostic"],
      },
      {
        img: SeverelyCurvedMolarIAF,
        alt: "Initial Apical File",
        caption: "Initial Apical File Placement",
        modality: "Periapical radiograph",
        date: "2019-06-19",
        tags: ["instrumentation", "working-length", "canal-negotiation"],
      },
      {
        img: SeverelyCurvedMolarMAC,
        alt: "Master Apical Cone",
        caption: "Master Apical Cone Fit",
        modality: "Periapical radiograph",
        date: "2019-06-19",
        tags: ["master-cone", "obturation-planning", "C&S"],
      },
      {
        img: SeverelyCurvedMolarCompleted,
        alt: "After",
        caption: "Final Obturation Result",
        modality: "Periapical radiograph",
        date: "2019-06-19",
        tags: ["post-op", "obturation", "lateral-canal"],
      },
    ],
    sections: {
      overview: {
        title: "Simulation Overview",
        content: {
          simulationContext: {
            program: "UCLA General Clinic - Clinical Simulation",
            objective: "Advanced curved root canal management",
            difficultyLevel: "High",
            modelType: "Extracted tooth mounted in simulation mannequin",
          },
          proceduralFocus: {
            keySkills: [
              "Canal negotiation and patency",
              "Managing severe curvatures",
              "Minimizing procedural errors",
            ],
            successCriteria: [
              "Complete chemomechanical debridement",
              "Preservation of original canal anatomy",
              "Dense, three-dimensional obturation",
            ],
          },
        },
      },
      challenges: {
        title: "Technical Challenges",
        icon: "warning-triangle",
        content: [
          {
            id: "C1",
            title: "Anatomical Complexity",
            category: "Anatomy",
            details: {
              observations: [
                "Severely curved mesial and distal roots",
                "Double-curved (S-shaped) mesial canals",
                "Abrupt apical curvature with potential canal merging",
              ],
              implications: [
                "High risk of instrument separation",
                "Difficult negotiation and patency maintenance",
                "Increased risk of transportation and ledging",
              ],
            },
            priority: "Critical",
          },
          {
            id: "C2",
            title: "Instrumentation Challenges",
            category: "Technique",
            details: {
              issues: [
                "Restricted straight-line access",
                "High flexural stress on files",
                "Potential for inadequate apical preparation",
              ],
              impact:
                "Compromised shaping efficiency and potential iatrogenic errors",
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        title: "Technical Strategy",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "90 minutes",
              focus: "Access & Canal Negotiation",
            },
            {
              phase: 2,
              duration: "90 minutes",
              focus: "Cleaning, Shaping & Obturation",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Access & Initial Negotiation",
            objectives: [
              "Achieve straight-line access",
              "Establish reproducible glide path",
              "Maintain canal patency",
              "Confirm working length",
            ],
            procedures: [
              {
                type: "Access Cavity Preparation",
                instruments: ["Endo-Z bur", "Surgical Round bur"],
                technique: "Conservative occlusal access",
                outcome: "Straight-line entry to orifices",
              },
              {
                type: "Orifice Management",
                instruments: ["ProTaper SX file", "Opener file #15/08"],
                technique: "Selective coronal flaring",
                outcome: "Reduced coronal interferences",
              },
              {
                type: "Canal Scouting",
                instruments: ["#06 K-file", "#08 K-file"],
                material: "CanalPrep (EDTA)",
                technique: "Pre-curved manual exploration",
                outcome: "Apical patency confirmed",
              },
              {
                type: "Glide Path Creation",
                instruments: [
                  "Manual flex K file #10",
                  "Manual flex K file #15",
                ],
                technique: "Manual approach with copious irrigation",
                outcome: "Controlled pathway to working length",
              },
              {
                type: "Working Length Determination",
                protocol: [
                  "Electronic Apex Locator",
                  "Verified with periapical Radiograph",
                ],
                outcome: "Reliable working length established",
              },
            ],
          },
          {
            phase: 2,
            title: "Shaping & Obturation",
            objectives: [
              "Preserve canal anatomy",
              "Achieve uniform taper",
              "Prevent transportation",
              "Ensure dense obturation",
            ],
            procedures: [
              {
                type: "Shaping Protocol",
                instruments: ["Vertex Blue #20/04 → #25/04"],
                technique: "Controlled-memory NiTi sequence",
                outcome: "Progressive shaping with curvature integrity",
              },
              {
                type: "Apical Finishing",
                instruments: ["Hand K-file #25"],
                technique: "Balanced force technique",
                outcome: "Defined apical stop",
              },
              {
                type: "Irrigation Protocol",
                materials: ["NaOCl 3%", "EDTA 17%", "Chlorhexidine 2%"],
                technique: "Passive ultrasonic irrigation",
                outcome: "Complete debris and smear layer removal",
              },
              {
                type: "Obturation",
                materials: ["Gutta-percha", "Bioceramic sealer"],
                technique: "Lateral condensation",
                outcome: "Homogeneous, three-dimensional fill",
              },
            ],
          },
        ],
      },
      results: {
        metrics: {
          proceduralSuccess: {
            anatomyPreservation: "98",
            complicationRate: "2",
            obturationQuality: "4.8",
          },
          skillDevelopment: {
            timeEfficiency: "35% ",
            errorReduction: "60% ",
          },
        },
        content: {
          achievements: [
            "Successful canal negotiation to working length",
            "Zero instrument separation incidents",
            "Maintained optimal taper without transportation",
            "Minor sealer extrusion into lateral delta of D canal",
          ],
          limitations: {
            noted: [
              "Last 0.5mm of M canal not negotiated, but obturation reached anatomical apex",
            ],
          },
        },
      },
    },
  },
};
export default caseSix;
