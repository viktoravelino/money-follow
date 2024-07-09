import { Layout } from "@/components/layout";
import { Transactions } from "@/pages/transactions/transactions";
import { Navigate, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route key="index" element={<Layout />}>
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/categories" element={<h1>Categories</h1>} />
        <Route path="/accounts" element={<h1>Accounts</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
