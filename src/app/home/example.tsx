import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Example = () => {
  return (
    <Box
      sx={{
        "& > pre": {
          background: "none !important",
          margin: 0,
          padding: "0 !important",
        },
      }}
      padding={2}
    >
      <SyntaxHighlighter language="typescript" style={{ ...a11yDark }}>
        {example.trim()}
      </SyntaxHighlighter>
    </Box>
  );
};

const example = `
`;
