import { Tech } from "./tech-tools";

export default interface ProjectProps {
  name: string;
  fullName: string;
  description: Description;
  imageSrc: string;
  techs: Tech[];
}

interface Description {
  overview: string;
  solution: string;
  learning: string;
}
