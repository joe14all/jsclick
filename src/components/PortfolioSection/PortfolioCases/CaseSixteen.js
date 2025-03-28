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
  categories: ["surgery", "implant"],
  thumbnail: {
    img: ThumbnailImage,
    alt: "3D Reconstruction of Atrophic Maxilla",
  },
  caseStudy: {
    carousel: [
      {
        img: ThumbnailImage,
        alt: "Pre-Operative 3D Reconstruction",
        caption: "Initial bone deficiency assessment",
        modality: "CBCT 3D Reconstruction",
        tags: ["pre-op", "imaging", "bone-loss"],
      },
      {
        img: CBCTSagImage,
        alt: "Sagittal CBCT View",
        caption: "Residual bone height measurement",
        modality: "CBCT Sagittal Section",
        tags: ["pre-op", "cbct", "measurements"],
      },
      {
        img: CBCT1Image,
        alt: "Axial CBCT View",
        caption: "Sinus anatomy evaluation",
        modality: "CBCT Axial Section",
        tags: ["pre-op", "cbct"],
      },
      {
        img: CBCT2Image,
        alt: "Coronal CBCT View",
        caption: "Membrane thickness assessment",
        modality: "CBCT Coronal Section",
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
        alt: "Pre-Operative Occlusal View",
        caption: "Ridge morphology documentation",
        modality: "Clinical Photography",
        tags: ["pre-op", "clinical"],
      },
      {
        img: CrestalInsImage,
        alt: "Crestal Incision",
        caption: "Initial surgical access",
        modality: "Intraoperative Photography",
        tags: ["surgical", "incision"],
      },
      {
        img: ReflectionImage,
        alt: "Mucoperiosteal Reflection",
        caption: "Tissue reflection technique",
        modality: "Intraoperative Photography",
        tags: ["surgical", "reflection"],
      },
      {
        img: MarkingsImage,
        alt: "Osteotomy Markings",
        caption: "Window dimension planning",
        modality: "Intraoperative Photography",
        tags: ["surgical", "osteotomy"],
      },
      {
        img: BoneExposureImage,
        alt: "Bone Exposure",
        caption: "Lateral wall preparation",
        modality: "Intraoperative Photography",
        tags: ["surgical", "bone"],
      },
      {
        img: SinusExposureImage,
        alt: "Membrane Exposure",
        caption: "Schneiderian membrane visualization",
        modality: "Intraoperative Photography",
        tags: ["surgical", "membrane"],
      },
      {
        img: BoneGraftImage,
        alt: "Bone Graft Placement",
        caption: "Graft material adaptation",
        modality: "Intraoperative Photography",
        tags: ["surgical", "graft"],
      },
      {
        img: MembraneImage,
        alt: "Barrier Membrane Placement",
        caption: "Collagen membrane application",
        modality: "Intraoperative Photography",
        tags: ["surgical", "membrane"],
      },
      {
        img: SuturedImage,
        alt: "Closure Technique",
        caption: "Primary tension-free closure",
        modality: "Intraoperative Photography",
        tags: ["surgical", "suture"],
      },
      {
        video: SinusLiftVideo,
        alt: "Surgical Procedure Video",
        caption: "Step-by-step technique demonstration",
        modality: "Surgical Video",
        tags: ["video", "procedure"],
      },
    ],
    sections: {
      overview: {
        title: "Clinical Scenario",
        content: {
          patientProfile: {
            demographic: {
              age: 58,
              gender: "male",
            },
            medicalHistory: {
              systemic: ["Non-smoker", "Controlled diabetes"],
              dental: [
                "Edentulous posterior maxilla",
                "Failed previous bone augmentation",
              ],
            },
          },
          presentation: {
            chiefComplaint: "Inability to chew on upper right side",
            concerns: [
              "Chronic sinus pressure",
              "Previous treatment failure",
              "Prosthetic instability",
            ],
            expectations: [
              "Stable implant foundation",
              "Preserved sinus health",
              "Predictable outcome",
            ],
          },
          diagnosticFindings: {
            radiographic: {
              boneHeight: "2.8mm ± 0.3mm",
              membraneThickness: "1.2mm",
              sinusPathology: "None detected",
            },
            clinical: {
              ridgeWidth: "6mm",
              keratinizedTissue: "3mm",
              sinusPerforationRisk: "Moderate (Class II)",
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
            category: "Surgical Access",
            details: {
              issues: [
                "Minimal residual bone height (2.8mm)",
                "Concave sinus floor anatomy",
                "Anterior sinus septa presence",
              ],
              impact: "Increased membrane perforation risk",
            },
            priority: "Critical",
          },
          {
            id: "SC2",
            title: "Biologic Limitations",
            category: "Healing",
            details: {
              issues: [
                "Compromised vascular supply",
                "Diabetic healing parameters",
                "Thin mucosal biotype",
              ],
              impact: "Graft integration challenges",
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
              duration: "Pre-op Planning",
              focus: "3D Surgical Guide Design",
            },
            {
              phase: 2,
              duration: "Surgical Procedure",
              focus: "Lateral Window Technique",
            },
            {
              phase: 3,
              duration: "6-month Healing",
              focus: "Tissue Maturation",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Precision Planning",
            objectives: [
              "Virtual osteotomy design",
              "Graft volume calculation",
              "Membrane integrity assessment",
            ],
            procedures: [
              {
                type: "CBCT Analysis",
                software: "BlueSky Plan",
                parameters: ["0.2mm voxel size", "3D membrane mapping"],
                outcome: "1:1 Surgical guide fabrication",
              },
              {
                type: "Risk Mitigation",
                strategies: [
                  "Piezoelectric instrumentation",
                  "Hydraulic elevation protocol",
                  "Fibrin-rich membrane application",
                ],
              },
            ],
          },
          {
            phase: 2,
            title: "Surgical Execution",
            objectives: [
              "Membrane integrity preservation",
              "Controlled graft placement",
              "Primary closure achievement",
            ],
            procedures: [
              {
                type: "Window Preparation",
                instruments: ["Piezotome Ultra", "Diamond-coated tips"],
                parameters: ["4×6mm oval window", "30° beveled edges"],
                outcome: "Intact membrane visualization",
              },
              {
                type: "Graft Composition",
                materials: [
                  "60% Xenograft (Bio-Oss)",
                  "30% Autograft (Ramus)",
                  "10% PRF Membrane",
                ],
                outcome: "Stable graft matrix formation",
              },
            ],
          },
          {
            phase: 3,
            title: "Healing Monitoring",
            objectives: [
              "Osseous consolidation",
              "Soft tissue adaptation",
              "Implant readiness assessment",
            ],
            procedures: [
              {
                type: "Progress Evaluation",
                timeline: ["4-week soft tissue check", "12-week CBCT scan"],
                metrics: [
                  "Bone density Hounsfield units",
                  "Vertical gain measurement",
                ],
              },
            ],
          },
        ],
      },
      results: {
        title: "Procedural Outcomes",
        metrics: {
          verticalGain: {
            immediate: "12.4mm",
            "6-month": "10.8mm (13% resorption)",
          },
          patientRecovery: {
            swellingDuration: "4.2 days",
            analgesiaRequirement: "2.7 days",
          },
        },
        content: {
          achievements: [
            "Successful 11.2mm vertical gain",
            "Intact sinus membrane maintenance",
            "Complete soft tissue closure",
          ],
          complications: {
            intraoperative: "Minor bleeding (controlled)",
            postoperative: "Temporary sinus congestion",
          },
          longTerm: {
            "12-month": "Successful implant placement (4.8mm ISQ)",
            "24-month": "Functional prosthesis in place",
          },
        },
      },
    },
  },
};

export default caseSixteen;
