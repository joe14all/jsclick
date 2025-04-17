import PreOPImage from "../../../assets/images/MolarRetreatment2/PreOP.jpg";
import PostOp1Image from "../../../assets/images/MolarRetreatment2/PostOp1.jpg";
import PostOp2Image from "../../../assets/images/MolarRetreatment2/PostOp2.jpg";

const caseFifteen = {
  id: 15,
  title: "Molar Retreatment - Post and Crown",
  categories: ["endodontics"],
  thumbnail: {
    img: PostOp1Image,
    alt: "Pre-Operative Radiograph of Treated Molar with Crown",
  },
  caseStudy: {
    carousel: [
      {
        img: PreOPImage,
        caption: "Pre-Op",
        alt: "4-5mm Periapical Lesion with Underfilled MB1 & Missed ML",
        modality: "Periapical Radiograph",
        tags: ["pre-op", "crown", "infection", "underfilled MB1", "missed ML"],
        date: "2022-10-17",
      },
      {
        img: PostOp1Image,
        caption: "Post-Op",
        alt: "Completed Obturation with ML Negotiation ",
        modality: "Periapical Radiograph",
        tags: ["post-op", "obturation", "bioceramic"],
        date: "2022-10-17",
      },
      {
        img: PostOp2Image,
        caption: "Post-Op  M Shift",
        alt: "Completed Obturation with ML Negotiation ( M shift) ",
        modality: "Periapical Radiograph",
        tags: ["post-op", "obturation", "bioceramic", "overfill", "shift"],
        date: "2022-10-17",
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 53 YO",
              gender: "➞ Male",
              occupation: "➞ Contractor",
            },
            medicalHistory: {
              systemic: ["ASA II", "Hypertension (controlled)"],
              dental: [
                "Previous RCT (3 years prior)",
                "Crown placement #18 with post",
              ],
            },
          },
          presentation: {
            chiefComplaint: "Persistent discomfort in lower left molar",
            concerns: [
              "❗️ Tenderness on percussion",
              "❗️ Mild buccal swelling",
              "❗️ Chewing discomfort",
            ],
            expectations: [
              "🔶 Complete infection resolution",
              "🔶 Preservation of tooth",
              "🔶 Restoration of function",
            ],
          },
          clinicalAssessment: {
            findings: {
              Tooth: "🦷#18",
              "Full coverage PFM crown": ["➞ Open D Margin"],
              Canals: [
                "➞ MB & ML under-filled ",
                "➞ Distal missed",
                "➞ Distal canal has threaded metal post",
              ],
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Access",
            category: "technique",
            details: {
              issues: [
                "PFM crown marginal leakage",
                "Limited access through crown",
                "Risk of crown fracture during access",
              ],
              impact: "Potential risk of perforation",
            },
            priority: "Critical",
          },
          {
            id: "C2",
            title: "Canal Negotiation & Obstruction",
            category: "anatomy",
            details: {
              issues: [
                "Distal canal previously missed",
                "Threaded metal post obstructing canal entry",
                "Under-filled MB and ML canals with calcification risk",
              ],
              impact:
                "Complex canal anatomy and obstructions compromise disinfection and complete obturation",
            },
            priority: "High",
          },
          {
            id: "C3",
            title: "Restorative Prognosis",
            category: "restoration",
            details: {
              issues: [
                "Existing post limits re-treatment flexibility",
                "Open distal margin jeopardizing coronal seal",
              ],
              impact:
                "Long-term prognosis relies on achieving both apical and coronal seal ",
            },
            priority: "Moderate",
          },
        ],
      },

      solutions: {
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Day 1–3",
              focus: "Post & Crown Removal, Canal Re-treatment",
            },
            {
              phase: 2,
              duration: "Day 4–7",
              focus: "Obturation & Definitive Restoration",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Access & Endodontic Retreatment",
            objectives: [
              "Safe removal of post and PFM crown",
              "Locate and instrument all canals",
              "Disinfect system thoroughly before obturation",
            ],
            procedures: [
              {
                type: "Crown & Post Removal",
                instruments: [
                  "T-bar",
                  "Ultrasonic scaler",
                  "Post extractor kit",
                ],
                protocol: [
                  "Section crown at CEJ to facilitate removal",
                  "Apply ultrasonic energy to weaken cement interface",
                  "Use reverse torque to disengage threaded post",
                ],
                mechanical: ["Avoid root fracture during post retrieval"],
                outcome: "Crown and post removed without damage to root",
              },
              {
                type: "Temporary Crown Placement",
                material: "Bis-acryl resin",
                features: ["Protective sealing", "Maintains occlusal function"],
                process: [
                  "Fabricate chairside temporary crown",
                  "Ensure marginal adaptation and light occlusion",
                  "Cement with non-eugenol temporary luting agent",
                ],
              },
              {
                type: "Canal Re-instrumentation",
                instruments: ["C+ files", "Hand K-files", "Rotary NiTi system"],
                strategy: "Step-back technique with copious irrigation",
                biological: ["NaOCl 5.25%", "EDTA rinse", "CHX final rinse"],
                activation: ["Sonic agitation", "Paper point drying"],
                checks: ["Working length via apex locator and radiographs"],
              },
            ],
          },
          {
            phase: 2,
            title: "Obturation & Definitive Crown Fabrication",
            objectives: [
              "Three-dimensional canal obturation",
              "Ensure coronal seal integrity",
              "Fabricate and seat final crown",
            ],
            procedures: [
              {
                type: "Obturation Protocol",
                technique: "Warm vertical compaction",
                materials: ["Gutta-percha", "Bioceramic sealer"],
                parameters: [
                  "All three canals obturated to WL",
                  "No voids or overextension on radiograph",
                ],
                outcome: "Apical and coronal seal confirmed",
              },
              {
                type: "Core Build-Up",
                material: "Dual-cure composite resin",
                strategy: "Reinforce remaining structure before crown prep",
                protocol: [
                  "Bonding agent application",
                  "Layered bulk fill",
                  "Occlusal and axial contouring",
                ],
              },
              {
                type: "Final Crown Fabrication",
                materials: ["Zirconia", "Resin modified GI"],
                instruments: ["Digital scanner"],
                sequence: [
                  "Tooth prep with 1.5mm occlusal reduction",
                  "Digital or analog impression",
                  "Lab-fabricated zirconia crown",
                  "Cementation under isolation",
                ],
                checks: ["Occlusion", "Contact", "Marginal fit"],
                outcome:
                  "Final crown seated with functional and esthetic integration",
              },
            ],
          },
        ],
      },

      results: {
        metrics: {
          patientSatisfaction: {
            painRelief: 5.0,
            functional: 4.8,
            aesthetic: 4.7,
          },
          proceduralSuccess: {
            anatomyPreservation: 100,
            complicationRate: 2,
            obturationQuality: 4.8,
          },
        },
        content: {
          achievements: [
            " Threaded post removed without root damage",
            " Missed distal canal located and treated",
            " All canals instrumented and obturated to working length",
            " Temporary crown maintained function and comfort between visits",
            " New zirconia crown provided strong marginal integrity and esthetics",
          ],
          patientFeedback: {
            quote: "I can finally chew without hesitation",
            improvementsNoted: [
              " No more pain on biting",
              " Chewing efficiency restored",
              " Crown fits and feels natural",
            ],
          },
          limitations: {
            noted: [
              "Initial access was technically challenging due to the metal post and prior crown",
              "Slight gingival irritation during temporary phase (resolved after final cementation)",
            ],
            futureConsiderations: [
              "Periodic follow-up to monitor apical healing via radiographs",
              "Oral hygiene reinforcement to maintain crown margins",
            ],
          },
        },
      },
    },
  },
};

export default caseFifteen;
