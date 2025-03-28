import FrontalCast from "../../../assets/images/immediatedenture/frontalCast.jpg";
import FrontalWaxup from "../../../assets/images/immediatedenture/FrontalWaxup.jpg";
import OccCast from "../../../assets/images/immediatedenture/occCast.jpg";
import OccWaxup from "../../../assets/images/immediatedenture/occWaxup.jpg";

const caseEleven = {
  id: 11,
  title: "Immediate Upper Denture",
  categories: ["prosthodontics"],
  thumbnail: {
    img: FrontalCast,
    alt: "Cast Frontal View",
  },
  caseStudy: {
    carousel: [
      {
        img: FrontalCast,
        alt: "Cast Frontal View",
        caption: "Pre-extraction diagnostic cast",
        modality: "Laboratory Model",
        tags: ["pre-op", "diagnostic"],
      },
      {
        img: FrontalWaxup,
        alt: "Wax up Frontal View",
        caption: "Anterior teeth setup",
        modality: "Wax Trial",
        tags: ["setup", "esthetic-preview"],
      },
      {
        img: OccCast,
        alt: "Cast Occlusal View",
        caption: "Occlusal relationship record",
        modality: "Articulated Cast",
        tags: ["occlusion", "bite-registration"],
      },
      {
        img: OccWaxup,
        alt: "Wax up Occlusal View",
        caption: "Posterior occlusal scheme",
        modality: "Functional Wax-up",
        tags: ["occlusion", "denture-design"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: 68,
              gender: "Male",
            },
            medicalHistory: {
              systemic: ["Controlled hypertension"],
              dental: ["Advanced periodontitis", "Multiple mobile teeth"],
            },
          },
          presentation: {
            chiefComplaint:
              "Need to replace upper teeth without being without teeth",
            concerns: [
              "Fear of edentulous appearance",
              "Functional impairment",
            ],
            expectations: [
              "Same-day tooth replacement",
              "Natural appearance preservation",
              "Immediate function",
            ],
          },
          clinicalAssessment: {
            existingRestorations: {
              teeth: ["#3-#14"],
              condition: [
                "Grade III mobility",
                "Vertical bone loss",
                "Failed FPDs",
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
            title: "Ridge Contour Prediction",
            category: "Prosthodontic",
            details: {
              issues: [
                "Alveolar resorption variability",
                "Soft tissue rebound effect",
              ],
              impact: "Potential for poor denture fit post-healing",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Aesthetic Replication",
            category: "Esthetics",
            details: {
              issues: [
                "Matching existing tooth morphology",
                "Color consistency",
              ],
              impact: "Patient's strong preference for familiar appearance",
            },
            priority: "Medium",
          },
          {
            id: "C3",
            title: "Immediate Retention",
            category: "Function",
            details: {
              issues: ["Bony undercut utilization", "Mucosal displacement"],
              impact: "Risk of early denture displacement",
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
              duration: "5 days",
              focus: "Prosthesis Fabrication",
            },
            {
              phase: 2,
              duration: "1 visit",
              focus: "Extractions & Delivery",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Denture Development",
            objectives: [
              "Accurate tooth positioning",
              "Functional occlusal scheme",
              "Retention features",
            ],
            procedures: [
              {
                type: "Diagnostic Wax-up",
                outcome: "Replicated existing tooth positions",
                steps: [
                  "Primary impression",
                  "Custom tray fabrication",
                  "Border molding",
                ],
              },
              {
                type: "Bite Registration",
                technique: "Centric relation record",
                outcome: "1.5mm freeway space",
              },
            ],
          },
          {
            phase: 2,
            title: "Surgical-Prosthetic Phase",
            objectives: [
              "Atraumatic extractions",
              "Immediate insertion",
              "Occlusal adjustment",
            ],
            procedures: [
              {
                type: "Extractions",
                teeth: ["#3-#14"],
                technique: "Sectional removal",
                outcome: "Minimal ridge trauma",
              },
              {
                type: "Denture Delivery",
                steps: [
                  "Intraoral adjustment",
                  "Pressure-indicating paste",
                  "Retention check",
                ],
                outcome: "4-lb insertion force",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.6,
            functional: 4.2,
            overall: 4.4,
          },
        },
        content: {
          achievements: [
            "Immediate functional restoration",
            "Psychological comfort maintained",
            "6-month retention stability",
          ],
          patientFeedback: {
            quote: "It feels like my own teeth from day one",
            improvementsNoted: [
              "Confidence in social interactions",
              "Normal speech restored",
            ],
          },
          limitations: {
            noted: ["2-week soft diet required", "Minor pressure spots"],
            futureConsiderations: ["6-month reline", "Implant consideration"],
          },
        },
      },
    },
  },
};
export default caseEleven;
