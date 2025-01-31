import { Table, Divider} from "antd";
import { TableColumnsType } from "antd";
import { useCurrentUser } from "../../redux/features/Auth/authSlice";
import { useGetUserOrdersQuery } from "../../redux/features/order/orderManagementApi";
import { useAppSelector } from "../../redux/hooks";

export type TTableData = {
  key: string;
  transactionId: string;
  productName: string;
  totalPrice: number;
};

const UserOrder = () => {
  const user = useAppSelector(useCurrentUser);
  const userId = user?.id;

  const { data: orders, isFetching } = useGetUserOrdersQuery(userId);
  console.log(orders)


  const tableData: TTableData[] =
    orders?.data?.flatMap((order) =>
      order.items.map((item, index) => ({
        key: `${order._id}-${index}`,
        transactionId: order.transaction?.id || "N/A",
        totalPrice: order.totalPrice,
      }))
    ) || [];

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Transaction ID",
      key: "transactionId",
      dataIndex: "transactionId",
    },
    {
      title: "Total Price (BDT)",
      key: "totalPrice",
      dataIndex: "totalPrice",
    },
    
  ];

  return (
    <>
      <Divider>List of Product Orders</Divider>
      <Table<TTableData>
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        size="middle"
      />
    </>
  );
};

export default UserOrder;
