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
import City from "../../classes/firebaseCity";
import Report from "../../classes/firebaseReports";
import ReportItem from "./report-item";

const ReportsList = (props: { location: City; status: Number }) => {
  const location = props.location;
  const fiReports = firebase
    .firestore()
    .collection("reports")
    .where("city", "==", location.city)
    .where("status", "==", props.status)
    .where("county", "==", location.county)
    .where("country", "==", location.country);
  const [reports, loading, error] = useCollection(fiReports);
  const RReports = () => {
    let list = [];

    reports.forEach((report) =>
      ///@ts-ignore

      list.push(new Report({ ...report.data(), id: report.id }))
    );

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
          {RReports().map((report: Report, i) => (
            <ListItem key={i}>
              <ReportItem report={report} />
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

export default ReportsList;
