import {
  Center,
  CircularProgress,
  Flex,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import firebase from "firebase";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { RiAlertLine } from "react-icons/ri";
import City from "../../../classes/firebaseCity";
import Report from "../../../classes/firebaseReports";
import ReportItem from "../report-item";

const StarredList = (props: { location: City }) => {
  const location = props.location;
  const fiReports = firebase
    .firestore()
    .collection("reports")
    .where("city", "==", location.city)
    .where("starred", "==", true)
    .where("county", "==", location.county)
    .where("country", "==", location.country);
  interface RReportz {
    report: Report;
    id: string;
  }
  const [reports, loading, error] = useCollection(fiReports);
  const RReports = () => {
    let list = [];

    reports.forEach((report) => {
      const rID = report.id;
      ///@ts-ignore
      const rreport = new Report(report.data());
      list.push({ report: rreport, id: rID });
    });

    return list;
  };
  return (
    <div>
      {error && (
        <Flex>
          <Spacer />
          <RiAlertLine color="red" size="20" />
          <strong>N-am putut incarca Sesizarile</strong>
          <Spacer />
        </Flex>
      )}
      {loading && (
        <Center>
          <CircularProgress isIndeterminate color="red" />
        </Center>
      )}
      {reports && (
        <List>
          {RReports().map((report: RReportz, i) => (
            <ListItem key={i}>
              <ReportItem report={report.report} id={report.id} />
            </ListItem>
          ))}
          {reports.docs.length == 0 ? (
            <Center>Nimic momentan pe aici</Center>
          ) : null}
        </List>
      )}
    </div>
  );
};

export default StarredList;
