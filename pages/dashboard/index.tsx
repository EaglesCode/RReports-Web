import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout_dashboard";

import ListReports from "../../components/dashboard/list-reports";
import firebase from "../../libs/firebase";
const DashboardIndex = () => {
  return (
    <DashboardLayout>
      {location && <ListReports email={firebase.auth().currentUser.email} />}
    </DashboardLayout>
  );
};

export default DashboardIndex;
