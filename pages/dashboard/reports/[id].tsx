import React, { createContext } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "../../../components/layout_dashboard";
import RReport from "../../../components/report";
import firebase from "../../../libs/firebase";

export const IdContext = createContext<string>(null);
const ReportByIdPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const idState = id.toString();
  return (
    <DashboardLayout>
      <IdContext.Provider value={idState}>
        <RReport email={firebase.auth().currentUser.email} />
      </IdContext.Provider>
    </DashboardLayout>
  );
};

export default ReportByIdPage;
