import { useEffect, useState } from "react";
import "./App.css";
import PocketbaseService from "./lib/pocketbase";
import styled from "styled-components";

export default function App() {
  const [pbHealth, setPbHealth] = useState(false);

  useEffect(() => {
    (async () => {
      setPbHealth(await PocketbaseService.checkHealth());
    })();
  }, []);

  return (
    <AppContainer>
      <h1>Pocketbase + React + Vite + Node.js</h1>
      <div>
        <p>Pocketbase is {pbHealth ? "healthy" : "unhealthy"}</p>
      </div>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
