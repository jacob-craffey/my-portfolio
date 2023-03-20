import { Card, Text } from "@nextui-org/react";

interface ProjectProps {
  name: string;
  description: string;
  imageSrc: string;
}

export const Project = (project: ProjectProps) => {
  return (
    <Card
      isPressable
      isHoverable
      css={{ height: 300, alignContent: "stretch" }}
    >
      <Card.Image
        src={project.imageSrc}
        objectFit="contain"
        alt="Card image background"
        width="100%"
        height="100%"
        css={{
          alignContent: "stretch",
          alignItems: "stretch",
        }}
        showSkeleton
      />
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#00000066",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,

          zIndex: 1,
        }}
      >
        <Text
          color="#fff"
          css={{
            "@xsMax": {
              fontSize: "$space$6",
              fontWeight: "normal",
            },
            "@xs": {
              fontSize: "$space$8",
            },
          }}
          b
        >
          {project.name}
        </Text>
      </Card.Footer>
    </Card>
  );
};
