import { Tech } from "@/models/tech-tools";
import { Avatar, Card, Grid, Text, Tooltip } from "@nextui-org/react";

export const Technologies = () => {
  const pictureUsers = [
    Tech.Angular,
    Tech.AWS,
    Tech.Terraform,
    Tech.DotNet,
    Tech.Docker,
    Tech.Azure,
    Tech.React,
    Tech.Node,
    Tech.Amplify,
    Tech.Serverless,
  ];
  return (
    <Card
      css={{
        mw: "700px",
        p: "$10",
        bg: "#101010",
      }}
      id="about"
    >
      <Card.Header>
        <Text
          h1
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
        >
          Technologies
        </Text>
      </Card.Header>

      <Card.Body>
        <Text h4>
          I am an experienced full-stack developer with professional expertise
          in a wide range of technologies. I have worked extensively with
          front-end frameworks like React, NextJS, and Angular, cloud platforms
          such as Azure and AWS, infrastructure as code tools like Terraform &
          Serverless Framework, and server-side technologies including Node.js
          and C# (.NET). Additionally, I have hands-on experience with Microsoft
          SQL Server for relational database management and Cosmos DB & Dynamo
          DB for NoSQL data storage. With a comprehensive skill set, I am
          well-prepared to handle diverse development challenges and deliver
          high-quality solutions.
        </Text>
      </Card.Body>

      <Grid.Container gap={6}>
        <Grid xs={12} justify="center">
          {Object.entries(Tech).map(([techName, url]) => (
            <Tooltip
              placement="topStart"
              content={techName}
              key={techName}
              shadow={true}
              hideArrow
            >
              <Avatar
                size="xl"
                pointer
                src={url}
                bordered
                color="secondary"
                zoomed
                stacked
              />
            </Tooltip>
          ))}
        </Grid>
      </Grid.Container>
    </Card>
  );
};
