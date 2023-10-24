import Title from 'antd/es/typography/Title';
import React from 'react';
import { useSelector } from 'react-redux';
import { tickersSelector } from '../../store/state/tickers/selectors';
import { DataType } from '../../types/DataType';
import { WatchListContainer } from './styles';
import { TickerCard } from '../TickerCard';

export const WatchList: React.FC = () => {
  const { currentTickers, watchingTickers } = useSelector(tickersSelector);

  return (
    <WatchListContainer>
      { watchingTickers.length === 0 && <Title>Please add tickers to watchlist</Title> }
      { watchingTickers
        .map((ticker: string) => currentTickers
        .map((t: DataType) => t.ticker === ticker && <TickerCard 
          ticker={t} 
          key={t.ticker} 
        />))}
    </WatchListContainer>
  );
};