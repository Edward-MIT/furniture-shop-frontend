
import type { AppProps } from "next/app";
import{ThemeProvider, createTheme} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import { useState } from "react";
import { light } from "@/public/scss/MaterialTheme";
import "../public/scss/app.scss"

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
