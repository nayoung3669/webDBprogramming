import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./lib/styles/GlobalStyle";
import Router from "./shared/Router";
import theme from "./lib/styles/theme";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

//suspense, error boundary 로 로딩, 에러 통일하기
