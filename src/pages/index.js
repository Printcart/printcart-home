import Head from "next/head";
import Script from "next/script";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appModern";
import ResetCSS from "common/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "containers/AppModern/Navbar";
import Banner from "containers/AppModern/Banner";
import AppSlider from "containers/AppModern/AppSlider";
import Features from "containers/AppModern/Features";
import DashboardFeatures from "containers/AppModern/Dashboard";
import ProductSlide from "containers/AppModern/ProductSlide";
import DesignedAndBuilt from "containers/AppModern/DesignedAndBuilt";
import DesignedAndBuiltBefore from "containers/AppModern/DesignedAndBuiltBefore";
import DesignedAndBuiltBefore3 from "containers/AppModern/DesignedAndBuiltBefore3";
import DesignedAndBuiltBefore4 from "containers/AppModern/DesignedAndBuilteBefore4";
// import PricingPolicy from 'containers/AppModern/PricingPolicy';
// import TeamPortfolio from 'containers/AppModern/TeamPortfoilo';
import Testimonial from "containers/AppModern/Testimonial";
import Newsletter from "containers/AppModern/Newsletter";
import Footer from "containers/AppModern/Footer";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "containers/AppModern/appModern.style";
import DesignedAndBuiltcode from "containers/AppModern/DesignedAndBuiltcode";

const AppModern = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Printcart | Innovative Print Commerce Partner</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="product customizer, product customization, product designer, web2print, printing solution, print-on-demand, POD, web to print"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            <AppSlider />
            <DashboardFeatures />
            <ProductSlide />
            <DesignedAndBuilt />
            <DesignedAndBuiltBefore />
            <DesignedAndBuiltBefore3 />
            <DesignedAndBuiltBefore4 />
            <DesignedAndBuiltcode />
            {/* <PricingPolicy /> */}
            {/* <TeamPortfolio /> */}
            <Testimonial />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
                  w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
                  m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://campaign.printcart.com/mtc.js','mt');
          
              mt('send', 'pageview');
            `,
          }}
        />
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default AppModern;
