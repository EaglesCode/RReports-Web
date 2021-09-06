import React from "react";
import DashboardLayout from "../../components/layout_dashboard";
import ListStarred from "../../components/dashboard/starred/list-starred";
import firebase from "../../libs/firebase";
const DashboardSolving = () => {
  return (
    <DashboardLayout>
      <ListStarred email={firebase.auth().currentUser.email} />
    </DashboardLayout>
  );
};

export default DashboardSolving;
