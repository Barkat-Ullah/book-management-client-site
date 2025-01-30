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
import { Link } from "react-router-dom";
import { TUser } from "../../types/global";
import {
  useChangeUserStatusMutation,
  useGetAllUserQuery,
} from "../../redux/features/Auth/authApi";

export type TTableData = Pick<TUser, "name" | "email"> & {
  status: string;
};

const AdminManageUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<{
    _id: string;
    status: string;
  } | null>(null);

  const { data: AdminManageUsers, isFetching } = useGetAllUserQuery(undefined);

  const [changeUserStatus, { isLoading: isStatusChanging }] =
    useChangeUserStatusMutation();

  const tableData = AdminManageUsers?.data?.map(
    ({ _id, name, email, status }) => ({
      key: _id,
      email,
      name,
      status,
    })
  );

  const handleChangeStatus = async () => {
    if (selectedStudent) {
      try {
        const newStatus =
          selectedStudent.status === "de-active" ? "active" : "de-active"; // Toggle between active and de-active
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
      key: "x",
      render: (record) => (
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
