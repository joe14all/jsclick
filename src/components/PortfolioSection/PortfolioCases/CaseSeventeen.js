import PreOpImage from "../../../assets/images/EndoThroughCrown-Premolar/PreOp.jpg";
import PostOpImage from "../../../assets/images/EndoThroughCrown-Premolar/PostOP.jpg";

const caseSeventeen = {
  id: 17,
  title: "Root Canal through crown",
  categories: ["endodontics"],
  thumbnail: {
    img: PostOpImage,
    alt: "Post-op radiograph of crowned premolar",
  },
  caseStudy: {
    carousel: [
      {
        img: PreOpImage,
        alt: "Pre-operative radiograph",
        caption: "Periapical lesion under crown",
        modality: "Digital Radiograph",
        tags: ["pre-op", "crown", "infection"],
      },
      {
        img: PostOpImage,
        alt: "Post-operative radiograph",
        caption: "Obturation through crown",
        modality: "Digital Radiograph",
        tags: ["post-op", "bioceramic", "access-seal"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          patientProfile: {
            demographic: {
              age: 52,
              gender: "female",
            },
            medicalHistory: {
              systemic: ["Hypertension (controlled)"],
              dental: ["Recent crown placement (8 weeks prior)"],
            },
          },
          presentation: {
            chiefComplaint: "Persistent pain under new crown",
            concerns: [
              "Crown preservation request",
              "Chewing sensitivity",
              "Night-time discomfort",
            ],
            expectations: [
              "Preserve existing restoration",
              "Complete infection resolution",
              "Maintain aesthetics",
            ],
          },
          clinicalAssessment: {
            existingRestorations: {
              teeth: ["#4"],
              condition: [
                "Porcelain-fused-to-metal crown",
                "Marginal integrity excellent",
                "Periapical radiolucency (3mm)",
              ],
            },
            pulpTest: {
              vitality: "Necrotic",
              percussion: "Positive",
            },
            imagingFindings: {
              CBCT: ["Lesion confined to apical area", "Intact crown margins"],
            },
          },
        },
      },
      challenges: {
        title: "Treatment Complexities",
        content: [
          {
            id: "TC1",
            title: "Restorative Constraints",
            category: "Access",
            details: {
              issues: [
                "Occlusal porcelain thickness (1.8mm)",
                "Existing crown margin integrity",
                "Limited visual landmarks",
              ],
              impact: "Access cavity precision critical",
            },
            priority: "High",
          },
          {
            id: "TC2",
            title: "Biomechanical Risks",
            category: "Structural",
            details: {
              issues: [
                "Remaining tooth structure (35%)",
                "Thermal expansion mismatch risk",
                "Crack propagation potential",
              ],
              impact: "Fracture risk mitigation essential",
            },
            priority: "Critical",
          },
        ],
      },
      solutions: {
        title: "Conservative Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Diagnostic visit",
              focus: "Lesion confirmation",
            },
            {
              phase: 2,
              duration: "2 treatment visits",
              focus: "Through-crown RCT",
            },
            {
              phase: 3,
              duration: "Final visit",
              focus: "Access seal & follow-up",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Minimally Invasive Access",
            objectives: [
              "Crown preservation",
              "Precise occlusal access",
              "Canal identification",
            ],
            procedures: [
              {
                type: "Guided Access",
                technique: "CBCT-guided navigation",
                tools: ["Dental operating microscope", "Ultrasonic tips"],
                outcome: "Direct canal access achieved",
              },
              {
                type: "Margin Protection",
                materials: ["Rubber dam isolation", "Resin guard matrix"],
              },
            ],
          },
          {
            phase: 2,
            title: "Canal Disinfection",
            objectives: [
              "Complete biofilm removal",
              "Crown margin preservation",
              "Dentinal conservation",
            ],
            procedures: [
              {
                type: "Instrumentation",
                system: "XP-endo Shaper",
                parameters: ["0.01 taper", "300rpm", "1Ncm torque"],
                advantage: "Minimal dentin removal",
              },
              {
                type: "Irrigation Protocol",
                sequence: [
                  "5% NaOCl activation",
                  "17% EDTA demineralization",
                  "Silver nanoparticle final rinse",
                ],
                activation: "PIPS laser protocol",
              },
            ],
          },
          {
            phase: 3,
            title: "Definitive Restoration",
            objectives: [
              "Fluid-tight coronal seal",
              "Occlusal contour restoration",
              "Aesthetic integration",
            ],
            procedures: [
              {
                type: "Bioceramic Obturation",
                technique: "Single-cone with warm backfill",
                materials: ["TotalFill BC Sealer", "GuttaCore carrier"],
              },
              {
                type: "Access Restoration",
                materials: ["Zirconomer repair kit", "Nano-hybrid composite"],
                technique: "Stratified oblique layering",
                outcome: "Seamless marginal integrity",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          structuralIntegrity: {
            marginalGap: "<50μm",
            fractureResistance: "480N",
          },
          patientSatisfaction: {
            painRelief: 4.8,
            overall: 4.9,
            function: 4.7,
          },
        },
        content: {
          achievements: [
            "Crown preservation achieved",
            "0% crown margin compromise",
            "Complete lesion resolution (6-month CBCT)",
          ],
          patientFeedback: {
            quote: "It's like the crown was never touched!",
          },
          followUpPlan: {
            schedule: [
              "6-month clinical exam",
              "Annual radiographic monitoring",
            ],
            considerations: ["Night guard recommendation"],
          },
        },
      },
    },
  },
};

export default caseSeventeen;
