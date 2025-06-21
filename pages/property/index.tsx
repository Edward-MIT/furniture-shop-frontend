import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <>
    <Container>Property list</Container>
    </>
  )
}

export default withLayoutBasic(PropertyList);