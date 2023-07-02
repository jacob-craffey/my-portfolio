import { Tech } from "@/models/tech-tools";
import Project from "../models/project";

const projectsData: Project[] = [
  {
    name: "Zomedica",
    fullName: "Zomedica: myZomedica",
    description: {
      overview:
        "myZomedica is a sophisticated web portal solution built on top of an advanced Azure environment. Leveraging cutting-edge web technologies and a robust data architecture, myZomedica processes and organizes test result data from a suite of devices provided by Zomedica. The platform's powerful Azure infrastructure ensures fast and reliable data processing, storage, and retrieval, while its intuitive web interface makes it easy for veterinary professionals to access and analyze critical patient information. Whether managing test results for individual patients or analyzing data across an entire practice, myZomedica provides a comprehensive and user-friendly solution that streamlines workflows, enhances clinical outcomes, and delivers measurable value to veterinary professionals.",
      solution:
        "Our team at Zomedica developed a cutting-edge solution that leverages an architected data pipeline to seamlessly upload DICOM file type payloads from Zomedica's suite of devices. With the potential for these payloads to reach tens of gigabytes, we engineered a highly scalable and robust Azure pipeline that can handle even the largest data loads. Once the data is processed and securely stored, we created a state-of-the-art web portal using Angular that can display the DICOM images and their respective data metrics with ease. The DICOM images require a specialized web viewer, which we expertly integrated into the frontend, along with a suite of toolsets that are specifically designed to provide medical specialists with the necessary tools to analyze and interpret the data. Our solution offers unparalleled speed, security, and convenience, making it the ideal choice for today's cutting-edge veterinary practices.",
      learning: "learning",
    },
    imageSrc: "zom.webp",
    techs: [Tech.Angular, Tech.DotNet, Tech.Azure, Tech.Terraform],
  },
  {
    name: "Miller Knoll",
    fullName: "Miller Knoll: Compass",

    description: {
      overview:
        "Compass is an innovative, custom-built software solution that empowers Miller Knoll's clients with a comprehensive and intuitive platform for managing their interior business floorplans. Leveraging Herman Miller's proprietary 'generative design' technology, our solution uses cutting-edge machine learning algorithms to automatically furnish empty floorplans with Miller Knoll's suite of furniture collections, based on a customized set of parameters. Our platform's user-friendly interface allows clients to easily manage and optimize their interior spaces, improving both the functionality and aesthetic appeal of their businesses. With Compass, Miller Knoll's clients can enjoy unparalleled convenience, efficiency, and accuracy in their floorplan management, giving them a competitive edge in today's fast-paced business landscape.",
      solution: "solution",
      learning: "learning",
    },
    imageSrc: "knoll.webp",
    techs: [Tech.Angular, Tech.Node, Tech.AWS, Tech.Amplify],
  },
  {
    name: "Little Caesars Enterprise",
    fullName: "Little Caesars Fundraising",

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
    fullName: "PBSC Urban Solutions",

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
