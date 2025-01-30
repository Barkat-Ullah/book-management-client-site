import {
  Button,
  Table,
  TableColumnsType,
  TableProps,
  Space,
  Popconfirm,
  message,
  Modal,
  Input,
  Form,
  Pagination,
  Select,
} from "antd";
import { useState } from "react";
import { TQueryParam } from "../../types/global";
import {
  useDeleteProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/product/productManagementApi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const AdminManageBook = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const { data: productData, isFetching } = useGetProductQuery([
    { name: "searchTerm", value: searchText },
    { name: "page", value: page },
    ...params,
  ]);

  const metaData = productData?.data.meta;
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [form] = Form.useForm();

  // ✅ Handle Delete Product
  const handleDelete = async (productId: string) => {
    try {
      await deleteProduct(productId);
      message.success("Product deleted successfully!");
    } catch (error) {
      message.error("Failed to delete product.");
      console.error("Delete Error:", error);
    }
  };

  // ✅ Open Modal for Update
  const showUpdateModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    form.setFieldsValue({
      title: product.title,
      price: product.price,
      category: product.category,
      quantity: product.quantity,
      description: product.description,
      image: product.image,
    });
  };

  // ✅ Handle Update Submission
  const handleUpdate = async () => {
    try {
      const updatedValues = await form.validateFields();

      await updateProduct({ id: selectedProduct.key, data: updatedValues });

      message.success("Product updated successfully!");
      setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to update product.");
      console.error("Update Error:", error);
    }
  };

  // ✅ Format Table Data
  const tableData = productData?.data?.result?.map(
    ({ _id, title, price, category, quantity, image }) => ({
      key: _id,
      title,
      price,
      category,
      quantity,
      image,
    })
  );

  // ✅ Define Table Columns
  const columns: TableColumnsType<any> = [
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: (image: string) => (
        <img
          src={image}
          alt="Product"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      ),
    },
    { title: "Title", key: "title", dataIndex: "title" },
    { title: "Price", key: "price", dataIndex: "price" },
    { title: "Category", key: "category", dataIndex: "category" },
    { title: "Quantity", key: "quantity", dataIndex: "quantity" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
            onClick={() => showUpdateModal(record)}
            type="primary"
            icon={<FiEdit />}
          />
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<FiTrash2 />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const onChange: TableProps<any>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  const handleSearch = (value: string) => {
    console.log(value);
    setSearchText(value);
    setPage(1);
  };

  return (
    <>
      {/* ✅ Search Bar */}
      <Input.Search
        placeholder="Search by Title"
        enterButton
        onSearch={handleSearch}
      />

      {/* ✅ Table */}
      <Table
        scroll={{ x: 800 }}
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        pagination={false}
        onChange={onChange}
      />
      <Pagination
        style={{ marginTop: "10px" }}
        align="end"
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />

      {/* ✅ Update Product Modal */}
      <Modal
        title="Update Product"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleUpdate}
        okText="Update"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Title is required!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Price is required!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Category is required!" }]}
          >
            <Select placeholder="Select a category">
              <Select.Option value="Fiction">Fiction</Select.Option>
              <Select.Option value="Science">Science</Select.Option>
              <Select.Option value="Poetry">Poetry</Select.Option>
              <Select.Option value="Religious">Religious</Select.Option>
            </Select>
          </Form.Item>
       

          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: "Quantity is required!" }]}
          >
            <Input type="number" />
          </Form.Item>
          {/* ✅ New Fields for Image and Description */}
          <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true, message: "Image URL is required!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Description is required!" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AdminManageBook;
