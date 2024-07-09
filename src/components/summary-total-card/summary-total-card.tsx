import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SummaryTotalSign } from "./summary-total-sign";

type SummaryTotalCardProps = {
  name: string;
  amount: number;
  type: "income" | "expenses" | "balance";
};

export function SummaryTotalCard(props: SummaryTotalCardProps) {
  const { type, amount, name } = props;

  return (
    <Card className="flex items-center justify-between p-3">
      <div className="space-y-2">
        <CardTitle className="whitespace-nowrap text-muted-foreground text-xs leading-none font-medium">
          {name}:
        </CardTitle>
        <CardDescription className="text-foreground text-md font-bold leading-none">
          ${amount.toLocaleString("en-US")}
        </CardDescription>
      </div>

      <SummaryTotalSign type={type} />
    </Card>
  );
}
