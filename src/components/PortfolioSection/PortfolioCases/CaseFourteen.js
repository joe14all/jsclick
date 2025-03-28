import PreOpImage from "../../../assets/images/MolarRetreatment/PreOp.jpg";
import PostOpImage from "../../../assets/images/MolarRetreatment/PostOp.jpg";

const caseFourteen = {
  id: 14,
  title: "Molar Retreatment - Missed Canal",
  categories: ["endodontics"],
  thumbnail: {
    img: PostOpImage,
    alt: "Post-treatment obturation",
  },
  caseStudy: {
    carousel: [
      {
        img: PreOpImage,
        alt: "Pre-Operative Radiograph",
        caption: "Pre-treatment infection evidence",
        modality: "Periapical Radiograph",
        tags: ["pre-op", "infection"],
      },
      {
        img: PostOpImage,
        alt: "Post-Operative Radiograph",
        caption: "Post-treatment obturation",
        modality: "Periapical Radiograph",
        tags: ["post-op", "success"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: 42,
              gender: "female",
            },
            medicalHistory: {
              systemic: ["Non-contributory"],
              dental: ["Previous RCT (5 years prior)"],
            },
          },
          presentation: {
            chiefComplaint: "Persistent dull ache in upper molar",
            concerns: ["Chewing sensitivity", "Palpation tenderness"],
            expectations: [
              "Infection resolution",
              "Tooth preservation",
              "Pain elimination",
            ],
          },
          clinicalAssessment: {
            existingRestorations: {
              teeth: ["#3"],
              condition: [
                "Complex canal anatomy",
                "Residual apical radiolucency",
                "Previous inadequate obturation",
              ],
            },
            pulpTest: {
              vitality: "Non-responsive",
              percussion: "Tender",
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Canal System Complexity",
            category: "Anatomy",
            details: {
              issues: [
                "MB2 canal presence suspected",
                "Calcified canals",
                "Gutta-percha remnants",
              ],
              impact: "Risk of incomplete disinfection",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Adjacent Post Complication",
            category: "Restorative",
            details: {
              issues: [
                "Post in #4 complicating access",
                "Risk of coronal fracture",
                "Limited visualization",
              ],
              impact: "Iatrogenic damage risk",
            },
            priority: "Medium",
          },
        ],
      },
      solutions: {
        title: "Treatment Strategy",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "2 visits",
              focus: "Retreatment & Disinfection",
            },
            {
              phase: 2,
              duration: "1 visit",
              focus: "Definitive Obturation",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Canal Re-instrumentation",
            objectives: [
              "MB2 canal localization",
              "Residual GP removal",
              "Apical patency establishment",
            ],
            procedures: [
              {
                type: "CBCT Analysis",
                outcome: "Confirmed MB2 anatomy",
                technique: "Limited FOV scan",
              },
              {
                type: "Ultrasonic Retreatment",
                steps: [
                  "Coronal access refinement",
                  "GP removal with rotary files",
                  "17% EDTA irrigation",
                ],
                outcome: "All canals patent",
              },
            ],
          },
          {
            phase: 2,
            title: "Three-Dimensional Obturation",
            objectives: [
              "Fluid-tight seal",
              "Apical delta penetration",
              "Coronal restoration",
            ],
            procedures: [
              {
                type: "Bioceramic Sealer",
                product: "TotalFill BC Sealer",
                technique: "Warm vertical compaction",
                outcome: "Homogeneous fill verified",
              },
              {
                type: "Composite Restoration",
                material: "Bulk-fill composite",
                outcome: "Occlusal seal achieved",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            painRelief: 4.9,
            functional: 4.7,
            overall: 4.8,
          },
        },
        content: {
          achievements: [
            "Complete symptom resolution",
            "12-month radiographic success",
          ],
          patientFeedback: {
            quote: "The tooth feels completely normal now",
          },
          limitations: {
            noted: [
              "Adjacent premolar requires active survillance",
              "Need for crown placement",
            ],
            futureConsiderations: [
              "Full coverage restoration in 6 months",
              "Annual radiographic monitoring",
            ],
          },
        },
      },
    },
  },
};
export default caseFourteen;
