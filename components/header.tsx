import { Navbar, Link, Text } from "@nextui-org/react";
import { Layout } from "./layout";

export default function Header() {
  const collapseItems = [
    "About",
    "Experience",
    "Technologies",
    "Other Projects",
    "Resume",
    "Contact",
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
            <Navbar.Link key={index} href="#">
              {item}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content></Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Link color="inherit" href="#">
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
