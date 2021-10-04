import Head from "next/head";
import { Flex, Text, Image, Link } from "@chakra-ui/react";
import Container from "../components/Container";
import styles from "../styles/styles.json";

export default function Custom404() {
	return (
		<Container>
			<Head>
				<title>404 - Universidad Tollancingo </title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Flex
				h="90vh"
				w="100%"
				justifyContent="center"
				textAlign="center"
				alignItems="center"
				flexDir="column"
			>
				<Image src="images/logoBlack.webp" htmlWidth="100px" htmlHeight="110px" />
				<Text fontSize="40px" _hover={{ color: "red" }} mb="3">
					404 - Pagina No Encotrada
				</Text>
				<Link
					href="/"
					px="3"
					py="2"
					borderRadius="10"
					bg={styles.background.light}
					color="whiteAlpha.900"
					_hover={{ textDecoration: "none", opacity: ".9" }}
					fontWeight="bold"
				>
					Volver a Inicio
				</Link>
			</Flex>
		</Container>
	);
}
