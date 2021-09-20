/* eslint-disable react/no-array-index-key */
import { Text, Image, Center, Box, Wrap, Flex } from "@chakra-ui/react";

import Form from "./Form";
import Logo from "./Logo";
import styles from "../../styles/styles.json";

const nuevoContent = () => (
	<Center p="10" fontFamily={styles.font.fontFamily} flexDirection="column">
		<Center
			m={["5", "5", "10", "10"]}
			w={["100%", "100%", "none", "none"]}
			h={["50px", "50px", "none", "none"]}
			borderTopRightRadius="full"
			borderTopLeftRadius="full"
			/* clipPath={[
				"ellipse(50% 100% at 50% 95%);",
				"ellipse(50% 100% at 50% 95%);",
				"none",
				"none",
			]} */
			bg={["gray.100", "gray.100", "none", "none"]}
		>
			<Logo />
		</Center>
		<Flex flexDirection={["column", "column", "row", "row"]}>
			<Box p="10" w={["100%", "100%", "50%", "50%"]} flexDirection="column">
				<Text textAlign="justify" color="#666666">
					Inicia o continua tu preparación superior adquiriendo conocimientos teóricos y
					prácticos mediante el compromiso en la enseñanza de los profesores calificados y
					el respaldo de una institución de trayectoria y adaptación al cambio que busca
					crear profesionistas que puedan vivir haciendo lo que más les gusta.
				</Text>
				<Form />

				<Text marginTop="8%" color="#666">
					Al hacer clic en “REGISTRARME”, reconoces haber leído las{" "}
					<a href="https://www.universidadtollancingo.com/politicas-de-privacidad/">
						{" "}
						<Text color="#0D47A1"> Políticas de Privacidad </Text>{" "}
					</a>{" "}
					y confirmas estar de acuerdo con el uso de ellas.{" "}
				</Text>
			</Box>
			<Wrap w={["100%", "100%", "50%", "50%"]} p="8">
				<Image src="/images/nuevoingresoright.jpg" />
			</Wrap>
		</Flex>
	</Center>
);

export default nuevoContent;
