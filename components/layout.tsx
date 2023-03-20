import { Box } from "./box";
import { Content } from "./content";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <Box
    css={{
      bg: `#292929`,
    }}
  >
    {children}
    <Content />
  </Box>
);
