import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import { SubHero } from "../components/Hero";
import BarRoute from "../components/BarRoute/BarRoute";
import Vinculacion from "../components/Vinculacion";

export default function Home() {
	return (
		<Flex flexDir="column">
			<Head>
				<title>Vinculación - Universidad Tollancingo </title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<SubHero title="VINCULACIÓN" src="/images/vinculacionbg.jpg" />
				<BarRoute />
				<Vinculacion />
			</Container>
		</Flex>
	);
}
