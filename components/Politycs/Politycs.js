import { Box, ListItem, UnorderedList, Center } from "@chakra-ui/react";
import politicas from "../../data/politicas.json";
import styles from "../../styles/styles.json";

const Politycs = () => {
	const politycs = politicas.politicas;
	return (
		<Box h="100%" w="100%">
			<Center>
				<UnorderedList
					w={["100%", "100%", "100%", styles.container.width, styles.container.width]}
				>
					{politycs &&
						politycs.map((item) => (
							<ListItem
								key={`ListItem-${item}`}
								listStyleType="none"
								color={styles.font.color}
								fontSize="12px"
								fontFamily={styles.font.fontFamily}
							>
								<br />
								{item}
								<br /> <br />
							</ListItem>
						))}
				</UnorderedList>
			</Center>
		</Box>
	);
};
export default Politycs;
