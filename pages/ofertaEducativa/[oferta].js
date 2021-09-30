import Head from "next/head";
import { Flex, Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import { HeroDynamic } from "../../components/Hero";
import List from "../../components/List";
import educativeOffer from "../../data/educativeOffer.json";
import SubContent from "../../components/SubContent";
import styles from "../../styles/styles.json";
import Gallery from "../../components/Gallery";

export default function Home() {
	const router = useRouter();
	const { oferta } = router.query;

	const pageData = educativeOffer.find((item) => item.id === oferta);
	useEffect(() => {
		global.window.onload = function () {
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
						<GridItem h={["250px", "300px", "400px", "500px"]} rowStart={1}>
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
