import { Disclosure } from "@headlessui/react";
import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import Link from "next/link";
import Icon from "react-icons-kit";
import { chevronDown } from "react-icons-kit/fa/chevronDown";
import ContainerFAQ, { FAQHeader } from "./faq.style";
import PropTypes from "prop-types";

const FAQfeature = ({ dataFAQ }) => {
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
            {dataFAQ.slice(0, 4).map((item, index) => (
              <Box key={index} className="panel-default">
                <Disclosure>
                  <Disclosure.Button className="panel-title">
                    {item.attributes.link ? (
                      <Link href={item.attributes.link} className="collapsed">
                        {item.attributes.question}
                        <Box className="iconcustom">
                          <Icon icon={chevronDown} />
                        </Box>
                      </Link>
                    ) : (
                      <span className="collapsed">
                        {item.attributes.question}
                        <Box className="iconcustom">
                          <Icon icon={chevronDown} />
                        </Box>
                      </span>
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <div
                      className="answer"
                      dangerouslySetInnerHTML={{
                        __html: item.attributes.answer,
                      }}
                    />
                  </Disclosure.Panel>
                </Disclosure>
              </Box>
            ))}
          </Box>
          <Box className="questionRight">
            {dataFAQ.slice(4, 8).map((item, index) => (
              <Box key={index} className="panel-default">
                <Box className="titlequestion">
                  <Disclosure>
                    <Disclosure.Button className="panel-title">
                      {item.attributes.link ? (
                        <Link href={item.attributes.link} className="collapsed">
                          {item.attributes.question}
                          <Box className="iconcustom">
                            <Icon icon={chevronDown} />
                          </Box>
                        </Link>
                      ) : (
                        <span className="collapsed">
                          {item.attributes.question}
                          <Box className="iconcustom">
                            <Icon icon={chevronDown} />
                          </Box>
                        </span>
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                      <div
                        className="answer"
                        dangerouslySetInnerHTML={{
                          __html: item.attributes.answer,
                        }}
                      />
                    </Disclosure.Panel>
                  </Disclosure>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </ContainerFAQ>
  );
};

FAQfeature.propTypes = {
  dataFAQ: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
        link: PropTypes.string, // Optional link
      }).isRequired,
    })
  ).isRequired,
};

export default FAQfeature;
