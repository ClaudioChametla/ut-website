import Head from "next/head";
import {
	Flex,
	Center,
	Grid,
	GridItem,
	Spinner,
	Text,
	Image,
	Divider,
	Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Container from "../../components/Container";
import { HeroDynamic } from "../../components/Hero";
import List from "../../components/List";
import educativeOffer from "../../data/educativeOffer.json";
import SubContent from "../../components/SubContent";
import styles from "../../styles/styles.json";
import Gallery from "../../components/Gallery";

export default function Home() {
	const pageData = educativeOffer.find((item) => item.id === "especialidad-derecho-amparo");
	useEffect(() => {
		global.window.onload = function spinn() {
			const spinner = global.document.getElementById("spinner");
			spinner.style.visibility = "hidden";
			spinner.style.opacity = "0";
		};
	});
	return (
		<Flex flexDir="column">
			<Head>
				<title>UT - Oferta educativa</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Container>
				<HeroDynamic title={pageData ? pageData.carrera : "La página no existe"} />
				<Center w="100%" mt={["20px", "50px", "100px", "100px"]} mb="50px">
					<Grid
						w={styles.container.width}
						h="auto"
						templateColumns={styles.container.grid.column}
						templateRows={styles.container.grid.row}
						columnGap={5}
					>
						<GridItem
							rowStart={1}
							h={["200px", "300px", "400px", "600px"]}
							mb={["200px", "120px", "140px", "140px"]}
						>
							<Flex d="column" mb="30px">
								<Text fontSize={styles.font.title} mb="10px">
									{pageData ? pageData.carrera : ""}
								</Text>
								<Divider />
								<Flex align="center" mt="10px">
									<Image
										loading="lazy"
										src="/icons/bookmark.svg"
										boxSize="30px"
										filter="contrast(20%)"
									/>
									<Flex d="column" align="center">
										<Text
											fontSize={styles.font.littleText}
											fontWeight="bold"
											filter="contrast(20%)"
										>
											Nivel
										</Text>
										<Text
											fontSize={styles.font.littleText}
											textTransform="uppercase"
											fontWeight="bold"
											filter="contrast(60%)"
										>
											{pageData ? pageData.nivel : ""}
										</Text>
									</Flex>
									<Divider orientation="vertical" m="0 20px 0 20px" h="40px" />
									<Spacer />
									<Text
										fontSize={styles.font.title}
										color="#00489e"
										fontWeight="semibold"
									>
										$ {pageData ? pageData.costo : ""}
									</Text>
								</Flex>
							</Flex>
							<Gallery pageData={pageData} />
						</GridItem>
						<GridItem h="auto" rowStart={2}>
							<List pageData={pageData} />
						</GridItem>
						<GridItem
							colSpan={1}
							py={["30px", "30px", "30px", "0px"]}
							rowSpan={[1, 1, 1, 2]}
							rowStart={[3, 3, 3, 1]}
							h="auto"
						>
							<Center w="100%">
								<SubContent />
							</Center>
						</GridItem>
					</Grid>
				</Center>
				<Flex
					zIndex="1000"
					bg="white"
					position="fixed"
					w="100%"
					h="100%"
					alignItems="center"
					justifyContent="center"
					id="spinner"
				>
					<Spinner
						thickness="6px"
						speed="0.65s"
						emptyColor="white"
						color="blue.500"
						w="120px"
						h="120px"
						position="absolute"
					/>

					<Spinner
						thickness="6px"
						speed="0.95s"
						emptyColor="white"
						color="blue.500"
						w="100px"
						h="100px"
						position="fixed"
					/>
					<Spinner
						thickness="8px"
						speed="0.85s"
						emptyColor="white"
						color="blue.500"
						w="70px"
						h="70px"
						position="fixed"
					/>
				</Flex>
			</Container>
		</Flex>
	);
}
