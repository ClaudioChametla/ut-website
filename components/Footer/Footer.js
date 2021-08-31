/* eslint-disable react/no-array-index-key */
import {
	Center,
	Box,
	Wrap,
	Text,
	VStack,
	HStack,
	Divider,
	Link,
	Image,
	WrapItem,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "../../styles/styles.json";
import stylesTwo from "../../styles/stylesTwo.json";
import footerSN from "../../data/footerSN.json";

const Modalcomponent = ({ dataModal, isOpen, onClose }) => (
	<div>
		<Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
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
				<ModalBody maxH="90vh">
					<Image
						objectFit="cover"
						src={dataModal.img ? dataModal.img : ""}
						w="100%"
						h="auto"
					/>
					<Text textAlign="center" fontSize={styles.font.text} fontWeight="bold">
						{dataModal.title ? dataModal.title : ""}
					</Text>
				</ModalBody>
			</ModalContent>
		</Modal>
	</div>
);

const Footer = () => {
	const { socialNetworks, instalaciones } = footerSN;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [dataModal, setDataModal] = useState({});
	const action = (item) => {
		setDataModal(item);
		return onOpen;
	};
	return (
		<div>
			<Center w="100%" bg="#25282e" fontSize={["85%", "", "", ""]}>
				<Box
					w={stylesTwo.containerFooter.width}
					h="auto"
					bottom="0"
					fontFamily="Montserrat"
					pt="100px"
					pb="70px"
				>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
						rel="stylesheet"
					/>
					<Wrap justify="center" m="20px" spacing={4}>
						<VStack w="300px" h="auto" spacing={4} align="stretch">
							<Image
								src="/images/monograma-128x161.png"
								alt=""
								w="128px"
								h="161px"
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
										src="/images/30-Gast-76x65.jpg"
										boxSize={["50px", "60px", "60px", "60px"]}
									/>
									<Text
										w={["", "200px", "200px", "200px"]}
										fontSize={styles.font.text}
									>
										<Link
											href="#"
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
										src="/images/30-Conta-76x65.jpg"
										boxSize={["50px", "60px", "60px", "60px"]}
									/>
									<Text w="200px" fontSize={styles.font.text}>
										<Link
											href="#"
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
										src="/images/background_video-76x65.jpg"
										boxSize={["50px", "60px", "60px", "60px"]}
									/>
									<Text w="200px" fontSize={styles.font.text}>
										<Link
											href="#"
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
										src="/icons/phone-alt.svg"
										w="20px"
										h="20px"
										filter={styles.icons.gray}
									/>
									<Center>
										<Link
											href="#"
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
										src="/icons/phone-alt.svg"
										w="20px"
										h="20px"
										filter="invert(99%)"
									/>
									<Center>
										<Link
											href="#"
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
										src="/icons/envelope.svg"
										boxSize="20px"
										filter="invert(99%)"
									/>
									<Center>
										<Link
											href="#"
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
													key={`ImgFooter-${item.title}-${index}`}
													src={item.img}
													_hover={{ filter: "brightness(60%)" }}
													boxSize={["80px", "85px", "85px", "85px"]}
													onClick={() => action(item)}
													objectFit="cover"
												/>
											</Box>
										))}
								</Grid>
							</Center>
						</Box>
					</Wrap>
				</Box>
			</Center>
			<Box
				w="100%"
				h="auto"
				bottom="0"
				bg="#1f2227"
				fontFamily="Montserrat"
				pt="50px"
				pb="20px"
			>
				<Text textAlign="center" color="whiteAlpha.500" fontSize={styles.font.text}>
					©2020 UNIVERSIDAD TOLLANCINGO | TODOS LOS DERECHOS RESERVADOS. | POWERED BY
					<Link href="#" color="blue.400">
						{" "}
						ZENIAQ TECHNOLOGIES
					</Link>
					.
				</Text>
			</Box>
			<Modalcomponent dataModal={dataModal} isOpen={isOpen} onClose={onClose} />
		</div>
	);
};

export default Footer;
