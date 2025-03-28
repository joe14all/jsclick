import SeverelyCurvedMolarPreOp from "../../../assets/images/severlycurvedmolar/preop-1000px.jpg";
import SeverelyCurvedMolarIAF from "../../../assets/images/severlycurvedmolar/IAF.jpg";
import SeverelyCurvedMolarMAC from "../../../assets/images/severlycurvedmolar/MAC.jpg";
import SeverelyCurvedMolarCompleted from "../../../assets/images/severlycurvedmolar/completed-1000px.jpg";

const caseSix = {
  id: 6,
  title: "Severely Curved Molar",
  categories: ["endodontics"],
  metadata: {
    difficulty: 5,
    duration: "3-hour simulation",
    successScore: 95,
    complexityFactors: [
      "Double curvature",
      "Narrow canals",
      "Simulation constraints",
    ],
  },
  thumbnail: {
    img: SeverelyCurvedMolarCompleted,
    alt: "Severely Curved Molar",
    caption: "Post-Treatment Result",
    modality: "Training Model",
  },
  caseStudy: {
    carousel: [
      {
        img: SeverelyCurvedMolarPreOp,
        alt: "Before",
        caption: "Pre-Treatment Simulation Model",
        modality: "Training Model Photography",
        date: "2023-08-10",
        tags: ["pre-op", "simulation", "diagnostic"],
      },
      {
        img: SeverelyCurvedMolarIAF,
        alt: "Initial Apical File",
        caption: "Initial Apical File Placement",
        modality: "Magnified View",
        date: "2023-08-10",
        tags: ["instrumentation", "working-length"],
      },
      {
        img: SeverelyCurvedMolarMAC,
        alt: "Master Apical Cone",
        caption: "Master Apical Cone Fit",
        modality: "Radiographic Image",
        date: "2023-08-10",
        tags: ["obturation", "apex"],
      },
      {
        img: SeverelyCurvedMolarCompleted,
        alt: "After",
        caption: "Final Obturation Result",
        modality: "Training Model Photography",
        date: "2023-08-10",
        tags: ["post-op", "simulation", "result"],
      },
    ],
    sections: {
      overview: {
        title: "Simulation Overview",
        icon: "training",
        content: {
          simulationContext: {
            program: "Advanced Endodontic Training",
            objective: "Complex root canal management",
            difficultyLevel: "Expert",
            modelType: "3D-printed resin block",
          },
          proceduralFocus: {
            keySkills: [
              "Canal negotiation",
              "Curvature management",
              "Prevent procedural errors",
            ],
            successCriteria: [
              "Complete debridement",
              "Maintain canal integrity",
              "Proper obturation",
            ],
          },
        },
      },
      challenges: {
        title: "Technical Challenges",
        icon: "warning-triangle",
        content: [
          {
            id: "C1",
            title: "Anatomical Complexity",
            category: "Anatomy",
            details: {
              observations: [
                "60° mesial root curvature",
                "45° distal root curvature",
                "Calcified apical third",
              ],
              implications: [
                "Increased risk of file separation",
                "Potential for ledging/zipping",
              ],
            },
            priority: "Critical",
          },
          {
            id: "C2",
            title: "Instrumentation Limitations",
            category: "Technique",
            details: {
              issues: [
                "Limited access to apical third",
                "Reduced tactile feedback in simulation",
                "Artificial dentin hardness",
              ],
              impact: "Accuracy of clinical simulation",
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        title: "Technical Strategy",
        icon: "medical-plan",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "90 minutes",
              focus: "Canal Negotiation",
            },
            {
              phase: 2,
              duration: "90 minutes",
              focus: "Cleaning & Shaping",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Initial Access and Negotiation",
            objectives: [
              "Establish glide path",
              "Maintain canal patency",
              "Verify working length",
            ],
            procedures: [
              {
                type: "Canal Scouting",
                code: "SIM-ENDO1",
                instruments: ["#08 K-file"],
                method: "Manual negotiation",
                outcome: "Patency established",
              },
              {
                type: "Glide Path Creation",
                code: "SIM-ENDO2",
                instruments: ["PathFile #13"],
                method: "Crown-down technique",
                outcome: "Smooth pathway achieved",
              },
            ],
          },
          {
            phase: 2,
            title: "Final Instrumentation",
            objectives: [
              "Complete shaping",
              "Maintain original anatomy",
              "Prevent transportation",
            ],
            procedures: [
              {
                type: "Apical Preparation",
                code: "SIM-ENDO3",
                instruments: ["FlexMaster #25/04"],
                method: "Balanced force technique",
                outcome: "Apical stop maintained",
              },
              {
                type: "Irrigation Protocol",
                code: "SIM-ENDO4",
                solutions: ["NaOCl 3%", "EDTA 17%"],
                method: "Passive ultrasonic irrigation",
                outcome: "Complete debris removal",
              },
            ],
          },
        ],
      },
      results: {
        title: "Training Outcomes",
        icon: "success-chart",
        metrics: {
          proceduralSuccess: {
            anatomyPreservation: 98,
            complicationRate: 2,
            obturationQuality: 4.8,
          },
          skillDevelopment: {
            timeEfficiency: "35% improvement",
            errorReduction: "60% reduction",
          },
        },
        content: {
          achievements: [
            "Complete canal negotiation achieved",
            "Zero instrument separations",
            "Optimal taper maintained",
          ],
          limitations: {
            noted: [
              "Artificial tactile feedback limitations",
              "Simplified irrigation dynamics",
            ],
            futureConsiderations: [
              "Incorporate pulp-like simulation material",
              "Add bleeding simulation",
            ],
          },
        },
      },
    },
  },
};
export default caseSix;
