import React from "react";
import DashboardLayout from "../../components/layout_dashboard";

import ListReports from "../../components/dashboard/list_reports";
const DashboardIndex = () => {
  return (
    <DashboardLayout>
      <ListReports />
    </DashboardLayout>
  );
};

export default DashboardIndex;
