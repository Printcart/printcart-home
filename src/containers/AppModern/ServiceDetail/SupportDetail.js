import Box from "common/components/Box";
import Button from "common/components/Button";
import Link from "next/link";
import Icon from "react-icons-kit";
import { ic_date_range_outline } from "react-icons-kit/md/ic_date_range_outline";
import { ic_groups_outline } from "react-icons-kit/md/ic_groups_outline";
import { ic_star_rate_outline } from "react-icons-kit/md/ic_star_rate_outline";
import { ic_work_outline } from "react-icons-kit/md/ic_work_outline";
import { NewDate } from "../InfoServices/ServicesList";

const SupportDetail = (props) => {
  const { character } = props;

  return (
    <Box className="boxRight">
      {/* P1 */}
      <Box className="ItemCard">
        <Box>
          <h2 className="sumReviews">Printcart Support</h2>
          <Box className="containerReviews">
            {/* Service Added */}
            <Box className="infoReview">
              <Icon icon={ic_date_range_outline} />
              <Box className="contentReview">
                <h4>Service Added</h4>
                <span>{NewDate(character.createdAt)}</span>
              </Box>
            </Box>
            {/*number of team */}
            <Box className="infoReview">
              <Icon icon={ic_groups_outline} />
              <Box className="contentReview">
                <h4> Number Of Team</h4>
                <span>10 Team Member</span>
              </Box>
            </Box>
            {/* Processed tasks */}
            <Box className="infoReview">
              <Icon icon={ic_star_rate_outline} />
              <Box className="contentReview">
                <h4>Processed Tasks</h4>
                <span>284 Tasks</span>
              </Box>
            </Box>
            {/* Processing tasks */}
            <Box className="infoReview">
              <Icon icon={ic_work_outline} />
              <Box className="contentReview">
                <h4>Processing Tasks</h4>
                <span>220 Tasks</span>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Button Request */}
        <Button
          style={{ borderRadius: "5px" }}
          className="buttonRequest"
          title="Request Support"
        />
      </Box>
      {/* P2 */}
      <Box className="ItemCard">
        <Box className="mainPA">
          <img
            className="imagePA"
            src={
              character?.users_permissions_user?.data?.attributes?.avatar?.data
                ?.attributes.url ?? "/avatar-default.png"
            }
            alt="Logo Service"
          />
          <Box className="boxTopPA">
            <Link prefetch={false} href="#">
              <a>
                {character.users_permissions_user?.data?.attributes?.name ??
                  "Printcart"}
              </a>
            </Link>
            <p>Developer</p>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "-15px",
              }}
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path
                  d="M16 1.9282C16 1.19431 15.4022 0.596656 14.6679 0.596656C13.9335 0.596656 13.3364 1.19377 13.3364 1.9282C13.3364 2.40839 13.594 2.82642 13.9758 3.06027L11.4291 5.59385L8.81209 2.97567C9.12513 2.73162 9.33111 2.35545 9.33111 1.9282C9.33111 1.19431 8.73411 0.596656 7.99967 0.596656C7.26524 0.596656 6.66781 1.19377 6.66781 1.9282C6.66781 2.35491 6.87357 2.73162 7.18736 2.97567L4.56593 5.59646L1.9818 3.01927C2.38639 2.79041 2.66341 2.36109 2.66341 1.8641C2.66341 1.12988 2.06641 0.532227 1.33187 0.532227C0.597438 0.532227 0 1.12934 0 1.8641C0 2.37997 0.298285 2.82382 0.729225 3.04465V12.9517C0.729225 13.2318 0.956464 13.4589 1.23642 13.4589H4.65368C4.68372 13.465 4.71409 13.4676 4.74512 13.4676C4.74577 13.4676 4.74577 13.4676 4.74642 13.4676L14.7636 13.4589C15.0436 13.4589 15.2708 13.2318 15.2708 12.9517V3.10832C15.7022 2.88781 16 2.44429 16 1.9282ZM14.6679 1.61115C14.8429 1.61115 14.9856 1.75313 14.9856 1.9282C14.9856 2.10316 14.8442 2.24525 14.6679 2.24525C14.4936 2.24525 14.3509 2.10316 14.3509 1.9282C14.3509 1.75313 14.4948 1.61115 14.6679 1.61115ZM8.00033 1.61115C8.17463 1.61115 8.31814 1.75313 8.31814 1.9282C8.31814 2.10316 8.1755 2.24525 8.00033 2.24525C7.82537 2.24525 7.68295 2.10316 7.68295 1.9282C7.68295 1.75313 7.82656 1.61115 8.00033 1.61115ZM1.33317 1.54802C1.50748 1.54802 1.65022 1.69011 1.65022 1.8654C1.65022 2.04046 1.50824 2.18245 1.33317 2.18245C1.15778 2.18245 1.0158 2.04046 1.0158 1.8654C1.01514 1.69011 1.15713 1.54802 1.33317 1.54802ZM14.2564 12.4445L4.84404 12.4531C4.81497 12.4478 4.78525 12.4445 4.75488 12.4445H1.74567V4.21545L4.21026 6.67343C4.40843 6.87095 4.72971 6.87095 4.92723 6.67278L8.00174 3.59795L11.0723 6.66952C11.2704 6.86628 11.5915 6.86758 11.7895 6.67017L14.2585 4.21361V12.4448H14.2564V12.4445Z"
                  fill="#F7941E"
                ></path>
              </svg>
              <span>TOP RATE</span>
            </Box>
          </Box>
        </Box>
        {/* Skills */}
        <Box className="boxSkills">
          <button>Icon Design</button>
          <button>Narrative Design</button>
          <button>Yearbook Design</button>
        </Box>
        {/* Assistant */}
        <Box className="boxAssistant">
          <h4 className="titleAssistant">About Project Assistant</h4>
          <Box className="verified">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M15.7658 7.56202L14.1119 6.45803L14.0698 6.263L14.9448 4.49599C15.0208 4.33808 15.0168 4.15199 14.9269 3.99902C14.8389 3.84702 14.6808 3.74912 14.5069 3.73806L12.5319 3.61103L12.3888 3.46606L12.2599 1.49295C12.2519 1.31792 12.1519 1.15905 11.9999 1.07105C11.8479 0.984022 11.6609 0.977928 11.5039 1.05602L9.734 1.93104L9.53497 1.87808L8.43782 0.234091C8.34151 0.0892804 8.18086 0.00271872 8.00792 0H7.99192C7.81992 0.00271872 7.65946 0.0892804 7.56296 0.234091L6.46487 1.87998L6.26791 1.93101L4.49592 1.05599C4.33993 0.978084 4.1529 0.98399 3.99993 1.07102C3.84793 1.15902 3.75003 1.31805 3.73896 1.49311L3.61193 3.46812L3.4689 3.61115L1.49502 3.73787C1.31902 3.7489 1.16093 3.84796 1.07293 3.99884C0.984928 4.1518 0.979022 4.33883 1.05693 4.49674L1.93195 6.26775L1.87995 6.46472L0.234091 7.56202C0.0870304 7.65899 0 7.82395 0 7.99995C0 8.17595 0.0879991 8.34092 0.235029 8.43785L1.87998 9.53594L1.93101 9.7329L1.05599 11.5029C0.978084 11.6609 0.98399 11.8479 1.07199 11.9989C1.15999 12.1519 1.31789 12.2509 1.49408 12.262L3.46797 12.39L3.611 12.534L3.73996 14.5069C3.74893 14.6829 3.84699 14.8419 4.00093 14.9299C4.1539 15.0179 4.33902 15.024 4.49692 14.9459L6.26681 14.0709L6.46584 14.1229L7.56183 15.7679C7.66086 15.9119 7.8268 15.9999 8.00183 15.9999C8.17783 15.9999 8.34182 15.9119 8.43973 15.7658L9.53669 14.1208L9.73669 14.0688L11.5066 14.9427C11.6616 15.0206 11.8506 15.0147 12.0026 14.9267C12.1546 14.8387 12.2525 14.6797 12.2647 14.5037L12.3917 12.5327L12.5387 12.3868L14.5086 12.2598C14.6846 12.2487 14.8425 12.1508 14.9305 11.9977C15.0185 11.8447 15.0246 11.6598 14.9465 11.5017L14.0718 9.73194L14.1148 9.53784L15.7658 8.43689C15.9129 8.33898 15.9999 8.1748 15.9999 7.99898C15.9998 7.82299 15.9128 7.65899 15.7658 7.56202ZM11.8498 6.63403L8.30089 10.322L7.19193 11.43C6.9889 11.6349 6.65497 11.6349 6.45194 11.43L5.34185 10.322L3.69996 8.67898C3.49597 8.47595 3.49597 8.14395 3.69996 7.94089L4.43899 7.19993C4.64202 6.99593 4.97595 6.99593 5.17898 7.19993L6.81993 8.84088L10.3679 5.15404C10.5709 4.94908 10.9029 4.94795 11.1058 5.15195L11.8458 5.89194C12.0509 6.095 12.0509 6.42891 11.8498 6.63403Z"
                fill="#279232"
              ></path>
            </svg>
            <p>Payment method verified</p>
          </Box>
          <p className="review">(0 review)</p>
          <Box className="intro">
            <p>Viet Nam</p>
            <p>13 Jobs Posted</p>
            <p>$0 Total Spent</p>
            <p>Viet Nam</p>
            <p>$0/hr Avg Hourly Rate Paid</p>
          </Box>
        </Box>
        {/* Send Messenger */}
        <Box>
          <Button
            style={{
              background: "#fff",
              fontSize: "16px",
              color: "#2d58af",
              border: "1px solid #2d58af",
            }}
            title="SEND MESSAGE"
            className="buttomSendMes"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default SupportDetail;
