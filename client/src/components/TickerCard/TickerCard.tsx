import { Card, Statistic, Tag } from "antd";
import { useGetTickers } from "../../hooks/useGetTickers";
import { DataType } from "../../types/DataType";
import { TickerTitle } from "./styles";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { defaultTheme } from '../../theme/theme';

type Props = {
  ticker: DataType;
}

export const TickerCard: React.FC<Props> = ({ ticker }) => {
  const { isPositive } = useGetTickers(ticker);

  const title = (
    <>
      <TickerTitle>{ ticker.ticker }</TickerTitle>
      <Tag color={isPositive 
        ? 'green' 
        : 'volcano'
      }>
          { ticker.price }$
      </Tag>
    </>
  );

  const color = isPositive 
    ? defaultTheme.palette.common.green 
    : defaultTheme.palette.common.red;

  return (
    <Card style={{ margin: '0 10px' }}>
      <Statistic
        title={title}
        value={ticker.change_percent}
        precision={2}
        valueStyle={{color}}
        prefix={isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        suffix="%"
      />
    </Card>
  );
};
