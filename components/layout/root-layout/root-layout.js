import PropTypes from "prop-types";
import MainNavigation from "../main-navigation/main-navigation";

export default function RootLayout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
