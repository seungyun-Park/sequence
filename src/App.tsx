import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './Router';
import { GlobalStyles } from '@mui/material';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles styles={{
        body: {
          backgroundColor: '#151515',
          color: '#ffffff'
        },
      }} />
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;