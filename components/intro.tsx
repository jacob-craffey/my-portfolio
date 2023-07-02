import { Card, Text } from "@nextui-org/react";

export const Intro = () => (
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
        Hi there,
      </Text>
    </Card.Header>

    <Card.Body>
      <Text h4>
        I&apos;m Jacob Craffey , a full stack web developer from Grand Rapids,
        MI.
      </Text>
      <Text h4>
        As someone who values minimal yet effective design in all aspects of
        software, I&apos;m passionate about creating solutions that not only
        look great, but also function flawlessly.
      </Text>
      <Text h4>
        I&apos;ve created this site to showcase my skillsets working as a
        software consultant, and to archive my experiences along the way.
      </Text>
    </Card.Body>
  </Card>
);
