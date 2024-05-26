import { ReactElement, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../components/admin/TableHOC";
import { Link } from "react-router-dom";
type Datatype = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};
const column: Column<Datatype>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Orders = () => {
  const [rows] = useState<Datatype[]>([
    {
      _id: "ahfdksdfj",
      amount: 4561,
      quantity: 12,
      discount: 52,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/asdajkalsd`}>View</Link>,
    },
  ]);
  const table = TableHOC<Datatype>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {table}
    </div>
  );
};

export default Orders;
