import ComprehensiveFrontal from "../../../assets/images/Comprehensive/frontal-1000px.jpg";
import ComprehensivePrePost from "../../../assets/images/Comprehensive/prepost-1000px.jpg";
import ComprehensiveUpperOcc from "../../../assets/images/Comprehensive/upperocc-1000px.jpg";
import ComprehensiveLowerOcc from "../../../assets/images/Comprehensive/lowerocc-1000px.jpg";
import ComprehensivePreOpFrontal from "../../../assets/images/Comprehensive/PreOpFrontal.jpg";
import ComprehensivePreOpRight from "../../../assets/images/Comprehensive/PreOpRight.jpg";
import ComprehensivePreOpLeft from "../../../assets/images/Comprehensive/preopLeft.jpg";
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
        alt: "Frontal View",
        caption: "Initial Frontal Presentation",
        modality: "Intraoral Photograph",
        date: "2023-03-10",
        tags: ["pre-op", "frontal", "diagnostic"],
      },
      {
        img: ComprehensivePrePost,
        alt: "Before and After",
        caption: "Pre-Treatment/Post-Treatment Comparison",
        modality: "Composite Image",
        date: "2023-09-01",
        tags: ["comparison", "progress"],
      },
      {
        img: ComprehensiveUpperOcc,
        alt: "Maxillary View",
        caption: "Maxillary Occlusal View Pre-Treatment",
        modality: "Intraoral Photograph",
        date: "2023-03-10",
        tags: ["pre-op", "occlusal", "maxillary"],
      },
      {
        img: ComprehensiveLowerOcc,
        alt: "Mandibular View",
        caption: "Mandibular Occlusal Analysis",
        modality: "Intraoral Photograph",
        date: "2023-03-10",
        tags: ["pre-op", "occlusal", "mandibular"],
      },
      {
        img: ComprehensivePreOpFrontal,
        alt: "PreOp Frontal View",
        caption: "Pre-Operative Frontal Documentation",
        modality: "Clinical Photography",
        date: "2023-03-15",
        tags: ["pre-op", "frontal", "documentation"],
      },
      {
        img: ComprehensivePreOpRight,
        alt: "PreOp Right View",
        caption: "Right Lateral View Pre-Treatment",
        modality: "Intraoral Photograph",
        date: "2023-03-15",
        tags: ["pre-op", "lateral", "right"],
      },
      {
        img: ComprehensivePreOpLeft,
        alt: "PreOp Left View",
        caption: "Left Lateral View Pre-Treatment",
        modality: "Intraoral Photograph",
        date: "2023-03-15",
        tags: ["pre-op", "lateral", "left"],
      },
      {
        img: ComprehensivePostOpFrontal,
        alt: "PostOp Frontal View",
        caption: "Final Restorative Outcome Frontal",
        modality: "Clinical Photography",
        date: "2023-09-01",
        tags: ["post-op", "frontal", "result"],
      },
      {
        img: ComprehensivePostOpSmile,
        alt: "PostOp Smile View",
        caption: "Post-Treatment Smile Analysis",
        modality: "Extraoral Photograph",
        date: "2023-09-01",
        tags: ["post-op", "smile", "aesthetic"],
      },
    ],
    sections: {
      overview: {
        title: "Case Overview",
        icon: "patient-file",
        content: {
          patientProfile: {
            demographic: {
              age: 65,
              gender: "female",
              occupation: "Retired Teacher",
            },
            medicalHistory: {
              systemic: ["Controlled Hypertension"],
              dental: ["Previous RPD use (5 years)"],
            },
          },
          presentation: {
            chiefComplaint:
              "Dissatisfaction with upper removable partial denture",
            concerns: [
              "Poor retention",
              "Aesthetic dissatisfaction",
              "Chewing difficulty",
            ],
            expectations: [
              "Fixed solution",
              "Natural appearance",
              "Cost-effectiveness",
            ],
          },
          clinicalAssessment: {
            oralHygiene: "Fair",
            periodontalStatus: "Stage II Periodontitis",
            existingWork: {
              crowns: ["#10 (Emax)"],
              missingTeeth: ["#8"],
              restorations: ["Composite on #6"],
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        icon: "warning-triangle",
        content: [
          {
            id: "C1",
            title: "Aesthetic Compromise",
            category: "Esthetics",
            details: {
              issues: [
                "4mm midline discrepancy",
                "Edentulous space #8 region",
                "Shade mismatch (#9 crown)",
              ],
              impact: "Patient's self-confidence and smile aesthetics",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Occlusal Complexity",
            category: "Function",
            details: {
              diagnosis: "Deep bite with anterior guidance loss",
              complications: [
                "Limited restorative space",
                "Risk of porcelain fracture",
                "TMJ strain potential",
              ],
            },
            priority: "Medium",
          },
          {
            id: "C3",
            title: "Anatomical Limitations",
            category: "Structure",
            details: {
              observations: [
                "Severe tilting of #17 and #32",
                "Reduced vertical dimension",
                "Atrophic ridge #8 area",
              ],
              implications: [
                "Prosthetic path of insertion challenges",
                "Need for surgical correction",
              ],
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        title: "Treatment Strategy",
        icon: "medical-plan",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "2-3 months",
              focus: "Stabilization & Preparation",
            },
            {
              phase: 2,
              duration: "4-5 months",
              focus: "Definitive Restoration",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Rehabilitation Foundation",
            objectives: [
              "Establish stable occlusion",
              "Improve periodontal health",
              "Create restorative space",
            ],
            procedures: [
              {
                type: "Extraction",
                code: "D7140",
                teeth: ["#1", "#14", "#17", "#32"],
                rationale: "Remove non-restorable teeth",
                anesthesia: "Local (2% Lidocaine)",
                outcome: "Improved prosthetic space",
              },
              {
                type: "Periodontal Therapy",
                code: "D4341",
                quadrants: ["UR"],
                method: "Ultrasonic Scaling",
                outcome: "Reduced pocket depths (4mm → 2mm)",
              },
              {
                type: "Direct Restoration",
                code: "D2330",
                teeth: ["#6", "#13", "#14"],
                material: "Nanohybrid Composite",
                outcome: "Restored form and function",
              },
            ],
          },
          {
            phase: 2,
            title: "Definitive Prosthodontics",
            objectives: [
              "Optimal denture retention",
              "Aesthetic harmony",
              "Occlusal stability",
            ],
            procedures: [
              {
                type: "Survey Crown",
                code: "D2752",
                teeth: ["#11", "#14", "#20", "#29"],
                material: "PFM",
                features: ["Cingulum rests", "Guide planes"],
                outcome: "Improved RPD support",
              },
              {
                type: "Removable Prosthesis",
                code: "D5213",
                arch: "Maxillary",
                design: "Framework RPD",
                features: ["Twin-flex clasp", "Lingual plate"],
                outcome: "Retention score: 8/10",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.7,
            functional: 4.5,
            overall: 4.6,
          },
          clinicalImprovement: {
            occlusion: {
              pre: "Class II Division 2",
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
            "92% chewing efficiency restoration",
            "Midline correction (4mm → 2mm)",
            "Harmonized shade integration",
          ],
          patientFeedback: {
            quote: "I can finally eat and smile with confidence!",
            improvementsNoted: [
              "Better speech clarity",
              "No more denture movement",
              "Natural-looking smile",
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
