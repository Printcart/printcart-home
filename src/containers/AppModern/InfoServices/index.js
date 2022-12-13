import Pagination from "common/components/Pagination";
import Container from "common/components/UI/Container";
import { useRouter } from "next/router";
import Icon from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import { SectionHeader } from "../appModern.style";
import Breadcrumb from "./Breadcrumb";
import SectionWrapperServices, {
  ContainerServices,
  GridServices
} from "./GridServices";
import ServiceCategory from "./ServiceCategory";
import ServicesList from "./ServicesList";
import ServicesOther from "./ServicesOther";

const InfoServices = (props) => {
  const { serviceList, total, dataNew, choice, serviceRealted, current_cat } =
    props;
  const router = useRouter();
  const query = router.query;
  const title =
    current_cat?.name_sub ?? current_cat?.name_subcat ?? current_cat?.name_cat;

  const page = total.pagination.total / 40;
  let start = -1;
  let end = 40;
  if (query.page) {
    start = (query.page - 1) * end - 1;
    end = query.page * end;
  }

  return (
    <SectionWrapperServices>
      <SectionHeader>
        <h1 className="titleSlogan">
          {title
            ? `Services For The ${title} Category`
            : `ECOMMERCE DEVELOPMENT SERVICES`}
        </h1>
        <p>
          PRINTCART is the trusted digital commerce agency building eCommerce
          website, mobile app, PWA and Page builder solution for B2C and B2B
          industries as well as multi-vendor marketplaces
        </p>
      </SectionHeader>
      <Container>
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
