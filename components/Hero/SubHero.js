import { Box, Center, Divider, Text } from "@chakra-ui/react";
import styles from "../../styles/styles.json";

const SubHero = ({ title, src }) => (
	<Box h="40vh" w="100%" bg="orange.100">
		<Center h="100%" backgroundImage={src && src}>
			<Divider w="70px" borderWidth="2px" opacity="100%" />
			<Text
				mx={["5", "10"]}
				fontSize={styles.font.title}
				color="white"
				fontFamily="mono"
				fontWeight="bold"
			>
				{title && title}
			</Text>
			<Divider w="70px" borderWidth="2px" bg="red" opacity="100%" />
		</Center>
	</Box>
);
export default SubHero;
