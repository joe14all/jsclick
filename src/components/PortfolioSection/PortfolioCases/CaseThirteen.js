import FinalImpression from "../../../assets/images/posteriorImplants/finalImpression.jpg";
import TissueMimic from "../../../assets/images/posteriorImplants/tissueMimc.jpg";
import CastBuccal from "../../../assets/images/posteriorImplants/castBuccal.jpg";
import CastLingual from "../../../assets/images/posteriorImplants/castLingual.jpg";
import CastOcc from "../../../assets/images/posteriorImplants/castOcc.jpg";
import CastFrontal from "../../../assets/images/posteriorImplants/castFrontal.jpg";
import IntraOralBuccalRt from "../../../assets/images/posteriorImplants/IntraOralBuccal.jpg";
import IntraOralBuccalLt from "../../../assets/images/posteriorImplants/IntraOralBuccalLt.jpg";
import IntraOralLtOcc from "../../../assets/images/posteriorImplants/IntraOralLtOcc.jpg";
import FrontalView from "../../../assets/images/posteriorImplants/frontalView.jpg";
import PostOpPA from "../../../assets/images/posteriorImplants/postOp-PA.png";

const caseThirteen = {
  id: 13,
  title: "Posterior Implants - Crowns",
  categories: ["implant", "prosthodontics"],
  thumbnail: {
    img: CastOcc,
    alt: "Cast Occlusal View",
  },
  caseStudy: {
    carousel: [
      {
        img: FinalImpression,
        alt: "Final Impression Occlusal View",
        caption: "Definitive implant-level impression",
        modality: "Polyether Impression",
        tags: ["implant", "occlusal"],
      },
      {
        img: TissueMimic,
        alt: "Tissue Mimic",
        caption: "Soft tissue replication",
        modality: "Laboratory Technique",
        tags: ["gingival", "esthetic"],
      },
      {
        img: CastBuccal,
        alt: "Cast Buccal View",
        caption: "Buccal contour analysis",
        modality: "Master Cast",
        tags: ["morphology", "occlusion"],
      },
      {
        img: CastLingual,
        alt: "Cast Lingual View",
        caption: "Lingual anatomy verification",
        modality: "Articulated Model",
        tags: ["occlusion", "functional"],
      },
      {
        img: CastOcc,
        alt: "Cast Occlusal View",
        caption: "Occlusal scheme validation",
        modality: "Articulator View",
        tags: ["bite-registration"],
      },
      {
        img: CastFrontal,
        alt: "Cast Frontal View",
        caption: "Prosthetic design preview",
        modality: "Diagnostic Wax-up",
        tags: ["esthetic", "planning"],
      },
      {
        img: IntraOralBuccalRt,
        alt: "Intra Oral Buccal Rt View",
        caption: "Implant site integration",
        modality: "Postoperative",
        tags: ["osseointegration", "buccal"],
      },
      {
        img: IntraOralBuccalLt,
        alt: "Intra Oral Buccal Lt View",
        caption: "Contralateral anatomy reference",
        modality: "Clinical View",
        tags: ["comparison", "occlusion"],
      },
      {
        img: IntraOralLtOcc,
        alt: "Intra Oral Occlusal Lt View",
        caption: "Occlusal relationship verification",
        modality: "Functional Check",
        tags: ["bite", "articulation"],
      },
      {
        img: FrontalView,
        alt: "IntraOral Frontal View",
        caption: "Final prosthetic result",
        modality: "Smile View",
        tags: ["esthetic-result", "final"],
      },
      {
        img: PostOpPA,
        alt: "Post Op PA Lt Side",
        caption: "Implant positioning verification",
        modality: "Periapical Radiograph",
        tags: ["radiograph", "bone-level"],
      },
    ],
    sections: {
      overview: {
        title: "Patient Overview",
        content: {
          patientProfile: {
            demographic: {
              age: 58,
              gender: "male",
            },
            medicalHistory: {
              systemic: ["Controlled diabetes"],
              dental: ["Long-term RPD use (5 years)"],
            },
          },
          presentation: {
            chiefComplaint: "RPD discomfort and functional limitations",
            concerns: ["Chewing inefficiency", "RPD instability"],
            expectations: [
              "Fixed restoration",
              "Natural function restoration",
              "Eliminate removable appliance",
            ],
          },
          clinicalAssessment: {
            existingRestorations: {
              teeth: ["#3"],
              condition: [
                "Adequate bone volume",
                "Healthy peri-implant tissues",
              ],
            },
            occlusion: {
              classification: "Class I",
              verticalDimension: "Maintained",
            },
          },
        },
      },
      challenges: {
        title: "Clinical Challenges",
        content: [
          {
            id: "C1",
            title: "Occlusal Load Management",
            category: "Implantology",
            details: {
              issues: [
                "Single posterior implant support",
                "Lever arm forces on cantilever",
              ],
              impact: "Risk of mechanical failure",
            },
            priority: "High",
          },
          {
            id: "C2",
            title: "Interarch Space Utilization",
            category: "Prosthodontics",
            details: {
              issues: [
                "Limited mesiodistal space",
                "Vertical height constraints",
              ],
              impact: "Prosthetic design compromise",
            },
            priority: "Medium",
          },
        ],
      },
      solutions: {
        title: "Treatment Strategy",
        timeline: {
          phases: [
            {
              phase: 1,
              duration: "2 weeks",
              focus: "Diagnostic Planning",
            },
            {
              phase: 2,
              duration: "4 months",
              focus: "Implant Integration",
            },
            {
              phase: 3,
              duration: "2 weeks",
              focus: "Prosthetic Rehabilitation",
            },
          ],
        },
        content: [
          {
            phase: 1,
            title: "Preoperative Planning",
            objectives: [
              "3D bone volume assessment",
              "Occlusal scheme design",
              "Prosthetically driven implant placement",
            ],
            procedures: [
              {
                type: "CBCT Analysis",
                outcome: "8.2mm bone width verified",
                steps: [
                  "DICOM data acquisition",
                  "Virtual implant placement",
                  "Surgical guide fabrication",
                ],
              },
            ],
          },
          {
            phase: 2,
            title: "Implant Placement",
            objectives: [
              "Optimal primary stability",
              "Soft tissue preservation",
              "Provisionalization",
            ],
            procedures: [
              {
                type: "Guided Surgery",
                technique: "Flapless approach",
                outcome: "45Ncm insertion torque",
              },
              {
                type: "Healing Abutment",
                dimensions: "5.0mm diameter",
                outcome: "Soft tissue shaping achieved",
              },
            ],
          },
          {
            phase: 3,
            title: "Definitive Restoration",
            objectives: [
              "Passive fit verification",
              "Occlusal harmony",
              "Esthetic integration",
            ],
            procedures: [
              {
                type: "Custom Zirconia Abutment",
                cement: "Resin-modified glass ionomer",
                outcome: "15μm marginal gap",
              },
              {
                type: "Monolithic Zirconia Crown",
                shade: "A2",
                outcome: "0.2mm occlusal adjustment",
              },
            ],
          },
        ],
      },
      results: {
        title: "Treatment Outcomes",
        metrics: {
          patientSatisfaction: {
            aesthetic: 4.8,
            functional: 4.9,
            overall: 4.8,
          },
        },
        content: {
          achievements: [
            "100% RPD elimination on right side",
            "580MPa fracture resistance",
            "Implant stability quotient (ISQ): 82",
          ],
          patientFeedback: {
            quote: "It feels like natural teeth again",
            improvementsNoted: [
              "Improved masticatory efficiency",
              "Enhanced taste perception",
            ],
          },
          limitations: {
            noted: [
              "Contralateral RPD still present",
              "Annual maintenance required",
            ],
            futureConsiderations: [
              "Left side implant planning",
              "Nightguard provision",
            ],
          },
        },
      },
    },
  },
};
export default caseThirteen;
