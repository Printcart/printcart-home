import Box from "common/components/Box";
import Link from "next/link";
import Icon from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import {
  BoxLabel,
  CardItems,
  ContainerBox,
  GridFilter,
  HeaderBox,
  PByVendor,
  PDiscount,
  PPrice,
  PTitle,
  RedirectAll,
  SmallEco,
  SmallNew,
  SpanLink,
  TagA,
  TitleBox,
  TitleHead,
  VendorPrice,
  WrapContent,
  WrapImage,
  WrapperProduct
} from "./productspod.style";

const TagsFilter = ({ dataFilter, status, title }) => {
  return (
    <>
      <ContainerBox>
        <HeaderBox>
          <TitleBox>
            <TitleHead>{title}</TitleHead>
          </TitleBox>
          <RedirectAll>
            <Box>
              <TagA href="/catalog/#">
                <SpanLink>
                  See all New Products
                  <Icon icon={ic_keyboard_arrow_right} />
                </SpanLink>
              </TagA>
            </Box>
          </RedirectAll>
        </HeaderBox>
        {/* <HeaderPOD></HeaderPOD> */}
        <WrapperProduct>
          <GridFilter>
            {dataFilter.map(
              (item, index) =>
                index < 4 && (
                  <CardItems key={index}>
                    <Box>
                      <WrapImage>
                        <Link href={`/product/${item?.id}`}>
                          <a>
                            <img
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: "0",
                                left: "0",
                                borderTopLeftRadius: "5px",
                                borderTopRightRadius: "5px"
                              }}
                              src={item?.thumbnail}
                            />
                          </a>
                        </Link>
                        {status && (
                          <BoxLabel>
                            {status === "New" ? (
                              <SmallNew>{status}</SmallNew>
                            ) : (
                              <SmallEco>{status}</SmallEco>
                            )}
                          </BoxLabel>
                        )}
                      </WrapImage>
                      <WrapContent>
                        <Link href={`/product/${item?.id}`}>
                          <a title={`View to ${item.title}`}>
                            <PTitle>{item.title}</PTitle>
                          </a>
                        </Link>
                        <PByVendor>By {item?.vendor?.store_name}</PByVendor>
                        <VendorPrice>
                          <PPrice>From USD 9.38</PPrice>
                          <PDiscount>From USD 5.92 with Printcart</PDiscount>
                        </VendorPrice>
                      </WrapContent>
                    </Box>
                  </CardItems>
                )
            )}
          </GridFilter>
        </WrapperProduct>
      </ContainerBox>
    </>
  );
};
export default TagsFilter;
