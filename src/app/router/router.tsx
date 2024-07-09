import { Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "@/pages/dashboard";
import { Transactions } from "@/pages/transactions";

import { Layout } from "@/components/layout";

export function Router() {
  return (
    <Routes>
      <Route key="index" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/categories" element={<h1>Categories</h1>} />
        <Route path="/accounts" element={<h1>Accounts</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
