import { Flex, Image, Link, Box } from "@chakra-ui/react";

const Navbar = () => (
	<Flex
		w="100%"
		zIndex={999}
		h="90px"
		bg="#21478e"
		justifyContent="space-between"
		p="1"
		position="fixed"
		fontSize={["12px", "15px", "15px", "17px"]}
	>
		<Box
			d="flex"
			alignSelf="center"
			color="white"
			flexWrap="wrap"
			justifyContent="space-between"
			w="43%"
		>
			<Link paddingLeft={["0", "0", "0", "7"]} href="#">
				INICIO
			</Link>
			<Link href="#">CONÓCENOS</Link>
			<Link href="#">OFERTA EDUCATIVA</Link>
			<Link href="#">VINCULACIÓN</Link>
		</Box>

		<Box>
			<Link href="#" h="100%" d="flex" justifyContent="center">
				<Image
					src="logo_UT_FFF_100.png"
					alt="Logo"
					fallbackSrc="https://www.universidadtollancingo.com/wp-content/uploads/2020/07/logo_UT_FFF_100.png"
					h="100%"
					w="80%"
				/>
			</Link>
		</Box>
		<Box
			d="flex"
			alignSelf="center"
			color="white"
			flexWrap="wrap"
			justifyContent="space-between"
			w="43%"
		>
			<Link href="#">NUEVO INGRESO</Link>
			<Link href="#">BLOG</Link>
			<Link paddingRight="7" href="#">
				CONTACTO
			</Link>
		</Box>
	</Flex>
);

export default Navbar;
