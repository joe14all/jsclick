import GoldOnlayCast from "../../../assets/images/goldonlay/goldonlaycast-1000px.jpg";
import GoldOnlayIntaglio from "../../../assets/images/goldonlay/goldonlayintaglio-1000px.jpg";
import GoldOnlayOcclusion from "../../../assets/images/goldonlay/goldonlayocclusion-1000px.jpg";
import GoldOnlayPrep from "../../../assets/images/goldonlay/goldonlayprep-1000px.jpg";
import GoldOnlayAnatomy from "../../../assets/images/goldonlay/goldonlayanatomy.jpg";
import GoldOnlayFinalImp from "../../../assets/images/goldonlay/goldOnlayfinalImp.jpg";
import IntraOralBite from "../../../assets/images/goldonlay/intraOral-bite.jpg";
import IntraOralOcc from "../../../assets/images/goldonlay/intraOralOcc.jpg";

const caseFour = {
  id: 4,
  title: "Gold Onlay Restoration",
  categories: ["restorative"],
  thumbnail: {
    img: GoldOnlayAnatomy,
    alt: "Maxillary Premolar Onlay",
  },
  caseStudy: {
    carousel: [
      {
        img: GoldOnlayCast,
        alt: "Master Cast with onlay Buccal view",
        caption:
          "Master Cast with onlay Preparation Buccal view - without opposing",
        modality: "Laboratory Photography",
        date: "2020-03-13",
        tags: ["cast", "adaptation", "laboratory"],
      },
      {
        img: GoldOnlayIntaglio,
        alt: "Intaglio Surface",
        caption: "Onlay Intaglio Surface artistic shot",
        modality: "Artistic Photography",
        date: "2020-03-13",
        tags: ["intaglio", "margins", "smooth"],
      },
      {
        img: GoldOnlayOcclusion,
        caption:
          "Master Cast with onlay Preparation Palatal view - with opposing",
        caption: "Master Cast with onlay Preparation Palatal view",
        modality: "Laboratory Photography",
        date: "2020-03-13",
        tags: ["occlusion", "articulation"],
      },
      {
        img: GoldOnlayPrep,
        alt: "Tooth Preparation on cast",
        caption: "Occlusal View of preparation on cast ",
        modality: "Laboratory Photography",
        date: "2020-03-13",
        tags: ["prep", "conservative", "draw"],
      },
      {
        img: GoldOnlayAnatomy,
        alt: "Gold Onlay",
        caption: "Occlusal View of finished gold Onlay",
        modality: "Artistic Photography",
        date: "2020-03-13",
        tags: ["onlay", "anatomy"],
      },
      {
        img: GoldOnlayFinalImp,
        alt: "Final Impression",
        caption: "Polyvinyl Siloxane Impression of Onlay Prep",
        modality: "Laboratory Photography",
        date: "2020-03-6",
        tags: ["impression", "margins"],
      },
      {
        img: IntraOralBite,
        alt: "Intra Oral Gold Onlay Buccal View- in occlusion",
        caption: "Intra Oral Gold Onlay Buccal View",
        modality: "Intraoral Buccal",
        date: "2020-03-29",
        tags: ["occlusion", "extension"],
      },
      {
        img: IntraOralOcc,
        alt: "Intra Oral Gold Onlay Buccal View",
        caption: "Intra Oral Gold Onlay Occlusal View",
        modality: "Intraoral Occlusal",
        date: "2020-03-29",
        tags: ["proximal", "extension", "adaptation"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 49 YO",
              gender: "➞ Female",
              occupation: "➞ Event Planner",
            },
            medicalHistory: {
              systemic: ["Hypothyroidism (controlled)"],
              dental: ["Multiple posterior restorations", "Partial edentulism"],
            },
          },
          presentation: {
            chiefComplaint:
              "Yesterday, while eating toast, I heard a crack. I felt something sharp with my tongue. No pain, but slight cold sensitivity.",
            concerns: ["Sharp/rough area", "Tooth sensitivity to cold"],
            expectations: [
              "🔶 Long-term durability",
              "🔶 keep the tooth",
              "🔶 Subtle, natural appearance",
            ],
          },
          clinicalAssessment: {
            oralHygiene: "Good",
            periodontalStatus: "Stage I (Stabilized)",
            findings: {
              Tooth: "🦷#13",
              "Thermal Pulp Test": "Within normal limits",
              "Percussion test": "Within normal limits",
              Mobility: "Miller Class 0",
              Conditions: [
                "MOD amalgam (>15 years old)",
                "60% lingual cusp loss",
                "Positive vitality testing",
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
            title: "Structural Compromise",
            category: "Structure",
            details: {
              issues: [
                "Remaining dentin thickness <1mm",
                "High occlusal load (bruxism)",
                "Mechanical stress from aged restoration",
              ],
              observations: [
                "Flexural cracks in palatal cusp",
                "Remaining natural tooth structure < 50%",
              ],
              implications: [
                "Further reduction may jeopardize restorability",
                "Full coverage could increase crown decapitation risk",
              ],
              impact: "High risk of progressive tooth loss",
            },
            priority: "critical",
          },
          {
            id: "C2",
            title: "Aesthetic Integration",
            category: "Esthetics",
            details: {
              complications: [
                "Visible from certain smile angles",
                "Patient’s high esthetic expectations",
              ],
              implications: [
                "Strategic margin placement essential for gold restoration",
                "Preserving buccal cusp for visual harmony",
              ],
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
              duration: "1 visit",
              focus: "RBA Discussion, Examination & Temporization",
            },
            {
              phase: 2,
              duration: "1 visit",
              focus: "Preparation & Impression",
            },
            {
              phase: 3,
              duration: "1 visit",
              focus: "Cementation & Finalization",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Consultation & Provisionalization",
            objectives: [
              "Discuss risks, benefits, and alternatives",
              "Evaluate pulpal response with provisional restoration",
            ],
            procedures: [
              {
                type: "Discussion",
                mechanical: [
                  "Minimal tooth preparation",
                  "Lowest wear on opposing dentition",
                ],
                biological: [
                  "Superior biocompatibility",
                  "Minimal marginal gap for enhanced seal",
                ],
                esthetic: ["Strategic margin placement for reduced visibility"],
              },
              {
                type: "Provisionalization",
                material: "Resin-Modified Glass Ionomer",
                technique: "Direct build-up",
                outcome:
                  "Pulpal response monitored prior to definitive restoration",
              },
            ],
          },
          {
            phase: 2,
            title: "Preparation & Impression",
            objectives: [
              "Preserve remaining cusp integrity",
              "Optimize occlusal load distribution",
              "Achieve seamless marginal adaptation",
            ],
            procedures: [
              {
                type: "Tooth Preparation",
                design: ["3/4 Crown / Onlay"],
                features: [
                  "Conservative cusp coverage",
                  "1.5mm occlusal reduction",
                  "0.5mm chamfer margin",
                  "Defined proximal boxes",
                  "Mesiofacial margin positioned lingually (refer to occlusal view)",
                ],
                outcome: "Optimal retention and stability",
              },
              {
                type: "Tissue Management",
                technique: "Retraction Cord (000, 00)",
                outcome: "Clear margin exposure for precise impression",
              },
              {
                type: "Impression",
                material: "Polyvinyl Siloxane (PVS)",
                technique: "Dual-phase for enhanced detail",
                outcome: "Accurate reproduction of preparation",
              },
            ],
          },
          {
            phase: 3,
            title: "Cementation & Finalization",
            objectives: [
              "Ensure precise seating",
              "Seamless marginal adaptation",
              "Achieve stable proximal and occlusal contacts",
            ],
            procedures: [
              {
                type: "Cementation",
                material: "Resin-Modified Glass Ionomer",
                steps: [
                  "Intaglio fit verification",
                  "Proximal contact assessment",
                  "Full seating confirmed",
                  "Cement applied to isolated prep and intaglio",
                  "Restoration seated with maintained pressure (bite stick)",
                  "Excess removal after initial set",
                ],
                outcome: "Secure retention and marginal adaptation",
              },
              {
                type: "Margin Finishing",
                sequence: [
                  "30μm Diamond",
                  "15μm Diamond",
                  "8μm Diamond",
                  "Medium Garnet Disc",
                  "Fine Sand",
                  "Fine Cuttle",
                ],
                outcome: "Refined margins with smooth transition",
              },
              {
                type: "Margin Polishing",
                sequence: [
                  "Brown Rubber Burs",
                  "#4 Flour Pumice",
                  "Green Rubber Burs",
                  "15μm Al₂O₃",
                  "Super Green Rubber Burs",
                  "1μm Al₂O₃",
                ],
                outcome: "High-gloss finish for plaque resistance",
              },
              {
                type: "Contact & Occlusion Verification",
                instruments: [
                  "Articulating Paper (200μm)",
                  "Shimstock (8μm)",
                  "Unwaxed Floss",
                ],
                outcome: "Stable proximal and occlusal contacts",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        icon: "success",
        metrics: {
          proceduralSuccess: {
            complicationRate: "2",
            anatomyPreservation: "95",
            fractureResistance: "92",
          },
          patientSatisfaction: {
            functional: 4.9,
            aesthetic: 4.8,
            overall: 4.7,
          },
        },
        content: {
          achievements: [
            "Acceptable Esthetics with Non- tooth colored restoration",
            "No post-operative sensitivity or discomfort reported",
            "Precise marginal adaptation with excellent seal integrity",
          ],
          patientFeedback: {
            quote:
              "I can barely see the gold , and it feels very nice and smooth, I am glad we went this route!",
            improvementsNoted: [
              "Eliminated food impaction and interproximal discomfort",
              "Restored efficient mastication and bite stability",
            ],
          },
          limitations: {
            noted: [
              "Tooth labial surface still look slightly grey due to previous amalgam restoration ",
            ],
            futureConsiderations: [
              "Encourage nightguard compliance to minimize parafunctional forces",
              "Long-term marginal integrity evaluation during recall visits",
            ],
          },
        },
      },
    },
  },
};

export default caseFour;
