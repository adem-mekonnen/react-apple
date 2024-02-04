import React from "react";

const LastThreeMain = ({
  className,
  leftTitle,
  leftDescription,
  leftPrice,
  leftLinks,
  leftTitleColor,
  leftDescriptionColor,
  leftLinkColor,
  leftLogo,
  leftTVShowLogo,
  leftWatchMoreLink,
  rightTitle,
  rightDescription,
  rightLinks,
  rightTitleColor,
  rightDescriptionColor,
  rightLinkColor,
  rightLogo,
}) => {
  return (
    <section className={className}>
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              {leftLogo && (
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={leftLogo} alt="Left Logo" />
                  </div>
                </div>
              )}

              <div className={`title-wraper ${leftTitleColor}`}>
                {leftTitle}
              </div>
              <div className={`description-wraper ${leftDescriptionColor}`}>
                {leftDescription}
              </div>
              {leftPrice && <div className="price-wrapper">{leftPrice}</div>}
              {leftLinks && (
                <div className={`links-wrapper ${leftLinkColor}`}>
                  <ul>
                    {leftLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {leftTVShowLogo && (
                <div className="tvshow-logo-wraper">
                  <img src={leftTVShowLogo} alt="TV Show Logo" />
                </div>
              )}
              {leftWatchMoreLink && (
                <div className="watch-more-wrapper">
                  <ul>
                    {leftWatchMoreLink.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              {rightLogo && (
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={rightLogo} alt="Right Logo" />
                  </div>
                </div>
              )}

              <div className={`title-wraper ${rightTitleColor}`}>
                {rightTitle}
              </div>
              <div className={`description-wraper ${rightDescriptionColor}`}>
                {rightDescription}
              </div>
              {rightLinks && (
                <div className={`links-wrapper ${rightLinkColor}`}>
                  <ul>
                    {rightLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastThreeMain;
