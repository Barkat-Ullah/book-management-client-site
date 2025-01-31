/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Button,
  Modal,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  message,
} from "antd";
import { TUser } from "../../types/global";
import {
  useChangeUserStatusMutation,
  useGetAllUserQuery,
} from "../../redux/features/Auth/authApi";

// Define Table Data Type
export type TTableData = Pick<TUser, "name" | "email" | "status"> & {
  key: string; // Add key as required by Ant Design Table
};

// Define the type for selected user
type TSelectedUser = {
  _id: string;
  name: string;
  status: string;
} | null;

const AdminManageUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<TSelectedUser>(null);

  const { data: AdminManageUsers, isFetching } = useGetAllUserQuery(undefined);
  const [changeUserStatus, { isLoading: isStatusChanging }] =
    useChangeUserStatusMutation();

  const tableData: TTableData[] =
    AdminManageUsers?.data?.map((user: TUser) => ({
      key: user._id, 
      email: user.email,
      name: user.name,
      status: user.status,
    })) || [];


  // Handle status change
  const handleChangeStatus = async () => {
    if (selectedStudent) {
      try {
        const newStatus =
          selectedStudent.status === "de-active" ? "active" : "de-active";
        await changeUserStatus({
          id: selectedStudent._id,
          status: newStatus,
        }).unwrap();

        message.success(
          `${selectedStudent?.name} has been successfully ${
            newStatus === "active" ? "activated" : "de-activated"
          }`
        );
        setIsModalOpen(false);
      } catch (error) {
        message.error("Failed to change user status. Please try again.");
      }
    }
  };

  // Define Table Columns
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (record: TTableData) => (
        <Space>
          <Button
            onClick={() => {
              setSelectedStudent({
                _id: record.key,
                name: record.name,
                status: record.status,
              });
              setIsModalOpen(true);
            }}
          >
            {record.status === "de-active" ? "Activate" : "Deactivate"}
          </Button>
        </Space>
      ),
    },
  ];

  // Table onChange function
  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    _filters,
    _sorter,
    extra
  ) => {
    console.log(extra);
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />

      <Modal
        title={
          selectedStudent?.status === "de-active"
            ? "Activate User"
            : "Deactivate User"
        }
        open={isModalOpen}
        onOk={handleChangeStatus}
        confirmLoading={isStatusChanging}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>
          Are you sure you want to{" "}
          <b>
            {selectedStudent?.status === "de-active"
              ? "activate"
              : "deactivate"}
          </b>{" "}
          <b>{selectedStudent?.name}</b>?
        </p>
      </Modal>
    </>
  );
};

export default AdminManageUsers;
