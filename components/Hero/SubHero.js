import { Box, Center, Divider, Text } from "@chakra-ui/react";
import styles from "../../styles/styles.json";

const SubHero = ({ title, src }) => (
	<Box h="40vh" w="100%" bg="orange.100" mt={["80px", "80px", "80px", "130px"]}>
		<Center
			h="100%"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			backgroundImage={src && src}
		>
			<Divider
				w="70px"
				borderWidth="2px"
				opacity="100%"
				d={["none", "none", "none", "block"]}
			/>
			<Text
				mx={["5", "10"]}
				fontSize={styles.font.title}
				color="white"
				fontFamily="mono"
				fontWeight="bold"
			>
				{title && title}
			</Text>
			<Divider
				d={["none", "none", "none", "block"]}
				w="70px"
				borderWidth="2px"
				bg="red"
				opacity="100%"
			/>
		</Center>
	</Box>
);
export default SubHero;
