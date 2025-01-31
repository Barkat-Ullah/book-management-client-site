import { Table, Button, Space, message } from "antd";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../redux/features/order/orderManagementApi";
import { MdCheckCircleOutline, MdDeleteOutline } from "react-icons/md";
import Skeleton from "../Skeleton";

const AdminManageOrders = () => {
  const { data, isLoading } = useGetOrdersQuery(undefined);
  const [updateStatus] = useUpdateOrderStatusMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  const orders = data?.data || [];
  console.log(orders);

  const handleStatusChange = async (order_id: string, newStatus: string) => {
    try {
      await updateStatus({ order_id, status: newStatus });
      message.success(`Order ${order_id} updated to ${newStatus}`);
    } catch (error) {
      console.log(error);
      message.error(`Failed to update order ${order_id}`);
    }
  };

  const handleDelete = async (order_id: string) => {
    try {
      await deleteOrder(order_id);
      message.success(`Order ${order_id} deleted successfully`);
    } catch (error) {
      console.log(error);
      message.error(`Failed to delete order ${order_id}`);
    }
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "User",
      dataIndex: "userId",
      key: "userId",
      render: (userId: any) => userId?.name || "No User",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            type="default"
            icon={<MdCheckCircleOutline />}
            onClick={() => handleStatusChange(record._id, "Completed")}
          >
            Mark as Completed
          </Button>
          <Button
            type="primary"
            icon={<MdDeleteOutline />}
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return isLoading ? (
    <Skeleton />
  ) : (
    <div>
      <Table
        columns={columns}
        dataSource={orders}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default AdminManageOrders;
