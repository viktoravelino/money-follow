import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { ArrowDown, ArrowLeftRight, ArrowUp } from "lucide-react";

export const iconMapper: Record<string, React.ReactNode> = {
  income: <ArrowUp className="size-5" />,
  expenses: <ArrowDown className="size-5" />,
  balance: <ArrowLeftRight className="size-5" />,
};

const totalSignVariants = cva("p-1.5 rounded-full h-min w-min", {
  variants: {
    type: {
      income: "bg-green-500 dark:bg-green-600",
      expenses: "bg-red-500 dark:bg-red-500",
      balance: "bg-zinc-400 dark:bg-zinc-600",
    },
  },
  defaultVariants: {
    type: "income",
  },
});

type SummaryTotalSignProps = VariantProps<typeof totalSignVariants> & {
  className?: string;
};

export function SummaryTotalSign(props: SummaryTotalSignProps) {
  const { type, className } = props;

  return (
    <div className={cn(totalSignVariants({ type, className }))}>
      {iconMapper[type || "income"]}
    </div>
  );
}
