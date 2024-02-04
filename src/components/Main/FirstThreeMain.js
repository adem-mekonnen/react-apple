import React from "react";

const FirstThreeMain = ({
  sectionClass,
  newAlert,
  title,
  description,
  price,
  links,
  titleColor,
  ipodCaption,
  descriptionColor,
  priceColor,
}) => {
  return (
    <section className={sectionClass}>
      <div className="container">
        {newAlert && <div className="new-alert">{newAlert}</div>}

        <div className={`title-wraper bold ${titleColor}`}>{title}</div>

        {description && (
          <div className={`description-wrapper ${descriptionColor}`}>
            {description}
          </div>
        )}
        {price && <div className={`price-wrapper ${priceColor}`}>{price}</div>}

        {links && (
          <div className="links-wrapper">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {ipodCaption && (
          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              {ipodCaption.right}
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              {ipodCaption.left}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FirstThreeMain;
