import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import Link from "next/link";
import React from "react";
import Icon from "react-icons-kit";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import styled from "styled-components";
import SectionWrapperServices from "../InfoServices/GridServices";
import ReactHtmlParser from "react-html-parser";
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
  TitleUser
} from "./blogPage.style";

const BlogPage = ({ resPosts }) => {
  return (
    <React.Fragment>
      <SectionWrapperServices>
        {/* <BlogPath /> */}
        <SectionHeader>
          <Box className="containerSlogan">
            <Container>
              <h1 className="titleSlogan">Printcart's blog page</h1>
              <p>
                Welcome to Printcart, your ultimate destination for all things
                printing! Whether you're a printing professional, graphic
                designer, or simply passionate about the print industry, this
                blog is your go-to resource for valuable insights, expert tips,
                and inspiring content.
              </p>
            </Container>
          </Box>
        </SectionHeader>
        <Container>
          <GridPost>
            {resPosts.map((items, index) => (
              <GridItem key={index}>
                <ContainerPost>
                  <Box>
                    <Link href={`/blog/${items?.attributes?.alias}`}>
                      <a title={`View to ${items?.attributes?.title}`}>
                        <h3>{items?.attributes?.title}</h3>
                      </a>
                    </Link>
                  </Box>
                  <DesBox>{ReactHtmlParser(items?.attributes?.content)}</DesBox>
                  <Box>
                    <TagBox>
                      {items?.attributes?.tags?.data.map((tags, index) => (
                        <Link href="#" key={index}>
                          <a>#{tags?.attributes?.alias}</a>
                        </Link>
                      ))}
                    </TagBox>
                  </Box>
                  <Box>
                    <AuthorPost>
                      <LeftContent>
                        <LogoAuthor>
                          <Link href={"#"}>
                            <a>
                              <AvatarAuthor>
                                <img
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    textAlign: "center",
                                    objectFit: "cover",
                                    textIndent: "10000px"
                                  }}
                                  alt="Avatar"
                                  src={
                                    items?.attributes?.user_profile?.data
                                      ?.attributes?.avatar ?? "favicon.png"
                                  }
                                />
                              </AvatarAuthor>
                            </a>
                          </Link>
                        </LogoAuthor>
                        {items?.attributes?.user_profile && (
                          <Box>
                            <TitleUser>
                              <Link href={"#"}>
                                <a>
                                  {items?.attributes?.user_profile?.data
                                    ?.attributes?.name ?? "Printcart"}
                                </a>
                              </Link>
                            </TitleUser>
                            <TimeUser>
                              <Link href={"#"}>
                                <a>
                                  {new Date(
                                    items?.attributes?.createdAt
                                  ).toLocaleString()}
                                </a>
                              </Link>
                            </TimeUser>
                          </Box>
                        )}
                      </LeftContent>
                      <Box>
                        <Link href={`/blog/${items?.attributes?.alias}`}>
                          <a>
                            <ButtonRead>
                              <Icon
                                icon={ic_remove_red_eye}
                                style={{ marginRight: "10px" }}
                              />
                              Read Tutorial
                            </ButtonRead>
                          </a>
                        </Link>
                      </Box>
                    </AuthorPost>
                  </Box>
                </ContainerPost>
              </GridItem>
            ))}
          </GridPost>
        </Container>
      </SectionWrapperServices>
    </React.Fragment>
  );
};
export default BlogPage;
