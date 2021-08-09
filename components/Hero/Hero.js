import { Box, Center, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Hero = ({ title }) => (
	<Box h="90vh" w="100%" bg="green.100">
		<Center>
			<Text>{title && title}</Text>
		</Center>
	</Box>
);

export const SubHero = ({ title }) => (
	<Box h="20vh" w="100%" bg="blue.100">
		<Center>
			<Text>{title && title}</Text>
		</Center>
	</Box>
);

Hero.propTypes = {
	title: PropTypes.string,
};

Hero.defaultProps = {
	title: "",
};

SubHero.propTypes = {
	title: PropTypes.string,
};

SubHero.defaultProps = {
	title: "",
};
