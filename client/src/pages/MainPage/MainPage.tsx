import React from 'react';
import { Tickers } from '../../components/Tickers';
import { WatchList } from '../../components/WatchList';
import { Main } from './styles';

export const MainPage: React.FC = () => {
  return (
    <Main>
      <WatchList />
      <Tickers />
    </Main>
  );
};
