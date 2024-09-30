import { Disclosure } from "@headlessui/react";
import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import Link from "next/link";
import Icon from "react-icons-kit";
import { chevronDown } from "react-icons-kit/fa/chevronDown";
import ContainerFAQ, { FAQHeader } from "./faq.style";

const FAQfeature = (props) => {
  const { dataFAQ } = props;

  return (
    <ContainerFAQ>
      <Container>
        <FAQHeader>
          <Box className="containerSlogan">
            <h2 className="titleSlogan">
              THOUSAND OF CLIENTS RELY ON OUR ECOMMERCE TEMPLATE COLLECTION TO
              GET THEIR ONLINE STORE IDEAS
            </h2>
            <p className="faq">Frequently Asked Questions</p>
          </Box>
        </FAQHeader>
        <Box className="FAQquestion">
          <Box className="questionLeft">
            {dataFAQ.map(
              (items, index) =>
                index < 4 && (
                  <Box key={index} className="panel-default">
                    <Disclosure>
                      <Disclosure.Button className="panel-title">
                        <Link className="collapsed">
                          {items.attributes.question}
                          <Box className="iconcustom">
                            <Icon icon={chevronDown} />
                          </Box>
                        </Link>
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-500">
                        <div
                          className="answer"
                          dangerouslySetInnerHTML={{
                            __html: items.attributes.answer,
                          }}
                        ></div>
                      </Disclosure.Panel>
                    </Disclosure>
                  </Box>
                )
            )}
          </Box>
          <Box className="questionRight">
            {dataFAQ.map(
              (items, index) =>
                index > 3 &&
                index < 8 && (
                  <Box key={index} className="panel-default">
                    <Box className="titlequestion">
                      <Disclosure>
                        <Disclosure.Button className="panel-title">
                          <Link className="collapsed">
                            {items.attributes.question}
                            <Box className="iconcustom">
                              <Icon icon={chevronDown} />
                            </Box>
                          </Link>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                          <div
                            className="answer"
                            dangerouslySetInnerHTML={{
                              __html: items.attributes.answer,
                            }}
                          />
                        </Disclosure.Panel>
                      </Disclosure>
                    </Box>
                    {/* <Box
                      dangerouslySetInnerHTML={{
                        __html: items.attributes.answer,
                      }}
                    /> */}
                  </Box>
                )
            )}
          </Box>
        </Box>
      </Container>
    </ContainerFAQ>
  );
};
export default FAQfeature;
