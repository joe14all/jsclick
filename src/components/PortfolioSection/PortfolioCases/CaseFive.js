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
    alt: "Preoperative View #10",
  },
  caseStudy: {
    carousel: [
      {
        img: AnteriorCompositePreOp,
        alt: "Pre-Op Labial View",
        caption: "Caries Presentation #10",
        modality: "Intraoral - Labial",
        date: "2020-06-08",
        tags: ["pre-op", "caries", "diagnostic"],
      },
      {
        img: AnteriorCompositeCavityPrep,
        alt: "Minimally Invasive Preparation",
        caption: "Cavity Preparation & Shade Mock-Up #10",
        modality: "Intraoral - Labial",
        date: "2020-06-08",
        tags: ["prep", "shade selection", "isolation"],
      },
      {
        img: AnteriorCompositePostOpRubberDam,
        alt: "Composite Placement Under Isolation",
        caption: "Unfinished Composite Prior to Rubber Dam Removal",
        modality: "Intraoral - Labial",
        date: "2020-06-08",
        tags: ["composite", "isolation", "restoration"],
      },
      {
        img: AnteriorCompositePostOp,
        alt: "Final Composite Restoration",
        caption: "Completed Aesthetic Composite Repair",
        modality: "Intraoral - Labial",
        date: "2020-06-08",
        tags: ["post-op", "aesthetics", "restoration"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 24 YO",
              gender: "➞ Male",
              occupation: "➞ Student",
            },
            medicalHistory: {
              systemic: ["None significant"],
              dental: ["Regular recall patient"],
            },
          },
          presentation: {
            chiefComplaint:
              "I've always had this stained spot on my front tooth but never considered treatment, assuming it would be too expensive.",
            concerns: ["Aesthetic appearance when smiling"],
            expectations: [
              "🔶 Natural-looking repair",
              "🔶 Cost effective treatment",
            ],
          },
          clinicalAssessment: {
            oralHygiene: "Good",
            periodontalStatus: "Healthy",
            findings: {
              Tooth: "🦷#10",
              "Thermal Pulp Test": "Within normal limits",
              Conditions: [
                "❗️ Caries lesion on facial surface #10",
                "❗️ Kidney-shaped enamel defect (1mm × 1mm)",
                "❗️ Adjacent enamel showing undermining",
              ],
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Aesthetic Integration",
            category: "Esthetics",
            details: {
              issues: [
                "Precise shade matching in a confined area",
                "Adjacent enamel translucency and surface texture",
                "Color stability post-polymerization",
              ],
              observations: [
                "Areas of enamel hypo-calcification",
                "Small defect size limits layering options",
              ],
              impact: "Essential for seamless blend in high-visibility zone",
            },
            priority: "High",
          },
        ],
      },

      solutions: {
        title: "Treatment Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "15 minutes",
              focus: "Diagnosis & Preparation",
            },
            {
              phase: 2,
              duration: "20 minutes",
              focus: "Restoration & Finishing",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Preparatory Phase",
            objectives: [
              "Minimize enamel reduction",
              "Ensure optimal isolation",
              "Verify complete caries removal",
            ],
            procedures: [
              {
                type: "Isolation & Shade Mock-Up",
                steps: [
                  "Rubber dam placement",
                  "Trial composite shades without bonding",
                  "Final shade mapping",
                ],
                outcome: "Optimal moisture control and precise shade selection",
              },
              {
                type: "Caries Removal & Cavity Prep",
                instruments: ["1.5mm round diamond bur", "30μm flame diamond"],
                sequence: [
                  "Selective caries removal",
                  "Enamel beveling (sunburst technique)",
                ],
                outcome: "Caries-free prep with smooth enamel transition",
              },
            ],
          },
          {
            phase: 2,
            title: "Restorative Phase",
            objectives: [
              "Achieve seamless shade integration",
              "Restore natural contour",
              "Maintain occlusal harmony",
            ],
            procedures: [
              {
                type: "Etching",
                product: "35% Phosphoric Acid Gel",
                technique: "30s Selective enamel etching",
                outcome: "Well-defined etch pattern",
              },
              {
                type: "Adhesive Application",
                product: "Universal Bisco Adhesive System",
                technique: "2 layers applied with adequate drying and thinning",
                outcome: "Uniform adhesive layer confirmed",
              },
              {
                type: "Composite Layering",
                material: "Nanohybrid Composite (VITA A2/B1)",
                technique: "Two-layer stratification",
                steps: [
                  "Dentin shade placement (0.5mm sub-dentin thickness)",
                  "Enamel overlay",
                ],
                outcome: "Natural translucency and depth",
              },
              {
                type: "Finishing & Polishing",
                instruments: [
                  "12-fluted carbide bur",
                  "Composite polishing discs",
                  "Diamond polishing paste",
                ],
                outcome: "Gloss finish with enamel-like texture",
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
            overall: 4.7,
          },
        },
        content: {
          achievements: [
            "Indistinguishable shade match",
            "No post-op sensitivity reported",
            "Stable shade and margins at 6-month recall",
          ],
          patientFeedback: {
            quote: "I should have done this years ago!",
            improvementsNoted: [
              "Increased confidence in smiling",
              "Quick, cost-effective solution",
            ],
          },
          limitations: {
            noted: ["Restoration slightly visible when dehydrated"],
            futureConsiderations: [
              "Annual assessment",
              "Polishing touch-up if discoloration develops",
            ],
          },
        },
      },
    },
  },
};
export default caseFive;
