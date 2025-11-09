import SecondMolarPreOp from "../../../assets/images/secondMolarEndo/preop-1000px.jpg";
import SecondMolarPostOp from "../../../assets/images/secondMolarEndo/postop-1000px.jpg";

const caseTwo = {
  id: 2,
  title: "Limited Access Endodontics ",
  categories: ["endodontics"],
  thumbnail: {
    img: SecondMolarPostOp,
    alt: "Post Op Endodontic Radiograph",
  },
  caseStudy: {
    carousel: [
      {
        img: SecondMolarPreOp,
        alt: "Preoperative Radiograph",
        caption: "Initial Apical Radiolucency",
        modality: "Periapical radiograph",
        date: "2022-10-17",
        tags: ["pre-op", "digital", "diagnostic"],
      },
      {
        img: SecondMolarPostOp,
        alt: "Postoperative Obturation",
        caption: "3D Obturation with MB2 Canal",
        modality: "Periapical radiograph",
        date: "2022-10-17",
        tags: ["post-op", "digital", "obturation"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 24 YO ",
              gender: "➞ Female",
              occupation: "➞ Student ",
            },
            medicalHistory: {
              systemic: ["ASA I"],
              dental: [
                "CAMBRA ➞ Active caries >3 lesions/24mo",
                "High caries risk ➞ Frequent High carb snacking",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "Progressive odontalgia transitioning from intermittent cold sensitivity to spontaneous continuous pain",
            concerns: ["Food Impaction", "Escalating pain "],
            expectations: [
              "🔶 Pain resolution",
              "🔶 Tooth preservation",
              "🔶 Quick recovery",
            ],
          },
          clinicalAssessment: {
            findings: {
              Tooth: "🦷#2",
              "Thermal Pulp Test": "Lingering cold response >15s",
              "Percussion test": "Localized tenderness",
              Mobility: "Miller Class 0",
              "Periodontal Status":
                "PD ≤3mm (localized Mesial bleeding on probing)",
            },
            radiographicFeatures: {
              "PDL Space": "Slight widening",
              "Apical Lesion": "Intact lamina dura",
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        icon: "warning",
        content: [
          {
            id: "C1",
            title: "Complex Anatomy Management",
            category: "Anatomy",
            details: {
              issues: ["Schneiderian curvature (30° mesiodistal in MB root)"],
              impact: "Missed anatomy risk",
            },
            priority: "Critical",
          },
          {
            id: "C2",
            title: "Operative Access Constraints",
            category: "Ergonomics",
            details: {
              complications: [
                "Restricted interarch clearance (30mm)",
                "Bucco-lingual access limitation (8mm corridor)",
                "Hypertrophic buccal mucosa retraction",
              ],
              implications: [
                "Reduced visualization",
                "Instrumentation difficulty",
              ],
            },
            priority: "Medium",
          },
        ],
      },
      solutions: {
        title: "Endodontic Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Single-visit protocol",
              focus: "Biomechanical Debridement & 3D Obturation",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Treatment Phase",
            objectives: [
              "Access Cavity",
              "WL determination",
              "Cleaning and Shaping",
              "Irrigation activation",
              "Vertical Compaction Obturation",
            ],
            procedures: [
              {
                type: "Access Cavity",
                // This was already correct: an array of strings.
                instruments: ["Endo-Z bur (Safe-ended)"],
                outcome: "Access to all canals",
              },
              {
                type: "Instrumentation",

                // FIX 1: 'system' was a string ("...").
                // It must be an array to be rendered by the 'sections' map.
                system: ["ProTaper Gold (Torque-controlled)"],

                // This was already correct: an array of strings.
                sequence: ["SX orifice opener", "F2 (Apical prep #25/.04 )"],

                // REFINEMENT 1: 'specifications' was an array of strings ("Torque ➞ ...").
                // This refactors it to use the { label, value } structure
                // that your `renderNestedList` component is built to handle.
                specifications: [
                  { label: "Torque", value: "Adaptive motion (6:1 reduction)" },
                  {
                    label: "Apical control",
                    value: "Patency file #10 K-file maintained",
                  },
                ],
              },
              {
                type: "Irrigation",

                // This was already correct: an array of strings.
                sequence: [
                  "5.25% NaOCl (between files)",
                  "17% EDTA ",
                  "2% CHX final rinse ",
                ],

                // REFINEMENT 2: 'activation' was an array of strings.
                // This also fits the { label, value } structure perfectly.
                activation: [
                  {
                    label: "Device",
                    value: "EndoActivator (Yellow tip) - NaOCl agitation",
                  },
                  {
                    label: "Protocol",
                    value: "3x20s cycles per canal (NaOCl)",
                  },
                ],
              },
              {
                type: "Obturation",
                // This is correct: 'technique' is a string and is rendered
                // in the footer of Procedure.jsx, not in the 'sections' map.
                technique: "Continuous wave vertical compaction",

                // This was already correct: an array of strings.
                parameters: ["System B", "Obtura III "],

                // This was already correct: an array of strings.
                materials: [
                  "AH Plus Bioceramic (Premixed syringe)",
                  "GP MatchPoint .04 (Non-standardized cone)",
                ],
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        icon: "success",
        metrics: {
          patientSatisfaction: {
            painRelief: 5,
            functional: 4,
            overall: 4.5,
          },
          proceduralSuccess: {
            anatomyPreservation: 95,
            complicationRate: 10,
            obturationQuality: 4.5,
          },
        },
        content: {
          achievements: [
            "High quality RCT in limited Access",
            "0% post-op sensitivity",
          ],
          patientFeedback: {
            quote: "The process was not easy, but it's worth it",
            improvementsNoted: ["Normal chewing function", "No nocturnal pain"],
          },
          limitations: {
            noted: ["Tiny sealer void is in middle 1/3 of MB root"],
            futureConsiderations: [
              "6-month PA follow-up",
              "Final coronal coverage within 4 weeks",
            ],
          },
        },
      },
    },
  },
};
export default caseTwo;
