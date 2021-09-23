/* eslint-disable react/jsx-props-no-spreading */
import Head from "next/head";
import {
	Flex,
	AspectRatio,
	Center,
	Box,
	Text,
	Divider,
	Link,
	Image,
	HStack,
	Button,
	Input,
	Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ContainerPage from "../components/Container";
import styles from "../styles/styles.json";
import footerSN from "../data/footerSN.json";

export default function Contacto() {
	const [validation, setValidation] = useState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = () => {
		setValidation(true);
	};

	useEffect(() => {
		if (errors.nombre || errors.email || errors.asunto || errors.mensaje) {
			// console.log(data);
			return setValidation(false);
		}
		return null;
	}, [errors.nombre, errors.email, errors.asunto, errors.mensaje]);
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
				<title>UT - Contacto</title>
				<meta name="description" content="Universidad Tollancingo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ContainerPage>
				<Center w="100%" pt={["80px", "80px", "80px", "150px"]} flexDir="column">
					<AspectRatio
						h="250px"
						w={["100%", "100%", "100%", styles.container.width, styles.container.width]}
						zIndex="0"
					>
						<iframe
							title="UniversidadVideo"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.4971215831015!2d-98.36871086995131!3d20.07370352687888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d056f1c38304d9%3A0x7baaa5e3333fe8dd!2sUniversidad%20Tollancingo.!5e0!3m2!1ses-419!2smx!4v1594598872889!5m2!1ses-419!2smx"
							alt="demo"
						/>
					</AspectRatio>
					<Flex
						w={["100%", "100%", styles.container.width, styles.container.width]}
						zIndex="50"
						flexDir={["column", "column", "column", "row"]}
					>
						<Box w={["100%", "100%", "100%", "75%"]} h="auto" p="5">
							<Text fontFamily={styles.font.fontFamily}>CONTÁCTANOS</Text>
							<Divider my="3" />
							<Text
								fontSize="14px"
								color={styles.font.color}
								fontFamily={styles.font.fontFamily}
							>
								Mándanos tus dudas y con gusto nuestros asesores te antenderán.
							</Text>
							<Flex fontFamily={styles.font.fontFamily} mt="5">
								<form onSubmit={handleSubmit(onSubmit)}>
									<Flex flexDirection="column">
										<Input
											id="name"
											{...register("nombre", { required: true })}
											variant="flushed"
											w={["100%", "100%", "100%", "60%"]}
											type="text"
											placeholder="* Nombre: "
										/>
										{/* errors will return when field validation fails  */}
										{errors.nombre && (
											<Text color="red"> Este campo es requerido.</Text>
										)}
										<Input
											id="email"
											{...register("email", { required: true })}
											variant="flushed"
											w={["100%", "100%", "100%", "60%"]}
											type="email"
											placeholder="* Email: "
										/>
										{errors.email && (
											<Text color="red"> Este campo es requerido.</Text>
										)}
										<Input
											id="asunto"
											{...register("asunto", { required: true })}
											variant="flushed"
											w={["100%", "100%", "100%", "60%"]}
											type="text"
											placeholder="* Asunto: "
										/>
										{errors.asunto && (
											<Text color="red"> Este campo es requerido.</Text>
										)}
										<Input
											id="mensaje"
											{...register("mensaje", { required: true })}
											variant="flushed"
											w={["100%", "100%", "100%", "60%"]}
											type="text"
											placeholder="* Mensaje: "
										/>
										{errors.mensaje && (
											<Text color="red"> Este campo es requerido.</Text>
										)}

										<Button
											bg="#0D47A1"
											_hover={{ color: "#FFFFFF", filter: "brightness(88%)" }}
											color="white"
											type="submit"
											fontWeight="none"
											my="5"
											w={["100%", "100%", "100%", "20%"]}
										>
											ENVIAR
										</Button>
										{validation === false && (
											<Flex
												border="1px"
												borderColor="orange"
												alignItems="center"
												w="100%"
												h="40px"
												mb="5"
												fontSize={["12px", "13px", "13px", "14px"]}
											>
												<Text color="#666" mx="2">
													Uno o más campos tienen un error. Por favor
													revíselo y reinténtelo.
												</Text>
											</Flex>
										)}
										{validation === true && (
											<Flex
												border="1px"
												borderColor="green"
												alignItems="center"
												w="100%"
												h="40px"
												mb="5"
												fontSize={["12px", "13px", "13px", "14px"]}
											>
												<Text color="#666" ml="3">
													Gracias por tu mensaje. Ha sido enviado.
												</Text>
											</Flex>
										)}
										<Text color="#666" fontSize="14px">
											Al hacer clic en “ENVIAR”, reconoces haber leído las
											<Link
												href="/politicas-de-privacidad"
												mx="1"
												color={styles.background.light}
												fontWeight="bold"
												_hover={{
													textDecoration: "none",
												}}
												_focus={{
													boxShadow: "none",
												}}
											>
												Políticas de Privacidad
											</Link>
											y confirmas estar de acuerdo con el uso de ellas.
										</Text>
									</Flex>
								</form>
							</Flex>
						</Box>
						<Flex flexDir="column" w={["100%", "100%", "100%", "25%"]} h="auto" p="5">
							<Box w="100%">
								<Text fontFamily={styles.font.fontFamily}>TELEFONO</Text>
								<Divider my="3" />
								<Text
									color={styles.font.color}
									fontSize="12px"
									fontFamily={styles.font.fontFamily}
								>
									TEL : 775.753.39.74
								</Text>
								<Text
									color={styles.font.color}
									fontSize="12px"
									fontFamily={styles.font.fontFamily}
								>
									TEL : 775.753.21.57
								</Text>
							</Box>
							<Box w="100%" my="10">
								<Text fontFamily={styles.font.fontFamily}>DIRECCIÓN</Text>
								<Divider my="3" />
								<Link
									href="https://www.google.com.mx/maps/dir//Universidad+Tollancingo.,+Calle+Jes%C3%BAs+Morales+109,+Plan+de+Ayala,+43690+Tulancingo+de+Bravo,+Hgo./@20.0736479,-98.3699664,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85d056f1c38304d9:0x7baaa5e3333fe8dd!2m2!1d-98.3677723!2d20.0736429"
									fontFamily={styles.font.fontFamily}
									color={styles.font.color}
									_hover={{
										textDecoration: "none",
										color: "blue",
									}}
									_focus={{
										boxShadow: "none",
									}}
									fontSize="12px"
								>
									Calle Jesús Morales 109 Col. Plan de Ayala C.P. 43690 Tulancingo
									de Bravo, Hgo.
								</Link>
							</Box>
							<Box w="100%">
								<Text fontFamily={styles.font.fontFamily}>EMAIL</Text>
								<Divider my="3" />
								<Text
									color={styles.font.color}
									fontSize="11px"
									fontFamily={styles.font.fontFamily}
									mb="10"
								>
									info@universidadtollancingo.com
								</Text>
							</Box>
							<Box flexDir="row">
								<Divider />

								<HStack pt="5">
									{footerSN &&
										footerSN.socialNetworks.map((item) => (
											<Link
												href={item.link}
												key={`Link-${item.img}`}
												bg={item.bg}
											>
												<Image
													m="2"
													key={`Img-${item.img}`}
													src={item.img}
													alt=""
													h="20px"
													w="20px"
													filter={item.filter}
												/>
											</Link>
										))}
								</HStack>
							</Box>
						</Flex>
					</Flex>
				</Center>
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
			</ContainerPage>
		</Flex>
	);
}
