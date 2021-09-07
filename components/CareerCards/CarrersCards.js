import { Box, Grid, Image, Flex, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.json";
import careerCard from "../../data/educativeOffer.json";

const CareerCards = ({ data }) => {
	const careercards = careerCard;
	const stars = [1, 2, 3, 4, 5];
	const [dataCards, setDataCards] = useState(null);

	useEffect(() => {
		if (data) {
			setDataCards(data);
		} else {
			setDataCards(careercards);
		}
	}, [data]);

	return (
		<Box w="100%" align="center">
			<Center w="100%" zIndex="10">
				<Grid
					w="100%"
					templateColumns={[
						"repeat(1, 1fr)",
						"repeat(1, 1fr)",
						"repeat(2, 1fr)",
						"repeat(3, 1fr)",
					]}
					gap={4}
					my="10"
					alignItems="center"
				>
					{dataCards &&
						dataCards.map((item) => (
							<Link key={`CareerCards-${item.id}`} href={`${item.href}${item.id}`}>
								<Box
									w="100%"
									h={["400px", "400px", "400px", "450px", "400px"]}
									border="solid"
									borderColor="#F3F3F3"
									overflow="hidden"
									_hover={{
										boxShadow: "0px 10px 20px #F0F0F0",
									}}
								>
									<Flex w="100%" alignItems="flex-end" flexDir="column">
										<Flex
											bg={styles.background.light}
											clipPath="polygon(100% 0, 100% 51%, 100% 100%, 0 100%, 14% 51%, 0 0);"
											w="90px"
											h="30px"
											color="white"
											textAlign="center"
											justifyContent="center"
											alignItems="center"
											fontSize={styles.font.labelCost}
											zIndex="20"
											position="absolute"
											mt="5"
											fontFamily="sans-serif"
											fontWeight="solid"
										>
											<p>$</p>
											{item.costo}
										</Flex>
									</Flex>
									<Box overflow="hidden" h="65%">
										<Image
											src={item.src}
											h="100%"
											w="100%"
											position="relative"
											zIndex="15"
											_hover={{ transform: "scale(1.1)" }}
											objectFit="cover"
										/>
									</Box>
									<Flex
										h="25%"
										flexDir="column"
										textAlign="center"
										justifyContent="center !important"
									>
										<Text>{item.carrera}</Text>
									</Flex>
									<Flex
										bg="#F3F3F3"
										h="10%"
										justifyContent="space-between"
										alignItems="center"
									>
										<Flex ml="10" w="50%" alignItems="center">
											<Image
												src="/icons/user-friends.svg"
												w="15px"
												h="15px"
											/>
											<Text mx="1" fontSize="12px">
												0
											</Text>
											<Image
												ml="1"
												src="/icons/comments.svg"
												w="15px"
												h="15px"
											/>
											<Text mx="1" fontSize="12px">
												0
											</Text>
										</Flex>
										<Flex mr="10">
											{stars.map &&
												stars.map((item2) => (
													<Image
														key={`stars-${item2}`}
														ml="0.5"
														src="/icons/star.svg"
														w="13px"
														h="13px"
														filter="invert(73%) sepia(49%) saturate(692%) hue-rotate(354deg) brightness(104%) contrast(99%)"
													/>
												))}
										</Flex>
									</Flex>
								</Box>
							</Link>
						))}
				</Grid>
			</Center>
		</Box>
	);
};
CareerCards.propTypes = {
	data: PropTypes.arrayOf(PropTypes.any),
};

CareerCards.defaultProps = {
	data: [],
};

export default CareerCards;