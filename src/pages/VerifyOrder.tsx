import { Link, useSearchParams } from "react-router-dom";
import { useVerifyOrderQuery } from "../redux/features/order/orderManagementApi";
import Skeleton from "./Skeleton";
import { BellAlertIcon } from "@heroicons/react/24/outline";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const VerifyOrder = () => {
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const orderData: OrderData | undefined = data?.data?.[0];
  console.log(orderData)

  if (isLoading) return <Skeleton />;

  return (
    <section className="bg-white my-10 lg:my-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
          Order Verification
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 xl:grid-cols-2">
          <div className="space-y-8">
            {/* Order Details */}
            <div className="rounded-lg border border-black p-4">
              <h2 className="mb-4 text-xl font-semibold">Order Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span>{orderData?.order_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span>
                    {orderData?.currency} {orderData?.amount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span
                    className={`rounded px-3 py-1 text-sm ${
                      orderData?.bank_status.toLowerCase() === "failed"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {orderData?.bank_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span>{new Date(orderData!.date_time).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="rounded-lg border border-black p-4">
              <h2 className="mb-4 text-xl font-semibold">
                Customer Information
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span>{orderData?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span>{orderData?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span>{orderData?.phone_no}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span>{orderData?.address || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span>{orderData?.city || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Payment Information */}
            <div className="rounded-lg border border-black p-4">
              <h2 className="mb-4 text-xl font-semibold">
                Payment Information
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Method:</span>
                  <span>{orderData?.method}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span>{orderData?.bank_trx_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Invoice No:</span>
                  <span>{orderData?.invoice_no}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SP Code:</span>
                  <span>{orderData?.sp_code}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SP Message:</span>
                  <span>{orderData?.sp_message}</span>
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="rounded-lg border border-black p-4">
              <h2 className="mb-4 text-xl font-semibold">
                Verification Status
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-yellow-600">
                  <BellAlertIcon className="h-5 w-5" />
                  <span>
                    {orderData?.is_verify ? "Verified" : "Not Verified"}
                  </span>
                </div>
                <Link
                  to="/dashboard/user/orders"
                  className="block w-full rounded-md bg-gray-900 px-4 py-2 text-center text-white transition-colors hover:bg-gray-800"
                >
                  View Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOrder;
