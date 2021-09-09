/* eslint-disable react/no-array-index-key */
import {
	Text,
	Stack,
	FormControl,
	Input,
	Select,
	Image,
	Center,
	Flex,
	Button,
} from "@chakra-ui/react";
import educativeOffer from "../../data/educativeOffer.json";

const forms = () => {
	const carrera = educativeOffer;
	return (
		<Flex marginLeft={["50px", "0", "0", "0"]} marginTop="50px" marginBottom="50px">
			<Stack>
				<Center>
					<Image
						_hover={{ cursor: "pointer", filter: "brightness(60%)" }}
						boxSize="100px"
						src="/icons/verify.svg"
					/>
				</Center>

				<Stack flexDirection={["column", "column", "row", "row"]}>
					<Stack
						marginLeft={["0", "0", "50px", "50px"]}
						marginRight={["0", "0", "50px", "50px"]}
						w={["90%", "80%", "70%", "60%"]}
					>
						<Text textAlign="justify" fontFamily="monserrat" color="#666666">
							Inicia o continua tu preparación superior adquiriendo conocimientos
							teóricos y prácticos mediante el compromiso en la enseñanza de los
							profesores calificados y el respaldo de una institución de trayectoria y
							adaptación al cambio que busca crear profesionistas que puedan vivir
							haciendo lo que más les gusta.
						</Text>
						<FormControl id="registro" isRequired>
							<Input variant="flushed" placeholder="* Nombre: " />
							<Input variant="flushed" placeholder="* Apellido Paterno: " />
							<Input variant="flushed" placeholder="* Apellido Materno: " />
							<Input variant="flushed" placeholder="* Correo: " />
							<Input variant="flushed" placeholder="* WhatsApp(10 Dígitos): " />
						</FormControl>
						<FormControl id="Carrera">
							<Select variant="flushed" placeholder="---">
								{carrera.map((item, index) => (
									<option key={`option-${index}`}> {item.carrera}</option>
								))}
							</Select>
						</FormControl>
						<Button boxSize="60px"> Enviar </Button>
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
		</Flex>
	);
};

export default forms;
