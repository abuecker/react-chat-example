import React from 'react';
import styled from 'styled-components/macro';
import GlobalStyle from './GlobalStyle';
import DualChatView from './components/DualChatView';

const Canvas = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: black;
  overflow: auto;
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />

    <Canvas>
      <DualChatView />
    </Canvas>
  </React.Fragment>
);

export default App;
