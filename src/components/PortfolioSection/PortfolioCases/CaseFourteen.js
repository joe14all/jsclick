import PreOpImage from "../../../assets/images/MolarRetreatment/PreOp.jpg";
import PostOpImage from "../../../assets/images/MolarRetreatment/PostOp.jpg";

const caseFourteen = {
  id: 14,
  title: "Maxillary Molar Retreatment",
  categories: ["endodontics", "retreatment"],
  thumbnail: {
    img: PostOpImage,
    alt: "3D Obturation with MB2 Negotiation",
  },
  caseStudy: {
    carousel: [
      {
        img: PreOpImage,
        caption: "Preoperative Radiograph",
        alt: "Residual Apical Periodontitis (5-6mm Radiolucency)",
        modality: "Periapical Radiograph",
        date: "2022-10-10",
        tags: [
          "pre-op",
          "digital",
          "infection",
          "missed MB2",
          "underfilled MB1",
        ],
      },
      {
        img: PostOpImage,
        caption: "Postoperative Obturation",
        alt: "Four-Canal Obturation with Bioceramics (MB2 Negotiated to WL)",
        modality: "Periapical Radiograph",
        date: "2022-10-10",
        tags: ["post-op", "CBCT-guided", "bioceramic", "apical seal"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 62 YO",
              gender: "➞ Male",
              occupation: "➞ Executive",
            },
            medicalHistory: {
              systemic: ["ASA III", "Non-smoker"],
              dental: [
                "Previous RCT ➞ 2018 (General dentist)",
                "CRRM ➞ High risk (Multiple retreatments)",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "Chronic dull ache exacerbated by mastication with previous failed endodontic therapy",
            concerns: [
              "❗️ Recurrent sinus tract",
              "❗️ Vertical root fracture suspicion",
            ],
            expectations: [
              "🔶 Definitive infection resolution",
              "🔶 Functional restoration",
              "🔶 Minimally invasive approach",
            ],
          },
          clinicalAssessment: {
            findings: {
              Tooth: "🦷#3",

              "Percussion Test": "++",
              Mobility: "Miller Class I",
              "Periodontal Status": "PD ≤4mm (Buccal pocket 5mm)",
            },
            radiographicFeatures: {
              "Apical Lesion": "5-6mm radiolucency (ICOI Class 2B)",
              "Canal Configuration": "Vertucci Type II (MB1-MB2) ",
              "Existing Obturation": "MB1 Underfilled (3mm short), MB2 Missed",
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Missed MB2 Canal Management",
            category: "Anatomy",
            details: {
              issues: [
                "Calcified MB2 orifice (C-shaped groove anatomy)",
                "Dentinal map formation ➞ 0.5mm apical to MB1",
              ],
              impact: "Persistent infection reservoir risk",
            },
            priority: "Critical",
          },
        ],
      },
      solutions: {
        title: "Retreatment Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "2 visits (7 days apart)",
              focus: "Debridement & Calcium Hydroxide Medication",
            },
            {
              phase: 2,
              duration: "1 visit",
              focus: "Bioceramic Obturation & Coronal Seal",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Debridement Phase",
            objectives: [
              "Existing GP removal",
              "Patency establishment",
              "MB2 negotiation",
            ],
            procedures: [
              {
                type: "CBCT Analysis",
                parameters: [
                  "Limited FOV (5x5cm)",
                  "90μm voxel size",
                  "Accuitomo 170",
                ],
                outcome: "MB2 confirmed 1.5mm palatal to MB1",
              },
              {
                type: "Ultrasonic Retreatment",
                instruments: ["ProUltra ENDO-2 tip", "Woodpecker RCT unit"],
                sequence: [
                  "Coronal zap ➞ 25% power",
                  "GP removal ➞ #20 H-file",
                ],
                irrigation: [
                  "Solvent protocol: Chloroform 0.5ml/canal",
                  "17% EDTA + 2% CHX final rinse",
                ],
              },
            ],
          },
          {
            phase: 2,
            title: "Three-Dimensional Obturation",
            objectives: [
              "Hydraulic condensation",
              "Apical control zone creation",
              "Corono-apical seal",
            ],
            procedures: [
              {
                type: "Bioceramic Obturation",
                technique: "Single-cone + Warm vertical compaction",
                parameters: [
                  "BC Sealer ➞ 3min working time",
                  "System B ➞ 200°C, 5s dwell",
                ],
                qualityControl: [
                  "Obturation length ±0.5mm from apex",
                  "Sealer extrusion monitoring",
                ],
              },
              {
                type: "Immediate Restoration",
                materials: [
                  "Bulk-fill composite (SDR)",
                  "Universal adhesive (Scotchbond)",
                ],
                protocol: [
                  "2mm horizontal matrix",
                  "C-factor reduction technique",
                ],
              },
            ],
          },
        ],
      },
      results: {
        metrics: {
          patientSatisfaction: {
            painRelief: 4.9,
            functional: 4.7,
            overall: 4.8,
          },
          proceduralSuccess: {
            anatomyPreservation: 92,
            complicationRate: 5,
            obturationQuality: 4.7,
          },
        },
        content: {
          achievements: [
            "MB2 negotiated to WL (21.5mm)",
            "0% post-op flare-up",
            "Complete sinus tract resolution",
          ],
          patientFeedback: {
            quote: "Finally pain-free after years of discomfort",
            improvementsNoted: [
              "Normal occlusion restored",
              "No swelling episodes",
            ],
          },
          limitations: {
            noted: [
              "Remaining dentin thickness 1.3mm (buccal)",
              "Minor overfill in Palatal canal",
            ],
            futureConsiderations: [
              "Full-coverage crown within 8 weeks",
              "6/12/24-month PA recall protocol",
              "Oral microbiome analysis (HOMIM)",
            ],
          },
        },
      },
    },
  },
};
export default caseFourteen;
