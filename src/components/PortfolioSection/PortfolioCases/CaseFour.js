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
    alt: "Maxillary Premolar Onlay Preparation",
    modality: "Laboratory Cast",
    date: "2023-08-10",
  },
  caseStudy: {
    carousel: [
      {
        img: GoldOnlayCast,
        alt: "Definitive Cast",
        caption: "Master Cast with Die Preparation",
        modality: "Laboratory Photography",
        date: "2023-08-12",
        tags: ["impression", "die", "laboratory"],
      },
      {
        img: GoldOnlayIntaglio,
        alt: "Intaglio Surface",
        caption: "Onlay Intaglio Surface Characterization",
        modality: "Macro Photography",
        date: "2023-08-12",
        tags: ["fit", "margins", "internal"],
      },
      {
        img: GoldOnlayOcclusion,
        alt: "Occlusal Verification",
        caption: "Articulator-mounted Occlusal Check",
        modality: "Laboratory Documentation",
        date: "2023-08-13",
        tags: ["occlusion", "articulation"],
      },
      {
        img: GoldOnlayPrep,
        alt: "Tooth Preparation",
        caption: "Conservative Preparation Design",
        modality: "Intraoral Photograph",
        date: "2023-08-08",
        tags: ["prep", "conservative"],
      },
      {
        img: GoldOnlayAnatomy,
        alt: "Anatomical Wax-up",
        caption: "Functional Cusp Preservation",
        modality: "Laboratory Documentation",
        date: "2023-08-11",
        tags: ["wax-up", "anatomy"],
      },
      {
        img: GoldOnlayFinalImp,
        alt: "Final Impression",
        caption: "Polyvinyl Siloxane Impression",
        modality: "Clinical Photography",
        date: "2023-08-08",
        tags: ["impression", "margins"],
      },
      {
        img: IntraOralBite,
        alt: "Bite Registration",
        caption: "Interocclusal Record Verification",
        modality: "Clinical Photography",
        date: "2023-08-08",
        tags: ["bite", "registration"],
      },
      {
        img: IntraOralOcc,
        alt: "Final Seat Check",
        caption: "Post-cementation Occlusal View",
        modality: "Intraoral Photograph",
        date: "2023-08-15",
        tags: ["final", "occlusal", "result"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        icon: "patient-file",
        content: {
          patientProfile: {
            demographic: {
              age: 42,
              gender: "female",
              occupation: "Corporate Lawyer",
            },
            medicalHistory: {
              systemic: ["Hypothyroidism (controlled)"],
              dental: [
                "Multiple posterior composites",
                "Nightguard user (bruxism)",
              ],
            },
          },
          presentation: {
            chiefComplaint: "Fractured lingual cusp on upper back tooth",
            concerns: ["Chewing discomfort", "Previous restoration failure"],
            expectations: [
              "Durable solution",
              "Minimal tooth reduction",
              "Discreet appearance",
            ],
          },
          clinicalAssessment: {
            oralHygiene: "Good",
            periodontalStatus: "Stage I",
            existingWork: {
              tooth: "#14",
              condition: [
                "MOD composite (5 years old)",
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
                "Existing composite debonding",
              ],
              observations: [
                "Flexural cracks in remaining cusp",
                "Risk of cuspal deflection: 38μm",
              ],
              impact: "High risk of vertical fracture",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Aesthetic Integration",
            category: "Esthetics",
            details: {
              complications: [
                "Visible from certain smile angles",
                "Patient's high aesthetic demands",
              ],
              implications: [
                "Margin placement strategy required",
                "Surface texture matching",
              ],
            },
            priority: "Medium",
          },
        ],
      },
      solutions: {
        title: "Restorative Protocol",
        icon: "dental-drill",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "2 visits",
              focus: "Preparation & Impressions",
            },
            {
              phase: 2,
              duration: "1 visit",
              focus: "Delivery & Adjustment",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Preparatory Phase",
            objectives: [
              "Preserve 2mm functional cusp",
              "Create 1.5mm occlusal reduction",
              "Establish divergent walls (6° taper)",
            ],
            procedures: [
              {
                type: "Tooth Preparation",
                code: "D2790",
                instruments: [
                  "Round-end tapered diamond",
                  "Margin finishing burs",
                ],
                features: [
                  "0.5mm chamfer margin",
                  "1.2mm axial reduction",
                  "0.8mm isthmus width",
                ],
                outcome: "Optimal retention form achieved",
              },
              {
                type: "Impression",
                material: "PVS Heavy/Light Body",
                technique: "Dual-arch tray",
                outcome: "Definitive margin capture",
              },
            ],
          },
          {
            phase: 2,
            title: "Restorative Phase",
            objectives: [
              "Passive fit verification",
              "Occlusal harmony",
              "Marginal integrity",
            ],
            procedures: [
              {
                type: "Cementation",
                material: "Resin-Modified Glass Ionomer",
                technique: "Adhesive protocol",
                steps: [
                  "Air-abrasion of intaglio",
                  "Silane application",
                  "Dual-cure cementation",
                ],
                outcome: "Complete margin adaptation",
              },
              {
                type: "Occlusal Adjustment",
                instruments: [
                  "12μm finishing foil",
                  "Articulating paper (200μm)",
                ],
                outcome: "Centric stops verified",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        icon: "success",
        metrics: {
          clinicalMetrics: {
            marginalIntegrity: "Alpha score",
            occlusalWear: "0.03mm/6mo",
            fractureResistance: "980N",
          },
          patientSatisfaction: {
            function: 4.9,
            comfort: 4.8,
            aesthetics: 4.5,
          },
        },
        content: {
          achievements: [
            "100% cuspal coverage maintained",
            "0.5mm buccal enamel preserved",
            "No post-op sensitivity reported",
          ],
          patientFeedback: {
            quote: "It feels completely natural when chewing!",
            improvementsNoted: [
              "Eliminated food trapping",
              "Improved chewing efficiency",
            ],
          },
          limitations: {
            noted: [
              "Slight metal flash at distal margin",
              "25μm cement line visibility",
            ],
            futureConsiderations: [
              "Annual occlusal check",
              "Nightguard compliance monitoring",
            ],
          },
        },
      },
    },
  },
};

export default caseFour;
