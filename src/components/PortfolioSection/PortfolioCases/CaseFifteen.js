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
        caption: "Pre-Operative Radiograph",
        alt: "4-5mm Periapical Lesion with Underfilled MB1 & Missed ML",
        modality: "Periapical Radiograph",
        tags: ["pre-op", "crown", "infection", "underfilled MB1", "missed ML"],
      },
      {
        img: PostOp1Image,
        caption: "Post-Operative Radiograph",
        alt: "Completed Obturation with ML Negotiation (Minor Overfill)",
        modality: "Periapical Radiograph",
        tags: ["post-op", "obturation", "bioceramic", "overfill"],
      },
      {
        img: PostOp2Image,
        caption: "Post Op - M Shift",
        alt: "Zirconia Crown with Optimal Marginal Adaptation",
        modality: "Periapical Radiograph",
        tags: ["post-op", "obturation", "bioceramic", "overfill", "shift"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: 45,
              gender: "male",
            },
            medicalHistory: {
              systemic: ["Hypertension (controlled)"],
              dental: [
                "Previous RCT (3 years prior)",
                "Crown placement #19",
                "Adjacent premolar (#18) with post",
              ],
            },
          },
          presentation: {
            chiefComplaint: "Persistent discomfort in lower left molar",
            concerns: [
              "Tenderness on percussion",
              "Mild buccal swelling",
              "Chewing discomfort",
            ],
            expectations: [
              "Complete infection resolution",
              "Preservation of existing crown",
              "Restoration of function",
            ],
          },
          clinicalAssessment: {
            existingRestorations: {
              teeth: ["#19"],
              condition: [
                "Full coverage PFM crown",
                "MB1 underfilled (2mm short)",
                "ML missed",
                "Distal canal partially treated",
              ],
            },
            pulpTest: {
              vitality: "Non-vital",
              percussion: "Positive response (+++)",
            },
            imagingFindings: {
              CBCT: [
                "4-5mm periapical lesion (ICOI Class 2B)",
                "ML canal confirmed 1mm palatal to MB1",
                "Apical bifurcation present",
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
            title: "Crown Preservation",
            category: "Restorative",
            details: {
              issues: [
                "PFM crown marginal leakage",
                "Limited access through crown",
                "Risk of crown fracture during access",
              ],
              impact: "Potential need for crown replacement",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Adjacent Post Interference",
            category: "Access",
            details: {
              issues: [
                "Post in #18 obstructing line of sight",
                "Limited working space",
                "Risk of post fracture during instrumentation",
              ],
              impact: "Compromised visibility for ML negotiation",
            },
            priority: "Medium",
          },
          {
            id: "C3",
            title: "Canal System Complexity",
            category: "Anatomy",
            details: {
              issues: [
                "Calcified ML canal (confirmed via CBCT)",
                "Apical bifurcation with lateral anastomoses",
                "Previous ledging in distal canal",
              ],
              impact: "Increased risk of incomplete disinfection",
            },
            priority: "High",
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
              focus: "Crown Access & Retreatment",
            },
            {
              phase: 2,
              duration: "1 visit",
              focus: "Definitive Restoration",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Minimally Invasive Retreatment",
            objectives: [
              "Crown access without fracture",
              "Post removal in #18",
              "Complete biofilm removal",
            ],
            procedures: [
              {
                type: "CBCT Guidance",
                outcome: "3D anatomy mapping (ML located 1mm palatal)",
                technique: "Limited FOV scan (5x5cm)",
              },
              {
                type: "Ultrasonic Post Removal",
                steps: [
                  "Piezoelectric tip activation (Kavo Piezon Master)",
                  "Conservative dentin preservation",
                  "Carbon fiber post removal",
                ],
                outcome: "Unobstructed access achieved",
              },
              {
                type: "Laser Disinfection",
                parameters: ["Er:YAG 2940nm", "15Hz pulse rate", "2W power"],
                outcome: "Biofilm reduction in complex anatomy",
              },
            ],
          },
          {
            phase: 2,
            title: "Restorative Rehabilitation",
            objectives: [
              "Coronal seal establishment",
              "Functional occlusion",
              "Aesthetic integration",
            ],
            procedures: [
              {
                type: "Bioceramic Obturation",
                product: "EndoSequence BC Sealer",
                technique: "Single-cone + Warm vertical compaction",
                outcome:
                  "3D adaptation confirmed (minor overfill in distal apex)",
              },
              {
                type: "CAD/CAM Crown",
                material: "Monolithic zirconia",
                features: [
                  "Bruxer design",
                  "Extended margin coverage",
                  "Internal chamfer finish",
                ],
                outcome: "Optimal marginal seal (gap ≤50μm)",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            painRelief: 5.0,
            functional: 4.8,
            aesthetic: 4.7,
          },
          radiographicSuccess: {
            "3-month": "Lesion size reduction 80%",
            "12-month": "Complete bone healing",
          },
        },
        content: {
          achievements: [
            "Crown replaced with zirconia (original PFM compromised)",
            "Complete symptom resolution",
            "Adjacent post maintained",
          ],
          patientFeedback: {
            quote: "I can finally chew without hesitation",
            improvementsNoted: [
              "Normal occlusion restored",
              "No sensitivity episodes",
            ],
          },
          limitations: {
            noted: [
              "Minor overfill in distal canal (0.3mm)",
              "Residual dentin thickness 1.2mm (buccal)",
              "PFM crown margins replaced due to leakage",
            ],
            futureConsiderations: [
              "Night guard fabrication",
              "Annual radiographic follow-up",
            ],
          },
        },
      },
    },
  },
};

export default caseFifteen;
