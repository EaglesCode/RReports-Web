import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import City from "../../classes/firebaseCity";
import firebase from "../../libs/firebase";
import Report from "../../classes/firebaseReports";
import { List, ListItem } from "@chakra-ui/react";

const ListReports = () => {
  const fiReports = firebase.firestore().collection("reports");
  const [reports, loading, error] = useCollection(fiReports);
  const RReports = () => {
    let list = [];

    reports.forEach((report) =>
      ///@ts-ignore
      list.push(new Report(report.data()))
    );
    console.log(list);
    return list;
  };

  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {reports && (
          <List>
            {RReports().map((report: Report, i) => (
              <ListItem borderColor="blackAlpha.200" borderBottom="2px" key={i}>
                {report.category} by <b>{report.email}</b>
              </ListItem>
            ))}
          </List>
        )}
      </p>
    </div>
  );
};

export default ListReports;
