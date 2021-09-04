import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { RiAlertLine } from "react-icons/ri";
import City from "../../classes/firebaseCity";
import Report from "../../classes/firebaseReports";

const RReportPage = (props: { report: Report; location: City }) => {
  const report = props.report;
  const location = props.location;
  if (
    report != null &&
    report.city === location.city &&
    report.country === location.country &&
    report.county === location.county
  )
    return (
      <div>
        <p>Categorie: {report.category}</p>
        <p>Descriere: {report.description}</p>
      </div>
    );
  else
    return (
      <Flex>
        <Spacer />
        <RiAlertLine color="red" size="20" />
        <strong>N-am putut gasi Sesizarea</strong>
        <Spacer />
      </Flex>
    );
};

export default RReportPage;
