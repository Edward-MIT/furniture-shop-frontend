import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";


const Home:NextPage = () => {
  return (
      <Stack  className="home-page">

      <Stack>
        <Stack className="container">Trend Properties</Stack>
      </Stack>

      <Stack>
        <Stack className="container">Popular Properties</Stack>
      </Stack>

      <Stack>
        <Stack className="container">Advertisement</Stack>
      </Stack>

      <Stack>
        <Stack className="container">Top Properties</Stack>
      </Stack>

      <Stack>
        <Stack className="container">Top Agents</Stack>
      </Stack>

      <Stack>
        <Stack className="container">Upcoming Events</Stack>
      </Stack>

      <Stack>
        <Stack className="container">Community Highlights</Stack>
      </Stack>

   </Stack>
  );
}

export default withLayoutMain(Home)