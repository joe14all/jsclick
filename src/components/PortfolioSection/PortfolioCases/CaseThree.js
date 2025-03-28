import DentureWaxUp1 from "../../../assets/images/denturewaxup/denture1-1000px.jpg";
import DentureWaxUp2 from "../../../assets/images/denturewaxup/denture2-1000px.jpg";

const caseThree = {
  id: 3,
  title: "Complete Denture Rehabilitation",
  categories: ["prosthodontics"],
  thumbnail: {
    img: DentureWaxUp1,
    alt: "Definitive Wax-up",
    modality: "Laboratory Documentation",
    date: "2023-05-20",
  },
  caseStudy: {
    carousel: [
      {
        img: DentureWaxUp1,
        alt: "Diagnostic Wax-up",
        caption: "Initial Teeth Setup Verification",
        modality: "Laboratory Photography",
        date: "2023-05-18",
        tags: ["diagnostic", "wax-up", "setup"],
      },
      {
        img: DentureWaxUp2,
        alt: "Definitive Prosthesis",
        caption: "Processed Denture Try-in",
        modality: "Clinical Photography",
        date: "2023-06-01",
        tags: ["final", "try-in", "aesthetics"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        icon: "patient-file",
        content: {
          patientProfile: {
            demographic: {
              age: 68,
              gender: "male",
              occupation: "Retired Chef",
            },
            medicalHistory: {
              systemic: ["Type II Diabetes (controlled)"],
              dental: [
                "Edentulous for 12 years",
                "Previous denture use (2015-2022)",
              ],
            },
          },
          presentation: {
            chiefComplaint: "Poor denture stability and chewing difficulty",
            concerns: [
              "Facial collapse appearance",
              "Inability to eat solid foods",
            ],
            expectations: [
              "Improved chewing function",
              "Natural facial support",
              "Enhanced speech clarity",
            ],
          },
          clinicalAssessment: {
            ridgeResorption: {
              maxillary: "Class IV (Cawood & Howell)",
              mandibular: "Class V (Cawood & Howell)",
            },
            verticalDimension: {
              rest: "62mm",
              occlusion: "68mm",
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        icon: "warning",
        content: [
          {
            id: "C1",
            title: "Ridge Resorption",
            category: "Structure",
            details: {
              issues: [
                "6mm maxillary ridge height",
                "4mm mandibular ridge width",
              ],
              observations: [
                "Reduced denture-bearing area (35%)",
                "Increased mucosal mobility",
              ],
              impact: "Compromised retention and stability",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Aesthetic Restoration",
            category: "Esthetics",
            details: {
              complications: [
                "Loss of vertical dimension (8mm)",
                "Collapsed lower facial height",
              ],
              implications: [
                "Phonetic challenges",
                "Facial profile restoration needs",
              ],
            },
            priority: "Medium",
          },
        ],
      },
      solutions: {
        title: "Prosthetic Protocol",
        icon: "dental-drill",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "3 weeks",
              focus: "Diagnostic & Preliminary",
            },
            {
              phase: 2,
              duration: "4 weeks",
              focus: "Definitive Fabrication",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Foundation Phase",
            objectives: [
              "Restore vertical dimension",
              "Establish neutral zone",
            ],
            procedures: [
              {
                type: "Custom Tray Fabrication",
                material: "Light-cured resin",
                features: [
                  "Peripheral seal development",
                  "Post dam configuration",
                ],
                outcome: "Accurate border molding achieved",
              },
              {
                type: "Jaw Relation Records",
                technique: "Gothic arch tracing",
                instruments: [
                  "Facebow transfer",
                  "Fully adjustable articulator",
                ],
                outcome: "Centric relation verified",
              },
            ],
          },
          {
            phase: 2,
            title: "Prosthetic Phase",
            objectives: [
              "Optimal occlusal scheme",
              "Natural tooth arrangement",
            ],
            procedures: [
              {
                type: "Teeth Selection",
                parameters: {
                  anterior: "Mold 33 (Ivoclar)",
                  posterior: "30° Anatomical",
                  shade: "A3 (VITA Classical)",
                },
                outcome: "Age-appropriate characterization",
              },
              {
                type: "Wax Try-in",
                evaluations: [
                  "Phonetic testing (/f/ and /v/ sounds)",
                  "Facial support verification",
                  "Occlusal plane orientation",
                ],
                adjustments: ["Reduced vertical by 1mm"],
              },
              {
                type: "Processing",
                material: "Heat-cured PMMA",
                technique: "Injection molding",
                outcome: "0.2mm tissue compression",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        icon: "success",
        metrics: {
          functionalMetrics: {
            retention: "Grade II (Kapur)",
            masticatoryEfficiency: "78% improvement",
            occlusalForce: "120N (vs 65N pre-treatment)",
          },
          patientSatisfaction: {
            comfort: 4.7,
            aesthetics: 4.6,
            function: 4.8,
          },
        },
        content: {
          achievements: [
            "Restored 6mm vertical dimension",
            "Complete denture stability achieved",
            "Natural lip support restored",
          ],
          patientFeedback: {
            quote: "I can finally enjoy my meals again!",
            improvementsNoted: ["Clearer speech", "No more denture adhesives"],
          },
          limitations: {
            noted: [
              "0.5mm midline discrepancy",
              "Slight cheek biting initially",
            ],
            futureConsiderations: [
              "6-month reline protocol",
              "Nighttime wear regimen",
            ],
          },
        },
      },
    },
  },
};
export default caseThree;
