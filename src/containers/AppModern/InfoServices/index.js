import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import Pagination from "common/components/Pagination";
import { filterServices } from "common/data/AppModern";
import { theme } from "common/theme/appModern";
import Link from "next/link";
import { useRouter } from "next/router";
import { element } from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";
import { ThemeProvider } from "styled-components";
import { SectionHeader } from "../appModern.style";
import Breadcrumb from "./Breadcrumb";
import SectionWrapperServices, {
  ContainerServices,
  GridServices,
} from "./GridServices";
import ServiceCategory from "./ServiceCategory";
import ServicesList from "./ServicesList";
import ServicesOther from "./ServicesOther";
import { ic_close } from "react-icons-kit/md/ic_close";
import Icon from "react-icons-kit";
import Container from "common/components/UI/Container";

const InfoServices = (props) => {
  const { serviceList, total, dataNew, choice, serviceRealted, current_cat } =
    props;
  const router = useRouter();
  const query = router.query;

  const page = total.pagination.total / 40;
  let start = -1;
  let end = 40;
  if (query.page) {
    start = (query.page - 1) * end - 1;
    end = query.page * end;
  }

  return (
    <SectionWrapperServices>
      <Container>
        <SectionHeader>
          <h1 className="titleSlogan">
            {current_cat
              ? `Services For The ${current_cat.name_cat} Category`
              : `BPO Services Marketplace`}
          </h1>
          <p>For trusted agency and freelancer</p>
        </SectionHeader>
        <ContainerServices>
          <Breadcrumb current_cat={current_cat} />
          <ServiceCategory dataNew={dataNew} choice={choice} />
          {serviceList.length === 0 && (
            <p className="notify">
              <Icon icon={ic_close} />
              The service you were looking for was not found, see more related
              services below!
            </p>
          )}
        </ContainerServices>

        <GridServices>
          {serviceList.map(
            (item, index) =>
              index > start &&
              index < end && (
                <ServicesList key={index} serviceList={item} total={total} />
              )
          )}
          {serviceList.length > 40 && <Pagination page={page} />}
        </GridServices>
        {serviceRealted && <ServicesOther serviceRealted={serviceRealted} />}
      </Container>
    </SectionWrapperServices>
  );
};
export default InfoServices;
