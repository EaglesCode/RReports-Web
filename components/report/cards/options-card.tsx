import { Button, HStack } from "@chakra-ui/react";
import firebase from "firebase";
import React, { useContext } from "react";
import { FiCheckCircle, FiFile, FiStar, FiTrash2 } from "react-icons/fi";
import Report from "../../../classes/firebaseReports";
import { IdContext } from "../../../pages/dashboard/reports/[id]";

const OptionsCard = (props: { report: Report }) => {
  const starred = props.report.starred ? true : false;
  const id = useContext(IdContext);
  const starReport = () => {
    firebase
      .firestore()
      .collection("reports")
      .doc(id)
      .set({ ...props.report, starred: !starred });
  };
  const trashReport = () => {
    firebase
      .firestore()
      .collection("reports")
      .doc(id)
      .set({ ...props.report, status: 3 });
  };
  const solveReport = () => {
    firebase
      .firestore()
      .collection("reports")
      .doc(id)
      .set({ ...props.report, status: 2 });
  };
  const workinReport = () => {
    firebase
      .firestore()
      .collection("reports")
      .doc(id)
      .set({ ...props.report, status: 1 });
  };
  return (
    <HStack>
      <Button colorScheme="gray" onClick={() => starReport()}>
        <FiStar fill={starred ? "yellow" : "transparent"} />
      </Button>
      <Button
        colorScheme="red"
        disabled={props.report.status == 3}
        onClick={() => trashReport()}
      >
        <FiTrash2 />
      </Button>
      <Button
        colorScheme="green"
        disabled={props.report.status == 2}
        onClick={() => solveReport()}
      >
        <FiCheckCircle />
      </Button>
      <Button
        colorScheme="blue"
        disabled={props.report.status == 1}
        onClick={() => workinReport()}
      >
        <FiFile />
      </Button>
    </HStack>
  );
};

export default OptionsCard;
