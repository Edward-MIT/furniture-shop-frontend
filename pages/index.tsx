import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { TrendingDown } from "lucide-react";
import { NextPage } from "next";


const Home:NextPage = () => {
  return (
      <Stack  className="home-page">

      <Stack>
        <Stack className="container"><TrendProperties/></Stack>
      </Stack>

      <Stack>
        <Stack className="container"><PopularProperties/></Stack>
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