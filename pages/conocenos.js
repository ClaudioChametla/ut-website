import Head from "next/head";
import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import Container from "../components/Container";
import { SubHero } from "../components/Hero";
import BarRoute from "../components/BarRoute/BarRoute";
import History from "../components/History";

export default function Home() {
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
				<title>UT - Conocenos</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<SubHero title="CONOCENOS" src="/images/banner_mural_negro-scaled.jpg" />
				<BarRoute />
				<History />
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
