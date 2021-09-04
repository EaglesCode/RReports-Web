import React from "react";
import DashboardLayout from "../../components/layout_dashboard";
import ListReports from "../../components/dashboard/list-reports";
import firebase from "../../libs/firebase";
const DashboardSolving = () => {
  return (
    <DashboardLayout>
      {location && (
        <ListReports
          reportCategory={1}
          email={firebase.auth().currentUser.email}
        />
      )}
    </DashboardLayout>
  );
};

export default DashboardSolving;
