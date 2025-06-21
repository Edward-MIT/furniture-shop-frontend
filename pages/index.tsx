import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";


const Home:NextPage = () => {
  return (
      <Container>
        <Stack flexBasis={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Properties</Box>
          <Box>Agents</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
  );
}

export default withLayoutMain(Home)