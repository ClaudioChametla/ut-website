import { Box, Center, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Hero = ({ title }) => (
	<Box h="90vh" w="100%" bg="blue.300">
		<Center h="100%">
			<Text fontSize="24px" fontFamily="mono" fontWeight="bold">
				{title && title}
			</Text>
		</Center>
	</Box>
);

export const SubHero = ({ title }) => (
	<Box h="20vh" w="100%" bg="orange.100">
		<Center h="100%">
			<Text fontSize="24px" fontFamily="mono" fontWeight="bold">
				{title && title}
			</Text>
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
