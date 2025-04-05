import ImplantCloseUp from "../../../assets/images/anteriorimplant/anteriorimplant-1000px.jpg";
import OcclusalView from "../../../assets/images/anteriorimplant/anteriorimplant2-1000px.jpg";

const caseEight = {
  id: 8,
  title: "Anterior Implant Simulation",
  categories: ["implant"],
  thumbnail: {
    img: ImplantCloseUp,
    alt: "Anterior implant close-up view",
  },
  caseStudy: {
    carousel: [
      {
        img: ImplantCloseUp,
        alt: "Close-up of anterior implant",
        caption: "Anterior implant in diagnostic cast",
        modality: "Lab Macro Occlusal",
        tags: ["implant", "diagnostic cast", "implant positioning"],
      },
      {
        img: OcclusalView,
        alt: "Occlusal view of implant",
        caption: "Implant positioning in occlusal view",
        modality: "Lab Occlusal",
        tags: ["implant", "occlusal view", "prosthetic planning"],
      },
    ],

    sections: {
      overview: {
        content: {
          simulationContext: {
            program: "UCLA - Clinical Simulation",
            objective:
              "To evaluate anterior implant positioning and angulation.",
            difficultyLevel: "Moderate",
            modelType: "Maxillary bone simulation cast",
          },
          proceduralFocus: {
            keySkills: [
              "Free-hand Anterior Implant placement",
              "Assessment of implant angulation and depth",
              "Occlusal evaluation for prosthetic planning",
            ],
            successCriteria: [
              "Accurate implant placement within the cast",
              "Proper alignment with adjacent dentition",
              "Correct angulation for prosthetic restoration",
            ],
          },
        },
      },

      challenges: {
        content: [
          {
            id: "IC1",
            title: "Implant Angulation Assessment",
            category: "Biology",
            details: {
              issues: [
                "Potential buccal or lingual tilt",
                "Alignment with adjacent dentition",
                "Impact on prosthetic emergence profile",
                "Utilization of planned crown support type",
              ],
              impact:
                "Compromise prosthetic fit, occlusion, and long-term implant success.",
            },
            priority: "High",
          },
          {
            id: "IC2",
            title: "Apical Depth Assessment",
            category: "Biology",
            details: {
              issues: [
                "Implant depth relative to crestal bone",
                "Risk of excessive subcrestal placement",
                "Inadequate Prosthetic space",
                "Impact on soft tissue and prosthetic margins",
              ],
              impact:
                "Biological complications, peri-implantitis risk, or esthetic compromise.",
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Single surgical session",
              focus: "Free-hand guided placement",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Precision Placement",
            objectives: [
              "3D positioning accuracy",
              "Optimal implant depth",
              "Primary stability",
            ],
            procedures: [
              {
                type: "Free-hand guided placement",
                sequence: [
                  "Osteotomy preparation with sequential drilling",
                  "Verification of depth and angulation",
                  "Implant insertion and stability assessment",
                ],
                parameters: [
                  "Drilling speed: 800-1500 RPM",
                  "Irrigation: Copious saline",
                  "Torque: 35Ncm",
                ],
              },
            ],
          },
        ],
      },
      results: {
        metrics: {
          proceduralSuccess: {
            anatomyPreservation: "98",
            complicationRate: "2",
          },
          skillDevelopment: {
            timeEfficiency: "85%",
            errorReduction: "90%",
          },
        },
        content: {
          achievements: [
            "Accurate implant placement with minimal deviation",
            "Maintained optimal crestal bone levels",
            "Achieved primary stability at 35Ncm torque",
            "Ensured adequate prosthetic space for restoration",
          ],
          limitations: {
            noted: [
              "Slight variance in bucco-lingual angulation requiring minor prosthetic compensation",
            ],
          },
        },
      },
    },
  },
};

export default caseEight;
