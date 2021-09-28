import { Box, Stack, Text, Image, Divider, Link, VStack, HStack, Flex } from "@chakra-ui/react";
import styles from "../../styles/styles.json";
import MiniMap from "./MiniMap";
import footerSN from "../../data/footerSN.json";
import oferta from "../../data/educativeOffer.json";

const SubContent = () => {
	const { socialNetworks } = footerSN;
	const i = Math.floor(Math.random() * (4 - 0)) + 0;
	const i1 = Math.floor(Math.random() * (8 - 4)) + 4;
	const i2 = Math.floor(Math.random() * (9 - 6)) + 6;

	return (
		<Flex>
			<Stack>
				<Text fontSize="18px" color="#999999">
					Redes Sociales
				</Text>
				<Divider w="50px" />
				<Stack flexDirection="row">
					<HStack align="center" justify="center">
						{socialNetworks &&
							socialNetworks.map((item) => (
								<Link
									href={item.link}
									key={`Link-${item.img}`}
									bg={item.bg}
									_hover={{ filter: "brightness(60%)" }}
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
				</Stack>
				<Box w={["95%", "300px", "300px", "300px"]} h="auto" align="strench">
					<Text fontSize="18px" color="#999999">
						Otras Carreras
					</Text>
					<Divider w="50px" />
					<VStack spacing={6} mt="6" w={["100%", "100%", "300px", "300px"]}>
						<HStack w="100%">
							<Image src={oferta[i].src} boxSize={["50px", "60px", "60px", "60px"]} />
							<Text w="200px" fontSize={styles.font.text}>
								<Link
									href={oferta[i].href}
									_hover={{ textDecoration: "none", color: "blue.500" }}
									_focus={{ boxShadow: "none" }}
								>
									{oferta[i].carrera}
								</Link>
							</Text>
						</HStack>
						<Divider />
						<HStack w="100%">
							<Image
								src={oferta[i1].src}
								boxSize={["50px", "60px", "60px", "60px"]}
							/>
							<Text w="200px" fontSize={styles.font.text}>
								<Link
									href={oferta[i1].href}
									_hover={{ textDecoration: "none", color: "blue.500" }}
									_focus={{ boxShadow: "none" }}
								>
									{oferta[i1].carrera}
								</Link>
							</Text>
						</HStack>
						<Divider />
						<HStack w="100%">
							<Image
								src={oferta[i2].src}
								boxSize={["50px", "60px", "60px", "60px"]}
							/>
							<Text w="200px" fontSize={styles.font.text}>
								<Link
									href={oferta[i2].href}
									_hover={{ textDecoration: "none", color: "blue.500" }}
									_focus={{ boxShadow: "none" }}
								>
									{oferta[i2].carrera}
								</Link>
							</Text>
						</HStack>
					</VStack>
				</Box>
				<Box w={["95%", "300px", "300px", "300px"]}>
					<Text fontSize="18px" color="#999999">
						Noticias Recientes
					</Text>
					<Divider w="50px" />
					<Stack marginTop="5" flexDirection="row">
						<Image marginRight="5" boxSize="80px" src="/images/mtra_nadia.png" />
						<Stack>
							<Text fontSize="12px" color="#333333">
								LA CRISIS Y LA RUPTURA EN LA SOCIEDAD A PARTIR DE LA PANDEMIA
							</Text>
							<Text fontSize="13px" color="#999999">
								22/07/2021
							</Text>
						</Stack>
					</Stack>
					<Stack flexDirection="row">
						<Stack>
							<Text fontSize="12px" color="#333333">
								ANÁLISIS DEL MITO PREHISPÁNICA DE “EL NACIMIENTO DE HUITZILOPOCHTLI”
								Y SU REFLEJO EN LA SOCIEDAD MEXICANA
							</Text>
							<Text fontSize="13px" color="#999999">
								25/11/2020
							</Text>
						</Stack>
					</Stack>
					<Stack flexDirection="row">
						<Image marginRight="5" boxSize="80px" src="/images/kda.jpg" />
						<Stack>
							<Text fontSize="12px" color="#333333">
								YO ME QUIERO Y ACEPTO COMO SOY: MANEJO DE AUTOESTIMA EN NIÑOS, NIÑAS
								Y ADOLESCENTES
							</Text>
							<Text fontSize="13px" color="#999999">
								25/11/2020
							</Text>
						</Stack>
					</Stack>
				</Box>
				<Text fontSize="18px" color="#999999">
					Galería
				</Text>
				<Divider w="50px" />
				<MiniMap />
			</Stack>
		</Flex>
	);
};
export default SubContent;
