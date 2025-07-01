import CommunityHighlights from "@/libs/components/homepage/CommunityHighlights";
import Events from "@/libs/components/homepage/Ewents";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TopProperties from "@/libs/components/homepage/TopProperties";

import TrendProperties from "@/libs/components/homepage/TrendProperties";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
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
        <Stack className="container"><TopProperties/></Stack>
      </Stack>

      <Stack>
        <Stack className="container"><TopAgents/></Stack>
      </Stack>

      <Stack>
        <Stack className="container"><Events/></Stack>
      </Stack>

      <Stack>
        <Stack className="container"><CommunityHighlights/></Stack>
      </Stack>

   </Stack>
  );
}

export default withLayoutMain(Home)