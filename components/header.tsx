import { Navbar, Text } from "@nextui-org/react";
import { Layout } from "./layout";
import { Link } from "react-scroll";

export default function Header() {
  interface HeaderItems {
    title: string;
    id: string;
  }
  const collapseItems: HeaderItems[] = [
    { title: "About", id: "about" },
    { title: "Experience", id: "experience" },
    { title: "Technologies", id: "technologies" },
    { title: "Other Projects", id: "otherProjects" },
    { title: "Resume", id: "resume" },
    { title: "Contact", id: "contact" },
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky" maxWidth={"fluid"}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <Text b color="inherit">
            Jacob Craffey
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          {collapseItems.map((item, index) => (
            <Link to={item.id} smooth="easeInCubic" duration={300} key={index} offset={-150}>
              {item.title}
            </Link>
          ))}
        </Navbar.Content>
        <Navbar.Content></Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Link to={item.id} smooth={true} duration={200} key={index}>
                {item.title}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
