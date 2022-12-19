import Box from "common/components/Box";
import ContainerFAQ, { FAQHeader } from "./faq.style";
import { chevronUp } from "react-icons-kit/fa/chevronUp";
import { chevronDown } from "react-icons-kit/fa/chevronDown";
import ReactMarkdown from "react-markdown";
import Icon from "react-icons-kit";
import { useState } from "react";
import Container from "common/components/UI/Container";
import { Disclosure } from "@headlessui/react";

const FAQfeature = (props) => {
  const { dataFAQ } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);

  const handleShow = () => {
    setShowAnswer(!showAnswer);
  };
  const handleShow1 = () => {
    setShowAnswer1(!showAnswer1);
  };
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
            <Box className="FAQquestion">
              <Box className="questionLeft">
                {dataFAQ.map(
                  (items, index) =>
                    index < 4 && (
                      <Box key={index} className="panel-default">
                        <Disclosure>
                          <Disclosure.Button className="panel-title">
                            <a
                              className="collapsed"
                              onClick={() => handleShow()}
                            >
                              {items.attributes.question}
                              <Box className="iconcustom">
                                {showAnswer ? (
                                  <Icon icon={chevronDown} />
                                  ) : (
                                    <Icon icon={chevronUp} />
                                  )}
                              </Box>
                            </a>
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-500">
                            <Box className="answer"
                              dangerouslySetInnerHTML={{
                                __html: items.attributes.answer,
                              }}
                            />
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
                              <a
                                className="collapsed"
                                onClick={() => handleShow1()}
                              >
                                {items.attributes.question}
                                <Box className="iconcustom">
                                  {showAnswer1 ? (
                                    <Icon icon={chevronDown} />
                                  ) : (
                                    <Icon icon={chevronUp} />
                                  )}
                                </Box>
                              </a>
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500">
                              <Box className="answer"
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
          </Box>
        </FAQHeader>
      </Container>
    </ContainerFAQ>
  );
};
export default FAQfeature;
