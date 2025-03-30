import VeneerPreOp from "../../../assets/images/porcelainVeneers/preop-1000px.jpg";
import VeneerTryInFrontal from "../../../assets/images/porcelainVeneers/firstAttempt_frontal.jpg";
import VeneerTryInSide from "../../../assets/images/porcelainVeneers/firstAttempt_side.jpg";
import VeneerPostOp from "../../../assets/images/porcelainVeneers/postop-1000px.jpg";
const caseOne = {
  id: 1,
  title: "Porcelain Veneers",
  categories: ["restorative", "cosmetic"],
  thumbnail: {
    img: VeneerPreOp,
    alt: "Maxillary Central Incisors Preparation",
  },
  caseStudy: {
    carousel: [
      {
        img: VeneerPreOp,
        alt: "Preoperative Frontal View",
        caption: "Fractured Veneer #9 - Initial Presentation",
        modality: "Intraoral - Frontal",
        date: "2022-06-08",
        tags: ["pre-op", "fracture", "discoloration"],
      },
      {
        img: VeneerTryInFrontal,
        alt: "Try-in Frontal View",
        caption: "Provisional Veneers - Frontal Evaluation",
        modality: "Intraoral - Frontal",
        date: "2022-06-14",
        tags: ["try-in", "translucency", "contour"],
      },
      {
        img: VeneerTryInSide,
        alt: "Try-in Lateral View",
        caption: "Provisional Veneers - Lateral Evaluation",
        modality: "Intraoral - Lateral",
        date: "2022-06-14",
        tags: ["try-in", "emergence-profile", "opaque"],
      },
      {
        img: VeneerPostOp,
        alt: "Postoperative Frontal View",
        caption: "Final Veneers #8-10 - Delivered Result",
        modality: "Intraoral - Frontal",
        date: "2022-06-30",
        tags: ["post-op", "esthetics", "harmony"],
      },
    ],

    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 34 YO",
              gender: "➞ Male",
              occupation: "➞ Attorney (high aesthetic demand)",
            },
            medicalHistory: {
              systemic: ["ASA I"],
              dental: ["Porcelain veneers (at 18Y)"],
            },
          },
          presentation: {
            chiefComplaint:
              "I was very happy when I got my veneers, but it got cracked following a traumatic fall",
            concerns: ["Compromised smile aesthetics"],
            expectations: [
              "🔶 Natural-looking solution",
              "🔶 Durable restoration",
            ],
          },
          clinicalAssessment: {
            existingRestorations: [
              {
                Teeth: ["🦷 #8", "🦷 #9"],
                Condition: [
                  "❗️ Fractured porcelain veneer (Facial crack #9)",
                  "❗️ Marginal discoloration",
                  "❗️ Value mismatch with natural dentition",
                  "❗️ Midline discrepancy (0.5mm right deviation)",
                ],
              },
            ],
            gingivalArchitecture: {
              recession: ["➞ Miller Class I at #9"],
              symmetry: ["➞ 1 mm discrepancy"],
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Aesthetic Integration",
            category: "Esthetics",
            details: {
              issues: [
                "Irregular gingival line",
                "1.5 mm gingival recession on tooth #9",
              ],
              impact: "Uneven teeth height",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Try-in Substrate Management",
            category: "Biomimetics",
            details: {
              issues: [
                "High opacity of zirconia mismatching adjacent dentition",
                "Inadequate light transmission for vitality",
              ],
              impact: "Artificial 'chalky' appearance",
            },
            priority: "Critical",
          },
          {
            id: "C3",
            title: "Try-in Prosthetic Design",
            category: "Esthetics",
            details: {
              issues: [
                "Under-contoured cervical 1/3 (Check Lateral Try in Photos)",
                "Fan-shaped emergence",
              ],
              impact: "Lack of esthetic harmony",
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "⏳ 2 visits",
              focus: "Diagnostic Preparation",
            },
            {
              phase: 2,
              duration: "⏳ 1 week",
              focus: "Zirconia Trial (Rejected)",
            },
            {
              phase: 3,
              duration: "⏳ 2 weeks",
              focus: "Final e.max Restoration",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Foundation Preparation",
            objectives: [
              "Biological width establishment",
              "Aesthetic margin placement",
              "Substrate harmonization",
            ],
            procedures: [
              {
                type: "Laser Contouring",
                outcome: "Gingival symmetry established",
                details: ["Diode laser troughing for #8"],
              },
              {
                type: "Minimal Preparation",
                outcome: "0.3-0.5mm enamel preservation",
                details: ["Guided depth reduction"],
              },
            ],
          },
          {
            phase: 2,
            title: "Material Evaluation Phase",
            objectives: [
              "Opacity assessment",
              "Emergence profile verification",
              "Patient acceptance trial",
            ],
            procedures: [
              {
                type: "Zirconia Provisional",
                outcome: "Rejected 🚫",
                details: [
                  "Inadequate light transmission",
                  "Cervical undercontouring",
                  "Unnatural surface characterization",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Definitive Restoration",
            objectives: [
              "Biomimetic layering",
              "Marginal seal optimization",
              "Functional aesthetic integration",
            ],
            procedures: [
              {
                type: "Lithium Disilicate Fabrication",
                technique: "Cutback Technique",
                details: [
                  "Monolithic core reduction",
                  "Surface characterization",
                  "Internal halo development",
                ],
                outcome: "Vital tooth mimicry achieved",
              },
              {
                type: "Adhesive Protocol",
                cement: "Variolink Esthetic LC",
                steps: [
                  "Selective enamel etching (30s)",
                  "Silane coupling agent",
                  "Dual-cure cementation",
                ],
                outcome: "Optimal marginal adaptation",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.5,
            functional: 5,
            overall: 4.7,
          },
        },
        content: {
          achievements: [
            "Complete fracture resistance at 6 months",
            "Adjacent teeth preserved (no preparation of #7/11)",
            "Natural optical integration with existing dentition",
            "Gingival health maintained (GI=0)",
          ],
          patientFeedback: {
            quote: "I like how natural my teeth look now!",
            improvementsNoted: ["Enhanced professional confidence"],
          },
          limitations: {
            noted: ["Subtle value discrepancy in artificial lighting"],
            futureConsiderations: ["Annual monitoring"],
          },
        },
      },
    },
  },
};

export default caseOne;
