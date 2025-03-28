import ImplantCloseUp from "../../../assets/images/anteriorimplant/anteriorimplant-1000px.jpg";
import OcclusalView from "../../../assets/images/anteriorimplant/anteriorimplant2-1000px.jpg";

const caseEight = {
  id: 8,
  title: "Anterior Implant with Aesthetic Rehabilitation",
  categories: ["implant"],
  thumbnail: {
    img: ImplantCloseUp,
    alt: "Anterior implant close-up view",
  },
  caseStudy: {
    carousel: [
      {
        img: ImplantCloseUp,
        alt: "Facial view of implant crown",
        caption: "Emergence profile optimization",
        modality: "Clinical Photography",
        tags: ["aesthetic", "implant", "crown"],
      },
      {
        img: OcclusalView,
        alt: "Occlusal view of implant",
        caption: "Bucco-lingual orientation",
        modality: "Clinical Photography",
        tags: ["occlusion", "angulation", "placement"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          patientProfile: {
            demographic: {
              age: 34,
              gender: "female",
            },
            medicalHistory: {
              systemic: ["Non-smoker", "Healthy"],
              dental: ["Traumatic tooth loss #8"],
            },
          },
          presentation: {
            chiefComplaint: "Aesthetic concern and chewing difficulty",
            concerns: [
              "Gingival asymmetry",
              "Provisional crown instability",
              "Phonetic challenges",
            ],
            expectations: [
              "Natural-looking restoration",
              "Stable occlusion",
              "Long-term durability",
            ],
          },
          clinicalAssessment: {
            implantSite: {
              boneQuality: "Type II",
              buccalPlate: "1.2mm thickness",
              interocclusalSpace: "7mm",
            },
            diagnosticData: {
              CBCT: [
                "3.5mm apical bone available",
                "Facial bone concavity present",
              ],
              aestheticRisk: "Moderate (ERA index)",
            },
          },
        },
      },
      challenges: {
        title: "Implant Complexities",
        content: [
          {
            id: "IC1",
            title: "Spatial Constraints",
            category: "3D Positioning",
            details: {
              issues: [
                "Limited mesio-distal space (5.8mm)",
                "Facial bone concavity",
                "Incisal edge position determination",
              ],
              impact: "Risk of facial thread exposure",
            },
            priority: "Critical",
          },
          {
            id: "IC2",
            title: "Aesthetic Integration",
            category: "Soft Tissue",
            details: {
              issues: [
                "Thin gingival biotype",
                "Interproximal papilla reconstruction",
                "Transition zone management",
              ],
              impact: "Risk of black triangle formation",
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        title: "Rehabilitation Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Surgical Phase",
              focus: "Guided Osteotomy",
            },
            {
              phase: 2,
              duration: "Healing Phase",
              focus: "Tissue Maturation",
            },
            {
              phase: 3,
              duration: "Restorative Phase",
              focus: "Aesthetic Integration",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Precision Placement",
            objectives: [
              "3D positioning accuracy",
              "Bone preservation",
              "Primary stability",
            ],
            procedures: [
              {
                type: "Guided Surgery",
                system: "NobelGuide",
                parameters: ["35° buccal rotation", "3mm apical to CEJ"],
                torque: "35Ncm",
              },
              {
                type: "Bone Management",
                technique: "Socket shield protocol",
                materials: ["Autogenous bone graft"],
              },
            ],
          },
          {
            phase: 2,
            title: "Healing Management",
            objectives: [
              "Tissue architecture preservation",
              "Provisionalization",
              "Biologic width formation",
            ],
            procedures: [
              {
                type: "Temporary Restoration",
                material: "PMMA screw-retained",
                features: [
                  "Emergence profile shaping",
                  "2mm subgingival contour",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Final Restoration",
            objectives: [
              "Aesthetic optimization",
              "Occlusal harmony",
              "Biomechanical stability",
            ],
            procedures: [
              {
                type: "Custom Abutment",
                material: "Zirconia",
                features: [
                  "0.5mm subgingival margin",
                  "16° lingual inclination",
                ],
              },
              {
                type: "Crown Fabrication",
                technique: "Layered zirconia",
                characterization: [
                  "Surface texture matching",
                  "Incisal halo effect",
                ],
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          stability: {
            ISQ: "78",
            "12-monthBoneLoss": "0.3mm",
          },
          patientSatisfaction: {
            aesthetics: 4.9,
            function: 4.8,
            comfort: 4.7,
          },
        },
        content: {
          achievements: [
            "Pink esthetic score 12/14",
            "0.5mm mucosal margin stability",
            "25μm marginal adaptation",
          ],
          technicalSuccess: {
            implantPosition: {
              angulation: "17° facial",
              depth: "3.2mm apical to CEJ",
            },
          },
          patientFeedback: {
            quote: "Looks exactly like my natural tooth!",
          },
          longTermMaintenance: {
            "6-month": "Healthy peri-implant tissues",
            "12-month": "Stable bone levels",
          },
        },
      },
    },
  },
};

export default caseEight;
