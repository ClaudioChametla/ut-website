/* eslint-disable react/no-array-index-key */
import { Box, Grid, Image, Flex, Text, Center } from "@chakra-ui/react";
import styles from "../../styles/styles.json";
import stylesTwo from "../../styles/stylesTwo.json";
import cardsinfo from "../../data/cardsinfo.json";

const Cards = () => {
	const infocards = cardsinfo.cards;
	return (
		<Center w="100%" mt={["10px", "10px", "20px", "-40px"]}>
			<Grid templateColumns={["", "", "", "repeat(3, 1fr)"]} w={["95%", "95%", "95%", "85%"]}>
				{infocards &&
					infocards.map((item, index) => (
						<Flex direction="column" align="center" key={`Flex-${index}Cards`}>
							<Box
								bgColor={index % 2 === 0 ? "#00489e" : "#0053b8"}
								align="center"
								w="100%"
								h={["auto", "auto", "auto", "410px"]}
								p="50px 0 30px 0"
								_hover={{ bg: "#0053b8" }}
							>
								<Image src={item.icon} boxSize="70px" filter="invert(90%)" />
								<Text
									w="100%"
									textAlign="center"
									fontSize={styles.font.subtitle}
									color="white"
									mt="20px"
								>
									{item.title}
								</Text>
								<Text
									color="white"
									textAlign="center"
									m="20px 48px 0 48px"
									fontSize={styles.font.text}
								>
									{item.content}
								</Text>
							</Box>
						</Flex>
					))}
			</Grid>
		</Center>
	);
};

export default Cards;
