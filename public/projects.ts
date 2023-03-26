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
        "Compass is a software solution designed to help Miller Knoll's clients manage their interior business floorplans. The solution uses Herman Miller's generative design technology and machine learning algorithms to automatically furnish empty floorplans with Miller Knoll's furniture collections based on customized parameters. The platform is user-friendly, enabling clients to easily optimize their interior spaces for functionality and aesthetics. With Compass, Miller Knoll's clients can enjoy convenience and accuracy in their floorplan management, giving them a competitive edge in the fast-paced business landscape.",
      solution: "",
      learning: "",
    },
    imageSrc: "knoll.webp",
    techs: [Tech.Angular, Tech.Node, Tech.AWS, Tech.Ampify],
  },
  {
    name: "Little Caesars Enterprise",
    fullName: "Little Caesars Fundraising",

    description: {
      overview:
        "Little Caesars Fundraising is a subdomain of Little Caesars' main website that allows users to create and manage fundraising campaigns for their schools, sports teams, and other organizations. The platform is designed to be easy to use, allowing users to quickly create and customize their campaigns with a few simple clicks. The solution also provides users with a suite of tools that make it easy to track and analyze their fundraising progress. With Little Caesars Fundraising, users can enjoy a convenient and hassle-free fundraising experience that is sure to help them reach their goals.",
      solution:
        "The Little Caesars Fundraising solution is built on a robust Azure environment, leveraging .NET API, React, and Terraform to provide users with a fast, responsive, and highly scalable experience. The platform's intuitive interface allows users to create and customize fundraising campaigns with ease, while a suite of sophisticated tools provides powerful analytics and tracking capabilities.",
      learning: "learning",
    },
    imageSrc: "pizza.webp",
    techs: [Tech.React, Tech.DotNet, Tech.Azure, Tech.Terraform],
  },
  {
    name: "PBSC Urban Solutions",
    fullName: "PBSC Urban Solutions",

    description: {
      overview:
        "PBSC Urban Solutions enlisted our help to architect and build a seamless provisioning flow for their scooter and bike share program. Leveraging cutting-edge technologies such as AWS, Serverless Framework, and Node.js Lambdas, our team delivered a highly scalable onboarding flow capable of handling multi-regionality. With our solution, PBSC Urban Solutions was able to streamline the provisioning process for their devices and enhance the overall user experience, ultimately contributing to the success of their innovative transportation program.",
      solution: "solution",
      learning: "learning",
    },
    imageSrc: "pbsc.webp",
    techs: [Tech.Node, Tech.AWS, Tech.Serverless],
  },
];

export default projectsData;
