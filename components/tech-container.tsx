import { Tech } from "@/models/tech-tools";
import { Image, Row } from "@nextui-org/react";

interface techContainerProps {
  techs: Tech[];
}

const TechContainer = (techContainerProps: techContainerProps) => {
  const { techs } = techContainerProps;
  return (
    <Row css={{ mw: "350px", m: "auto" }}>
      {techs.map((tech, index) => (
        <Image key={index} src={tech} height={50} width={50} />
      ))}
    </Row>
  );
};

export default TechContainer;
