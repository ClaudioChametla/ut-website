/* eslint-disable react/no-array-index-key */
import {
	Center,
	Box,
	Flex,
	Text,
	VStack,
	HStack,
	Divider,
	Link,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Grid,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "../../styles/styles.json";
import stylesTwo from "../../styles/stylesTwo.json";
import footerSN from "../../data/footerSN.json";

const Footer = () => {
	const { socialNetworks, instalaciones } = footerSN;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [dataModal, setDataModal] = useState(0);

	const nextScroll = () => {
		if (dataModal === instalaciones.length - 1) {
			setDataModal(0);
		} else {
			setDataModal(dataModal + 1);
		}
	};

	const prevScroll = () => {
		if (dataModal === 0) {
			setDataModal(instalaciones.length - 1);
		} else {
			setDataModal(dataModal - 1);
		}
	};

	return (
		<>
			<Center w="100%" bg="#25282e" fontSize={["85%", "", "", ""]}>
				<Box
					w={stylesTwo.containerFooter.width}
					h="auto"
					bottom="0"
					fontFamily={styles.font.fontFamily}
					pt="100px"
					pb="70px"
				>
					<Flex flexWrap="wrap" justify="center" m="20px" spacing={4}>
						<VStack w="300px" h="auto" spacing={4} align="stretch">
							<Image
								loading="lazy"
								src="/images/monograma-128x161.webp"
								alt="monograma"
								htmlWidth="128px"
								htmlHeight="161px"
								m="auto"
							/>
							<Text
								color="whiteAlpha.700"
								textAlign="center"
								lineHeight={8}
								fontSize={styles.font.text}
							>
								Hoy el espíritu UT se manifiesta a través del ser perseverante, la
								disciplina y el trabajo.
							</Text>
							<HStack align="center" justify="center">
								{socialNetworks &&
									socialNetworks.map((item) => (
										<Link
											href={item.link}
											key={`Link-${item.img}`}
											bg={item.bg}
											_hover={{ bg: "whiteAlpha.800" }}
										>
											<Image
												loading="lazy"
												m="2"
												key={`Img-${item.img}`}
												src={item.img}
												alt="socialNetworks"
												filter={item.filter}
												boxSize="20px"
												htmlHeight="20px"
												htmlWidth="20px"
											/>
										</Link>
									))}
							</HStack>
						</VStack>
						<Box w={["95%", "300px", "300px", "300px"]} h="auto" align="strench">
							<Text
								ml={["", "", "", "15px"]}
								color="white"
								fontSize={styles.font.subtitle}
								textAlign={["center", "left", "left", "left"]}
							>
								Oferta Educativa
							</Text>
							<Divider w="80px" />
							<VStack spacing={6} mt="6" w={["100%", "100%", "300px", "300px"]}>
								<HStack w="100%">
									<Image
										loading="lazy"
										src="/images/30-Gast-76x65.webp"
										alt="gastronomia"
										htmlHeight={["50px", "60px", "60px", "60px"]}
										htmlWidth={["50px", "60px", "60px", "60px"]}
									/>
									<Text
										w={["", "200px", "200px", "200px"]}
										fontSize={styles.font.text}
									>
										<Link
											href="/"
											color="whiteAlpha.700"
											_hover={{ textDecoration: "none", color: "blue.500" }}
										>
											ESPECIALIDAD EN GASTRONOMÍA
										</Link>
									</Text>
								</HStack>
								<Divider />
								<HStack w="100%">
									<Image
										loading="lazy"
										src="/images/30-Conta-76x65.webp"
										alt="conta"
										htmlHeight={["50px", "60px", "60px", "60px"]}
										htmlWidth={["50px", "60px", "60px", "60px"]}
									/>
									<Text w="200px" fontSize={styles.font.text}>
										<Link
											href="/"
											color="whiteAlpha.700"
											_hover={{ textDecoration: "none", color: "blue.500" }}
										>
											LICENCIATURA EN CONTADURIA
										</Link>
									</Text>
								</HStack>
								<Divider />
								<HStack w="100%">
									<Image
										loading="lazy"
										src="/images/background_video-76x65.webp"
										alt="bgVideo"
										htmlHeight={["50px", "60px", "60px", "60px"]}
										htmlWidth={["50px", "60px", "60px", "60px"]}
									/>
									<Text w="200px" fontSize={styles.font.text}>
										<Link
											href="/"
											color="whiteAlpha.700"
											_hover={{ textDecoration: "none", color: "blue.500" }}
										>
											INSCRIPCIONES
										</Link>
									</Text>
								</HStack>
							</VStack>
						</Box>
						<Box w={["95%", "300px", "300px", "300px"]} h="auto" align="strench">
							<Text
								ml="15px"
								color="white"
								fontSize={styles.font.subtitle}
								textAlign={["center", "left", "left", "left"]}
							>
								Contacto
							</Text>
							<Divider w="80px" />
							<HStack align="stretch" mt="25px">
								<Center>
									<Image
										loading="lazy"
										src="/icons/phone-alt.svg"
										alt="phone"
										filter={styles.icons.gray}
										htmlHeight="20px"
										htmlWidth="20px"
									/>
									<Center>
										<Link
											href="/"
											color="whiteAlpha.700"
											ml="6px"
											_hover={{ textDecoration: "none", color: "blue.500" }}
										>
											775.753.39.74
										</Link>
									</Center>
								</Center>
							</HStack>
							<HStack align="stretch" mt="25px">
								<Center>
									<Image
										loading="lazy"
										src="/icons/phone-alt.svg"
										alt="phone"
										htmlHeight="20px"
										htmlWidth="20px"
										filter="invert(99%)"
									/>
									<Center>
										<Link
											href="/"
											color="whiteAlpha.700"
											ml="6px"
											_hover={{ textDecoration: "none", color: "blue.500" }}
										>
											775.753.21.57
										</Link>
									</Center>
								</Center>
							</HStack>
							<HStack align="stretch" mt="25px">
								<Center>
									<Image
										loading="lazy"
										src="/icons/envelope.svg"
										alt="envelope"
										filter="invert(99%)"
										htmlHeight="20px"
										htmlWidth="20px"
									/>
									<Center>
										<Link
											href="/"
											color="whiteAlpha.700"
											ml="5px"
											_hover={{ textDecoration: "none", color: "blue.500" }}
										>
											info@universidadtollancingo.com
										</Link>
									</Center>
								</Center>
							</HStack>
						</Box>
						<Box w={["95%", "300px", "300px", "300px"]} h="auto" align="strench">
							<Text
								ml="15px"
								color="white"
								fontSize={styles.font.subtitle}
								textAlign={["center", "left", "left", "left"]}
							>
								Instalaciones
							</Text>
							<Divider w="80px" />
							<Center pt="20px">
								<Grid templateColumns="repeat(3, 1fr)" gap={4}>
									{instalaciones &&
										instalaciones.map((item, index) => (
											<Box
												onClick={onOpen}
												key={`GridItemFooter-${item.title}-${index}`}
											>
												<Image
													loading="lazy"
													key={`ImgFooter-${item.title}-${index}`}
													alt="carreras"
													src={item.img}
													h="80px"
													w="80px"
													htmlHeight="100px"
													htmlWidth="100px"
													_hover={{ filter: "brightness(60%)" }}

													onClick={() => setDataModal(index)}
													objectFit="cover"
												/>
											</Box>
										))}
								</Grid>
							</Center>
						</Box>
					</Flex>
				</Box>
			</Center>
			<Box
				w="100%"
				h="auto"
				bottom="0"
				bg="#1f2227"
				fontFamily={styles.font.fontFamily}
				pt="50px"
				pb="20px"
			>
				<Text textAlign="center" color="whiteAlpha.500" fontSize={styles.font.text}>
					©2020 UNIVERSIDAD TOLLANCINGO | TODOS LOS DERECHOS RESERVADOS. | POWERED BY
					<Link href="/" color="blue.400">
						{" "}
						ZENIAQ TECHNOLOGIES
					</Link>
					.
				</Text>
			</Box>

			{instalaciones[dataModal] && (
				<Modal isOpen={isOpen} onClose={onClose} size="xl">
					<ModalOverlay />
					<ModalContent w="auto" h="auto" borderRadius="0">
						<ModalCloseButton
							position="absolute"
							top="0"
							right={["0", "0", "-50px", "-50px"]}
							boxSize="50px"
							bg="#0053B8"
							borderRadius="0"
							color="white"
							_focus={{ border: 0 }}
						/>
						<ModalBody h="auto">
							<Button
								h="50%"
								bg="none"
								transition="none"
								position="absolute"
								_hover={{ bg: "rgba(0,0,0,.1)" }}
								borderRadius="0deg"
								onClick={() => prevScroll()}
								_focus={{ boxShadow: "none" }}
								left="20px"
								top="25%"
							>
								<Image

									loading="lazy"
									transform="scale(2)"
									alt="chevronLeft"

									src="/icons/chevron-left.svg"
									filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
								/>
							</Button>
							<Button
								h="50%"
								bg="none"
								transition="none"
								position="absolute"
								_hover={{ bg: "rgba(0,0,0,.1)" }}
								borderRadius="0deg"
								onClick={() => nextScroll()}
								_focus={{ boxShadow: "none" }}
								right="20px"
								top="25%"
							>
								<Image

									loading="lazy"
									transform="scale(2)"
									alt="chevronRight"

									src="/icons/chevron-right.svg"
									filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
								/>
							</Button>
							<Image

								loading="lazy"
								objectFit="cover"
								alt="instalaciones"

								src={
									instalaciones[dataModal].img ? instalaciones[dataModal].img : ""
								}
								w="100%"
								h="auto"
							/>
							<Text textAlign="center" fontSize={styles.font.text} fontWeight="bold">
								{instalaciones[dataModal].title
									? instalaciones[dataModal].title
									: ""}
							</Text>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</>
	);
};

export default Footer;
