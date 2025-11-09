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
import MaxDelVideo from "../../../assets/images/completeDenture/MaxRetention.mp4";
import MandDelVideo from "../../../assets/images/completeDenture/MandRetention.mp4";

const caseTen = {
  id: 10,
  title: "Lab workflow - Complete Denture",
  categories: ["prosthodontics"],
  thumbnail: {
    img: MasterOcc,
    alt: "Master Casts",
  },
  caseStudy: {
    carousel: [
      // ... (carousel content is fine, no changes needed) ...
      {
        video: OcclusalVideo,
        caption: "Start-to-finish video",
        alt: "Masticatory function validation",
        modality: "Sequence Video",
        tags: ["workflow", "process", "overview"],
        date: "03-01-2021",
      },
      {
        img: PrimaryFrontal,
        caption: "Study cast frontal",
        alt: "Initial tissue capture",
        modality: "Lab Photography",
        tags: ["study-cast", "diagnostic", "initial"],
        date: "01-15-2021",
      },
      {
        img: TraysFrontal,
        caption: "Custom tray frontal",
        alt: "Tissue-specific adaptation",
        modality: "Lab Photography",
        tags: ["custom-tray", "impression"],
        date: "01-22-2021",
      },
      {
        img: MasterFrontal,
        caption: "Master cast frontal",
        alt: "Definitive morphology",
        modality: "Lab Photography",
        tags: ["master", "undercuts", "anatomy"],
        date: "01-29-2021",
      },
      {
        img: MountedFrontal,
        caption: "Master cast w/ plates 45 degree",
        alt: "Spatial relationship transfer",
        modality: "Lab Photography",
        tags: ["mounting", "plates", "relationship"],
        date: "02-06-2021",
      },
      {
        img: RimsFrontal,
        caption: "Occlusal rims frontal",
        alt: "Vertical dimension assessment",
        modality: "Lab Photography",
        tags: ["occlusal-rims", "vdo"],
        date: "02-06-2021",
      },
      {
        img: TryinFrontal,
        caption: "Prosthesis wax up frontal",
        alt: "Aesthetic verification",
        modality: "Lab Photography",
        tags: ["wax-up", "try-in", "teeth"],
        date: "02-13-2021",
      },
      {
        img: FinishedFrontal,
        caption: "Final prothesis frontal",
        alt: "Prosthetic delivery",
        modality: "Lab Photography",
        tags: ["final", "delivery", "acrylic"],
        date: "03-01-2021",
      },
      {
        img: PrimaryOcc,
        caption: "Study cast occlusal",
        alt: "Diagnostic impression",
        modality: "Lab Photography",
        tags: ["study-cast", "anatomy", "baseline"],
        date: "02-20-2021",
      },
      {
        img: TraysOcc,
        caption: "Custom tray occlusal",
        alt: "Border-molded adaptation",
        modality: "Lab Photography",
        tags: ["custom-tray", "extension"],
        date: "02-25-2021",
      },
      {
        img: MasterOcc,
        caption: "Master cast occlusal",
        alt: "Surface detail replication",
        modality: "Lab Photography",
        tags: ["extension", "post-dam", "island"],
        date: "02-06-2021",
      },
      {
        img: RimsOcc,
        caption: "Occlusal rims occlusal",
        alt: "Horizontal alignment",
        modality: "Lab Photography",
        tags: ["occlusal-rims", "alignment"],
        date: "02-06-2021",
      },
      {
        img: TryinOcc,
        caption: "Prosthesis wax up occlusal",
        alt: "Occlusal harmony",
        modality: "Lab Photography",
        tags: ["wax-up", "try-in"],
        date: "02-13-2021",
      },
      {
        img: FinishedOcc,
        caption: "Final prothesis occlusal",
        alt: "Prosthetic harmony",
        modality: "Lab Photography",
        tags: ["final-prosthesis", "acrylic"],
        date: "03-01-2021",
      },
      {
        video: MaxDelVideo,
        caption: "Maxillary prothesis retention",
        alt: "Maxillary prothesis retention",
        modality: "Clinical functional Video",
        tags: ["retention", "insertion", "removal"],
        date: "03-01-2021",
      },
      {
        video: MandDelVideo,
        caption: "Mandibular prothesis retention",
        alt: "Mandibular prothesis retention",
        modality: "Clinical functional Video",
        tags: ["retention", "insertion", "removal"],
        date: "03-01-2021",
      },
    ],

    sections: {
      overview: {
        // ... (overview content is fine, no changes needed) ...
        title: "Clinical Presentation",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 63 YO",
              gender: "➞ Male",
            },
            medicalHistory: {
              systemic: ["ASA I"],
              houseClassification: "Indifferent",
              dental: ["Edentulous >10 years", "Didn't wear a denture before"],
            },
          },
          presentation: {
            chiefComplaint:
              "I have lost my teeth throughout years and I didn't have money to replace",
            concerns: [
              "❗️ Compromised nutrition",
              "❗️ Facial esthetic deterioration",
              "❗️ Speech difficulties",
            ],
            expectations: [
              "🔶 Stable prosthesis",
              "🔶 Natural facial support",
              "🔶 Functional restoration",
            ],
          },
          clinicalAssessment: {
            prosthodonticStatus: {
              "PDI Classification": {
                "Class III": "Highest class",
                "": {
                  "Class III": [
                    "➞ Bone Height-Mandibular: 11-15 mm",
                    "➞ Maxillomandibular Relationships: Class III",
                    "➞ Psychosocial: Moderate",
                  ],

                  "Class I": [
                    "➞ Morphology-Maxilla: Type A",
                    "➞ Muscle Attachments-Mandibular: Type A",
                  ],
                },
              },
            },
          },
        },
      },
      challenges: {
        // ... (challenges content is fine, no changes needed) ...
        content: [
          {
            id: "PC1",
            title: "Long-term Edentulism",
            category: "Biology",
            details: {
              issues: [
                "Edentulous for over 10 years",
                "No history of denture use",
                "Progressive bone resorption",
                "Mandibular bone height limited to 11–15 mm",
              ],
              impact:
                "Compromises support and retention of prosthesis, increases complexity of treatment, and affects long-term prognosis.",
            },
            priority: "critical",
          },
          {
            id: "PC2",
            title: "Compromised Oral Function & Esthetics",
            category: "function",
            details: {
              issues: [
                "Impaired mastication affecting nutrition",
                "Facial esthetic deterioration due to lack of support",
                "Speech difficulties linked to tooth and ridge loss",
                "Moderate psychosocial impact (PDI classification)",
              ],
              impact:
                "Affects quality of life, self-image, and social interactions; necessitates comprehensive prosthetic planning to restore function and appearance.",
            },
            priority: "high",
          },
          {
            id: "PC3",
            title: "Anatomical & Skeletal Discrepancies",
            category: "anatomy",
            details: {
              issues: [
                "Maxillomandibular relationship: Class III",
                "Indifferent House classification (poor neuromuscular control)",
                "Muscle attachment & ridge morphology require consideration during impression and retention phases",
              ],
              impact:
                "Adds complexity to occlusal schemes, denture base extension, and requires careful management of spatial relationships to ensure denture stability.",
            },
            priority: "high",
          },
        ],
      },
      solutions: {
        title: "Rehabilitation Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Week 1–2",
              focus: "Diagnostic Planning & Foundation Records",
            },
            {
              phase: 2,
              duration: "Week 3–5",
              focus: "Definitive Modeling & Prosthetic Setup",
            },
            {
              phase: 3,
              duration: "Week 6–7",
              focus: "Finalization & Delivery Optimization",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Diagnostic Phase & Record Base Development",
            objectives: [
              "Capture ridge anatomy",
              "Stabilize base plates",
              "Analyze jaw relation",
            ],
            procedures: [
              {
                type: "Preliminary Casts",
                // FIX 1: Renamed 'material' to 'materials' and wrapped in an array.
                materials: ["Alginate"],
                technique: "Pour study casts to examine ridge anatomy",
                outcome: "Base model for custom tray fabrication",
              },
              {
                type: "Custom Trays",
                // FIX 2: Renamed 'material' to 'materials' and wrapped in an array.
                materials: ["self-cured acrylic"],
                outcome:
                  "Tray supports accurate border molding and detail capture",
              },
              {
                type: "Master Impressions",
                // FIX 3: Renamed 'material' to 'materials' and wrapped in an array.
                materials: ["PVS (medium & light body)"],
                technique:
                  "Functional impression capturing anatomical landmarks",
                outcome:
                  "Definitive casts with full extension and accurate tissue detail",
              },
            ],
          },
          {
            phase: 2,
            title: "Jaw Relation & Esthetic Functional Try-In",
            objectives: [
              "Establish VDO",
              "Restore facial contour",
              "Balance occlusion",
            ],
            procedures: [
              {
                type: "Record Bases & Occlusal Rims",
                // FIX 4: Renamed 'material' to 'materials' and wrapped in an array.
                materials: ["Baseplate wax with acrylic base"],
                technique: "Adjusted for esthetic support and phonetics",
                outcome: "Validated maxillo-mandibular record",
              },
              {
                type: "Teeth Setup",
                // FIX 5: 'system' was a string, now it's an array.
                system: ["Anatomic acrylic teeth (e.g. Vita, Ivoclar)"],
                // This was already correct: an array of strings.
                parameters: [
                  "Posterior unilateral crossbite configuration",
                  "Esthetics matched to midline and smile curve",
                  "Balanced occlusion planning",
                ],
              },
              {
                type: "Wax Try-In",
                technique: "Facial esthetics checked, phonetics evaluated",
                // FIX 6: Renamed 'material' to 'materials' and wrapped in an array.
                materials: ["Full-contour wax"],
                outcome: "Functional validation before processing",
              },
            ],
          },
          {
            phase: 3,
            title: "Processing, Finishing & Delivery",
            objectives: [
              "Finalize processing",
              "Polish for comfort",
              "Verify adaptation",
            ],
            procedures: [
              {
                type: "Processing",
                technique: "Compression mold",
                // FIX 7: Renamed 'material' to 'materials' and wrapped in an array.
                materials: ["Heat-cured acrylic"],
                outcome: "Precision fit with long-term material integrity",
              },
              {
                type: "Polishing & Delivery",
                // This was already correct: an array of strings.
                checks: [
                  "Border integrity & pressure points",
                  "Occlusion adjustment post-processing",
                  "Retention and stability in oral environment",
                ],
              },
              {
                type: "Post-Insertion Protocol",
                // This was already correct: an array of strings.
                schedule: [
                  "48-hour follow-up for tissue response",
                  "1-week review for function and retention",
                  "Monthly evaluation during adaptation",
                ],
              },
            ],
          },
        ],
      },
      results: {
        // ... (results content is fine, no changes needed) ...
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.5,
            functional: 4.7,
            overall: 4.6,
          },
        },
        content: {
          achievements: [
            "Balanced occlusion achieved on articulator",
            "Restored facial esthetics and lip support",
            "Optimized vertical dimension with improved phonetics",
            "Stable retention of maxillary denture",
            "Satisfactory functional adaptation within 2 weeks",
          ],
          limitations: {
            noted: [
              "Mandibular special tray slightly underextended",
              "Class III skeletal pattern complicated posterior occlusion",
              "Slight midline deviation during wax try-in",
            ],
            corrections: [
              "Special tray underextention compensated with green stick during final impression",
              "Tooth arrangement adjusted for crossbite compensation",

              "Midline adjusted during final waxing session",
            ],
          },
          technicalSuccess: {
            dentureStability: {
              maxilla: "🟢 Excellent",
              mandible: "🟡 Acceptable",
            },
            dentureRetention: {
              maxilla: "🟢 Excellent",
              mandible: "🟢 Excellent",
            },
            dentureSupport: {
              maxilla: "🟢 Excellent",
              mandible: "🟡 Acceptable",
            },
          },
          patientFeedback: {
            quote: "I can finally smile with teeth again!",
            improvementsNoted: [
              "Improved chewing efficiency",
              "Clearer speech and pronunciation",
              "Confidence in smiling",
            ],
          },
        },
      },
    },
  },
};

export default caseTen;
