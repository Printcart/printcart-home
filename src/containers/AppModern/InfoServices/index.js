import Box from "common/components/Box";
import Pagination from "common/components/Pagination";
import Container from "common/components/UI/Container";
import { useRouter } from "next/router";
import Icon from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import { SectionHeader } from "../appModern.style";
import FAQfeature from "../FAQ";
import Reviews from "../Review";
import TitlePath from "../ServiceDetail/TitlePath";
import StepWork from "../StepWork";
import UserObject from "../UserObject";
import Breadcrumb from "./Breadcrumb";
import SectionWrapperServices, {
  ContainerServices,
  GridServices,
  SectionStep
} from "./GridServices";
import ServiceCategory from "./ServiceCategory";
import ServicesList from "./ServicesList";
import ServicesOther from "./ServicesOther";

const InfoServices = (props) => {
  const {
    serviceList,
    total,
    dataNew,
    choice,
    serviceRealted,
    currentCat,
    dataFAQ
  } = props;
  const router = useRouter();
  const query = router.query;
  const title =
    currentCat?.name_sub ?? currentCat?.name_subcat ?? currentCat?.name_cat;

  const data = {
    name: "Service",
    alias: "services"
  };
  const page = total.pagination.total / 18;
  let start = -1;
  let end = 18;
  if (query.page) {
    start = (query.page - 1) * end - 1;
    end = query.page * end;
  }

  return (
    <SectionWrapperServices>
      <TitlePath currentCat={currentCat} data={data} />
      <SectionHeader>
        <Box className="containerSlogan">
          <Container>
            <h1 className="titleSlogan">
              {title
                ? `Services For The ${title} Category`
                : `ECOMMERCE DEVELOPMENT SERVICES`}
            </h1>
            <p>
              PRINTCART is the trusted digital commerce agency building
              eCommerce website, mobile app, PWA and Page builder solution for
              B2C and B2B industries as well as multi-vendor marketplaces
            </p>
          </Container>
        </Box>
      </SectionHeader>
      <Container>
        <ContainerServices>
          {/* <Breadcrumb currentCat={currentCat} /> */}
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
          {serviceList.length > 18 && <Pagination page={page} />}
        </GridServices>
        {serviceRealted && <ServicesOther serviceRealted={serviceRealted} />}
        <SectionStep>
          <StepWork />
        </SectionStep>
      </Container>
      <FAQfeature dataFAQ={dataFAQ} />
      <UserObject />
      <Reviews />
    </SectionWrapperServices>
  );
};
export default InfoServices;
