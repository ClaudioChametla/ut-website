import {
	Center,
	Box,
	WrapItem,
	Wrap,
	Text,
	VStack,
	HStack,
	IconButton,
	Divider,
	Link,
	Image,
} from "@chakra-ui/react";
import styles from "../../styles/styles.json";

const Footer = () => (
	<Center w="100%" bg="#25282e">
		<Box w={styles.container.width} h="auto" bottom="0" bg="#25282e" fontFamily="Montserrat">
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
				rel="stylesheet"
			/>
			<Wrap justify="space-between" m="20px" pt="100px">
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
						<Link href="https://www.facebook.com/universidadtollancingo" bg="#3b5998">
							<Image
								m="2"
								src="/icons/facebook-f.svg"
								alt=""
								h="20px"
								w="20px"
								filter="invert(99%)"
							/>
						</Link>
						<Link href="https://www.facebook.com/universidadtollancingo" bg="#e52d27">
							<Image
								m="2"
								src="/icons/youtube.svg"
								alt=""
								h="20px"
								w="20px"
								filter="invert(99%)"
							/>
						</Link>
						<Link
							href="https://www.instagram.com/universidadtollancingooficial/"
							bg="#e03b6a"
						>
							<Image
								m="2"
								src="/icons/instagram.svg"
								alt=""
								h="20px"
								w="20px"
								filter="invert(99%)"
							/>
						</Link>
					</HStack>
				</VStack>
				<Box w="300px" h="auto" align="strench">
					<Text ml="15px" color="white" fontSize={styles.font.subtitle}>
						Oferta Educativa
					</Text>
					<Divider w="80px" />
					<VStack spacing={6} mt="6" w="300px">
						<HStack w="100%" fontSize="16px">
							<Image src="/images/30-Gast-76x65.jpg" w="60px" h="60px" />
							<Text w="200px">
								<Link href="#" color="white">
									ESPECIALIDAD EN GASTRONOMÍA
								</Link>
							</Text>
						</HStack>
						<Divider />
						<HStack w="100%">
							<Image src="/images/30-Conta-76x65.jpg" w="60px" h="60px" />
							<Text w="200px">
								<Link href="#" color="white">
									LICENCIATURA EN CONTADURIA
								</Link>
							</Text>
						</HStack>
						<Divider />
						<HStack w="100%">
							<Image src="/images/background_video-76x65.jpg" w="60px" h="60px" />
							<Text w="200px">
								<Link href="#" color="white">
									INSCRIPCIONES
								</Link>
							</Text>
						</HStack>
					</VStack>
				</Box>
				<Box w="300px" h="auto">
					<Text ml="15px" color="white" fontSize={styles.font.subtitle}>
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
								<Link href="#" color="white" ml="6px">
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
								<Link href="#" color="white" ml="6px">
									775.753.21.57
								</Link>
							</Center>
						</Center>
					</HStack>
					<HStack align="stretch" mt="25px">
						<Center>
							<Image src="/icons/envelope.svg" boxSize="20px" filter="invert(99%)" />
							<Center>
								<Link href="#" color="white" ml="5px">
									info@universidadtollancingo.com
								</Link>
							</Center>
						</Center>
					</HStack>
				</Box>
				<Box w="300px" h="80px">
					<Text ml="15px" color="white" fontSize={styles.font.subtitle}>
						Instalaciones
					</Text>
					<Divider w="80px" />
				</Box>
			</Wrap>
		</Box>
	</Center>
);

export default Footer;
