import { Tag } from "antd";
import { useGetTickers } from "../../hooks/useGetTickers";
import { DataType } from "../../types/DataType";

type Props = {
  data: DataType;
}

export const ChangePercentCell: React.FC<Props> = ({ data }) => {
  const { isPositive } = useGetTickers(data);

  return (
    <Tag color={ isPositive 
      ? 'green' 
      : 'volcano'
    }>
      { isPositive 
        ? `+${data.change_percent}%` 
        : `-${data.change_percent}%` 
      }
    </Tag>
  );
};
