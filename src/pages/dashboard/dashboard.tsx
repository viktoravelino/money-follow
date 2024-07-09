import { SummaryTotalCard } from "@/components/summary-total-card";

const totals: Record<
  string,
  {
    name: string;
    amount: number;
    category: "income" | "expenses" | "balance";
  }
> = {
  income: {
    name: "Income",
    amount: 14327.92,
    category: "income",
  },
  expenses: {
    name: "Expenses",
    amount: 100,
    category: "expenses",
  },
  balance: {
    name: "Monthly Balance",
    amount: 14427,
    category: "balance",
  },
};

export function Dashboard() {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-[--layout-gap]
        [&>:last-child]:col-span-2
        md:grid-cols-3
        md:[&>:last-child]:col-span-1
      "
    >
      {Object.keys(totals).map((k) => (
        <SummaryTotalCard
          key={k}
          type={k as "income" | "expenses" | "balance"}
          {...totals[k]}
        />
      ))}
    </div>
  );
}
