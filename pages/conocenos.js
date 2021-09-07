import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import { SubHero } from "../components/Hero";
import BarRoute from "../components/BarRoute/BarRoute";

export default function Home() {
	return (
		<Flex flexDir="column">
			<Head>
				<title>UT - Conocenos</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<SubHero title="CONOCENOS" src="/images/bg_oferta.jpg" />
				<BarRoute />
			</Container>
		</Flex>
	);
}
