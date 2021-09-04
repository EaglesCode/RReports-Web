import React, { useContext } from "react";
import City from "../../classes/firebaseCity";
import Report from "../../classes/firebaseReports";
import { useDocument } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import { RiAlertLine } from "react-icons/ri";
import { Center, CircularProgress, Flex, Spacer } from "@chakra-ui/react";
import { IdContext } from "../../pages/dashboard/reports/[id]";
import RReportPage from "./rreport-page";
const RreportPage = (props: { location: City }) => {
  const location = props.location;
  const id = useContext(IdContext);
  const fiReport = firebase.firestore().collection("reports").doc(id);
  const [report, loading, error] = useDocument(fiReport);
  const getReport = () => {
    try {
      ///@ts-ignore
      return new Report(report.data());
    } catch {
      return null;
    }
  };
  return (
    <div>
      {error && (
        <Flex>
          <Spacer />
          <RiAlertLine color="red" size="20" />
          <strong>N-am putut gasi Sesizarea</strong>
          <Spacer />
        </Flex>
      )}

      {loading && (
        <Center>
          <CircularProgress isIndeterminate color="red" />
        </Center>
      )}
      {report && ( ///@ts-ignore
        <RReportPage location={location} report={getReport()} />
      )}
    </div>
  );
};

export default RreportPage;
