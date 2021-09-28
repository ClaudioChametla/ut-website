import { Box, Center, Flex } from "@chakra-ui/react";

import Link from "next/link";
import PropTypes from "prop-types";
import styles from "../../styles/styles.json";

const HeroDynamic = ({ title }) => (
	<Box h="20vh" w="100%" bg="orange.100" mt={["80px", "80px", "80px", "130px"]}>
		<Center
			h="100%"
			backgroundRepeat="no-repeat"
			backgroundImage="/images/banner_mural_negro-scaled.webp"
		>
			<Flex
				w={styles.container.width}
				flexDir={["column", "column", "row", "row"]}
				justifyContent="space-between"
			>
				<Box fontSize={styles.font.text} color="white" fontFamily={styles.font.fontFamily}>
					OFERTA EDUCATIVA
				</Box>
				<Box
					fontSize="13px"
					color="white"
					dir="row"
					textTransform="uppercase"
					fontFamily={styles.font.fontFamily}
				>
					<Link href="/">INICIO / </Link>
					<Link href="/oferta">CARRERA / </Link>
					{title && title}
				</Box>
			</Flex>
		</Center>
	</Box>
);
HeroDynamic.propTypes = {
	title: PropTypes.string,
};

HeroDynamic.defaultProps = {
	title: "",
};
export default HeroDynamic;
