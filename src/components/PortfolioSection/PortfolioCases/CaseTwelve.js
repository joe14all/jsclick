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
        date: "2020-07-27",
        tags: ["finish-line", "prep", "draw"],
      },
      {
        img: PreopBuccal,
        caption: "Surveyed Prep Buccal",
        alt: "Buccal Bulge Development",
        modality: "Lab Photography",
        date: "2020-07-27",
        tags: ["axial", "prep", "draw"],
      },
      {
        img: WaxupBuccal,
        caption: "Wax-up Buccal View",
        alt: "Supra-bulge Contour Formation",
        modality: "Lab Photography",
        date: "2020-07-27",
        tags: ["wax-up", "contour", "emergence-profile"],
      },
      {
        img: WaxupOcc,
        caption: "Wax-up Occlusal",
        alt: "Occlusal Rest Seat Design",
        modality: "Lab Photography",
        date: "2020-07-27",
        tags: ["wax-up", "anatomy"],
      },
      {
        img: WaxupLingual,
        caption: "Wax-up Lingual View",
        alt: "Proximal Guide Plane Creation",
        modality: "Lab Photography",
        date: "2020-07-27",
        tags: ["wax-up", "contour"],
      },
      {
        img: CastOcc,
        caption: "Master Cast Survey",
        alt: "Final Wax-up Verification",
        modality: "Lab Photography",
        date: "2020-07-27",
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
                "Partial edentulism (Class III mod I)",
                "Recurring failure of #30 MOD amalgam",
                "Non-ideal contours for abutment use",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "My back tooth keeps breaking and my partial doesn't snap in like it used to",
            concerns: [
              "❗️ Frequent fracture of extensive filling in #30",
              "❗️ Diminished retention of RPD",
              "❗️ Food impaction around abutment tooth",
            ],
            expectations: [
              "🔶 Optimize #30 for RPD compatibility",
              "🔶 Simplify cleaning around abutment",
              "🔶 Ensure a long-lasting chewing surface",
            ],
          },
          clinicalAssessment: {
            existingConditions: {
              "Abutment Tooth (#30)": [
                "➞ MOD amalgam restoration (60% of structure remains)",
                "➞ Insufficient buccal contour for RPD design",
              ],
              "RPD Design": {
                "Missing Teeth": ["🦷#20", "🦷#28", "🦷#29"],
                "Rest Locations": [
                  "🦷#27 ➞ Cingulum rest",
                  "🦷#18 ➞ Mesial occlusal rest",
                  "🦷#19 ➞ Distal occlusal rest",
                  "🦷#21 ➞ Mesial occlusal rest",
                ],
                "Existing Issues": [
                  "Lack of proper reciprocation at #30",
                  "Deficient buccal contour",
                ],
              },
            },
            prosthodonticFactors: {
              "Survey Findings": [
                "➞ 0 mm undercut on mesio-buccal surface",
                "➞ 4° tilt needed to establish a shared path of insertion",
                "➞ Ideal clasp placement: mid-buccal zone",
              ],
            },
          },
        },
      },
      challenges: {
        content: [
          {
            id: "SC1",
            title: "Rehabilitation of Abutment Tooth",
            category: "structure",
            details: {
              issues: [
                "Extensive MOD cavity with limited remaining structure",
                "Current buccal contour does not support RPD design",
              ],
              impact:
                "Simultaneous structural reinforcement and prosthodontic refinement required",
            },
            priority: "critical",
          },
          {
            id: "SC2",
            title: "Occlusal and Prosthetic Alignment",
            category: "occlusion",
            details: {
              issues: [
                "Balancing occlusion between natural dentition and RPD",
                "Providing sufficient rest seat depth with conservative prep",
                "Restoring anatomical taper of the abutment",
              ],
              impact:
                "Essential for crown durability and functional RPD integration",
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
              duration: "Day 1–3",
              focus: "Diagnostic Evaluation & Preparation Planning",
            },
            {
              phase: 2,
              duration: "Day 4–7",
              focus: "Manual Wax-up & Crown Casting",
            },
            {
              phase: 3,
              duration: "Day 8",
              focus: "RPD Framework Verification",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Precision Tooth Preparation",
            objectives: [
              "Establish an ideal path of insertion",
              "Design appropriate suprabulge contour",
              "Incorporate stable guiding planes",
            ],
            procedures: [
              {
                type: "Surveyor-Guided Prep",
                instruments: ["Ney surveyor", "Undercut gauges"],
                parameters: [
                  "10° axial convergence",
                  "1mm suprabulge contour",
                  "1mm defined shoulder margin",
                ],
              },
              {
                type: "Preparation Stent Fabrication",
                material: "Autopolymerizing resin",
                features: [
                  "Accurate replication of guide planes",
                  "Occlusal index for consistency",
                ],
              },
            ],
          },
          {
            phase: 2,
            title: "Custom Crown Fabrication",
            objectives: [
              "High-precision wax modeling",
              "Achieve proper metal bulk",
              "Ensure full RPD compatibility",
            ],
            procedures: [
              {
                type: "Crown Wax-up",
                steps: [
                  "Guide planes confirmed using surveyor",
                  "Verification of proximal contact",
                  "Detailed occlusal anatomy sculpting",
                ],
                instruments: ["#7 wax spatula", "Digital waxer"],
              },
              {
                type: "Casting Process",
                material: "Type IV gold",
                parameters: [
                  "2mm occlusal clearance",
                  "0.3mm coping thickness",
                  "Mesial occlusal rest seat",
                ],
              },
            ],
          },
          {
            phase: 3,
            title: "Final Prosthetic Integration",
            objectives: [
              "Ensure passive RPD seating",
              "Secure effective clasp retention",
              "Confirm occlusal harmony",
            ],
            procedures: [
              {
                type: "Delivery Protocol",
                steps: [
                  "Seating verified with surveyor",
                  "Marking with articulating paper",
                  "Adjust clasp tension as needed",
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
            "Improved RPD retention successfully achieved",
            "No signs of recurrent decay at 6-month review",
            "Ideal emergence profile facilitating hygiene",
            "Well-distributed occlusal contacts achieved",
          ],
          limitations: {
            noted: [
              "Minor buccal metal visibility",
              "0.5mm distal overcontour observed",
              "Increased plaque retention index (1.8)",
            ],
            corrections: [
              "Provided advanced hygiene instructions",
              "Recommended flossing modification",
              "Delivered dietary modification guidance",
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
              "Can now chew tougher foods comfortably",
              "No longer experiencing food impaction",
              "Cleaning around crown is much easier",
            ],
          },
        },
      },
    },
  },
};

export default caseTwelve;
