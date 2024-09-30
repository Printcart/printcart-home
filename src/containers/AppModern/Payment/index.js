import Box from "common/components/Box";
import { SectionHeader } from "containers/AppModern/appModern.style";
import SectionWrapper from "containers/AppModern/Features/features.style";
import React from "react";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { Table } from "../../../common/components/Table/styleTable";
import Container from "../../../common/components/UI/Container";
import HeaderPayment from "./payment.style";
import Link from "next/link";

const contact = "https://solution.printcart.com/home/teams/#contact";
const tiers = [
  {
    name: "Free",
    value: "free",
    price: "0",
    button: {
      label: "Contact",
    },
  },
  {
    name: "Premium",
    value: "premium",
    price: "49",
    button: {
      label: "Contact",
    },
  },
  {
    name: "Advanced",
    value: "advanced",
    price: "99",
    button: {
      label: "Contact",
    },
  },
  {
    name: "Enterprise",
    value: "enterprise",
    button: {
      label: "Contact",
    },
  },
];
const pricings = [
  {
    name: "Feature",
    items: [
      {
        name: "Premium 10000+ Design and Clipart Templates",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Intergration with your website (via plugins or API)",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Integrated Product Customization Tool",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Print-ready files [PNG, SVG]",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Unlimited product views and print areas per product",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Unlimited download and edit Client Designs",
        desc: "",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Rest API Access",
        value: [
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Setting your Product Customizer Branding",
        desc: "",
        value: [
          { value: "no" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
        isComingSoon: true,
      },
      {
        name: "Export to PDF",
        value: [
          { value: "no" },
          { value: "yes" },
          { value: "yes" },
          { value: "yes" },
        ],
      },
      {
        name: "Up your own Mock-Up",
        desc: "",
        value: [
          { value: "Unlimited" },
          { value: "Unlimited" },
          { value: "Unlimited" },
          { value: "Unlimited" },
        ],
      },
    ],
  },
  {
    name: "Storage",
    items: [
      {
        name: "Maximum Design file size uploading",
        value: [
          { value: "50MB" },
          { value: "500MB" },
          { value: "5GB" },
          { value: "Contact" },
        ],
        isComingSoon: true,
      },
      {
        name: "Number of Orders per month",
        value: [
          { value: "10" },
          { value: "100" },
          { value: "1000" },
          { value: "Contact" },
        ],
      },
      {
        name: "Cloud Media File Storage",
        value: [
          { value: "10GB" },
          { value: "100GB" },
          { value: "1TB" },
          { value: "Contact" },
        ],
      },
      {
        name: "Number of Products per store",
        value: [
          { value: "5" },
          { value: "Unlimited" },
          { value: "Unlimited" },
          { value: "Unlimited" },
        ],
      },
    ],
  },
];

const Payment = () => {
  return (
    <SectionWrapper id="features">
      <HeaderPayment>
        <h1 className="titleSlogan">Easy to try. Fair pricing to upgrade.</h1>
        <p>
          Please choose the appropriate predefined subscription package for your
          cloud printing or contact us for custom pricing.
        </p>
      </HeaderPayment>
      <Container>
        <Table>
          <thead>
            <tr>
              <th className="setWidth">
                <div />
              </th>
              {tiers.map((tier, typeIndex) => (
                <th className="align-top" key={typeIndex}>
                  <div className="cover-content">
                    <div className="content-one">{tier.name}</div>
                    <div className="pcPrice">
                      {tier.price ? `$${tier.price} / month` : "-"}
                    </div>
                    {tier?.button && tier?.button?.label && (
                      <Link className="btnContact" href={contact}>
                        {tier.button.label}
                      </Link>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricings.map((price, priceIndex) => (
              <React.Fragment key={priceIndex}>
                <tr>
                  <th className="pcTitle" colSpan={5}>
                    <div className="text-name">{price.name}</div>
                  </th>
                </tr>
                {price?.items.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td className="pcTitle">
                      <div className="row-title">
                        <div className="col-title">
                          {item.name}
                          {item?.isComingSoon && (
                            <div className="commingsoon">Comming Soon</div>
                          )}
                        </div>
                      </div>
                    </td>
                    {item?.value.map((value, valueIndex) => (
                      <td key={valueIndex} className="value">
                        {value.value === "yes" && <Icon icon={check} />}
                        {value.value !== "yes" &&
                          value.value !== "no" &&
                          value.value !== "contact" &&
                          value.value !== "Contact" && (
                            <div className="text-value">{value.value}</div>
                          )}
                        {(value.value === "Contact" ||
                          value.value === "contact") && (
                          <Link className="btnContact" href={contact}>
                            {value.value}
                          </Link>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </Container>
    </SectionWrapper>
  );
};

export default Payment;
