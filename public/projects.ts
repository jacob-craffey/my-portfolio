import { Tech } from "@/models/tech-tools";
import Project from "../models/project";

const projectsData: Project[] = [
  {
    name: "Zomedica",
    fullName: "Zomedica: myZomedica",
    description: {
      overview: "overview",
      solution: "solution",
      learning: "learning",
    },
    imageSrc: "zom.webp",
    techs: [Tech.Angular, Tech.DotNet, Tech.Azure, Tech.Terraform],
  },
  {
    name: "Miller Knoll",
    fullName: "Zomedica: myZomedica",

    description: {
      overview: "overview",
      solution: "solution",
      learning: "learning",
    },
    imageSrc: "knoll.webp",
    techs: [Tech.Angular, Tech.Node, Tech.AWS, Tech.Ampify],
  },
  {
    name: "Little Caesars Enterprise",
    fullName: "Zomedica: myZomedica",

    description: {
      overview: "overview",
      solution: "solution",
      learning: "learning",
    },
    imageSrc: "pizza.webp",
    techs: [Tech.React, Tech.DotNet, Tech.Azure, Tech.Terraform],
  },
  {
    name: "PBSC Urban Solutions",
    fullName: "Zomedica: myZomedica",

    description: {
      overview: "overview",
      solution: "solution",
      learning: "learning",
    },
    imageSrc: "pbsc.webp",
    techs: [Tech.Node, Tech.AWS, Tech.Serverless],
  },
];

export default projectsData;
