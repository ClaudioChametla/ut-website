import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import { SubHero } from "../components/Hero";
import BarRoute from "../components/BarRoute/BarRoute";
import Forms from "../components/Forms/Forms";

export default function Home() {
	return (
		<Flex flexDir="column">
			<Head>
				<title>UT - Nuevo Ingreso </title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<SubHero title="NUEVO INGRESO" src="/images/nuevoingresobg.jpg" />
				<BarRoute />
				<Forms />
			</Container>
		</Flex>
	);
}
