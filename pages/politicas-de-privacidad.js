/* eslint-disable prettier/prettier */
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import ContainerPage from "../components/Container";
import { SubHero } from "../components/Hero";
import BarRoute from "../components/BarRoute/BarRoute";
import Politycs from "../components/Politycs/Politycs";

export default function Politicas() {
	return (
		<Flex flexDir="column">
			<Head>
				<title>UT - Politicas de Privacidad</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ContainerPage>
				<SubHero title="POLITICAS DE PRIVACIDAD" src="/images/bg_politicas.jpg" />
				<BarRoute />
				<Politycs />
			</ContainerPage>
		</Flex>
	);
}
