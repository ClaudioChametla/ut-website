import Head from "next/head";
import { Flex, Center, Grid, GridItem } from "@chakra-ui/react";
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

	return (
		<Flex flexDir="column">
			<Head>
				<title>UT - Oferta educativa</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
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
			</Container>
		</Flex>
	);
}
