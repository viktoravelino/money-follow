import { columns, Transaction } from "./table/columns";
import { DataTable } from "./table/data-table";

const data: Transaction[] = [
  {
    id: "1",
    status: "paid",
    date: "2023-05-01",
    description: "Payment to John Doe",
    category: "Groceries",
    account: "Checking",
    amount: 100,
  },
  {
    id: "2",
    status: "pending",
    date: "2023-05-02",
    description: "Payment to Jane Doe",
    category: "Rent",
    account: "Savings",
    amount: 500,
  },
  {
    id: "3",
    status: "paid",
    date: "2023-05-03",
    description: "Payment to John Doe",
    category: "Groceries",
    account: "Checking",
    amount: 100,
  },
];

export function Transactions() {
  return <DataTable columns={columns} data={data} />;
}
