import Navbar from "../Navbar";
import Footer from "../Footer";

const Container = ({ children }) => (
	<>
		<Navbar />
		{children}
		<Footer />
	</>
);

export default Container;
