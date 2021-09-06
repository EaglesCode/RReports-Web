import React from "react";
import DashboardLayout from "../../components/layout_dashboard";

import ListReports from "../../components/dashboard/list-reports";
import firebase from "../../libs/firebase";
const DashboardIndex = () => {
  return (
    <DashboardLayout>
      <ListReports
        reportCategory={0}
        email={firebase.auth().currentUser.email}
      />
    </DashboardLayout>
  );
};

export default DashboardIndex;
