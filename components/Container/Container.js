import PropTypes from "prop-types";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Container = ({ children }) => (
	<>
		<Navbar />
		{children}
		<Footer />
	</>
);

Container.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Container;
