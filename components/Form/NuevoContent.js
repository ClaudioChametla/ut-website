/* eslint-disable react/no-array-index-key */
import { Text, Stack, Image, Center, Box } from "@chakra-ui/react";
import Form from "./Form";
import styles from "../../styles/styles.json";

const nuevoContent = () => (
	<Center
		fontFamily={styles.font.fontFamily}
		marginLeft={["50px", "0", "0", "0"]}
		marginTop="50px"
		marginBottom="50px"
	>
		<Stack>
			<Center>
				<Stack
					_hover={{
						cursor: "pointer",
						filter: "invert(100%) sepia(92%) saturate(1247%) hue-rotate(191deg) brightness(90%) contrast(94%)",
					}}
					flexDirection={["row", "row", "column", "column"]}
				>
					<Box
						filter={["none", "none", "invert(100%)", "invert(100%)"]}
						rounded={["none", "none", "full", "full"]}
						p="5"
						bg={["none", "none", "pink.500", "pink.500"]}
						boxSize="100px"
					>
						<Image src="/icons/verify.svg" />
					</Box>
					<Text
						paddingTop={["25px", "25px", "0", "0"]}
						paddingBottom={["0", "0", "25px", "25px"]}
						paddingRight={["50px", "50px", "none", "none"]}
						color={["none", "none", "green.500", "green.500"]}
						fontSize={["18px", "18px", "20px", "20px"]}
					>
						REGISTRO
					</Text>
				</Stack>
			</Center>

			<Stack flexDirection={["column", "column", "row", "row"]}>
				<Stack m={["0", "0", "50px", "50px"]} w={["90%", "80%", "70%", "50%"]}>
					<Text textAlign="justify" color="#666666">
						Inicia o continua tu preparación superior adquiriendo conocimientos teóricos
						y prácticos mediante el compromiso en la enseñanza de los profesores
						calificados y el respaldo de una institución de trayectoria y adaptación al
						cambio que busca crear profesionistas que puedan vivir haciendo lo que más
						les gusta.
					</Text>
					<Form />
				</Stack>
				<Center w={["90%", "80%", "70%", "50%"]}>
					<Image
						w={["345px", "400px", "450px", "600px"]}
						h="auto"
						src="/images/nuevoingresoright.jpg"
					/>
				</Center>
			</Stack>
		</Stack>
	</Center>
);

export default nuevoContent;
