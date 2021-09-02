import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Container from "../components/Container";
import { Hero } from "../components/Hero";
import Cards from "../components/Cards";
import CardStats from "../components/CardStats";
import HomeContent from "../components/HomeContent";

export default function Home() {
	return (
		<Flex flexDir="column">
			<Head>
				<title>UT</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Hero />

				<Cards />
				<HomeContent />
				<CardStats />
			</Container>
		</Flex>
	);
}
