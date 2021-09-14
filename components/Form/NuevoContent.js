/* eslint-disable react/no-array-index-key */
import { Text, Stack, Image, Center, Flex, Box } from "@chakra-ui/react";
import Form from "./Form";

const nuevoContent = () => (
	<Center marginLeft={["50px", "0", "0", "0"]} marginTop="50px" marginBottom="50px">
		<Stack>
			<Center>
				<Box
					filter="invert(62%) sepia(53%) saturate(382%) hue-rotate(73deg) brightness(96%) contrast(87%)"
					_hover={{
						cursor: "pointer",
						filter: "invert(28%) sepia(73%) saturate(1955%) hue-rotate(197deg) brightness(88%) contrast(88%)",
					}}
					boxSize="100px"
					marginBottom="100px"
				>
					<Image src="/icons/verify.svg" />
					<Text>REGISTRO</Text>
				</Box>
			</Center>

			<Stack flexDirection={["column", "column", "row", "row"]}>
				<Stack
					marginLeft={["0", "0", "50px", "50px"]}
					marginRight={["0", "0", "50px", "50px"]}
					w={["90%", "80%", "70%", "60%"]}
				>
					<Text textAlign="justify" fontFamily="monserrat" color="#666666">
						Inicia o continua tu preparación superior adquiriendo conocimientos teóricos
						y prácticos mediante el compromiso en la enseñanza de los profesores
						calificados y el respaldo de una institución de trayectoria y adaptación al
						cambio que busca crear profesionistas que puedan vivir haciendo lo que más
						les gusta.
					</Text>
					<Form />
				</Stack>
				<Center
					marginLeft={["0", "0", "50px", "50px"]}
					marginRight={["0", "0", "100px", "100px"]}
					w={["90%", "80%", "70%", "60%"]}
				>
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
