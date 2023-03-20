import { Box } from "./box";

interface LayoutProps {
  children: React.ReactNode;
}

export const Screen = ({ children }: LayoutProps) => (
  <Box
    css={{
      minHeight: "calc(100vh - 76px)",
      d: "flex",
      fd: "column",
      jc: "center",
      m: "auto",
      ai: "center",
    }}
  >
    {children}
  </Box>
);
