import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import City from "../../classes/firebaseCity";
import firebase from "../../libs/firebase";
import Report from "../../classes/firebaseReports";
import { Center, CircularProgress, Flex, Spacer } from "@chakra-ui/react";
import { RiAlertLine } from "react-icons/ri";
import RreportPage from "./rreport";
const RReport = (props: { email: string }) => {
  const fiCity = firebase
    .firestore()
    .collection("cities")
    .where("mayorEmail", "==", props.email);
  const [cities, loading, error] = useCollection(fiCity);
  const rCity = () => {
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
          <strong>N-am putut incarca Sesizarea</strong>
          <Spacer />
        </Flex>
      )}
      {loading && (
        <Center>
          <CircularProgress isIndeterminate color="red" />
        </Center>
      )}
      {cities && <RreportPage location={rCity()} />}
    </div>
  );
};

export default RReport;
