import View1Image from "../../../assets/images/rpdDesign/1.jpg";
import View2Image from "../../../assets/images/rpdDesign/2.jpg";

const caseEighteen = {
  id: 18,
  title: "Removable Partial Denture Design",
  categories: ["prosthodontics"],
  thumbnail: {
    img: View2Image,
    alt: "RPD Framework Design",
  },
  caseStudy: {
    carousel: [
      {
        img: View2Image,
        alt: "RPD Occlusal View",
        caption: "Major connector design",
        modality: "Clinical Photography",
        tags: ["framework", "design", "occlusal"],
      },
      {
        img: View1Image,
        alt: "RPD Lateral View",
        caption: "Retentive element placement",
        modality: "Clinical Photography",
        tags: ["retention", "prosthesis", "lingual"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          patientProfile: {
            demographic: {
              age: 62,
              gender: "male",
            },
            medicalHistory: {
              systemic: ["Non-smoker", "Well-controlled diabetes"],
              dental: ["Partial edentulism (Kennedy Class II)"],
            },
          },
          presentation: {
            chiefComplaint: "Difficulty chewing and aesthetic concerns",
            concerns: [
              "Existing prosthesis instability",
              "Tissue irritation",
              "Compromised masticatory efficiency",
            ],
            expectations: [
              "Stable retention",
              "Natural aesthetics",
              "Comfortable function",
            ],
          },
          clinicalAssessment: {
            oralCondition: {
              "Remaining Teeth": ["#22", "#23", "#27", "#28"],
              "Abutment Status": [
                "Adequate periodontal support",
                "2mm clinical crown height",
                "Satisfactory occlusal plane",
              ],
            },
            diagnosticData: {
              "🦷 Study Modals": ["Modified Kennedy classification"],
              Radiograph: ["Uniform bone level - 2mm crestal bone loss"],
            },
          },
        },
      },
      challenges: {
        title: "Design Complexities",
        content: [
          {
            id: "DC1",
            title: "Biomechanical Equilibrium",
            category: "Force Distribution",
            details: {
              issues: [
                "Differential support (tooth-tissue borne)",
                "Lever arm effect management",
                "Occlusal load balancing",
              ],
              impact: "Risk of abutment overload",
            },
            priority: "Critical",
          },
          {
            id: "DC2",
            title: "Aesthetic-Conflict",
            category: "Anterior Zone",
            details: {
              issues: [
                "I-bar vs circumferential clasp dilemma",
                "Prosthesis border visibility",
                "Lip support requirements",
              ],
              impact: "Patient self-consciousness risk",
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        title: "Prosthetic Strategy",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Diagnostic Phase",
              focus: "Treatment Planning",
            },
            {
              phase: 2,
              duration: "Technical Phase",
              focus: "Digital Design & Fabrication",
            },
            {
              phase: 3,
              duration: "Delivery Phase",
              focus: "Patient Adaptation",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Biomechanical Planning",
            objectives: [
              "Optimal support distribution",
              "Path of insertion determination",
              "Aesthetic component positioning",
            ],
            procedures: [
              {
                type: "Digital Surveying",
                software: "3Shape Dental System",
                parameters: [
                  "0.25mm undercut target",
                  "Guiding plane optimization",
                ],
                outcome: "Ideal clasp position mapping",
              },
              {
                type: "Design Validation",
                method: "Diagnostic Wax-up",
                evaluation: ["Silicone index verification"],
              },
            ],
          },
          {
            phase: 2,
            title: "CAD/CAM Fabrication",
            objectives: [
              "Precision framework fit",
              "Non-interfering design",
              "Durability assurance",
            ],
            procedures: [
              {
                type: "Framework Design",
                components: [
                  "Lingual plate major connector",
                  "RPI clasp system",
                  "Mesial occlusal rests",
                ],
                material: "Cobalt-Chromium Alloy",
                technology: "SLM 3D Printing",
              },
              {
                type: "Prosthesis Finalization",
                steps: [
                  "Acrylic resin base processing",
                  "Tooth characterization",
                  "Polishing protocol",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Clinical Implementation",
            objectives: [
              "Passive fit achievement",
              "Occlusal harmony",
              "Patient education",
            ],
            procedures: [
              {
                type: "Insertion Protocol",
                checks: [
                  "Framework adaptation <50μm",
                  "Equal bilateral retention",
                  "Disclusion in excursive movements",
                ],
              },
              {
                type: "Maintenance Plan",
                schedule: [
                  "24h adjustment",
                  "1-week follow-up",
                  "6-month recalls",
                ],
                instructions: [
                  "Insertion/removal technique",
                  "Hygiene maintenance protocol",
                ],
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          functionalAssessment: {
            chewingEfficiency: "89% improvement",
            retentionForce: "1.5N ± 0.2N",
          },
          patientSatisfaction: {
            comfort: 4.8,
            aesthetics: 4.6,
            function: 4.7,
          },
        },
        content: {
          achievements: [
            "0.3mm framework adaptation accuracy",
            "Harmonious gingival interface",
            "Balanced occlusal contacts",
          ],
          technicalSuccess: {
            collaboration: [
              "3 design iterations",
              "4h chairside time reduction",
            ],
          },
          patientFeedback: {
            quote: "Feels more secure than my previous denture",
          },
          longTermMaintenance: {
            "6-month": "No tissue pathology observed",
            "12-month": "0.1mm crestal bone loss",
          },
        },
      },
    },
  },
};

export default caseEighteen;
