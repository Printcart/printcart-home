import Box from "common/components/Box";
import Pagination from "common/components/Pagination";
import Container from "common/components/UI/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import parser from "html-react-parser";
import Icon from "react-icons-kit";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import styled from "styled-components";
import SectionWrapperServices from "../InfoServices/GridServices";
import { SectionHeader } from "../appModern.style";
import GridPost, {
  AuthorPost,
  AvatarAuthor,
  ButtonRead,
  ContainerPost,
  DesBox,
  GridItem,
  LeftContent,
  LogoAuthor,
  TagBox,
  TimeUser,
  TitleUser,
} from "./blogPage.style";

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  onbject-fit: contain;
  box-shadow: 0 0px 10px 1px rgb(0 0 50 / 10%);
`;

const BlogPage = ({ resPosts, pages }) => {
  const router = useRouter();
  const query = router.query;
  
  
  
  // Add a safe check for pages and pagination
  const page = pages?.pagination?.total ? Math.ceil(pages.pagination.total / 20) : 1;
  
  let start = 1;
  let end = 20;
  if (query.page) {
    start = (query.page - 1) * end - 1;
    end = query.page * end;
  }
  console.log(query)

  return (
    <React.Fragment>
      <SectionWrapperServices>
        {/* <BlogPath /> */}
        <SectionHeader>
          <Box className="containerSlogan">
            <Container>
              <h1 className="titleSlogan">Printcart POD Tutorials</h1>
              <p>
                Welcome to Printcart, your ultimate destination for all things
                printing! Whether you're a printing professional, graphic
                designer, or simply passionate about the print industry, this
                tutorials is your go-to resource for valuable insights, expert
                tips, and inspiring content.
              </p>
            </Container>
          </Box>
        </SectionHeader>
        <Container>
          <GridPost>
            {resPosts && resPosts.map(
              (items, index) =>
                index > start &&
                index < end && (
                  <GridItem key={items?.id || index}>
                    <ContainerPost>
                      <Box>
                        <Link
                          prefetch={false}
                          href={`/tutorial/${items?.attributes?.alias}`}
                          title={`View to ${items?.attributes?.title}`}
                        >
                          <h3 style={{ lineHeight: "1.5", height: "64px" }}>
                            {items?.attributes?.title}
                          </h3>
                        </Link>
                      </Box>
                      {items?.attributes?.banner?.data?.attributes?.formats
                        ?.small?.url && (
                        <Image
                          src={
                            items?.attributes?.banner?.data?.attributes?.formats
                              ?.small?.url
                          }
                          alt={
                            items?.attributes?.banner?.data?.attributes?.formats
                              ?.small?.name
                          }
                        />
                      )}
                     
                      <DesBox>{parser(items?.attributes?.short_intro)}</DesBox>
                      <Box>
                        <TagBox>
                          {items?.attributes?.tags?.data.map((tags, index) => (
                            <Link href="#" key={index}>
                              #{tags?.attributes?.alias}
                            </Link>
                          ))}
                        </TagBox>
                      </Box>
                      <Box>
                        <AuthorPost>
                          <LeftContent>
                            <LogoAuthor>
                              <Link href={"#"}>
                                <AvatarAuthor>
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      textAlign: "center",
                                      objectFit: "cover",
                                      textIndent: "10000px",
                                    }}
                                    alt="Avatar"
                                    src={
                                      items?.attributes?.user_profile?.data
                                        ?.attributes?.avatar ?? "favicon.png"
                                    }
                                  />
                                </AvatarAuthor>
                              </Link>
                            </LogoAuthor>
                            {items?.attributes?.user_profile && (
                              <Box>
                                <TitleUser>
                                  <Link href={"#"}>
                                    {items?.attributes?.user_profile?.data
                                      ?.attributes?.name ?? "Printcart"}
                                  </Link>
                                </TitleUser>
                                <TimeUser>
                                  <Link href={"#"}>
                                    {new Date(
                                      items?.attributes?.createdAt
                                    ).toLocaleString()}
                                  </Link>
                                </TimeUser>
                              </Box>
                            )}
                          </LeftContent>
                          <Box>
                            <Link
                              href={`/tutorial/${items?.attributes?.alias}`}
                            >
                              <ButtonRead>
                                <Icon
                                  icon={ic_remove_red_eye}
                                  style={{ marginRight: "10px" }}
                                />
                                Read Tutorial
                              </ButtonRead>
                            </Link>
                          </Box>
                        </AuthorPost>
                      </Box>
                    </ContainerPost>
                  </GridItem>
                )
            )}
            {resPosts && resPosts.length > 20 && <Pagination page={page} />}
            
          </GridPost>

        </Container>
      </SectionWrapperServices>
      
    </React.Fragment>
    
  );
};


export default BlogPage;