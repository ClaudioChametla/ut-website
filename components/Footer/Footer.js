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

const Footer = () => (
	<Box w="100%" h="auto" bottom="0" bg="#25282e">
		<Wrap justify="space-between" m="30">
			<WrapItem>
				<VStack w="300px" h="auto" spacing={4} align="stretch">
					<Box bg="blue.400" h="272px" w="161px" m="auto" />
					<Text color="whiteAlpha.700">
						Hoy el espíritu UT se manifiesta a través del ser perseverante, la
						disciplina y el trabajo.
					</Text>
					<HStack>
						<IconButton borderRadius="0" colorScheme="blue" />
						<IconButton borderRadius="0" colorScheme="red" />
						<IconButton borderRadius="0" colorScheme="pink" />
					</HStack>
				</VStack>
			</WrapItem>
			<WrapItem>
				<Box w="300px" h="auto" align="strench">
					<Text fontWeight="bold" ml="15px" color="white" fontSize="1.3em">
						Oferta Educativa
					</Text>
					<Divider w="80px" />
					<VStack spacing={8} mt="6" w="300px" bg="red">
						<HStack w="100%">
							<Image w="60px" h="60px" bg="blue">
								I
							</Image>
							<Box>
								<Link href="#" color="white">
									ESPECIALIDAD EN GASTRONOMÍA
								</Link>
							</Box>
						</HStack>
						<Divider />
						<HStack w="100%">
							<Box w="60px" h="60px" bg="blue">
								I
							</Box>
							<Text w="200px">
								<Link href="#" color="white">
									ESPECIALIDAD EN PSICOLOGÍA EDUCATIVA
								</Link>
							</Text>
						</HStack>
						<Divider />
						<HStack w="100%">
							<Box w="60px" h="60px" bg="blue">
								I
							</Box>
							<Box>
								<Link href="" color="white">
									LICENCIATURA EN ARQUITECTURA
								</Link>
							</Box>
						</HStack>
					</VStack>
				</Box>
			</WrapItem>
			<WrapItem>
				<Box w="300px" h="80px">
					<Text fontWeight="bold" ml="15px" color="white" fontSize="1.3em">
						Contacto
					</Text>
					<Divider w="80px" />
					<HStack align="stretch" mt="25px">
						<Center>
							<Center w="40px" h="40px" bg="blue" />
							<Center>
								<Link href="#" color="white">
									775.753.39.74
								</Link>
							</Center>
						</Center>
					</HStack>
					<HStack align="stretch" mt="25px">
						<Center>
							<Center w="40px" h="40px" bg="blue" />
							<Center>
								<Link href="#" color="white">
									775.753.21.57
								</Link>
							</Center>
						</Center>
					</HStack>
					<HStack align="stretch" mt="25px">
						<Center>
							<Center w="40px" h="40px" bg="blue" />
							<Center>
								<Link href="#" color="white">
									info@universidadtollancingo.com
								</Link>
							</Center>
						</Center>
					</HStack>
				</Box>
			</WrapItem>
			<WrapItem>
				<Box w="300px" h="80px">
					<Text fontWeight="bold" ml="15px" color="white" fontSize="1.3em">
						Instalaciones
					</Text>
					<Divider w="80px" />
				</Box>
			</WrapItem>
		</Wrap>
	</Box>
);

export default Footer;
