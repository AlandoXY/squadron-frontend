import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";
import {useEffect, useState} from "react";
import {initMocks} from "@/mocks";

require('../mocks')

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [isMock, setIsMock] = useState(false)

  useEffect(() => {
    initMocks().then(() => {
      setIsMock(true);
    })
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {
          isMock && <Component {...pageProps} />
        }
      </ThemeProvider>
    </>
  );
}
