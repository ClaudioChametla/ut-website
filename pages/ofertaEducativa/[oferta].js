import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import { HeroDynamic } from "../../components/Hero";
import List from "../../components/List";
import educativeOffer from "../../data/educativeOffer.json";

export default function Home() {
	const router = useRouter();
	const { oferta } = router.query;

	const pageData = educativeOffer.find((item) => item.id === oferta);
	console.log(JSON.stringify(pageData));

	return (
		<Flex flexDir="column">
			<Head>
				<title>UT - Oferta educativa</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<HeroDynamic title={pageData ? pageData.carrera : "La página no existe"} />
				<List pageData={pageData} />
			</Container>
		</Flex>
	);
}
