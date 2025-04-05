import OcclusalVideo from "../../../assets/images/completeDenture/occlussal.mp4";
import PrimaryFrontal from "../../../assets/images/completeDenture/primaryFrontal.jpg";
import TraysFrontal from "../../../assets/images/completeDenture/traysFrontal.jpg";
import MasterFrontal from "../../../assets/images/completeDenture/masterFrontal.jpg";
import MountedFrontal from "../../../assets/images/completeDenture/mountedmasterFrontal.jpg";
import RimsFrontal from "../../../assets/images/completeDenture/rimsFrontal.jpg";
import TryinFrontal from "../../../assets/images/completeDenture/tryinFrontal.jpg";
import FinishedFrontal from "../../../assets/images/completeDenture/finished-frontal.jpg";
import PrimaryOcc from "../../../assets/images/completeDenture/primaryOcc.jpg";
import TraysOcc from "../../../assets/images/completeDenture/traysOcc.jpg";
import MasterOcc from "../../../assets/images/completeDenture/masterOcc.jpg";
import RimsOcc from "../../../assets/images/completeDenture/rimsOcc.jpg";
import TryinOcc from "../../../assets/images/completeDenture/tryinOcc.jpg";
import FinishedOcc from "../../../assets/images/completeDenture/finished-occ.jpg";

const caseTen = {
  id: 10,
  title: "Complete Denture - Lab workFlow",
  categories: ["prosthodontics"],
  thumbnail: {
    img: MasterOcc,
    alt: "Master Casts",
  },
  caseStudy: {
    carousel: [
      {
        video: OcclusalVideo,
        alt: "Start to Finish Video",
        caption: "Masticatory function validation",
        modality: "Lab Photography",
        tags: ["work fLow ", "occlusal", "bi-maxillary"],
      },

      {
        img: PrimaryFrontal,
        alt: "Study Cast frontal view",
        caption: "Initial tissue capture",
        modality: "Lab Photography",
        tags: ["cast", "study"],
      },
      {
        img: TraysFrontal,
        alt: "Custom tray frontal view",
        caption: "Custom tray frontal View",
        modality: "Lab Photography",
        tags: ["tray", "custom"],
      },
      {
        img: MasterFrontal,
        alt: "Master cast frontal view",
        caption: "Definitive cast analysis",
        modality: "Lab Photography",
        tags: ["cast", "definitive"],
      },
      {
        img: MountedFrontal,
        alt: "Mounted casts frontal view",
        caption: "Articulator mounting",
        modality: "Lab Photography",
        tags: ["articulator", "mounting"],
      },
      {
        img: RimsFrontal,
        alt: "Occlusal rims frontal view",
        caption: "VDO establishment",
        modality: "Lab Photography",
        tags: ["vdo", "rims"],
      },
      {
        img: TryinFrontal,
        alt: "Try-in frontal view",
        caption: "Aesthetic validation",
        modality: "Lab Photography",
        tags: ["try-in", "aesthetics"],
      },
      {
        img: FinishedFrontal,
        alt: "Final restoration frontal view",
        caption: "Completed denture delivery",
        modality: "Lab Photography",
        tags: ["final", "delivery"],
      },
      {
        img: PrimaryOcc,
        alt: "Primary cast occlusal view",
        caption: "Ridge anatomy recording",
        modality: "Lab Photography",
        tags: ["anatomy", "diagnostic"],
      },
      {
        img: TraysOcc,
        alt: "Custom tray occlusal view",
        caption: "Tissue-specific extension",
        modality: "Lab Photography",
        tags: ["trays", "custom"],
      },
      {
        img: MasterOcc,
        alt: "Master cast occlusal view",
        caption: "Definitive ridge details",
        modality: "Lab Photography",
        tags: ["cast", "master"],
      },
      {
        img: RimsOcc,
        alt: "Occlusal rims view",
        caption: "Occlusal plane orientation",
        modality: "Lab Photography",
        tags: ["occlusion", "plane"],
      },
      {
        img: TryinOcc,
        alt: "Try-in occlusal view",
        caption: "Functional validation",
        modality: "Lab Photography",
        tags: ["try-in", "function"],
      },
      {
        img: FinishedOcc,
        alt: "Final occlusal view",
        caption: "Balanced occlusion",
        modality: "Lab Photography",
        tags: ["final", "occlusion"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Presentation",
        content: {
          patientProfile: {
            demographic: {
              age: 60,
              gender: "male",
            },
            medicalHistory: {
              systemic: ["Osteoporosis (managed)"],
              dental: ["Edentulous >5 years"],
            },
          },
          presentation: {
            chiefComplaint: "Inability to chew and facial collapse",
            concerns: [
              "Compromised nutrition",
              "Facial esthetic deterioration",
              "Previous denture instability",
            ],
            expectations: [
              "Stable prosthesis",
              "Natural facial support",
              "Functional restoration",
            ],
          },
          clinicalAssessment: {
            oralCondition: {
              ridgeClassification: {
                maxilla: "Class IV (Seibert)",
                mandible: "Class III (Seibert)",
              },
              mucosa: "Fibrous mobile tissue",
            },
            diagnosticData: {
              VDOloss: "8mm",
              interarchSpace: "18mm",
            },
          },
        },
      },
      challenges: {
        title: "Prosthetic Complexities",
        content: [
          {
            id: "PC1",
            title: "Anatomical Limitations",
            category: "Support",
            details: {
              issues: [
                "Severe ridge resorption",
                "Displaceable mucosa",
                "Insufficient vestibular depth",
              ],
              impact: "Compromised denture stability",
            },
            priority: "Critical",
          },
          {
            id: "PC2",
            title: "Functional Restoration",
            category: "Occlusion",
            details: {
              issues: [
                "Loss of vertical dimension",
                "Adapted neuromuscular pattern",
                "Reduced occlusal force capacity",
              ],
              impact: "Risk of occlusal disharmony",
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        title: "Rehabilitation Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Diagnostic Phase",
              focus: "Biological Params",
            },
            {
              phase: 2,
              duration: "Technical Phase",
              focus: "Denture Fabrication",
            },
            {
              phase: 3,
              duration: "Adaptation Phase",
              focus: "Neuromuscular Training",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Foundation Establishment",
            objectives: [
              "Neutral zone capture",
              "VDO restoration",
              "Support optimization",
            ],
            procedures: [
              {
                type: "Custom Tray Fabrication",
                material: "Light-cure resin",
                technique: "Border molding",
                outcome: "Definitive tissue registration",
              },
              {
                type: "Occlusal Registration",
                method: "Gothic arch tracing",
                verification: ["Interocclusal check records"],
              },
            ],
          },
          {
            phase: 2,
            title: "Prosthesis Construction",
            objectives: [
              "Balanced occlusion",
              "Optimal aesthetics",
              "Denture base adaptation",
            ],
            procedures: [
              {
                type: "Tooth Arrangement",
                system: "Lingualized occlusion",
                parameters: ["30° cusp angle", "1mm anterior overlap"],
              },
              {
                type: "Processing",
                technique: "Injection molding",
                material: "High-impact acrylic",
              },
            ],
          },
          {
            phase: 3,
            title: "Patient Adaptation",
            objectives: [
              "Neuromuscular re-education",
              "Prosthesis optimization",
              "Maintenance protocol",
            ],
            procedures: [
              {
                type: "Insertion Protocol",
                checks: [
                  "Equal pressure distribution",
                  "Border extension verification",
                  "Phonetic validation",
                ],
              },
              {
                type: "Post-insertion Care",
                schedule: [
                  "24h adjustment",
                  "1-week follow-up",
                  "Gradual loading protocol",
                ],
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          functionalGains: {
            masticatoryEfficiency: "82% improvement",
            occlusalForce: "35N ± 5N",
          },
          patientSatisfaction: {
            comfort: 4.5,
            aesthetics: 4.7,
            function: 4.6,
          },
        },
        content: {
          achievements: [
            "0.5mm even pressure distribution",
            "Stable VDO maintenance",
            "Complete phonetic restoration",
          ],
          technicalSuccess: {
            dentureStability: {
              maxilla: "Cohen score 2",
              mandible: "Cohen score 3",
            },
          },
          patientFeedback: {
            quote: "I can finally eat apples again!",
          },
          longTermMaintenance: {
            "6-month": "0.2mm tissue compression",
            "12-month": "Stable occlusal contacts",
          },
        },
      },
    },
  },
};

export default caseTen;
