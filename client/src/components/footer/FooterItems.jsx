const FooterItems = ({ Links, title }) => {
  return (
    <ul>
      <h1 className=",b-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-sm leading-6 text-gray-400 duration-300 cursor-pointer hover:text-teal-300"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterItems;
