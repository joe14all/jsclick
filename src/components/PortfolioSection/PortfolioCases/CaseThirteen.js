import FinalImpression from "../../../assets/images/posteriorImplants/finalImpression.jpg";
import TissueMimic from "../../../assets/images/posteriorImplants/tissueMimc.jpg";
import CastBuccal from "../../../assets/images/posteriorImplants/castBuccal.jpg";
import CastLingual from "../../../assets/images/posteriorImplants/castLingual.jpg";
import CastOcc from "../../../assets/images/posteriorImplants/castOcc.jpg";
import CastFrontal from "../../../assets/images/posteriorImplants/castFrontal.jpg";
import IntraOralBuccalRt from "../../../assets/images/posteriorImplants/IntraOralBuccal.jpg";
import IntraOralBuccalLt from "../../../assets/images/posteriorImplants/IntraOralBuccalLt.jpg";
import IntraOralLtOcc from "../../../assets/images/posteriorImplants/IntraOralLtOcc.jpg";
import FrontalView from "../../../assets/images/posteriorImplants/frontalView.jpg";
import PostOpPA from "../../../assets/images/posteriorImplants/postOp-PA.png";

const caseThirteen = {
  id: 13,
  title: "Posterior Implants",
  categories: ["implant", "prosthodontics"],
  thumbnail: {
    img: CastOcc,
    caption: "Occlusal Validation",
  },
  caseStudy: {
    carousel: [
      {
        img: FinalImpression,
        alt: "Definitive Impression",
        caption: "Closed-tray impression technique",
        modality: "Lab Photography",
        date: "2023-08-15",
        tags: ["impression", "closed-tray", "pick-up"],
      },
      {
        img: TissueMimic,
        alt: "Tissue Replication",
        caption: "Gingival mask technique",
        modality: "Lab Photography",
        date: "2023-08-18",
        tags: ["soft-tissue", "emergence"],
      },
      {
        img: CastBuccal,
        alt: "Buccal Contour Analysis",
        caption: "Cast buccal view",
        modality: "Lab Photography",
        date: "2023-08-20",
        tags: ["contour", "buccal", "morphology"],
      },
      {
        img: CastLingual,
        alt: "Lingual Anatomy",
        caption: "Cast lingual view",
        modality: "Lab Photography",
        date: "2023-08-20",
        tags: ["lingual", "occlusion", "anatomy"],
      },
      {
        img: CastOcc,
        alt: "Occlusal Scheme",
        caption: "Cast occlusal view",
        modality: "Lab Photography",
        date: "2023-08-20",
        tags: ["occlusion", "articulation"],
      },
      {
        img: CastFrontal,
        alt: "Prosthetic Preview",
        caption: "Cast frontal view",
        modality: "Lab Photography",
        date: "2023-08-22",
        tags: ["wax-up", "esthetic"],
      },
      {
        img: IntraOralBuccalRt,
        alt: "Buccal Integration",
        caption: "Intraoral buccal view",
        modality: "Clinical Photography",
        date: "2023-09-05",
        tags: ["delivery", "integration"],
      },
      {
        img: IntraOralBuccalLt,
        alt: "Buccal Integration",
        caption: "Intraoral buccal view",
        modality: "Clinical Photography",
        date: "2023-09-05",
        tags: ["delivery", "integration"],
      },
      {
        img: IntraOralLtOcc,
        alt: "Occlusal Verification",
        caption: "Intraoral occlusal view",
        modality: "Clinical Photography",
        date: "2023-09-05",
        tags: ["occlusion", "function"],
      },
      {
        img: FrontalView,
        alt: "Final Restoration",
        caption: "Intraoral frontal view",
        modality: "Clinical Photography",
        date: "2023-09-05",
        tags: ["esthetic", "final"],
      },
      {
        img: PostOpPA,
        alt: "Radiographic Verification",
        caption: "Radiographic bone-implant interface",
        modality: "Radiography",
        date: "2023-09-05",
        tags: ["bone", "integration"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 58 YO",
              gender: "➞ Male",
              occupation: "➞ Artist",
            },
            medicalHistory: {
              systemic: ["Controlled HIV"],
              dental: [
                "Class I RPD (5 years)",
                "Non-restorable #30",
                "Moderate bruxism",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "I have heard about implants as an option before but , I wasn't prepared financially for it",
            concerns: [
              "❗️ RPD-induced gingival inflammation",
              "❗️ Inadequate masticatory function",
              "❗️ Esthetic compromise",
            ],
            expectations: [
              "🔶 Fixed posterior solution",
              "🔶 Natural chewing ability",
              "🔶 No removable appliance",
            ],
          },
          clinicalAssessment: {
            existingConditions: {
              "Edentulous Area (#30)": [
                "➞ 9mm residual bone height",
                "➞ 7mm ridge width",
                "➞ Keratinized tissue: 3mm",
              ],
              "Edentulous Area (#20-19)": [
                "➞ 9mm residual bone height",
                "➞ 7mm ridge width",
                "➞ Keratinized tissue: 3mm",
              ],
              "Occlusal Factors": {
                "Interarch Space": "➞ 8mm vertical",
                "Opposing Dentition": "➞ Porcelain-fused-metal crown",
                "Parafunctional Habits": "➞ Nighttime clenching",
              },
            },
            implantFactors: {
              "Surgical Protocol": "Delayed loading (4 months)",
              "Implant Specs": [
                "➞ 4.3x10mm tissue-level",
                "➞ 35Ncm insertion torque",
                "➞ ISQ 72",
              ],
            },
          },
        },
      },
      challenges: {
        content: [
          {
            id: "PI1",
            title: "Biomechanical Loading",
            category: "mechanics",
            details: {
              issues: [
                "Cantilever forces on single implant",
                "Bruxism-related overload risk",
                "Limited bone density (D3)",
              ],
              impact: "Potential screw loosening/component fracture",
            },
            priority: "critical",
          },
          {
            id: "PI2",
            title: "Prosthetic Space Management",
            category: "design",
            details: {
              issues: [
                "8mm interocclusal space limitation",
                "Harmonizing with existing RPD",
                "Emergence profile development",
              ],
              observations: [
                "Required custom abutment design",
                "Monolithic material selection crucial",
              ],
            },
            priority: "high",
          },
          {
            id: "PI3",
            title: "Biologic Integration",
            category: "biology",
            details: {
              issues: [
                "Maintaining peri-implant keratinized tissue",
                "Subgingival contour optimization",
                "Diabetic healing factors",
              ],
              impact: "Critical for long-term tissue stability",
            },
            priority: "high",
          },
        ],
      },
      solutions: {
        title: "Implant Rehabilitation Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Week 1-2",
              focus: "Diagnostic Planning & Surgical Guide",
            },
            {
              phase: 2,
              duration: "Month 2-5",
              focus: "Implant Integration & Healing",
            },
            {
              phase: 3,
              duration: "Week 6-7",
              focus: "Prosthetic Finalization",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Prosthetically-Driven Planning",
            objectives: [
              "3D implant positioning",
              "Surgical guide fabrication",
              "Provisional design",
            ],
            procedures: [
              {
                type: "CBCT Analysis",
                parameters: [
                  "1mm safety margin from IAN",
                  "4.3mm implant selection",
                  "30° angled correction",
                ],
                outcome: "3D-printed surgical guide",
              },
              {
                type: "Wax-up Design",
                features: [
                  "2mm occlusal reduction",
                  "4mm emergence diameter",
                  "Custom abutment blueprint",
                ],
              },
            ],
          },
          {
            phase: 2,
            title: "Guided Surgery & Healing",
            objectives: [
              "Atraumatic placement",
              "Soft tissue preservation",
              "Osseointegration monitoring",
            ],
            procedures: [
              {
                type: "Surgical Protocol",
                technique: "Flapless approach",
                steps: [
                  "Tissue punch technique",
                  "Sequential osteotomy",
                  "35Ncm torque final",
                ],
              },
              {
                type: "Healing Phase",
                protocol: [
                  "4-month integration period",
                  "Monthly soft tissue checks",
                  "ISQ monitoring",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Definitive Restoration",
            objectives: [
              "Passive fit verification",
              "Occlusal scheme optimization",
              "Esthetic integration",
            ],
            procedures: [
              {
                type: "Custom Abutment",
                material: "Titanium base",
                specs: [
                  "2° taper",
                  "1mm subgingival margin",
                  "6mm abutment height",
                ],
              },
              {
                type: "Crown Fabrication",
                material: "Monolithic zirconia",
                features: [
                  "0.5mm occlusal table reduction",
                  "Shade A2 with characterization",
                  "Central fossa load distribution",
                ],
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
            functional: 4.9,
            overall: 4.7,
          },
          technicalMetrics: {
            "Marginal Bone Loss": "0.3mm (1-year)",
            "Occlusal Contact": "20μm accuracy",
            "Probing Depth": "≤3mm",
          },
        },
        content: {
          achievements: [
            "Successful RPD elimination",
            "98% masticatory efficiency restoration",
            "Optimal papilla preservation",
            "Zero screw loosening incidents",
          ],
          limitations: {
            noted: [
              "Slight titanium translucency",
              "2mm increased occlusal table",
              "Nightguard compliance required",
            ],
            corrections: [
              "Added characterization staining",
              "Occlusal adjustment protocol",
              "Patient education program",
            ],
          },
          technicalSuccess: {
            implantStability: {
              ISQ: "78 (1-year)",
              BoneLoss: "🟢 Excellent",
            },
            crownPerformance: {
              marginalFit: "🟢 Excellent",
              occlusion: "🟡 Acceptable",
              esthetics: "🟢 Excellent",
            },
          },
          patientFeedback: {
            quote: "I can finally eat nuts without worrying!",
            improvementsNoted: [
              "Natural chewing sensation",
              "Easy to clean",
              "No more gum sores",
            ],
          },
        },
      },
    },
  },
};

export default caseThirteen;
