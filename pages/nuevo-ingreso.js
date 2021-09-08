import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import { SubHero } from "../components/Hero";
import Tabs from "../components/Tabs";
import BarRoute from "../components/BarRoute/BarRoute";

export default function Home() {
	return (
		<Flex flexDir="column">
			<Head>
				<title>UT - Oferta educativa</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<SubHero title="NUEVO INGRESO" src="/images/bg_oferta.jpg" />
				<BarRoute />
			</Container>
		</Flex>
	);
}
