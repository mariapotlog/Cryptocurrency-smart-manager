import { Link } from 'react-router-dom';

const CustomLink = ({ children, to, color = "black" }) => {
  const style = {
    textDecoration: "none",
    color
  }
  return (
    <Link to={to} style={style}>
      {children}
    </Link>
  );
}

export default CustomLink;
