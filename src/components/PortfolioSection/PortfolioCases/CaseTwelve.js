import PrepOcc from "../../../assets/images/surveyCrown/prepOcc.jpg";
import PreopBuccal from "../../../assets/images/surveyCrown/preopBuccal.jpg";
import WaxupBuccal from "../../../assets/images/surveyCrown/waxupBuccal.jpg";
import WaxupOcc from "../../../assets/images/surveyCrown/waxupOcc.jpg";
import WaxupLingual from "../../../assets/images/surveyCrown/waxupLingual.jpg";
import CastOcc from "../../../assets/images/surveyCrown/castOcc.jpg";

const caseTwelve = {
  id: 12,
  title: "Survey Crown for RPD Support",
  categories: ["restorative", "prosthodontics"],
  thumbnail: {
    img: PrepOcc,
    alt: "Cast Preparation Occlusal View",
  },
  caseStudy: {
    carousel: [
      {
        img: PrepOcc,
        alt: "Cast Prep Occlusal View",
        caption: "Initial Tooth Preparation",
        modality: "Cast Occlusal",
        date: "2023-05-10",
        tags: ["pre-op", "preparation"],
      },
      {
        img: PreopBuccal,
        alt: "Prep Buccal View",
        caption: "Buccal Surface Analysis",
        modality: "Cast Buccal",
        date: "2023-05-10",
        tags: ["diagnostic"],
      },
      {
        img: WaxupBuccal,
        alt: "Waxup Buccal View",
        caption: "Provisional Design Validation",
        modality: "Wax-up Buccal",
        date: "2023-05-17",
        tags: ["wax-up", "design"],
      },
      {
        img: WaxupOcc,
        alt: "Waxup Occlusal View",
        caption: "Occlusal Plane Development",
        modality: "Wax-up Occlusal",
        date: "2023-05-17",
        tags: ["wax-up", "occlusion"],
      },
      {
        img: WaxupLingual,
        alt: "Waxup Lingual View",
        caption: "Lingual Contour Optimization",
        modality: "Wax-up Lingual",
        date: "2023-05-17",
        tags: ["wax-up", "retention"],
      },
      {
        img: CastOcc,
        alt: "Final Cast Occlusal View",
        caption: "Completed Framework",
        modality: "Cast Occlusal",
        date: "2023-05-24",
        tags: ["post-op", "framework"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          patientProfile: {
            demographic: {
              age: 58,
              gender: "female",
              occupation: "Educator",
            },
            medicalHistory: {
              systemic: ["Hypertension (controlled)"],
              dental: ["Partial edentulism", "Existing non-restorable molar"],
            },
          },
          presentation: {
            chiefComplaint:
              "My partial denture feels unstable and looks unnatural when I smile",
            concerns: [
              "Compromised chewing function",
              "Aesthetic concerns in posterior region",
            ],
            expectations: [
              "Stable prosthesis retention",
              "Natural-looking restoration",
            ],
          },
          clinicalAssessment: {
            existingConditions: {
              teeth: ["#19"],
              findings: [
                "Non-restorable carious lesion",
                "Inadequate retentive contours",
                "Miller Class II mobility",
              ],
            },
            prosthodonticFactors: {
              ridgeRelationship: "Kennedy Class II modification 1",
              interarchSpace: "3mm adequate clearance",
            },
          },
        },
      },
      challenges: {
        title: "Technical Complexities",
        content: [
          {
            id: "C1",
            title: "Biomechanical Optimization",
            category: "Prosthodontics",
            details: {
              issues: [
                "Divergent tooth long axes",
                "Inadequate guiding planes",
                "Limited interproximal space for clasp assembly",
              ],
              impact: "Critical for RPD longevity and patient comfort",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Aesthetic-Force Balance",
            category: "Biomechanics",
            details: {
              issues: [
                "High occlusal load zone",
                "Visible metal components in smile line",
              ],
              observations: ["Required metal-ceramic compromise"],
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
              duration: "2 visits",
              focus: "Diagnostic Planning & Tooth Preparation",
            },
            {
              phase: 2,
              duration: "3 visits",
              focus: "Definitive Impression & Framework Try-in",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Diagnostic Phase",
            objectives: [
              "Establish optimal path of insertion",
              "Determine favorable crown contours",
              "Preserve residual tooth structure",
            ],
            procedures: [
              {
                type: "Diagnostic Wax-up",
                outcome: "0.5mm functional cusp reduction blueprint",
              },
              {
                type: "Surveyor Analysis",
                outcome: "6° distal tilt correction achieved",
              },
            ],
          },
          {
            phase: 2,
            title: "Fabrication Phase",
            objectives: [
              "Precise metal-ceramic junction placement",
              "Optimal occlusal scheme integration",
              "Passive framework fit verification",
            ],
            procedures: [
              {
                type: "Crown Fabrication",
                outcome: "Au-Pd alloy with porcelain occlusal",
              },
              {
                type: "Framework Fit Test",
                technique: "Pressure-indicating paste",
                steps: [
                  "Three-screw test implementation",
                  "16μm fit accuracy achieved",
                ],
              },
            ],
          },
        ],
      },
      results: {
        title: "Prosthetic Outcomes",
        icon: "success",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.3,
            functional: 4.8,
            overall: 4.5,
          },
          biomechanicalPerformance: {
            retentionForce: "12N",
            dislodgementResistance: "Class I",
          },
        },
        content: {
          achievements: [
            "0.25mm precision fit of framework",
            "35% improvement in chewing efficiency",
            "Elimination of prosthesis rock",
          ],
          patientFeedback: {
            quote:
              "I can finally eat without worrying about my denture moving!",
            improvementsNoted: ["Restored confidence in public speaking"],
          },
          limitations: {
            noted: ["Slight metal visibility at high smile line"],
            futureConsiderations: ["Buccal veneer option for aesthetic zone"],
          },
        },
      },
    },
  },
};

export default caseTwelve;
