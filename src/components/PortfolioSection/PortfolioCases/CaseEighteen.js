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
        caption: "RPD Occlusal View",
        alt: "Major connector design",
        modality: "Laboratory Photography",
        tags: ["Survey", "design", "RPD"],
      },
      {
        img: View1Image,
        caption: "RPD Lateral View",
        alt: "Retentive element placement",
        modality: "Laboratory Photography",
        tags: ["Survey", "design", "RPD"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          simulationContext: {
            program: "UCLA General Clinic – Clinical Simulation",
            objective:
              "Perform surveying and design of a Removable Partial Denture (RPD)",
            difficultyLevel: "Low",
            modelType: "Poured Cast Model",
          },
          proceduralFocus: {
            keySkills: [
              "Identifying appropriate path of insertion",
              "Marking survey lines and undercuts",
              "Selecting suitable major and minor connectors",
              "Designing retentive, support, and bracing elements",
            ],
            successCriteria: [
              "Framework design follows biomechanical principles",
              "All components harmonize with existing oral structures",
              "Retention and support are maximized without compromising comfort",
              "Design is clearly marked and accurately transferred to the lab form",
            ],
          },
        },
      },

      challenges: {
        title: "Design Complexities",
        content: [
          {
            id: "DC1",
            title: "Biomechanical Balance",
            category: "Biomechanical",
            details: {
              issues: [
                "Managing forces in tooth-tissue supported areas",
                "Preventing rotational movement around fulcrum lines",
              ],
              impact: "Potential for abutment stress and tissue irritation",
            },
            priority: "Critical",
          },
          {
            id: "DC2",
            title: "Aesthetic-Retention Compromise",
            category: "esthetics",
            details: {
              issues: [
                "Balancing clasp visibility with adequate retention",
                "Preserving facial aesthetics while ensuring prosthesis stability",
              ],
              impact: "Reduced patient satisfaction due to visible components",
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
              duration: "Preclinical Phase",
              focus: "Surveying & Design Planning",
            },
            {
              phase: 2,
              duration: "Design Execution",
              focus: "Framework Blueprint Finalization",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "RPD Surveying & Planning",
            objectives: [
              "Establish a clear path of insertion",
              "Identify ideal undercut locations",
              "Design components in harmony with soft and hard tissues",
            ],
            procedures: [
              {
                type: "Manual Surveying",
                tools: ["Surveyor arm", "Analyzing rod", "Undercut gauge"],
                keySteps: [
                  "Tilt cast to optimize guiding planes",
                  "Mark survey lines and undercuts",
                  "Record path of insertion",
                ],
                outcome: "Baseline anatomical map for design decisions",
              },
              {
                type: "Design Drafting",
                method: "Pencil Mark-up on Cast",
                components: [
                  "Major connector location",
                  "Clasp assemblies",
                  "Rest seats and guiding planes",
                ],
                outcome: "Complete RPD design map ready for lab communication",
              },
            ],
          },
          {
            phase: 2,
            title: "Design Validation",
            objectives: [
              "Verify design for retention and support",
              "Minimize aesthetic compromise",
              "Ensure biomechanical stability",
            ],
            procedures: [
              {
                type: "Design Review",
                method: "Instructor or Peer Feedback",
                considerations: [
                  "Justification of component choices",
                  "Visual harmony and minimal display",
                  "Force distribution strategies",
                ],
              },
              {
                type: "Final Approval",
                step: "Design transfer to lab form",
                notes: "Ensure clarity and completeness for lab processing",
              },
            ],
          },
        ],
      },

      results: {
        metrics: {
          proceduralSuccess: {
            pathOfInsertionClarity: "95%",
            undercutIdentificationAccuracy: "92%",
            designCompleteness: "100%",
          },
          skillDevelopment: {
            surveyorHandlingProficiency: "High",
            designRationaleArticulation: "Improved",
          },
        },
        content: {
          achievements: [
            "Accurate identification of favorable undercuts for clasp placement",
            "Well-aligned guiding planes and rest seat positioning",
            "Framework components designed in harmony with anatomical structures",
            "Clear lab communication form with justified design rationale",
          ],
        },
      },
    },
  },
};

export default caseEighteen;
