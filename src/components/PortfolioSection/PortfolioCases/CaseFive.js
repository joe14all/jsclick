import AnteriorCompositePreOp from "../../../assets/images/anteriorcomposite/preop-1000px.jpg";
import AnteriorCompositeCavityPrep from "../../../assets/images/anteriorcomposite/cavityprep.jpg";
import AnteriorCompositePostOpRubberDam from "../../../assets/images/anteriorcomposite/postopRubberDam.jpg";
import AnteriorCompositePostOp from "../../../assets/images/anteriorcomposite/postop-1000px.jpg";

const caseFive = {
  id: 5,
  title: "Anterior Composite Restoration",
  categories: ["restorative", "cosmetic"],
  thumbnail: {
    img: AnteriorCompositePreOp,
    alt: "Preoperative View #7",
    modality: "Intraoral Photograph",
    date: "2023-06-15",
  },
  caseStudy: {
    carousel: [
      {
        img: AnteriorCompositePreOp,
        alt: "Pre-Op Labial View",
        caption: "Initial Caries Presentation #7",
        modality: "Intraoral Photograph",
        date: "2023-06-15",
        tags: ["pre-op", "caries", "diagnostic"],
      },
      {
        img: AnteriorCompositeCavityPrep,
        alt: "Cavity Preparation",
        caption: "Minimal Invasive Preparation",
        modality: "Magnified View",
        date: "2023-06-15",
        tags: ["prep", "isolation"],
      },
      {
        img: AnteriorCompositePostOpRubberDam,
        alt: "Restoration Placement",
        caption: "Rubber Dam Isolation During Placement",
        modality: "Clinical Photography",
        date: "2023-06-15",
        tags: ["procedure", "isolation"],
      },
      {
        img: AnteriorCompositePostOp,
        alt: "Final Restoration",
        caption: "Post-Operative Result",
        modality: "Intraoral Photograph",
        date: "2023-06-15",
        tags: ["post-op", "result", "aesthetic"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        icon: "patient-file",
        content: {
          patientProfile: {
            demographic: {
              age: 28,
              gender: "female",
              occupation: "Marketing Executive",
            },
            medicalHistory: {
              systemic: ["None significant"],
              dental: [
                "Regular recall patient",
                "History of orthodontic treatment (2015-2017)",
              ],
            },
          },
          presentation: {
            chiefComplaint: "Visible dark spot on front tooth",
            concerns: [
              "Aesthetic appearance when smiling",
              "Sensitivity to cold beverages",
            ],
            expectations: [
              "Natural-looking repair",
              "Minimal tooth structure removal",
              "Long-lasting solution",
            ],
          },
          clinicalAssessment: {
            oralHygiene: "Good",
            periodontalStatus: "Healthy",
            existingWork: {
              restorations: ["Composite on #14"],
              findings: [
                "Caries lesion on facial surface #7",
                "Lesion size: 2.1mm × 1.8mm",
                "No pulpal involvement",
              ],
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        icon: "warning",
        content: [
          {
            id: "C1",
            title: "Aesthetic Integration",
            category: "Esthetics",
            details: {
              issues: [
                "Multiple enamel characteristics adjacent tooth (#8)",
                "Surface texture matching",
                "Incical translucency replication",
              ],
              observations: [
                "0.5mm color variation between dentin/enamel",
                "Mesio-incisal halo effect present on adjacent teeth",
              ],
              impact: "Critical for patient's professional image",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Structural Integrity",
            category: "Function",
            details: {
              complications: [
                "Small cavity size (2mm)",
                "Enamel rod direction preservation",
                "Bonding surface area limitation",
              ],
              implications: [
                "Risk of debonding in thin sections",
                "Marginal leakage potential",
              ],
            },
            priority: "Medium",
          },
        ],
      },
      solutions: {
        title: "Treatment Protocol",
        icon: "dental-drill",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "35 minutes",
              focus: "Diagnosis & Preparation",
            },
            {
              phase: 2,
              duration: "55 minutes",
              focus: "Restoration & Finishing",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Preparatory Phase",
            objectives: [
              "Minimal invasive access",
              "Optimal isolation",
              "Caries removal verification",
            ],
            procedures: [
              {
                type: "Caries Removal",
                code: "D2920",
                teeth: ["#7"],
                technique: "Micro-invasive preparation",
                instruments: ["1.5mm round diamond bur"],
                outcome:
                  "Complete caries removal verified with caries detector",
              },
              {
                type: "Isolation",
                method: "Rubber Dam Application",
                outcome: "Absolute moisture control achieved",
              },
            ],
          },
          {
            phase: 2,
            title: "Restorative Phase",
            objectives: [
              "Optical properties matching",
              "Anatomical contour restoration",
              "Occlusal harmony",
            ],
            procedures: [
              {
                type: "Etching",
                material: "35% Phosphoric Acid Gel",
                duration: "15s enamel / 10s dentin",
                outcome: "Proper etch pattern confirmed microscopically",
              },
              {
                type: "Adhesive Application",
                product: "Universal Adhesive System",
                technique: "Selective enamel etching",
                outcome: "Uniform adhesive layer verified",
              },
              {
                type: "Composite Layering",
                material: "Nanohybrid Composite (VITA A2/B1)",
                technique: "Three-layer stratification",
                steps: [
                  "Dentin shade placement",
                  "Body shade application",
                  "Incical halo characterization",
                ],
                outcome: "Optical depth matching adjacent dentition",
              },
              {
                type: "Finishing & Polishing",
                instruments: [
                  "12-fluted carbide bur",
                  "Composite polishing discs",
                  "Diamond polishing paste",
                ],
                outcome:
                  "Surface roughness Ra = 0.2μm (matching natural enamel)",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        icon: "success",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.8,
            comfort: 4.7,
            overall: 4.9,
          },
          clinicalMetrics: {
            marginalAdaptation: "Alpha score",
            surfaceLuster: "Grade 1",
            occlusalWear: "0.02mm (6-month recall)",
          },
        },
        content: {
          achievements: [
            "Seamless visual integration",
            "Post-op sensitivity: None reported",
            "Marginal integrity maintained at 6 months",
          ],
          patientFeedback: {
            quote: "I can't even tell which tooth was repaired!",
            improvementsNoted: ["Confidence in smiling", "No cold sensitivity"],
          },
          limitations: {
            noted: [
              "Slight overcontour at gingival margin (0.1mm)",
              "20μm surface texture variation under SEM",
            ],
            futureConsiderations: [
              "Annual photographic monitoring",
              "Potential for enamel microabrasion if discoloration recurs",
            ],
          },
        },
      },
    },
  },
};
export default caseFive;
