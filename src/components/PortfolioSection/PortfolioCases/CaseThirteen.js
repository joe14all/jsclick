import FinalImpression from "../../../assets/images/posteriorImplants/finalImpression.jpg";
import TissueMimic from "../../../assets/images/posteriorImplants/tissueMimc.jpg";
import CastBuccal from "../../../assets/images/posteriorImplants/castBuccal.jpg";
import CastLingual from "../../../assets/images/posteriorImplants/castLingual.jpg";
import CastOcc from "../../../assets/images/posteriorImplants/castOcc.jpg";
import CastBite from "../../../assets/images/posteriorImplants/castBite.jpg";
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
        date: "2021-04-20",
        tags: ["impression", "closed-tray", "pick-up"],
      },
      {
        img: TissueMimic,
        alt: "Tissue Replication",
        caption: "Gingival mask technique",
        modality: "Lab Photography",
        date: "2021-05-06",
        tags: ["soft-tissue", "emergence"],
      },
      {
        img: CastBuccal,
        alt: "Buccal Contour Analysis",
        caption: "Cast buccal view",
        modality: "Lab Photography",
        date: "2021-05-06",
        tags: ["contour", "buccal", "morphology"],
      },
      {
        img: CastLingual,
        alt: "Lingual Anatomy",
        caption: "Cast lingual view",
        modality: "Lab Photography",
        date: "2021-05-06",
        tags: ["lingual", "emergence", "anatomy"],
      },
      {
        img: CastOcc,
        alt: "Occlusal Scheme",
        caption: "Cast occlusal view",
        modality: "Lab Photography",
        date: "2021-05-06",
        tags: ["anatomy", "occlusal-table"],
      },
      {
        img: CastFrontal,
        alt: "Prosthetic Preview",
        caption: "Cast frontal view",
        modality: "Lab Photography",
        date: "2021-05-06",
        tags: ["wax-up", "esthetic"],
      },
      {
        img: CastBite,
        alt: "Bite",
        caption: "Cast occlusal view",
        modality: "Lab Photography",
        date: "2021-05-06",
        tags: ["occlusion", "articulation"],
      },
      {
        img: IntraOralBuccalRt,
        alt: "Buccal Integration",
        caption: "Intraoral buccal view",
        modality: "Clinical Photography",
        date: "2021-05-14",
        tags: ["delivery", "integration"],
      },
      {
        img: IntraOralBuccalLt,
        alt: "Buccal Integration",
        caption: "Intraoral buccal view",
        modality: "Clinical Photography",
        date: "2021-05-14",
        tags: ["delivery", "integration"],
      },
      {
        img: IntraOralLtOcc,
        alt: "Occlusal Verification",
        caption: "Intraoral occlusal view",
        modality: "Clinical Photography",
        date: "2021-05-14",
        tags: ["occlusion", "function"],
      },
      {
        img: FrontalView,
        alt: "Final Restoration",
        caption: "Intraoral frontal view",
        modality: "Clinical Photography",
        date: "2021-05-14",
        tags: ["esthetic", "final"],
      },
      {
        img: PostOpPA,
        alt: "Radiographic Verification",
        caption: "Radiographic bone-implant interface",
        modality: "Radiography",
        date: "2021-01-23",
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
              systemic: ["Controlled HIV", "Viral Load: undetectable"],
              dental: ["Class I RPD (5 years)", "Partially edentulous"],
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
            oralHygiene: { fair: "Patient is encouraged to improve his OHI." },
            periodontalStatus: {
              Generalized: "Stage II",
              Grade: "A",
            },
            periodontalFindings: {
              "Plaque Free Percentage": "50%",
              "Bleeding Percentage": "10%",
              "Probing Depths": "2-3mm",
              "Recession Range": "1-4mm",
              Mobility: "0",
              "Gingival Status": "Generalized mild",
            },
            existingConditions: {
              "Missing Teeth": [
                "🦷#17",
                "🦷#18",
                "🦷#19",
                "🦷#20",
                "🦷#21",
                "🦷#28",
                "🦷#30",
                "🦷#31",
                "🦷#32",
              ],
              "Edentulous Areas (#21 & #28)": ["➞  Space collapsed"],
              "Edentulous Area (#30)": [
                "➞ 10mm residual bone height",
                "➞ 7mm ridge width",
                "➞ Keratinized tissue: 2mm",
              ],
              "Edentulous Areas (#19-20)": [
                "➞ 9mm residual bone height",
                "➞ 7mm ridge width",
                "➞ Keratinized tissue: 3mm",
              ],
              "Occlusal Factors": {
                "Occlusal Relationship": "➞ Posterior cross bite",

                "Opposing Dentition":
                  "➞ Porcelain-fused-metal crown & natural dentition",
                "Parafunctional Habits": "➞ Nighttime clenching",
              },
            },
          },
        },
      },

      challenges: {
        content: [
          {
            id: "PI1",
            title: "Post-Implant Periodontal Health Management",
            category: "periodontics",
            details: {
              issues: [
                "Generalized Stage II periodontitis with mild gingival inflammation",
                "Fair oral hygiene (OHI) requiring enhancement",
                "Inadequate keratinized tissue in edentulous areas (#30: 2mm; #19-20: 3mm)",
              ],
              impact:
                "Increased susceptibility to peri-implantitis and marginal bone loss without strict maintenance protocols.",
            },
            priority: "High",
          },
          {
            id: "PI2",
            title: "Fixed Prosthesis Planning in Limited Bone Volume",
            category: "prosthodontics",
            details: {
              issues: [
                "Collapsed edentulous spaces (#21, #28)",
                "Limited residual bone height (9mm) and ridge width (7mm)",
                "Soft tissue recession and proximity of adjacent teeth",
              ],
              impact: "Possibility of cantilever prosthesis design",
            },
            priority: "High",
          },
          {
            id: "PI3",
            title: "Occlusal Management and Parafunctional Habits",
            category: "occlusion",
            details: {
              issues: [
                "Posterior crossbite affecting interarch harmony",
                "Nocturnal clenching habit",
              ],
              impact:
                "Uneven occlusal load increases the risk of prosthetic fractures and implant overloading.",
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
              duration: "4–6 weeks",
              focus: "Periodontal pre-conditioning & diagnostic planning",
            },
            {
              phase: 2,
              duration: "6–8 months",
              focus: "Implant surgery & osseointegration phase",
            },
            {
              phase: 3,
              duration: "2–3 months",
              focus: "Prosthetic delivery & occlusal equilibration",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Periodontal Conditioning & Case Planning",
            objectives: [
              "Resolve gingival inflammation",
              "Verify bone dimensions via CBCT",
              "Design prosthetically-driven wax-up for implant planning",
            ],
            procedures: [
              {
                type: "Non-surgical periodontal therapy",
                parameters: ["Periodontal Maintenance"],
                outcome:
                  "Bleeding index reduced to 5% and plaque control improved to 80%",
              },
              {
                type: "CAD/CAM Surgical Guide",
                features: [
                  "CBCT-based digital planning",
                  "Prosthetically-driven guide design",
                  "Sleeve support for accurate drill angulation",
                  "Soft tissue punch alignment",
                  "Pre-op simulation for surgical predictability",
                ],
              },
            ],
          },
          {
            phase: 2,
            title: "Surgical Implant Placement Protocol",
            objectives: [
              "Achieve optimal primary stability in narrow alveolar ridges",
              "Address collapsed edentulous areas with strategic implant placement",
            ],
            procedures: [
              {
                type: "Two-stage implant surgery",
                technique: "Crestal flap reflection approach",
                steps: [
                  "Implant #30 & #19: 4.1mm × 10mm (Straumann BLT) placed at 35Ncm torque",
                  "Implant #19: Two 3.3mm × 10mm (Straumann BLT) implants placed at 35Ncm torque",
                  "Healing abutments (3.5mm height) secured",
                ],
              },
              {
                type: "Impression protocol",
                protocol: [
                  "Open-tray polyether (Impregum) impression at 8-week interval",
                  "Verification jig used to confirm multi-unit accuracy",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Definitive Prosthetic Restoration",
            objectives: [
              "Restore masticatory function and correct crossbite",
              "Design occlusion to buffer parafunctional stress",
            ],
            procedures: [
              {
                type: "Implant-supported bridge",
                material: "Porcelain-fused-to-metal on UCLA abutment",
                features: [
                  "0.5mm uniform framework thickness",
                  "Occlusal contacts limited to deep bite—no lateral interferences",
                ],
              },
              {
                type: "Occlusal guard",
                material: "Hard acrylic (3mm thickness)",
                features: [
                  "Full-arch maxillary coverage",
                  "Flat occlusal surface for load distribution during clenching",
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
            "Probing Depth": "≤4mm",
          },
        },
        content: {
          achievements: [
            "Elimination of removable partial denture (RPD)",
            "Restoration of 98% chewing efficiency",
            "Excellent papilla preservation",
            "No incidents of screw loosening",
          ],
          limitations: {
            noted: [
              "Wider mesial space between tooth #22 and implant crown #20",
              "Long-term compliance with nightguard use required",
            ],
            corrections: [
              "Enhanced patient instruction on interproximal cleaning",
              "Educational reinforcement for long-term maintenance",
            ],
          },
          technicalSuccess: {
            implantStability: {
              ISQ: "78 (1-year)",
              BoneLoss: "🟢 Excellent",
            },
            crownPerformance: {
              contacts: "🟢 Excellent",
              esthetics: "🟡 Acceptable",
              occlusion: "🟢 Excellent",
            },
          },
          patientFeedback: {
            quote: "I can finally eat nuts without worrying!",
            improvementsNoted: [
              "Feels natural when chewing",
              "Simple maintenance and hygiene",
              "No more irritation from gums",
            ],
          },
        },
      },
    },
  },
};

export default caseThirteen;
