import ComprehensiveFrontal from "../../../assets/images/Comprehensive/frontal-1000px.jpg";
import ComprehensivePrePost from "../../../assets/images/Comprehensive/prepost-1000px.jpg";
import ComprehensiveUpperOcc from "../../../assets/images/Comprehensive/upperocc-1000px.jpg";
import ComprehensiveLowerOcc from "../../../assets/images/Comprehensive/lowerocc-1000px.jpg";
import ComprehensivePreOpFrontal from "../../../assets/images/Comprehensive/PreOpFrontal.jpg";
import ComprehensivePreOpRight from "../../../assets/images/Comprehensive/PreOpRight.jpg";
import ComprehensivePreOpLeft from "../../../assets/images/Comprehensive/preopLeft.jpg";
import PerioChartMax from "../../../assets/images/Comprehensive/PerioChartMax.jpg";
import PerioChartMand from "../../../assets/images/Comprehensive/PerioChartMand.jpg";
import FMX from "../../../assets/images/Comprehensive/fmx.jpg";
import LabMovie from "../../../assets/images/Comprehensive/LabMovie.mp4";
import ComprehensivePostOpFrontal from "../../../assets/images/Comprehensive/PostOpFrontal.jpg";
import ComprehensivePostOpSmile from "../../../assets/images/Comprehensive/posOpSmile.jpg";

const caseSeven = {
  id: 7,
  title: "Limited budget Rehabilitation",
  categories: ["prosthodontics", "restorative"],
  thumbnail: {
    img: ComprehensiveFrontal,
    alt: "Comprehensive Full Mouth Rehabilitation",
  },
  caseStudy: {
    carousel: [
      {
        img: ComprehensiveFrontal,
        alt: "Treatment stages Frontal View",
        caption: "Treatment stages Frontal View",
        modality: "Composite Image",
        date: "2022-04-20",
        tags: ["pre-op", "post-op", "denture_on", "denture_off"],
      },
      {
        img: ComprehensivePrePost,
        alt: "Before and After frontal",
        caption: "Pre-Treatment/Post-Treatment Frontal View",
        modality: "Composite Image",
        date: "2022-04-20",
        tags: ["pre-op", "post_op"],
      },
      {
        img: ComprehensiveUpperOcc,
        alt: "Maxillary occlusal View",
        caption: "Treatment stages Maxillary Occlusal View",
        modality: "Composite Image",
        date: "2022-04-20",
        tags: ["pre-op", "post-op", "denture_on", "denture_off"],
      },
      {
        img: ComprehensiveLowerOcc,
        alt: "Mandibular occlusal View",
        caption: "Treatment stages Mandibular Occlusal View",
        modality: "Composite Image",
        date: "2022-04-20",
        tags: ["pre-op", "post-op", "denture_on", "denture_off"],
      },
      {
        img: ComprehensivePreOpFrontal,
        alt: "PreOp Frontal View",
        caption: "Pre-Operative Frontal with Denture",
        modality: "Intraoral - Frontal ",
        date: "2019-11-29",
        tags: ["pre-op", "frontal", "denture_on"],
      },
      {
        img: ComprehensivePreOpRight,
        alt: "PreOp Right View",
        caption: "Pre-Operative Right Lateral with Denture",
        modality: "Intraoral - lateral ",
        date: "2019-11-29",
        tags: ["pre-op", "denture_on", "right"],
      },
      {
        img: ComprehensivePreOpLeft,
        alt: "PreOp Left View",
        caption: "Pre-Operative Left Lateral with Denture",
        modality: "Intraoral - lateral ",
        date: "2019-11-29",
        tags: ["pre-op", "denture_on", "left"],
      },

      {
        img: PerioChartMax,
        alt: "PerioChart Maxillary",
        caption: "PerioChart Maxillary",
        modality: "Documents",
        date: "2019-11-29",
        tags: ["perio_chart", "Maxillary", "🦷 #3", "🦷 #14"],
      },
      {
        img: PerioChartMand,
        alt: "PerioChart Mandibular",
        caption: "PerioChart Mandibular",
        modality: "Documents",
        date: "2019-11-29",
        tags: ["perio_chart", "Mandibular"],
      },
      {
        img: FMX,
        alt: "Full Mouth Radiograph",
        caption: "Full Mouth Radiograph",
        modality: "Full Mouth Radiograph",
        date: "2019-11-29",
        tags: ["FMX"],
      },
      {
        video: LabMovie,
        alt: "Stent Fabrication",
        caption: "Lab Stent Fabrication",
        modality: "Lab Video",
        date: "2019-11-29",
        tags: ["stent", "wax-up", "interim"],
      },
      {
        img: ComprehensivePostOpFrontal,
        alt: "PostOp Frontal View",
        caption: "Post-Operative Frontal with Denture",
        modality: "Intraoral - Frontal ",
        date: "2022-04-20",
        tags: ["post-op", "frontal", "denture_on"],
      },
      {
        img: ComprehensivePostOpSmile,
        alt: "PostOp Smile View",
        caption: "Post-Treatment Smile View",
        modality: "Extraoral - close up",
        date: "2022-04-20",
        tags: ["post-op", "smile", "lips"],
      },
    ],
    sections: {
      overview: {
        title: "Case Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 65 YO",
              gender: "➞ Female",
              occupation: "➞ Housewife",
              language: "➞ Spanish ",
            },
            medicalHistory: {
              systemic: [
                "High Blood Pressure (Dx 1995)",
                "Rheumatoid Arthritis (Dx 2007)",
                "Chlamydia (Dx 1995)",
                "Fibromyalgia (Dx 2007)",
                "Depression (Dx 1998)",
                "Angina (Dx 2004, 2 episodes/week, monitored by MD, advised to call 911 if >5 min)",
              ],
              medications: [
                "Paroxetine (SSRI) - Xerostomia, abnormal taste, orthostatic hypotension",
                "Losartan (ARB) - Orthostatic hypotension",
                "Amlodipine (Ca Channel Blocker) - Gingival hypertrophy, orthostatic hypotension",
                "Aspirin (Blood thinner) - Excessive bleeding",
                "Diclofenac (NSAID) - Abnormal coagulation",
              ],
              hospitalizations: "2015 - Chest pain, Cardioscopy",
              allergies: "NKDA",
              houseClassification: "Philosophical",
              dental: [
                "Patient hasn't seen a dentist for over 8 years",
                "Previous RPD use (fabricated over 11 years ago)",
              ],
            },
          },
          presentation: {
            chiefComplaint: "My Upper flipper has been loose for some time",
            concerns: [
              "Speech Challenges",
              "Aesthetic dissatisfaction",
              "Chewing difficulty",
            ],
            expectations: [
              "🔶 Better Chewing functionality",
              "🔶 Enhanced appearance",
              "🔶 Cost-effectiveness",
            ],
          },
          clinicalAssessment: {
            oralHygiene: { Poor: "no floss or interproximal cleaning." },
            periodontalStatus: {
              Generalized: "Stage II",
              Localized: "Stage III Periodontitis",
              Grade: "B",
            },
            periodontalFindings: {
              "Plaque Free Percentage": "43%",
              "Bleeding Percentage": "40%",
              "Probing Depths": "1-6mm",
              Recession: "1-6mm",
              "Furcation Involvement": {
                "Class I": ["🦷#3 ➞ B", "🦷#14 ➞ B&D"],
              },
              Mobility: "0",
              "Gingival Status": "Generalized moderate",
              "Bone loss": {
                Generalized: { "Horizontal bone loss": "" },
                Localized: { "Vertical bone loss": ["🦷#1", "🦷#17", "🦷#32"] },
              },
            },

            existingConditions: {
              "Missing Teeth": [
                "🦷#2",
                "🦷#5",
                "🦷#8",
                "🦷#12",
                "🦷#13",
                "🦷#15",
                "🦷#16",
                "🦷#18",
                "🦷#19",
                "🦷#30",
                "🦷#31",
              ],
              "Tooth Conditions": {
                "🦷#1": [
                  "O Amalgam",
                  "Crack on D marginal ridge",
                  "Severe O attrition (asymptomatic)",
                  "Moderate M vertical bone loss",
                ],
                "🦷#3": [
                  "OL Amalgam (marginal discrepancy)",
                  "MO Amalgam (M overhang)",
                ],
                "🦷#4": [
                  "MOD Amalgam",
                  "O Recurrent decay",
                  "Cervical abrasion",
                ],
                "🦷#6": [
                  "DL Composite with recurrent decay",
                  "L Composite",
                  "Incisal attrition",
                ],
                "🦷#7": [
                  "ML Composite (marginal discoloration)",
                  "L Composite",
                ],
                "🦷#9": ["Lingual attrition", "D Composite"],
                "🦷#10": ["Emax Crown", "Slight overhang on B", "On RCT"],
                "🦷#11": [
                  "Large BDL Composite",
                  "D recurrent decay",
                  "M Composite",
                ],
                "🦷#14": [
                  "Large OL Amalgam overhang (accessible)",
                  "Over-erupted",
                  "Buccal & mesial drift",
                ],
                "🦷#17": ["O Amalgam", "Severe M tilt"],
                "🦷#20": [
                  "Fractured MO Composite",
                  "M recurrent decay",
                  "Severe O attrition",
                ],
                "🦷#21": ["DO Composite", "Marginal discoloration"],
                "🦷#24": ["Crazing with incisal ML fracture"],
                "🦷#28": ["DO Composite"],
                "🦷#29": ["MO Composite", "Under-contoured M marginal ridge"],
                "🦷#32": ["OB Amalgam", "Severe M tilt"],
              },
            },

            endodonticStatus: {
              "Previous RCT": {
                "🦷#10": {
                  Hx: "1.5 years ago",
                  Cold: "(-)",
                  Percussion: "(-)",
                  Palpation: "(-)",
                  Probing: "WNL",
                  PARL: "None",
                },
                "🦷#11": {
                  Hx: "10+ years ago",
                  Cold: "(-)",
                  Percussion: "(-)",
                  Palpation: "(-)",
                  Probing: "WNL",
                  PARL: "None",
                  "Other Findings": "recurrent decay on DL composite filling ",
                },
              },
            },

            prosthodonticStatus: {
              "Existing RPD": {
                "Upper partial denture": [
                  "➞ Fabricated 1995, with added teeth over time",
                  "❗️ Not retentive anymore; rest seats not adapted, strategic abutments lost without replacement",
                ],
                "Lower RPD": "Tooth-borne",
              },
              Occlusion: {
                "❗️Compromised": {
                  "🦷#17 & 🦷#32": "➞ Severe mesial tilt",
                  "🦷#14": "➞ Supraerupted, mesial & buccal drifted  ",
                  "🦷#3 & 🦷#4 ": "➞ Slightly supererupted ",
                },
                "Posterior Guidance": "",
              },
              "PDI Classification": {
                "Class IV": "Highest class",
                "": {
                  "Class IV":
                    "➞ Abutments of 4 Sextants require adjunctive treatment",
                  "Class III": [
                    "➞ 8 teeth to be replaced",
                    "➞ Occlusion substantially compromised",
                  ],
                  "Class I": "➞ Residual ridge class I edentulous",
                },
              },
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Language Barrier",
            category: "Logistics",
            details: {
              issues: ["Patient is Spanish-speaking only"],
              impact:
                "Prolonged consultation time due to reliance on certified medical interpreters, increasing the risk of miscommunication.",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Aesthetic & Phonetic Compromise",
            category: "Esthetics",
            details: {
              issues: [
                "6mm maxillary midline shift to the left",
                "Large anterior edentulous space (#7 & #8)",
                "Shade mismatch of existing #10 crown",
              ],
              impact:
                "Compromised smile symmetry, phonetics, and self-confidence.",
            },
            priority: "High",
          },
          {
            id: "C3",
            title: "Occlusal Instability",
            category: "Occlusion",
            details: {
              diagnosis: "Deep bite with loss of anterior guidance",
              complications: [
                "Posterior interference due to severe mesial tilting of #17 and #32",
                "Irregular occlusal plane from supraeruption of #14, #3, and #4",
                "Potential TMJ dysfunction due to occlusal disharmony",
              ],
              implications: [
                "Challenges in achieving stable prosthetic occlusion",
                "Difficulty in establishing a functional path of insertion",
              ],
            },
            priority: "Critical",
          },
          {
            id: "C4",
            title: "Compromised Periodontal Status",
            category: "Periodontics",
            details: {
              observations: [
                "Generalized Stage II and localized Stage III periodontitis",
                "Clinical attachment loss with furcation involvement (#3 B, #14 B&D)",
                "Bleeding on probing (40%) and poor plaque control",
              ],
              implications: [
                "Requirement for periodontal therapy before definitive prosthetic treatment",
                "Risk of further alveolar bone loss impacting long-term stability of prosthesis",
              ],
            },
            priority: "High",
          },
          {
            id: "C5",
            title: "Suboptimal Abutment Teeth Restorations",
            category: "Restoration",
            details: {
              issues: [
                "Recurrent decay on multiple existing restorations (#6, #11, #20)",
                "Marginal discrepancies on #3 (OL amalgam)",
                "Large amalgam overhang on #14 impacting periodontal health",
              ],
              implications: [
                "Potential need for extensive restorative intervention or extractions",
                "Compromised abutment support for future prosthesis",
              ],
            },
            priority: "High",
          },
          {
            id: "C6",
            title: "Prosthetic Limitations",
            category: "Prosthodontics",
            details: {
              observations: [
                "Existing upper RPD is non-retentive due to loss of strategic abutments",
                "Missing lower RPD",
                "PDI Class IV with significant restorative and periodontal compromise",
              ],
              implications: [
                "Complex prosthetic planning to ensure functional retention",
                "Potential need for adjunctive surgical interventions to improve prognosis",
              ],
            },
            priority: "Critical",
          },
        ],
      },
      solutions: {
        title: "Treatment Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "4-6 weeks",
              focus: "Acute Care & Initial Therapy",
            },
            {
              phase: 2,
              duration: "3-4 months",
              focus: "Direct Restorative Treatment & Interim Prosthetics",
            },
            {
              phase: 3,
              duration: "2-3 months",
              focus: "Survey Crowns & Occlusal Stabilization",
            },
            {
              phase: 4,
              duration: "6-8 weeks",
              focus: "Definitive Prosthetic Rehabilitation",
            },
            {
              phase: 5,
              duration: "Ongoing",
              focus: "Maintenance & Long-Term Monitoring",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Acute Care & Initial Therapy",
            objectives: [
              "Eliminate infection",
              "Stabilize periodontium",
              "Establish temporary function",
            ],
            procedures: [
              {
                type: "Surgical Extractions",
                sequence: [
                  "Elevator mobilization (#301)",
                  "PDL separation",
                  "Controlled expansion",
                  "Final extraction (forceps: cowhorn, Jockey)",
                  "Cross-mattress suturing",
                ],
                outcome: "Primary closure with VAS ≤3/10",
              },
              {
                type: "UP SRP & Full Mouth Prophylaxis",
                steps: [
                  "Articaine infiltration",
                  "Ultrasonic scaling (PerioFlow® 25kHz)",
                  "Hand scaling (Gracey 5/6, 11/12)",
                  "Arestin® in 5-6mm pockets",
                ],
                evaluations: [
                  "Pocket depth <4mm",
                  "BOP ≤5%",
                  "Maintainable furcation involvement",
                ],
                outcome: "Periodontal stability",
              },
            ],
          },
          {
            phase: 2,
            title: "Direct Restorative Treatment & Interim Prosthetics",
            objectives: [
              "Restore structural integrity",
              "Prepare for prosthetic rehabilitation",
            ],
            procedures: [
              {
                type: "Direct Composite Restorations",
                details: [
                  "🦷 #3 (MOL)",
                  "🦷 #4 (MOD)",
                  "🦷 #6 (DL)",
                  "🦷 #7 (ML)",
                ],
                outcome: "Restored function and occlusion",
              },
              {
                type: "Interim Upper/Lower Partial Dentures",
                steps: [
                  "Alginate impressions",
                  "Wax-up (#9), setup (#8)",
                  "Stent fabrication",
                  "Composite buildup (#9)",
                  "Interim prosthesis fabrication",
                ],
                outcome: "Functional and aesthetic interim solution",
              },
            ],
          },
          {
            phase: 3,
            title: "Survey Crowns & Occlusal Stabilization",
            objectives: ["Optimize abutments", "Enhance occlusal stability"],
            procedures: [
              {
                type: "Survey Crowns",
                details: [
                  "🦷 #14, #20, #29: PFM survey crowns",
                  "🦷 #11: Dome contouring",
                ],
                outcome: "Strategic abutments for RPD retention",
              },
            ],
          },
          {
            phase: 4,
            title: "Definitive Prosthetic Rehabilitation",
            objectives: [
              "Restore function and aesthetics",
              "Achieve long-term stability",
            ],
            procedures: [
              {
                type: "Definitive Upper & Lower RPD",
                steps: [
                  "Framework design",
                  "Final PVS impressions",
                  "Physiological adjustment (altered cast technique)",
                  "Wax try-in verification",
                  "Acrylic processing and finishing",
                ],
                outcome: "Stable and functional prostheses",
              },
              {
                type: "Final Composite Refinements",
                details: ["#9 composite contouring", "Final polishing"],
                outcome: "Optimized aesthetics and occlusion",
              },
            ],
          },
          {
            phase: 5,
            title: "Maintenance & Long-Term Monitoring",
            objectives: [
              "Sustain periodontal and prosthetic health",
              "Monitor occlusal function",
            ],
            procedures: [
              {
                type: "Periodic Recall & Maintenance",
                steps: [
                  "3-month periodontal re-evaluation",
                  "Annual prosthetic adjustments",
                  "Radiographic monitoring",
                ],
                outcome: "Long-term stability with minimal relapse",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            aesthetic: 3.5,
            functional: 4.5,
            overall: 4.0,
          },
          clinicalImprovement: {
            occlusion: {
              pre: "",
              post: "Mutually Protected",
            },
            probingDepth: {
              avgPre: 4.2,
              avgPost: 2.8,
            },
          },
        },
        content: {
          achievements: [
            "Chewing efficiency restoration",
            "Midline correction (6mm → 2mm)",
            "Harmonized shade integration",
          ],
          patientFeedback: {
            quote: "I can finally eat and smile with confidence!",
            improvementsNoted: [
              "Better speech clarity",
              "No more denture movement",
              "Acceptable esthetics",
            ],
          },
          limitations: {
            noted: [
              "Residual midline discrepancy (2mm)",
              "Limited by budget constraints",
              "Need for long-term maintenance",
            ],
            futureConsiderations: ["Annual recall protocol"],
          },
        },
      },
    },
  },
};
export default caseSeven;
