import FrontalCast from "../../../assets/images/immediatedenture/frontalCast.jpg";
import FrontalWaxup from "../../../assets/images/immediatedenture/FrontalWaxup.jpg";
import OccCast from "../../../assets/images/immediatedenture/occCast.jpg";
import OccWaxup from "../../../assets/images/immediatedenture/occWaxup.jpg";

const caseEleven = {
  id: 11,
  title: "Immediate Denture Transition",
  categories: ["prosthodontics"],
  thumbnail: {
    img: FrontalCast,
    alt: "Pre-extraction Diagnostic Cast",
  },
  caseStudy: {
    carousel: [
      {
        img: FrontalCast,
        caption: "Diagnostic cast Frontal",
        alt: "Dentulous arch preservation",
        modality: "Lab Photography",
        tags: ["pre-op", "diagnostic"],
        date: "07-4-2020",
      },
      {
        img: FrontalWaxup,
        caption: "Teeth setup Frontal",
        alt: "Transitional tooth arrangement",
        modality: "Lab Photography",
        tags: ["wax-up", "bio-mimic"],
        date: "07-14-2020",
      },
      {
        img: OccCast,
        caption: "Diagnostic cast Occlusal",
        alt: "Occlusal relationship recording",
        modality: "Lab Photography",
        tags: ["diagnostic", "occlusion", "immediate-planning"],
        date: "07-4-2020",
      },
      {
        img: OccWaxup,
        caption: "Teeth setup Frontal",
        alt: "Compromised posterior arrangement",
        modality: "Lab Photography",
        tags: ["wax-up", "bio-mimic"],
        date: "07-14-2020",
      },
    ],
    sections: {
      overview: {
        title: "Clinical Presentation",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 58 YO",
              gender: "➞ Female",
              occupation: "➞ Retired Teacher",
            },
            psychological: {
              state: "High dental anxiety",
              concerns: [
                "Fear of being toothless",
                "Social embarrassment during transition",
                "Uncertainty about facial appearance",
              ],
              copingStrategy: [
                "Multi-visit counseling",
                "Transitional wax-up preview",
              ],
            },
            medicalHistory: {
              systemic: ["Hypertension controlled"],
              dental: [
                "Fully dentulous (terminal dentition)",
                "Generalized Stage IV periodontitis",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "My front teeth keep getting looser and I want to avoid looking toothless",
            concerns: [
              "❗️ Fear of edentulous appearance",
              "❗️ Anxiety about transition period",
              "❗️ Immediate functional needs",
            ],
            expectations: [
              "🔶 No visible toothless period",
              "🔶 Familiar tooth arrangement",
              "🔶 Immediate function post-extraction",
            ],
          },
          clinicalAssessment: {
            oralHygiene: { Poor: "no floss or interproximal cleaning." },
            periodontalStatus: {
              Generalized: "Stage IV",
              Grade: "C",
            },
            periodontalFindings: {
              "Plaque Free Percentage": "20%",
              "Bleeding Percentage": "80%",
              "Probing Depths": "4-6mm",
              "Furcation Involvement": {
                "Class II": ["🦷#3 ➞ B", "🦷#14 ➞ B&D"],
              },
              Mobility: "2-3",
              "Gingival Status": "Generalized moderate",
            },

            existingConditions: {
              "Missing Teeth": [
                "🦷#1",
                "🦷#2",
                "🦷#5",
                "🦷#13",
                "🦷#15",
                "🦷#16",
                "🦷#17",
                "🦷#31",
              ],
              "Tooth Conditions": {
                "🦷#3": "➞ Subgingival fracture of P cusps",
                "🦷#4": "➞ M Drifting",
                "🦷#7": "➞ MBL chip",
                "🦷#9": "➞ Advanced B Decay",
              },

              "Other Findings": [
                "➞ Mid- line Diastema",
                "➞ Irregular arch form",
                "➞ Irregular occlusal line",
              ],
            },
          },
        },
      },
      challenges: {
        content: [
          {
            id: "IDC1",
            title: "Psychological Transition",
            category: "logistics",
            details: {
              issues: [
                "Patient anxiety about edentulism",
                "Unrealistic expectations of immediate function",
                "Attachment to existing tooth position despite pathology",
              ],
              impact:
                "Required careful communication and acceptance of transitional occlusal compromise",
            },
            priority: "high",
          },
          {
            id: "IDC2",
            title: "Biological Uncertainty",
            category: "Biology",
            details: {
              issues: [
                "Unpredictable post-extraction ridge changes",
                "No try-in phase possible",
                "Need for tissue conditioning space",
              ],
              impact:
                "Required overcontoured flange design and delayed final reline",
            },
            priority: "critical",
          },
          {
            id: "IDC3",
            title: "Occlusal Compromise",
            category: "occlusion",
            details: {
              issues: [
                "Maintaining existing tooth positions",
                "Lack of posterior occlusal balance",
                "Immediate post-op vertical dimension maintenance",
              ],
              impact:
                "Acceptable short-term compromise for psychological benefit",
            },
            priority: "medium",
          },
        ],
      },
      solutions: {
        title: "Immediate Denture Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Day 1",
              focus: "Pre-extraction Records & Planning",
            },
            {
              phase: 2,
              duration: "Day 7",
              focus: "Denture Construction (No Try-In)",
            },
            {
              phase: 3,
              duration: "Day 14",
              focus: "Extraction & Immediate Delivery",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Pre-Extraction Modeling",
            objectives: [
              "Preserve existing occlusal relationships",
              "Design tissue chambers",
              "Psychological preparation",
            ],
            procedures: [
              {
                type: "Final Dentulous Impressions",
                material: "Alginate",
                outcome: "Definitive pre-extraction cast",
              },
              {
                type: "Tooth Position Mapping",
                technique: "Direct cast measurement",
                outcome: "Maintained facial support landmarks",
              },
            ],
          },
          {
            phase: 2,
            title: "Accelerated Fabrication",
            objectives: [
              "Biomimetic tooth arrangement",
              "Tissue conditioning design",
              "Occlusal transition planning",
            ],
            procedures: [
              {
                type: "Anterior Setup",
                technique: "Direct duplication of existing positions",
                material: "Biofunctional acrylic teeth",
                outcome: "Familiar aesthetics for patient adaptation",
              },
              {
                type: "Posterior Design",
                parameters: [
                  "Shallow cusp anatomy",
                  "Reduced occlusal table",
                  "Tissue displacement compensation",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Surgical-Prosthetic Integration",
            objectives: [
              "Atraumatic extraction",
              "Immediate delivery",
              "Post-op management",
            ],
            procedures: [
              {
                type: "Extraction Protocol",
                technique: "Full arch clearance",
                considerations: [
                  "Alveolar preservation",
                  "Socket grafting with collagen",
                  "Denture liner application",
                ],
              },
              {
                type: "Delivery Protocol",
                steps: [
                  "Check fitting",
                  "Minor occlusal adjustments",
                  "Post-op instructions",
                ],
              },
              {
                type: "Follow-up Schedule",
                schedule: [
                  "24-hour check",
                  "72-hour adjustment",
                  "1-week adjustment",
                  "4-week reline",
                ],
              },
            ],
          },
        ],
      },
      results: {
        title: "Transition Outcomes",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.8,
            psychological: 4.9,
            functional: 3.9,
            overall: 4.5,
          },
        },
        content: {
          achievements: [
            "Seamless transition from dentulous state",
            "Immediate phonetics preservation",
            "Successful psychological adaptation",
            "Aesthetic continuity maintained",
          ],
          limitations: {
            noted: [
              "Temporary posterior occlusal instability",
              "Initial masticatory efficiency reduced by 40%",
              "Midline deviation preserved from original dentition",
            ],
            corrections: [
              "Planned occlusal refinement at 4-week reline",
              "Tissue conditioning liner protocol initiated",
              "Gradual posterior table expansion planned",
            ],
          },
          technicalSuccess: {
            dentureStability: {
              maxilla: "🟡 Acceptable",
            },
            dentureRetention: {
              maxilla: "🟡 Acceptable",
            },
            dentureSupport: {
              maxilla: "🟡 Acceptable",
            },
          },
          patientFeedback: {
            quote:
              "Thank you for making this transition much smother that what I expected!",
            improvementsNoted: [
              "Social confidence maintained",
              "Immediate chewing ability",
            ],
          },
        },
      },
    },
  },
};

export default caseEleven;
