import ThumbnailImage from "../../../assets/images/sinusLift/3d.jpg";
import CBCTSagImage from "../../../assets/images/sinusLift/cbct-sag.jpg";
import CBCT1Image from "../../../assets/images/sinusLift/cbct1.jpg";
import CBCT2Image from "../../../assets/images/sinusLift/cbct2.jpg";
import PreOpBuccalImage from "../../../assets/images/sinusLift/preOp-Buccal.jpg";
import PreOpOccImage from "../../../assets/images/sinusLift/preOp-Occ.jpg";
import CrestalInsImage from "../../../assets/images/sinusLift/crestalIns.jpg";
import ReflectionImage from "../../../assets/images/sinusLift/reflection.jpg";
import MarkingsImage from "../../../assets/images/sinusLift/markings.jpg";
import BoneExposureImage from "../../../assets/images/sinusLift/boneExposure.jpg";
import SinusExposureImage from "../../../assets/images/sinusLift/sinusExposure.jpg";
import BoneGraftImage from "../../../assets/images/sinusLift/boneGraft.jpg";
import MembraneImage from "../../../assets/images/sinusLift/Membrane.jpg";
import SuturedImage from "../../../assets/images/sinusLift/sutured.jpg";
import SinusLiftVideo from "../../../assets/images/sinusLift/Sinuslift.mp4";

const caseSixteen = {
  id: 16,
  title: "Maxillary Sinus Lift Procedure",
  categories: ["surgery", "implant", "digital"],
  thumbnail: {
    img: ThumbnailImage,
    alt: "3D Reconstruction of Atrophic Maxilla",
  },
  caseStudy: {
    carousel: [
      {
        img: ThumbnailImage,
        caption: "Pre-Operative 3D Reconstruction",
        alt: "Initial bone deficiency assessment",
        modality: "CBCT 3D Reconstruction",
        date: "2023-05-12",
        tags: ["pre-op", "imaging", "bone-loss"],
      },
      {
        img: CBCTSagImage,
        caption: "Sagittal CBCT View",
        alt: "Residual bone height measurement",
        modality: "CBCT Sagittal Section",
        date: "2023-05-12",

        tags: ["pre-op", "cbct", "measurements"],
      },
      {
        img: CBCT1Image,
        caption: "Axial CBCT View",
        alt: "Sinus anatomy evaluation",
        modality: "CBCT Axial Section",
        date: "2023-05-12",

        tags: ["pre-op", "cbct"],
      },
      {
        img: CBCT2Image,
        caption: "Coronal CBCT View",
        alt: "Membrane thickness assessment",
        modality: "CBCT Coronal Section",
        date: "2023-05-12",

        tags: ["pre-op", "cbct"],
      },
      {
        img: PreOpBuccalImage,
        alt: "Pre-Operative Buccal View",
        caption: "Initial mucosal condition",
        modality: "Clinical Photography",
        tags: ["pre-op", "clinical"],
      },
      {
        img: PreOpOccImage,
        caption: "Pre-Operative Occlusal View",
        alt: "Ridge morphology documentation",
        modality: "Clinical Photography",
        date: "2023-05-25",

        tags: ["pre-op", "clinical"],
      },
      {
        img: CrestalInsImage,
        caption: "Crestal Incision",
        alt: "Initial surgical access",
        modality: "Intraoperative Photography",
        date: "2023-05-25",

        tags: ["surgical", "incision"],
      },
      {
        img: ReflectionImage,
        caption: "Mucoperiosteal Reflection",
        alt: "Tissue reflection technique",
        date: "2023-05-25",

        modality: "Intraoperative Photography",
        tags: ["surgical", "reflection"],
      },
      {
        img: MarkingsImage,
        caption: "Osteotomy Markings",
        alt: "Window dimension planning",
        date: "2023-05-25",

        modality: "Intraoperative Photography",
        tags: ["surgical", "osteotomy"],
      },
      {
        img: BoneExposureImage,
        caption: "Bone Egg-shell",
        alt: "Lateral wall preparation",
        modality: "Intraoperative Photography",
        date: "2023-05-25",

        tags: ["surgical", "bone"],
      },
      {
        img: SinusExposureImage,
        caption: "Membrane Exposure",
        alt: "Schneiderian membrane visualization",
        modality: "Intraoperative Photography",
        date: "2023-05-25",

        tags: ["surgical", "membrane"],
      },
      {
        video: SinusLiftVideo,
        caption: "Intact Membrane",
        alt: "Step-by-step technique demonstration",
        date: "2023-05-25",

        modality: "Surgical Video",
        tags: ["video", "procedure"],
      },
      {
        img: BoneGraftImage,
        caption: "Bone Graft Placement",
        alt: "Graft material adaptation",
        date: "2023-05-25",

        modality: "Intraoperative Photography",
        tags: ["surgical", "graft"],
      },
      {
        img: MembraneImage,
        caption: "Barrier Membrane Placement",
        alt: "Collagen membrane application",
        modality: "Intraoperative Photography",
        date: "2023-05-25",

        tags: ["surgical", "membrane"],
      },
      {
        img: SuturedImage,
        caption: "Closure Technique",
        alt: "Primary tension-free closure",
        modality: "Intraoperative Photography",
        date: "2023-05-25",

        tags: ["surgical", "suture"],
      },
    ],
    sections: {
      overview: {
        content: {
          patientProfile: {
            demographic: {
              age: "➞ 62 YO",
              gender: "➞ Male",
              occupation: "➞ Manual laborer",
            },
            medicalHistory: {
              systemic: ["Active smoker", "Type II diabetes (controlled)"],
              dental: [
                "Advanced posterior maxillary pneumatization",
                "Bilateral posterior edentulism",
                "Generalized periodontal compromise",
              ],
            },
          },
          presentation: {
            chiefComplaint:
              "I can't chew properly, especially on the back teeth",
            concerns: [
              "❗️ Chronic posterior maxillary sinus involvement",
              "❗️ Generalized bone loss and tooth instability",
              "❗️ Difficulty retaining prosthetics",
            ],
            expectations: [
              "🔶 Long-term implant stability",
              "🔶 Preservation of sinus integrity",
              "🔶 Full-mouth functional rehabilitation",
            ],
          },
          clinicalAssessment: {
            oralHygiene: { Poor: "" },
            periodontalStatus: {
              Generalized: "Stage IV",
              Grade: "C",
            },
            periodontalFindings: {
              "Plaque Free Percentage": "18%",
              "Bleeding Percentage": "85%",
              "Probing Depths": "5–8mm",
              Recession: "4–7mm",
              Mobility: "1–2",
              "Gingival Status": "Generalized moderate-to-severe inflammation",
              "Bone loss": {
                Generalized: {
                  "Horizontal bone loss":
                    "Severe in posterior sextants, moderate anteriorly",
                },
              },
            },

            existingConditions: {
              "Missing Teeth": [
                "🦷#10",
                "🦷#13",
                "🦷#14",
                "🦷#15",
                "🦷#16",
                "🦷#19",
                "🦷#21",
                "🦷#22",
              ],
            },
            diagnosticData: {
              Radiographic: {
                "Bone Height": "2–4mm in posterior maxilla",
                "Membrane Thickness": "1.2–1.5mm",
                "Sinus Pathology":
                  "Extensive pneumatization, no evident pathology",
              },
              Clinical: {
                "Ridge Width": "3–5mm (notable horizontal deficiency)",
                "Keratinized Tissue":
                  "1–2mm in posterior mandible; 2–3mm elsewhere",
                "Sinus Perforation Risk":
                  "Very high—due to severe bone resorption and intimate sinus proximity",
              },
            },
          },
        },
      },
      challenges: {
        title: "Surgical Complexities",
        content: [
          {
            id: "SC1",
            title: "Anatomical Constraints",
            category: "technique",
            details: {
              issues: [
                "Severely pneumatized maxillary sinus with minimal residual bone height (2–4mm)",
                "Concave and irregular sinus floor morphology",
                "Anterior sinus septa and limited inter-arch space",
              ],
              impact:
                "Contraindicates indirect sinus lift; necessitates lateral window with high membrane perforation risk",
            },
            priority: "Critical",
          },
          {
            id: "SC2",
            title: "Biologic Limitations",
            category: "biology",
            details: {
              issues: [
                "Systemic compromise: controlled Type II diabetes and active smoking",
                "Generalized Stage IV Grade C periodontitis with high bleeding index (85%)",
                "Thin, inflamed soft tissue architecture",
              ],
              impact:
                "Reduced regenerative capacity and elevated risk of graft failure",
            },
            priority: "High",
          },
          {
            id: "SC3",
            title: "Prosthetic Zone Compromise",
            category: "restoration",
            details: {
              issues: [
                "Bilateral posterior edentulism limiting cross-arch stabilization",
                "Generalized horizontal bone loss with poor ridge width (3–5mm)",
                "Insufficient keratinized tissue in posterior mandible (1–2mm)",
              ],
              impact:
                "Challenges in achieving ideal implant positioning, emergence profile, and long-term prosthetic retention",
            },
            priority: "High",
          },
        ],
      },
      solutions: {
        title: "Surgical Protocol",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "8–12 Weeks",
              focus: "Infection Control & Systemic Optimization",
            },
            {
              phase: 2,
              duration: "Surgical Procedure",
              focus: "Lateral Window Sinus Augmentation",
            },
            {
              phase: 3,
              duration: "6-Month Healing",
              focus: "Implant Placement & Restoration Planning",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Preparatory Phase: Stabilization & Optimization",
            objectives: [
              "Resolve active infection and inflammation",
              "Reduce periodontal pathogen load",
              "Modify systemic and behavioral risk factors",
            ],
            procedures: [
              {
                type: "Periodontal Stabilization",
                protocol: [
                  "Full-mouth debridement and localized SRP",
                  "Adjunctive antimicrobials (CHX irrigation, Arestin in deep pockets)",
                  "Oral hygiene reinforcement with customized regimen",
                ],
              },
              {
                type: "Medical Coordination",
                strategies: [
                  "HbA1c target: <7.0 prior to surgery",
                  "Coordinate with PCP/endocrinologist for metabolic control",
                  "Smoking cessation protocol (8-week nicotine taper + counseling referral)",
                ],
              },
              {
                type: "Pre-Surgical Assessment",
                checks: [
                  "CBCT with sinus mapping and bone profiling",
                  "Soft tissue evaluation for graft coverage feasibility",
                  "Bloodwork: CBC, HbA1c, Vitamin D3, CRP",
                ],
              },
            ],
          },
          {
            phase: 2,
            title: "Sinus Augmentation: Lateral Window Technique",
            objectives: [
              "Achieve graft volume sufficient for future implant stability",
              "Prevent Schneiderian membrane perforation",
              "Facilitate optimal graft consolidation and sinus wall integration",
            ],
            procedures: [
              {
                type: "Incision & Access",
                instruments: ["#15 Scalpel", "Molt periosteal elevator"],
                parameters: [
                  "Crestal incision with anterior vertical release",
                  "Full‑thickness flap reflection to expose lateral maxillary wall",
                ],
                outcome:
                  "Adequate surgical access with preserved vascular anatomy",
              },
              {
                type: "Window Marking",
                instruments: ["DASK Drill #4 (3.3 mm, XST083025)"],
                parameters: [
                  "Elliptical outline ~5×7 mm",
                  "Maintain ≥2 mm clearance from sinus floor and vital structures",
                ],
                outcome:
                  "Osteotomy demarcated with precision using implant motor and DASK Drill #4",
              },
              {
                type: "Window Preparation",
                instruments: [
                  "Implant motor with DASK Drill #4 (3.3 mm) and #5 (3.7 mm, XRT372035)",
                  "Continuous irrigation",
                ],
                parameters: [
                  "800–1,200 RPM drilling in progressive diameters",
                  "Beveled margin creation to preserve window integrity",
                  "Intermittent tactile feedback monitoring",
                ],
                outcome:
                  "Intact lateral window segment prepared without membrane perforation",
              },
              {
                type: "Membrane Reflection",
                instruments: ["DASK dome‑shaped sinus curette"],
                keySteps: [
                  "Posterior‑to‑anterior Schneiderian membrane elevation",
                  "‘Walking’ curette technique for gentle detachment",
                  "Simultaneous visual and tactile perforation checks",
                ],
                outcome:
                  "Schneiderian membrane elevated ≥10 mm with verified integrity",
              },
              {
                type: "Graft & Membrane Placement",
                components: [
                  "Mixed autogenous (30%) & xenograft (60%) packed via DASK Graft Elevator Tip #2",
                  "Underlay collagen membrane (Bio‑Gide) across window",
                  "Membrane tenting via volumetric graft support",
                ],
                parameters: [
                  "Light condensation pressure (<2 N) to safeguard membrane",
                  "3D adaptation of graft to sinus cavity morphology",
                ],
                outcome:
                  "Graft positioned optimally without disrupting membrane",
              },
              {
                type: "Membrane Integrity Verification",

                outcome:
                  "Schneiderian membrane integrity confirmed with video documentation",
              },
              {
                type: "Flap Repositioning & Primary Closure",
                details: [
                  "Periosteal scoring for tension relief",
                  "4‑0 Vicryl horizontal mattress (deep layer)",
                  "5‑0 PTFE interrupted (superficial layer)",
                ],
                outcome: "Tension‑free primary closure validated by tug test",
              },
            ],
          },
          {
            phase: 3,
            title: "Implant Phase: Placement & Restoration",
            objectives: [
              "Assess bone integration and graft stability",
              "Strategically position implants in augmented zones",
              "Plan definitive prosthesis for long-term function",
            ],
            procedures: [
              {
                type: "Implant Placement",

                features: [
                  "CBCT-based surgical guide fabrication",
                  "Placement of 2–3 implants in grafted posterior maxilla",
                  "Torque >35 Ncm required for primary stability",
                ],
              },
              {
                type: "Restorative Phase",

                features: [
                  "Second-stage exposure or healing abutment placement",
                  "Digital impression for screw-retained zirconia prosthesis",
                  "Occlusal load testing prior to final delivery",
                ],
              },
            ],
          },
        ],
      },
      results: {
        metrics: {
          boneGain: {
            initialGraftHeight: "11 mm",
            postMaturationHeight: "9 mm",
            resorptionRate: "18%",
            implantStabilityQuotient: "72–78 ISQ",
          },
          patientSatisfaction: {
            functionalImprovement: 4.9,
            comfort: 4.8,
            aestheticIntegration: 4.5,
          },
          proceduralSuccess: {
            graftIntegration: "98",
            sinusMembraneIntegrity: "Preserved",
            complicationRate: "2",
            infectionStatus: "No postoperative infections",
          },
        },

        content: {
          achievements: [
            "9 mm vertical bone regeneration achieved post-maturation (initial graft height: 11 mm)",
            "All implants placed with primary stability (ISQ >70)",
            "No postoperative complications — absence of membrane perforation or infection",
          ],
          patientFeedback: {
            quote:
              "I was always told flippers were my only option due to how complex my case was — I’m truly glad I finally went through with it!",
            improvementsNoted: [
              "Significant vertical ridge augmentation",
              "Improved implant positioning for optimal biomechanical loading",
            ],
          },
        },
      },
    },
  },
};

export default caseSixteen;
