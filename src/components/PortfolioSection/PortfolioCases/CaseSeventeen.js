import PreOpImage from "../../../assets/images/EndoThroughCrown-Premolar/PreOp.jpg";
import PostOpImage from "../../../assets/images/EndoThroughCrown-Premolar/PostOP.jpg";

const caseSeventeen = {
  id: 17,
  title: "RCT Through Crown",
  categories: ["endodontics"],
  thumbnail: {
    img: PostOpImage,
    alt: "Post-operative radiograph showing successful obturation through crown access",
  },
  caseStudy: {
    carousel: [
      {
        img: PreOpImage,
        caption: "Pre-Op",
        alt: "2.5mm Periapical Lesion with Intact Crown Margins",
        modality: "Periapical Radiograph",
        tags: ["pre-op", "crown", "infection", "periapical lesion", "PFM"],
        date: "2023-03-15",
      },
      {
        img: PostOpImage,
        caption: "Post-Op",
        alt: "Single-canal Obturation with Conservative Access",
        modality: "Periapical Radiograph",
        tags: ["post-op", "bioceramic", "access-seal", "XP-endo", "PIPS"],
        date: "2023-04-02",
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 48 YO",
              gender: "➞ Male",
              occupation: "➞ Banker",
            },
            medicalHistory: {
              systemic: ["ASA II", "Hypertension (controlled)"],
              dental: [
                "Crown placement #4 (8 weeks prior)",
                "No previous endodontic treatment",
              ],
            },
          },
          presentation: {
            chiefComplaint: "Persistent pain under new crown",
            concerns: [
              "❗️ Tenderness on chewing",
              "❗️ Night-time discomfort",
              "❗️ Crown preservation request",
            ],
            expectations: [
              "🔶 Maintain existing restoration",
              "🔶 Complete pain resolution",
              "🔶 Preserve aesthetic appearance",
            ],
          },
          clinicalAssessment: {
            findings: {
              Tooth: "🦷#4",
              "Existing Crown": [
                "➞ Ful Anatomic Zirconium",
                "➞ Excellent marginal integrity",
              ],
              findings: [
                "➞ 2.5mm periapical radiolucency (periapical radiograph)",
                "➞ Necrotic pulp",
                "➞ Positive percussion",
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
            title: "Conservative Access",
            category: "technique",
            details: {
              issues: [
                "Preservation of occlusal crown structure",
                "Limited visual landmarks through crown",
              ],
              impact: "High precision required to maintain crown integrity",
            },
            priority: "Critical",
          },
          {
            id: "C2",
            title: "Structural Preservation",
            category: "biomechanics",
            details: {
              issues: [
                "Remaining tooth structure (40%)",
                "Crack propagation potential",
                "Minimal dentin conservation requirements",
              ],
              impact:
                "Balancing disinfection needs with structural preservation",
            },
            priority: "High",
          },
          {
            id: "C3",
            title: "Coronal Seal Maintenance",
            category: "restoration",
            details: {
              issues: [
                "Existing crown margin integrity",
                "Access cavity size limitations",
                "Composite-Zirconium interface challenges",
              ],
              impact: "Long-term success dependent on fluid-tight seal",
            },
            priority: "Medium",
          },
        ],
      },
      solutions: {
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Day 1–2",
              focus: "Conservative Access & Initial Disinfection",
            },
            {
              phase: 2,
              duration: "Day 3–5",
              focus: "Final Obturation & Access Restoration",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Microscopic Access & Shaping",
            objectives: [
              "Crown-preserving occlusal access",
              "Complete biofilm removal",
              "Maximal dentin conservation",
            ],
            procedures: [
              {
                type: "Guided Access Protocol",
                instruments: [
                  "DOM (16x magnification)",
                  "Ultrasonic diamond tips",
                  "Transillumination device",
                ],
                protocol: [
                  "Rubber dam isolation with resin guard matrix",
                  "Stepwise crown penetration using tactile feedback",
                  "Landmark identification",
                ],
                mechanical: ["Maintain 1mm safety margin from crown edges"],
                outcome: "Direct canal access with 1.0mm occlusal opening",
              },
              {
                type: "Canal Instrumentation",
                system: ["Vortex- blue"],
                parameters: [, "300rpm", "1Ncm torque"],
                irrigation: [
                  "5.25% NaOCl with PIPS activation",
                  "17% EDTA + surfactant",
                ],
                checks: ["Patency confirmation with 08# K-file"],
              },
            ],
          },
          {
            phase: 2,
            title: "3D Obturation & Coronal Seal",
            objectives: [
              "Apical seal with bioceramics",
              "Aesthetic access restoration",
              "Occlusal function verification",
            ],
            procedures: [
              {
                type: "Obturation Technique",
                technique: "Single-cone + Warm vertical compaction",
                parameters: [
                  "0.04 taper gutta-percha",
                  "BC Sealer ➞ 3min working time",
                  "System B ➞ 200°C, 5s dwell",
                  "Vertical compaction",
                ],
              },
              {
                type: "Access Restoration",
                materials: [
                  "Zirconomer base layer",
                  "Nano-hybrid composite",
                  "Surface sealant",
                ],
                strategies: [
                  "Selective enamel etching (20s)",
                  "Universal adhesive application",
                  "Stratified oblique layering",
                ],
                finishing: [
                  "12-fluted carbide burs",
                  "Diamond polishing paste",
                  "Margin checker staining",
                ],
                outcome: "Seamless margin with <50μm interface",
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
            aesthetic: 4.8,
          },
          proceduralSuccess: {
            anatomyPreservation: 95,
            complicationRate: 2,
            obturationQuality: 4.9,
          },
        },
        content: {
          achievements: [
            "Crown integrity fully maintained",
            "Complete lesion resolution at 6-month recall",
            "0% marginal gap increase post-treatment",
            "Patient-reported natural feel and function",
            "No occlusal adjustment required",
          ],
          patientFeedback: {
            quote:
              "The crown looks and functions exactly like before - but now without any pain!",
            improvementsNoted: [
              "Immediate pain resolution post-treatment",
              "Perfect chewing comfort restored",
              "No visible access restoration",
            ],
          },
        },
      },
    },
  },
};

export default caseSeventeen;
