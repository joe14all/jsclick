import DentureWaxUp1 from "../../../assets/images/denturewaxup/denture1-1000px.jpg";
import DentureWaxUp2 from "../../../assets/images/denturewaxup/denture2-1000px.jpg";

const caseThree = {
  id: 3,
  title: "Complete Denture Rehabilitation",
  categories: ["prosthodontics"],
  thumbnail: {
    img: DentureWaxUp1,
    alt: "Complete denture Wax-up",
  },
  caseStudy: {
    carousel: [
      {
        img: DentureWaxUp1,
        alt: "Complete denture Wax-up",
        modality: "Laboratory Photography",
        date: "2020-05-18",
        tags: ["festooning", "wax-up", "setup"],
      },
      {
        img: DentureWaxUp2,
        alt: "Complete denture Wax-up",
        modality: "Artistic Photography",
        date: "2020-06-01",
        tags: ["Denture", "try-in", "occlusion"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 68 YO",
              gender: "➞ Male",
              occupation: "➞ Retired Chef",
            },
            medicalHistory: {
              systemic: ["Type II Diabetes (well-controlled)"],
              dental: [
                "Edentulous for 12 years",
                "Previous complete denture use (2013-2020)",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "My dentures look very artificial. They used to stay in place, but recently they become loose, especially in social settings.",
            concerns: [
              "❗️ Poor retention and stability",
              "❗️ Inadequate gingival (pink) aesthetics",
            ],
            expectations: [
              "🔶 Enhanced masticatory efficiency",
              "🔶 Natural gingival and tooth aesthetics",
              "🔶 Improved denture retention and stability",
            ],
          },
          clinicalAssessment: {
            ridgeResorption: {
              Maxillary: "Moderate resorption - Class II (Cawood & Howell)",
              Mandibular: "Severe resorption - Class III (Cawood & Howell)",
            },
            verticalDimension: {
              Rest: "62mm",
              Occlusion: "68mm",
            },
          },
        },
      },

      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Denture Adaptation",
            category: "Anatomy",
            details: {
              issues: [
                "Inadequate peripheral seal compromising retention",
                "Poor ridge adaptation",
              ],
              observations: [
                "Frequent displacement during function",
                "Aesthetic concerns due to instability",
              ],
              impact:
                "Reduced retention causing functional and psychological discomfort",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Gingival Aesthetics",
            category: "Esthetics",
            details: {
              complications: [
                "Flat gingival contours lacking definition",
                "Absence of papillary architecture",
              ],
              implications: [
                "Compromised smile harmony and soft tissue support",
                "Reduced patient confidence due to artificial appearance",
              ],
            },
            priority: "Critical",
          },
        ],
      },
      solutions: {
        title: "Prosthetic Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "3 weeks",
              focus: "Diagnostics & Jaw Relations",
            },
            {
              phase: 2,
              duration: "4 weeks",
              focus: "Clinician-Crafted Wax-Up & Processing",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Foundation Phase",
            objectives: ["Establish stable occlusion", "Define neutral zone"],
            procedures: [
              {
                type: "Custom Tray & Border Molding",
                outcome: "Accurate functional adaptation",
              },
              {
                type: "Jaw Relation Records",
                outcome: "Verified centric relation & vertical dimension",
              },
            ],
          },
          {
            phase: 2,
            title: "Clinician-Sculpted Wax-Up & Festooning",
            objectives: [
              "Precision tooth arrangement",
              "Natural gingival contours",
            ],
            procedures: [
              {
                type: "Teeth Wax-Up",
                focus: [
                  "Hand-shaped festooning for natural emergence profile",
                  "Refined gingival anatomy for enhanced esthetics",
                ],
                outcome: "Lifelike transition zones & improved smile harmony",
              },
              {
                type: "Wax Try-In",
                evaluations: [
                  "Phonetics & facial support",
                  "Gingival curvature & symmetry",
                ],
                outcome: "Successful Try-in, ready to process",
              },
              {
                type: "Laboratory Processing",
                outcome: "Durable, high-quality prosthesis",
              },
            ],
          },
        ],
      },

      results: {
        title: "Treatment Outcomes",
        metrics: {
          proceduralSuccess: {
            retentionImprovement: 90,
            stabilityEnhancement: 95,
            estheticRefinement: 98,
          },
          patientSatisfaction: {
            aesthetic: 4.9,
            functional: 4.7,
            overall: 4.8,
          },
        },
        content: {
          achievements: [
            "Enhanced festooning for natural gingival contours",
            "Improved denture seal and retention",
            "Balanced occlusion with stable prosthetic adaptation",
          ],
          patientFeedback: {
            quote: "My dentures look and feel like my natural teeth!",
            improvementsNoted: [
              "Confident smile",
              "Comfortable fit throughout the day",
            ],
          },
          limitations: {
            noted: [
              "Minor occlusal adjustment required",
              "Slight initial speech adaptation",
            ],
            futureConsiderations: [
              "Routine follow-up for tissue adaptation",
              "Annual maintenance evaluation",
            ],
          },
        },
      },
    },
  },
};
export default caseThree;
