import React from "react";
import appletv from "../../images/icons/apple-tv-logo.png";
import banker from "../../images/home/banker.png";
import series5 from "../../images/icons/watch-series5-logo.png";
import arcade from "../../images/icons/arcade.png";
import AppleAlert from "./AppleAlert";
import FirstThreeMain from "./FirstThreeMain";
import LastThreeMain from "./LastThreeMain";
const Main = () => {
  return (
    <div>
      <AppleAlert />

      <FirstThreeMain
        sectionClass="first-hightlight-wrapper"
        newAlert="New"
        title="iPad Pro"
        titleColor="black"
        links={[
          { href: "", text: "Learn more" },
          { href: "", text: "Order" },
        ]}
        ipodCaption={{
          right: "iPad Pro available starting 3.25",
          left: "Magic Keyboard coming in May",
        }}
      />

      <FirstThreeMain
        sectionClass="second-hightlight-wrapper"
        newAlert="New"
        title="MacBook Air"
        titleColor="black"
        description="Twice the speed. Twice the storage."
        price="From $999."
        descriptionColor="black" // Specify the color for the description
        priceColor="grey" // Specify the color for the price
        links={[
          { href: "", text: "Learn more" },
          { href: "", text: "Buy" },
        ]}
      />

      <FirstThreeMain
        sectionClass="third-hightlight-wrapper"
        title="iPhone 11 Pro"
        description="Pro cameras. Pro display. Pro performance."
        price="From $24.95/mo. or $599 with trade‑in."
        links={[
          { href: "", text: "Learn more" },
          { href: "", text: "Buy" },
        ]}
      />

      <LastThreeMain
        className="fourth-heghlight-wrapper"
        leftTitle="iPhone 11"
        leftDescription="Just the right amount of everything."
        leftPrice="From $18.70/mo. or $499 with trade‑in."
        leftLinks={[
          { href: "#", text: "Learn more" },
          { href: "#", text: "Apply now" },
        ]}
        leftTitleColor="black"
        leftDescriptionColor=""
        leftLinkColor=""
        leftLogo="" /* Path to left logo */
        rightTitle="Get the latest CDC response to COVID-19."
        rightLinks={[{ href: "#", text: "Watch the PSA" }]}
        rightTitleColor="white"
        rightDescriptionColor="white"
        rightLinkColor="white"
        rightLogo="" /* Path to right logo */
      />
      <LastThreeMain
        className="fifth-heghlight-wrapper"
        leftLogo={appletv}
        leftShowLogo={true} // Optional: You can add a prop to control the visibility of the left logo
        leftTVShowLogo={banker}
        leftWatchMoreLink={[
          { href: "#", text: "Watch now on the Apple TV App" },
        ]}
        rightLogo={series5}
        rightSeriesLogo="{/* Path to series logo */}"
        rightDescription="With the Always-On Retina display. You’ve never seen a watch like this."
        rightLearnMoreLink="#"
        rightBuyLink="#"
        rightLinks={[
          { href: "#", text: "Learn more" },
          { href: "#", text: "Apply now" },
        ]}
      />
      <LastThreeMain
        className="sixth-heghlight-wrapper"
        leftTitle="
       "
        leftDescription="Agent 8 is a small hero on a big mission."
        leftLinks={[
          { href: "#", text: "Learn more" },
          { href: "#", text: "Apply now" },
        ]}
        leftTitleColor="white"
        leftDescriptionColor="white"
        leftLinkColor=""
        leftLogo={arcade} // Include the path to the left logo
        rightTitle=" Apple Card Monthly Installments"
        rightDescription="Pay for your next iPhone over time, interest-free with Apple Card."
        rightLinks={[
          { href: "#", text: "Learn More" },
          { href: "#", text: "Apply Now" },
        ]}
        rightTitleColor=""
        rightDescriptionColor="gray"
        rightLinkColor=""
        rightLogo=""
      />
    </div>
  );
};

export default Main;
