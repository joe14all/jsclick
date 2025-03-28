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
        alt: "Pre-Operative Radiograph",
        caption: "Periapical lesion with existing crown",
        modality: "Periapical Radiograph",
        tags: ["pre-op", "crown", "infection"],
      },
      {
        img: PostOp1Image,
        alt: "Post-Operative Radiograph",
        caption: "Completed retreatment obturation",
        modality: "Periapical Radiograph",
        tags: ["post-op", "obturation"],
      },
      {
        img: PostOp2Image,
        alt: "Final Restoration Radiograph",
        caption: "Definitive crown placement",
        modality: "Periapical Radiograph",
        tags: ["post-op", "restoration"],
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
                "Adjacent premolar with post",
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
                "Full coverage crown",
                "Inadequate obturation",
                "Periapical radiolucency",
              ],
            },
            pulpTest: {
              vitality: "Non-vital",
              percussion: "Positive response",
            },
            imagingFindings: {
              CBCT: ["3mm periapical lesion", "MB2 canal identified"],
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
                "Existing PFM crown integrity",
                "Limited access through crown",
                "Risk of structural compromise",
              ],
              impact: "Potential need for new crown fabrication",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Adjacent Post Interference",
            category: "Access",
            details: {
              issues: [
                "Post in premolar (#20)",
                "Limited working space",
                "Risk of post fracture",
              ],
              impact: "Compromised instrumentation access",
            },
            priority: "Medium",
          },
          {
            id: "C3",
            title: "Canal System Complexity",
            category: "Anatomy",
            details: {
              issues: [
                "Calcified MB2 canal",
                "Apical bifurcation",
                "Previous ledging",
              ],
              impact: "Incomplete disinfection risk",
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
              "Crown preservation attempt",
              "Post removal in #20",
              "Complete biofilm removal",
            ],
            procedures: [
              {
                type: "CBCT Guidance",
                outcome: "3D anatomy mapping",
                technique: "Limited FOV scan",
              },
              {
                type: "Ultrasonic Post Removal",
                steps: [
                  "Piezoelectric tip activation",
                  "Conservative dentin preservation",
                  "Fiber post removal",
                ],
                outcome: "Adequate access achieved",
              },
              {
                type: "Laser Disinfection",
                parameters: ["Er:YAG 2940nm", "15Hz pulse rate"],
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
                technique: "Single-cone technique",
                outcome: "3D adaptation confirmed",
              },
              {
                type: "CAD/CAM Crown",
                material: "Zirconia",
                features: ["Bruxer design", "Extended margin coverage"],
                outcome: "Optimal marginal seal",
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
            "Successful crown preservation",
            "Complete symptom resolution",
            "Adjacent post maintained",
          ],
          patientFeedback: {
            quote: "I can finally chew without hesitation",
          },
          limitations: {
            noted: [
              "Slight crown margin discrepancy",
              "Residual dentin thickness 1.2mm",
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
