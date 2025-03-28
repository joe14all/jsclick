import ShadeMatchingImage from "../../../assets/images/compositeveneers/shadematching-1000px.jpg";
import CompositeResultImage from "../../../assets/images/compositeveneers/compositeveneers-1000px.jpg";

const caseNine = {
  id: 9,
  title: "Anterior Composite Veneers",
  categories: ["restorative", "cosmetic"],
  thumbnail: {
    img: CompositeResultImage,
    alt: "Post-treatment aesthetic result",
  },
  caseStudy: {
    carousel: [
      {
        img: ShadeMatchingImage,
        alt: "Close up View of Shade Matching",
        caption: "Pre-treatment shade analysis",
        modality: "Intraoral Close-up",
        tags: ["shade-matching", "pre-op"],
      },
      {
        img: CompositeResultImage,
        alt: "Occlusal View of Composite Veneers",
        caption: "Post-treatment aesthetic result",
        modality: "Occlusal View",
        tags: ["post-op", "aesthetic-result"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: 24,
              gender: "female",
            },
            medicalHistory: {
              systemic: ["None reported"],
              dental: ["No significant history"],
            },
          },
          presentation: {
            chiefComplaint: "I don't like the shape of my laterals",
            concerns: ["Asymmetric lateral incisors", "Budget limitations"],
            expectations: [
              "Improved smile aesthetics",
              "Cost-effective solution",
            ],
          },
          clinicalAssessment: {
            existingRestorations: {
              teeth: ["#7", "#10"],
              condition: ["Natural dentition with morphological discrepancies"],
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Budget Limitation",
            category: "Financial",
            details: {
              issues: [
                "Porcelain veneers exceed budget",
                "Need for cost-effective alternative",
              ],
              impact:
                "Required material compromise while maintaining aesthetics",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Aesthetic Expectation Management",
            category: "Esthetics",
            details: {
              issues: [
                "Natural appearance requirement",
                "Material limitations of composites",
              ],
              impact: "Balancing expectations with material capabilities",
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
              duration: "1 visit",
              focus: "Composite Veneer Placement",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Direct Composite Veneers",
            objectives: [
              "Enhance lateral incisor morphology",
              "Maintain tooth structure",
              "Stay within budget",
            ],
            procedures: [
              {
                type: "Composite Layering",
                technique: "Freehand sculpting",
                steps: [
                  "Tooth preparation (minimal reduction)",
                  "Surface conditioning",
                  "Incremental composite application",
                ],
                outcome: "Improved lateral Incisors symmetry",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        icon: "success",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.5,
            functional: 4.3,
            overall: 4.4,
          },
        },
        content: {
          achievements: [
            "Immediate aesthetic improvement",
            "Preserved natural tooth structure",
            "80% cost savings vs porcelain",
          ],
          patientFeedback: {
            quote: "The result looks very natural and was worth the investment",
            improvementsNoted: [
              "Enhanced smile confidence",
              "Natural tooth appearance",
            ],
          },
          limitations: {
            noted: [
              "Potential staining over time",
              "5-7 year expected lifespan",
            ],
            futureConsiderations: [
              "Porcelain veneer upgrade option",
              "Annual maintenance checks",
            ],
          },
        },
      },
    },
  },
};
export default caseNine;
