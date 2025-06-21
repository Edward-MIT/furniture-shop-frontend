import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";


const Home:NextPage = () => {
  return (
      <Stack>
        <Stack flexBasis={"column"}>
          <Stack className="container">Popular Properties</Stack>
          <Stack className="container">Top Properties</Stack>
          <Stack className="container">Agents</Stack>
          <Stack className="container">Events</Stack>
        </Stack>
      </Stack>
  );
}

export default withLayoutMain(Home)