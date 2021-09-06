import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Report from "../../classes/firebaseReports";
import NextLink from "next/link";
import { Spacer, Text, Divider, Flex, Button } from "@chakra-ui/react";
const ReportItem = (props: { report: Report; id: string }) => {
  const report = props.report;
  dayjs.extend(relativeTime);
  const date = report.upload_date.toDate();

  const fDate =
    dayjs(date).format("DD/MM/YYYY") == dayjs().format("DD/MM/YYYY")
      ? dayjs(date).format("HH:mm")
      : dayjs(date).format("D MMM");
  return (
    <div>
      <NextLink href={`/dashboard/reports/${props.id}`}>
        <Button
          width="full"
          bgColor="transparent"
          p="1"
          h="min-content"
          borderRadius="0"
        >
          <Flex w="full">
            <Text fontWeight="black" maxW="14vw" isTruncated mr="8">
              {report.email}
            </Text>
            <Text fontWeight="bold" mr="1">
              {report.category}
            </Text>
            <Text maxW="45vw" color="#808080" isTruncated>
              {`- ${report.description}`}
            </Text>
            <Spacer />
            <Text noOfLines={1} isTruncated={false}>
              {fDate}
            </Text>
          </Flex>
        </Button>
      </NextLink>
      <Divider color="#E5E5E5" />
    </div>
  );
};

export default ReportItem;
