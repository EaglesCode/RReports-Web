import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import City from "../../classes/firebaseCity";
import firebase from "../../libs/firebase";
import Report from "../../classes/firebaseReports";
import {
  Center,
  CircularProgress,
  Flex,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { RiAlertLine } from "react-icons/ri";
import ReportItem from "./report-item";
import ReportsList from "./reports-list";
const ListReports = (props: { email: string }) => {
  const fiCity = firebase
    .firestore()
    .collection("cities")
    .where("mayorEmail", "==", props.email);

  const [cities, loading, error] = useCollection(fiCity);
  const RReports = () => {
    let list: Array<City> = [];

    cities.forEach((report) =>
      ///@ts-ignore
      list.push(new Report(report.data()))
    );

    return list[0];
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
      {cities && <ReportsList location={RReports()} />}
    </div>
  );
};

export default ListReports;
