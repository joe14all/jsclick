import PrepOcc from "../../../assets/images/surveyCrown/prepOcc.jpg";
import PreopBuccal from "../../../assets/images/surveyCrown/preopBuccal.jpg";
import WaxupBuccal from "../../../assets/images/surveyCrown/waxupBuccal.jpg";
import WaxupOcc from "../../../assets/images/surveyCrown/waxupOcc.jpg";
import WaxupLingual from "../../../assets/images/surveyCrown/waxupLingual.jpg";
import CastOcc from "../../../assets/images/surveyCrown/castOcc.jpg";

const caseTwelve = {
  id: 12,
  title: "Surveyed Crown",
  categories: ["restorative", "prosthodontics"],
  thumbnail: {
    img: PrepOcc,
    caption: "Surveyed Crown",
  },
  caseStudy: {
    carousel: [
      {
        img: PrepOcc,
        caption: "Surveyed Prep Occlusal",
        alt: "Post-preparation Survey Analysis",
        modality: "Lab Photography",
        date: "2023-05-10",
        tags: ["finish-line", "prep", "draw"],
      },
      {
        img: PreopBuccal,
        caption: "Surveyed Prep Buccal",
        alt: "Buccal Bulge Development",
        modality: "Lab Photography",
        date: "2023-05-10",
        tags: ["axial", "prep", "draw"],
      },
      {
        img: WaxupBuccal,
        caption: "Wax-up Buccal View",
        alt: "Supra-bulge Contour Formation",
        modality: "Lab Photography",
        date: "2023-05-17",
        tags: ["wax-up", "contour", "emergence-profile"],
      },
      {
        img: WaxupOcc,
        caption: "Wax-up Occlusal",
        alt: "Occlusal Rest Seat Design",
        modality: "Lab Photography",
        date: "2023-05-17",
        tags: ["wax-up", "anatomy"],
      },
      {
        img: WaxupLingual,
        caption: "Wax-up Lingual View",
        alt: "Proximal Guide Plane Creation",
        modality: "Lab Photography",
        date: "2023-05-17",
        tags: ["wax-up", "contour"],
      },
      {
        img: CastOcc,
        caption: "Master Cast Survey",
        alt: "Final Wax-up Verification",
        modality: "Lab Photography",
        date: "2023-05-24",
        tags: ["surveyed", "master-cast"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 61 YO",
              gender: "➞ Male",
              occupation: "➞ Restaurant Owner",
            },
            medicalHistory: {
              systemic: ["Hypertension"],
              dental: [
                "Partial edentoulism (Class III mod I)",
                "Recurrent #30 MOD amalgam failure",
                "Non-ideal abutment contours",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "My back tooth keeps breaking and my partial doesn't snap in like it used to",
            concerns: [
              "❗️ Repeated fracture of large filling in #30",
              "❗️ Decreasing RPD retention",
              "❗️ Food trapping around abutment",
            ],
            expectations: [
              "🔶 Optimizing abutment #30 for a new RPD",
              "🔶 Easier cleaning around abutment",
              "🔶 Durable chewing surface",
            ],
          },
          clinicalAssessment: {
            existingConditions: {
              "Abutment Tooth (#30)": [
                "➞ MOD amalgam (60% tooth structure)",
                "➞ Inadequate buccal contour for RPD",
              ],
              "RPD Design": {
                "Missing Teeth": ["🦷#20", "🦷#28", "🦷#29"],
                "Rest Locations": [
                  "🦷#27 ➞ Cingulum rest",
                  "🦷#18 ➞ Mesial Occlusal rest",
                  "🦷#19 ➞ Distal Occlusal rest",
                  "🦷#21 ➞ Mesial occlusal rest",
                ],
                "Existing Issues": [
                  "Poor reciprocation on #30",
                  "Inadequate buccal contour",
                ],
              },
            },
            prosthodonticFactors: {
              "Survey Findings": [
                "➞ 0 mm undercut on mesio-buccal",
                "➞ 4° tilt required for common path",
                "➞ Ideal clasp position: mid-buccal",
              ],
            },
          },
        },
      },
      challenges: {
        content: [
          {
            id: "SC1",
            title: "Abutment Rehabilitation",
            category: "structure",
            details: {
              issues: [
                "Large MOD preparation with minimal remaining walls",
                "Existing buccal contour inadequate for RPD",
              ],
              impact:
                "Required simultaneous structural rehabilitation and prosthodontic optimization",
            },
            priority: "critical",
          },

          {
            id: "SC2",
            title: "Occluso-Prosthetic Harmony",
            category: "occlusion",
            details: {
              issues: [
                "Balancing natural crown occlusion with RPD",
                "Creating adequate rest seat depth without over-prep",
                "Restoring tooth natural taper ",
              ],
              impact: "Critical for both crown longevity and RPD function",
            },
            priority: "high",
          },
        ],
      },
      solutions: {
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "Day 1-3",
              focus: "Diagnostic Surveying & Preparation",
            },
            {
              phase: 2,
              duration: "Day 4-7",
              focus: "Manual Wax-up & Casting",
            },
            {
              phase: 3,
              duration: "Day 8",
              focus: "RPD Framework Adjustment",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Guided Tooth Preparation",
            objectives: [
              "Establish optimal path of insertion",
              "Create suprabulge contour",
              "Develop guiding planes",
            ],
            procedures: [
              {
                type: "Surveyor-Guided Prep",
                instruments: ["Ney surveyor", "Undercut gauges"],
                parameters: [
                  "10° axial convergence",
                  "1mm suprabulge ",
                  "1mm shoulder margin",
                ],
              },
              {
                type: "Prep Stent Fabrication",
                material: "Autopolymerizing resin",
                features: ["Guide plane replication", "Occlusal index key"],
              },
            ],
          },
          {
            phase: 2,
            title: "Manual Crown Fabrication",
            objectives: [
              "Precision wax-up",
              "Optimal metal thickness",
              "RPD compatibility",
            ],
            procedures: [
              {
                type: "Crown Wax-up",
                steps: [
                  "Surveyor-verified guide planes",
                  "Proximal contact verification",
                  "Occlusal anatomy carving",
                ],
                instruments: ["#7 wax spatula", "Digital waxer"],
              },
              {
                type: "Casting Process",
                material: "Type IV gold",
                parameters: [
                  "2mm occlusal reduction",
                  "0.3mm coping thickness",
                  "M Occlusal rest seat",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Prosthetic Integration",
            objectives: [
              "Passive RPD fit",
              "Optimal clasp engagement",
              "Occlusal verification",
            ],
            procedures: [
              {
                type: "Delivery Protocol",
                steps: [
                  "Surveyor-verified seating",
                  "Articulating paper check",
                  "Clasp tension adjustment",
                ],
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.0,
            functional: 4.8,
            overall: 4.4,
          },
        },
        content: {
          achievements: [
            "Successful RPD retention improvement",
            "No recurrent caries at 6-month recall",
            "Optimal emergence profile for hygiene",
            "Harmonized occlusal contacts",
          ],
          limitations: {
            noted: [
              "Slight metal visibility on buccal",
              "0.5mm overcontour on distal",
              "Increased plaque retention score (1.8)",
            ],
            corrections: [
              "Added oral hygiene instruction",
              "Modified flossing technique",
              "Dietary counseling",
            ],
          },
          technicalSuccess: {
            crownFit: {
              marginal: "🟢 Excellent",
              axial: "🟢 Excellent",
              contacts: "🟢 Excellent",
            },
            dentureRetention: {
              mandible: "🟢 Excellent",
            },
            dentureStability: {
              mandible: "🟢 Excellent",
            },
            dentureSupport: {
              mandible: "🟢 Excellent",
            },
          },
          patientFeedback: {
            quote: "My partial clicks into place better than ever!",
            improvementsNoted: [
              "Chewing tough foods confidently",
              "No more food packing",
              "Easy to clean around crown",
            ],
          },
        },
      },
    },
  },
};

export default caseTwelve;
