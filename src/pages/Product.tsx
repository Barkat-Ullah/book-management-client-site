import { Link } from "react-router";
import { useGetProductQuery } from "../redux/features/product/productManagementApi";
import moment from "moment"; // Install this using `npm install moment` if not already installed
import Skeleton from "./Skeleton";
import { useState } from "react";
import { TQueryParam } from "../types/global";
import { Input, Pagination } from "antd";

const Product = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const {
    data: productData,
    isFetching,
    isLoading,
  } = useGetProductQuery([
    { name: "searchTerm", value: searchText },
    { name: "page", value: page },
    ...params,
  ]);

  const metaData = productData?.data.meta;
  const onChange = (
    _pagination: any,
    filters: any,
    _sorter: any,
    extra: any
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item: string) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item: string) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };
  const handleSearch = (value: string) => {
    console.log(value);
    setSearchText(value);
    setPage(1);
    setParams([]);
  };

  return (
    <>
      <div className="lg:mt-20 py-2 px-2 max-w-7xl gap-2 mx-auto flex flex-col lg:flex-row">
        <Input.Search
          placeholder="Search by Title"
          enterButton
          onSearch={handleSearch}
        />
        <select
          onChange={(e) =>
            setParams([{ name: "category", value: e.target.value }])
          }
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Poetry">Poetry</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2 mt-2 lg:mt-8  mb-4">
        {productData?.data?.result?.map((item) => (
          <div
            key={item._id}
            className="overflow-hidden max-w-sm lg:w-full mx-auto rounded bg-white text-slate-500 shadow-md shadow-slate-200"
          >
            {/* Product Image */}
            <figure>
              <img
                src={item.image || "https://picsum.photos/id/1081/800/600"} // Default image if not provided
                alt={item.title || "Product Image"}
                className="aspect-video w-full"
              />
            </figure>

            <div className="p-6">
              {/* Header */}
              <header className="mb-4 flex gap-4">
                {item.authorImage ? (
                  <a
                    href="#"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src={item.authorImage}
                      alt={item.author || "Unknown Author"}
                      title={item.author || "Unknown Author"}
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                    />
                  </a>
                ) : (
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    <span className="text-lg font-semibold">
                      {item.author?.[0] || "U"}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-medium text-slate-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    By {item.author?.name || "Unknown"},{" "}
                    {moment(item.createdAt).format("MMMM Do, YYYY") || "N/A"}
                  </p>
                </div>
              </header>
              <p>{item.description || "No description available."}</p>
            </div>

            <div className="flex justify-end gap-2 p-2 pt-0">
              <Link to={`/products/${item._id}`}>
                <button className="inline-flex cursor-pointer h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-black transition duration-300 bg-slate-400 hover:bg-black hover:text-white focus:bg-black focus:text-white focus-visible:outline-none">
                  <span>View more </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        style={{ margin: "10px" }}
        align="end"
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default Product;
