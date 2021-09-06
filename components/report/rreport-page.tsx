import { Flex, Spacer, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { RiAlertLine } from "react-icons/ri";
import City from "../../classes/firebaseCity";
import Report from "../../classes/firebaseReports";

import DetailsCard from "./cards/details-card";
import ImagesCard from "./cards/images-card";
import LocationCard from "./cards/location-card";
import OptionsCard from "./cards/options-card";

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
      <>
        <Wrap spacing="3">
          <WrapItem>
            <DetailsCard
              status={report.status}
              category={report.category}
              description={report.description}
            />
          </WrapItem>
          <WrapItem>
            <LocationCard
              street={report.street}
              city={report.city}
              county={report.county}
              country={report.country}
              latLng={report.location}
            />
          </WrapItem>
        </Wrap>
        <OptionsCard report={report} />
        <ImagesCard images={report.images} />
      </>
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
