import { Link, Center, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import styles from "../../styles/styles.json";

const BarRoute = () => {
	useEffect(() => {
		global.document.getElementById("demo").innerHTML = ` ${global.window.location.pathname}`;
	});

	return (
		<Center bg="#F3F3F3">
			<Flex
				minW={styles.container.width}
				h="40px"
				fontFamily={styles.font.fontFamily}
				color={styles.font.color}
				alignItems="center"
				fontSize={styles.font.littleText}
				fontWeight="bold"
				justifyContent={["center", "start", "start", "start"]}
			>
				<Link href="/" _hover={{ color: "#17c787" }}>
					INICIO
				</Link>
				<Text id="demo" textTransform="uppercase" pl="1" />
			</Flex>
		</Center>
	);
};
export default BarRoute;
