import CompositeProgress from "../../../assets/images/Invisalign/CompositeProgress.mp4";
import FrontalPrepOP from "../../../assets/images/Invisalign/Frontal.jpg";
import FrontalProgress from "../../../assets/images/Invisalign/FrontalProgress.mp4";
import LateralProgress from "../../../assets/images/Invisalign/LateralProgress.mp4";
import LeftPrepOP from "../../../assets/images/Invisalign/Left.jpg";
import MandibularPrepOP from "../../../assets/images/Invisalign/Mandibular.jpg";
import MaxillaryPrepOP from "../../../assets/images/Invisalign/Maxillary.jpg";
import RightPrepOP from "../../../assets/images/Invisalign/Right.jpg";
import FrontalPostOp from "../../../assets/images/Invisalign/FrontalPostOp.jpg";
import FrontalPostOpOpen from "../../../assets/images/Invisalign/FrontalOpenPostOp.jpeg";

const carouselItems = [
  {
    img: FrontalPrepOP,
    caption: "Pre-Op Frontal",
    alt: "Pre-op Frontal View",
    modality: "Intra-Oral Frontal",
    date: "2022-10-19",
    tags: ["diagnostic", "anterior-crowding", "midline-shift", "overjet"],
  },
  {
    img: LeftPrepOP,
    caption: "Pre-Op Left Lateral",
    alt: "Pre-Op Left Lateral View",
    modality: "Intra-Oral Left Lateral",
    date: "2022-10-19",
    tags: ["diagnostic", "lateral-view", "crowding", "overjet"],
  },
  {
    img: RightPrepOP,
    caption: "Pre-Op Right Lateral",
    alt: "Pre-Op Right Lateral View",
    modality: "Intra-Oral Right Lateral",
    date: "2022-10-19",
    tags: ["diagnostic", "lateral-view", "crowding", "overjet"],
  },
  {
    img: MandibularPrepOP,
    caption: "Pre-Op Mandibular Occlusal",
    alt: "Pre-Op Mandibular Occlusal View",
    modality: "Occlusal Mandibular",
    date: "2022-10-19",
    tags: ["occlusal-view", "lower-crowding", "bolton"],
  },
  {
    img: MaxillaryPrepOP,
    caption: "Pre-Op Maxillary Occlusal",
    alt: "Pre-Op Maxillary Occlusal View",
    modality: "Occlusal Maxillary",
    date: "2022-10-19",
    tags: ["occlusal-view", "upper-crowding", "expansion"],
  },
  {
    video: CompositeProgress,
    caption: "Composite Progress",
    alt: "Composite Progress Video",
    modality: "Progress Video",
    date: "2022-10-19",
    tags: ["progress", "before-after", "composite"],
  },
  {
    video: FrontalProgress,
    caption: "Frontal Progress",
    alt: "Frontal Progress Video",
    modality: "Progress Video",
    date: "2022-10-19",
    tags: ["progress", "frontal-track", "smile-evo"],
  },
  {
    video: LateralProgress,
    caption: "Lateral Progress",
    alt: "Lateral Progress Video",
    modality: "Progress Video",
    date: "2022-10-19",
    tags: ["progress", "lateral-track", "biomechanics"],
  },
  {
    img: FrontalPostOp,
    caption: "Frontal Closed - Revision 1",
    alt: "Lateral Progress Video",
    modality: "Intra-Oral Frontal",
    date: "2023-08-01",
    tags: ["revision", "correction", "levelling"],
  },
  {
    img: FrontalPostOpOpen,
    caption: "Frontal Opened - Revision 1",
    alt: "Lateral Progress Video",
    modality: "Extra-Oral Frontal",
    date: "2023-08-01",
    tags: ["revision", "correction", "levelling"],
  },
];

const caseNineteen = {
  id: 19,
  title: "Invisalign - Clear Aligners",
  categories: ["aligners", "digital"],
  thumbnail: {
    img: FrontalPrepOP,
    alt: "Pre-Op Frontal View",
  },
  caseStudy: {
    carousel: carouselItems,

    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          patientProfile: {
            demographic: {
              age: "➞  43 YO",
              gender: "➞  Male",
              occupation: "➞  Attorney",
            },
            medicalHistory: {
              systemic: ["ASA I"],
              dental: [
                "Routine dental maintenance",
                "No prior restorative work",
                "Gingival recession from aggressive brushing",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "I want a better smile – I’m unhappy with how crooked my teeth are. 😊",
            concerns: [
              "❗️ Anterior crowding and misalignment",
              "❗️ Smile asymmetry",
              "❗️ Hard-to-clean interproximal spaces",
            ],
            expectations: [
              "🔶 Straight, evenly spaced teeth",
              "🔶 Balanced, symmetrical smile line",
              "🔶 Improved confidence and hygiene ease",
            ],
          },

          clinicalAssessment: {
            existingConditions: {
              // 📏 Bolton Analysis
              "Bolton Analysis": {
                "Anterior Discrepancy": "📏 1.64 mm mandibular excess",
                "Overall Discrepancy": "📏 0.44 mm mandibular excess",
              },

              // 📐 Arch Dimensions
              "Arch Dimensions": {
                Upper: [
                  {
                    "Segment 3–14": {
                      " Initial": "➞ 45.7",
                      " Planned": "➞ 47.3",
                      " Change": "➕ 1.6 mm",
                    },
                  },
                  {
                    "Segment 4–13": {
                      " Initial": "➞ 42.0",
                      " Planned": "➞ 42.7",
                      " Change": "➕ 0.7 mm",
                    },
                  },
                ],
                Lower: [
                  {
                    "Segment 27–22": {
                      " Initial": "➞  26.4",
                      " Planned": "➞ 25.8",
                      " Change": "➖ 0.6 mm",
                    },
                  },
                  {
                    "Segment 30–19": {
                      " Initial": "➞  41.2",
                      " Planned": "➞ 42.1",
                      " Change": "➕ 0.9 mm",
                    },
                  },
                ],
              },

              // 📈 Overjet & Overbite
              "Overjet Overbite": {
                Overjet: {
                  Initial: "➞ 1.9",
                  Planned: "➞ 2.0",
                  Change: "➕ 0.1 mm",
                },
                Overbite: {
                  Initial: "➞ 2.4",
                  Planned: "➞ 2.6",
                  Change: "➕ 0.2 mm",
                },
              },

              // 🦷 Key Tooth Movements
              "Key Movements": [
                {
                  Type: "Rotation",
                  Details: [
                    { "🦷#09": "🔄 17.9° M" },
                    { "🦷#27": "🔄 14.0° M" },
                    { "🦷#30": "🔄 11.0° M" },
                  ],
                },
                {
                  Type: "Intrusion/Extrusion",
                  Details: [
                    { "🦷#10": "⬆️ 1.2 mm E" },
                    { "🦷#07": "⬆️ 0.6 mm E" },
                  ],
                },
                {
                  Type: "Translation",
                  Details: [{ "🦷#14": "↔️ 1.0 mm B" }],
                },
              ],
            },
          },
        },
      },
      challenges: {
        content: [
          {
            id: "SC1",
            title: "Anterior Bolton Discrepancy & Crowding",
            category: "occlusion",
            details: {
              issues: [
                "1.64 mm mandibular excess (Bolton anterior discrepancy)",
                "Severe anterior crowding impacting alignment",
              ],
              impact:
                "Compromised overjet/overbite correction and midline shift risk if not properly managed.",
            },
            priority: "critical",
          },
          {
            id: "SC2",
            title: "Complex Rotational Biomechanics",
            category: "biomechanics",
            details: {
              issues: [
                "Multiple teeth requiring >10° rotation (e.g., 🦷#09: 17.9° M, 🦷#27: 14.0° M)",
                "Significant buccal/palatal translation demands on posterior segments",
              ],
              impact:
                "High risk of aligner tracking issues and need for refinements, especially around high‑torque movements.",
            },
            priority: "high",
          },
          {
            id: "SC3",
            title: "Periodontal Health & Hygiene",
            category: "periodontics",
            details: {
              issues: [
                "Gingival recession from aggressive brushing",
                "Hard‑to‑clean interproximal spaces increasing plaque risk",
              ],
              impact:
                "Potential for further recession, root sensitivity, and compromised long‑term periodontal stability.",
            },
            priority: "medium",
          },
        ],
      },

      solutions: {
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Stages 1–10",
              focus: "Anterior alignment & Bolton correction",
            },
            {
              phase: 2,
              duration: "Stages 11–20",
              focus: "Posterior expansion & bite‑ramp integration",
            },
            {
              phase: 3,
              duration: "Stages 21+",
              focus: "Midline correction & final detailing",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Anterior Alignment & IPR Phase",
            objectives: [
              "Resolve 1.64 mm Bolton anterior discrepancy via targeted IPR",
              "Begin midline correction toward patient’s left",
              "Establish root control attachments on anterior teeth",
            ],
            procedures: [
              {
                type: "IPR Protocol",
                parameters: [
                  "Posterior IPR first (as needed per Bolton chart)",
                  "Then lower anterior IPR to fine‑tune midline",
                ],
              },
              {
                type: "Attachment Strategy",
                details: [
                  "Optimized, regular‑size attachments on #2–#15 & #18–#31",
                  "Precision‑cut hooks start at Stage 1 for auxiliaries",
                ],
              },
              {
                type: "Passive Aligners",
                details: [
                  "Add passive aligners at treatment end of Stage 10",
                  "Smooth transition into Phase 2 mechanics",
                ],
              },
            ],
          },
          {
            phase: 2,
            title: "Posterior Expansion & Bite Ramp Phase",
            objectives: [
              "Expand ≤ 2 mm per quadrant (upper 3–14: +1.6 mm; 4–13: +0.7 mm)",
              "Control lower incisor intrusion (> 1.5 mm triggers precision bite ramps)",
              "Maintain overjet/overbite progression",
            ],
            procedures: [
              {
                type: "Arch Expansion",
                parameters: [
                  "Upper: 3–14 +1.6 mm, 4–13 +0.7 mm",
                  "Lower: 30–19 +0.9 mm, 27–22 –0.6 mm as needed",
                ],
              },
              {
                type: "Bite Ramp Integration",
                details: [
                  "Auto‑place precision bite ramps for any lower incisor intrusion > 1.5 mm",
                ],
              },
              {
                type: "Hygiene & Periodontal Care",
                details: [
                  "Trim aligners to CEJ line to protect recession areas",
                  "Reinforce hygiene at interproximal sites",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Midline & Occlusal Finalization",
            objectives: [
              "Complete lower midline shift to center",
              "Refine overjet to 2.0 mm & overbite to 2.6 mm",
              "Detail tooth positions (angulation, rotation, torque)",
            ],
            procedures: [
              {
                type: "Occlusal Detailing",
                steps: [
                  "Selective intrusion of lower incisors for overbite control",
                  "Fine‑tune bite ramps and intercuspation",
                ],
              },
              {
                type: "Refinement Aligners",
                details: [
                  "One round of refinements expected for posterior tracking",
                  "Monitor key rotations (#9, #27, #30) and adjust attachments",
                ],
              },
              {
                type: "Retention Prep",
                details: [
                  "Finalize pontic design for any residual spaces",
                  "Plan removable retainers to maintain arch form",
                ],
              },
            ],
          },
        ],
      },

      results: {
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.3,
            functional: 4.5,
            overall: 4.4,
          },
          clinicalImprovement: {
            overjet: {
              initial: 1.9,
              final: 2.0,
              change: "➕ 0.1 mm",
            },
            overbite: {
              initial: 2.4,
              final: 2.6,
              change: "➕ 0.2 mm",
            },
            archExpansion: {
              upper: "➕ 1.6 mm (Segment 3–14), ➕ 0.7 mm (Segment 4–13)",
              lower: "➕ 0.9 mm (Segment 30–19), ➖ 0.6 mm (Segment 27–22)",
            },
          },
        },
        content: {
          achievements: [
            "🏆 Bolton anterior discrepancy addressed (1.64 mm)",
            "🏆 Overjet reached 2.0 mm — within functional range",
            "🏆 Overbite improved to 2.6 mm",
            "🏆 Arch expansion achieved per initial targets",
          ],

          patientFeedback: {
            quote:
              "Seeing the before-and-after pictures makes the progress clear, though I can feel it’s not quite done yet — excited for the final tweaks!",
            improvementsExpected: [
              "Further improvement in chewing efficiency",
              "Smoother interdental cleaning",
              "Better anterior alignment and smile symmetry after refinements",
            ],
          },

          technicalSuccess: {
            alignmentAndOcclusion: {
              alignment: {
                anterior:
                  "🟡 Partial improvement — lower and upper anterior still require leveling and final positioning",
                posterior: "🟢 Good tracking, minor refinements planned",
              },
              occlusion: {
                overjet: "🟢 Achieved functional correction",
                overbite: "🟢 Within target range",
              },
            },
          },

          retentionPlan: [
            "🔒 Refinement phase planned prior to final retention",
            "🔒 Vivera retainers post‑treatment after final alignment",
            "🔒 Recommend night‑time wear",
            "🔒 Schedule follow-up at 6‑ and 12‑month intervals post-refinement",
          ],
        },
      },
    },
  },
};

export default caseNineteen;
