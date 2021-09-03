import { Divider, Flex } from "@chakra-ui/layout";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Report from "../../classes/firebaseReports";
import { Spacer, Text } from "@chakra-ui/react";
const ReportItem = (props: { report: Report }) => {
  const report = props.report;
  dayjs.extend(relativeTime);
  const date = report.upload_date.toDate();
  console.log(dayjs(date).fromNow());

  const fDate =
    dayjs(date).format("DD/MM/YYYY") == dayjs().format("DD/MM/YYYY")
      ? dayjs(date).format("HH:mm")
      : dayjs(date).format("D MMM");
  return (
    <div>
      <Flex>
        <Text fontWeight="black" maxW="14vw" isTruncated mr="10">
          {report.email}
        </Text>

        <Text fontWeight="bold" mr="1">
          {report.category}
        </Text>
        <Text w="50vw" color="#808080" isTruncated>
          {`- ${report.description}`}
        </Text>
        <Spacer />
        <Text>{fDate}</Text>
      </Flex>
      <Divider color="#E5E5E5" />
    </div>
  );
};

export default ReportItem;
