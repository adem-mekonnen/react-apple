/* eslint-disable react/prop-types */
const NavigationList = ({ title, links }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavigationList;
