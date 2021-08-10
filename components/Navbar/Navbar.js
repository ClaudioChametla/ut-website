import { Flex, Image, Link, Box, Text, Menu, MenuButton, Portal, MenuList } from "@chakra-ui/react";
import icon from "../../data/icon.json";
import links from "../../data/links.json";

const Navbar = () => {
	const iconsImg = icon.icons;
	const linksBar = links.links;
	return (
		<Box fontFamily="Montserrat">
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
				rel="stylesheet"
			/>
			<Flex bg="#22283C" p="1" fontSize={["12px", "15px", "15px", "17px"]} w="100%" h="45px">
				<Box
					d="flex"
					w="20%"
					h="100%"
					alignItems="center"
					justifyContent="flex-end"
					color="#CCCCCC"
				>
					<Text
						href="#"
						d="flex"
						justifyContent="center"
						border="1px"
						borderColor="white"
						w="45px"
						h="45px"
						alignItems="center"
						p="1"
					>
						<Image
							src="/images/phone-alt.svg"
							alt="phone number"
							h="50%"
							w="50%"
							filter="invert(93%) sepia(0%) saturate(0%) hue-rotate(166deg) brightness(90%) contrast(91%)"
							_hover={{ transform: "scale(1.2)" }}
						/>
					</Text>
					<Text p="1" fontSize="12px" fontWeight="bold">
						TEL: <br />
						7757533974
					</Text>
				</Box>

				<Box
					d="flex"
					w="40%"
					h="100%"
					alignItems="center"
					justifyContent="flex-start"
					color="#CCCCCC"
				>
					<Link
						href="#"
						d="flex"
						justifyContent="center"
						border="1px"
						borderColor="white"
						w="45px"
						h="45px"
						alignItems="center"
						p="1"
					>
						<Image
							src="/images/envelope.svg"
							alt="mail"
							h="60%"
							w="60%"
							filter="invert(93%) sepia(0%) saturate(0%) hue-rotate(166deg) brightness(90%) contrast(91%)"
							_hover={{ transform: "scale(1.2)" }}
						/>
					</Link>
					<Text p="1" fontSize="12px" fontWeight="bold">
						EMAIL: <br />
						INFO@UNIVERSIDADTOLLANCINGO.COM
					</Text>
				</Box>

				<Box
					d="flex"
					w="35%"
					h="100%"
					alignItems="center"
					justifyContent="flex-end"
					color="#CCCCCC"
					paddingRight="10"
				>
					{iconsImg &&
						iconsImg.map((item) => (
							<Link
								href={item.link}
								target="_blank"
								d="flex"
								justifyContent="center"
								borderRight="1px"
								borderLeft="1px"
								borderColor="white"
								w="45px"
								h="45px"
								alignItems="center"
								p="1"
							>
								<Image
									src={item.src}
									alt="mail"
									h="60%"
									w="60%"
									filter="invert(93%) sepia(0%) saturate(0%) hue-rotate(166deg) brightness(90%) contrast(91%)"
									_hover={{ filter: item.filter, transform: "scale(1.3)" }}
								/>
							</Link>
						))}
				</Box>
			</Flex>

			<Flex
				w="100%"
				h="90px"
				bg="rgb(10, 70, 161)"
				justifyContent="space-between"
				p="1"
				fontSize={["8px", "15px", "15px", "17px"]}
			>
				<Box
					d="flex"
					alignSelf="center"
					color="white"
					flexWrap="wrap"
					justifyContent="space-between"
					w="5%"
				>
					<Link textDecoration="none" href="#">
						INICIO
					</Link>
				</Box>
				<Box
					d="flex"
					flexWrap="wrap"
					w="40%"
					paddingRight="5"
					paddingLeft="5"
					justifyContent="space-between"
				>
					{linksBar &&
						linksBar.map((item) => (
							<Flex
								alignSelf="center"
								color="white"
								flexWrap="wrap"
								justifyContent="space-between"
							>
								<Box>
									<Menu>
										<MenuButton>
											{item.name} <br />
										</MenuButton>
										<Portal>
											<MenuList
												border="none"
												bg="#2C2D32"
												p="10"
												color="white"
											>
												<Flex d="flex" w="auto" flexDirection="column">
													<Box>{item.childs[0]}</Box>
													<Box>{item.childs[1]}</Box>
													<Box>{item.childs[2]}</Box>
													<Box>{item.childs[3]}</Box>
													<Box>{item.childs[4]}</Box>
												</Flex>
											</MenuList>
										</Portal>
									</Menu>
								</Box>
							</Flex>
						))}
				</Box>
				<Flex w="10%" justifyContent="center" alignSelf="center">
					<Link href="#" h="100%" d="flex" justifyContent="center">
						<Image
							src="/images/logo_UT_FFF_100.png"
							alt="Logo"
							fallbackSrc="https://www.universidadtollancingo.com/wp-content/uploads/2020/07/logo_UT_FFF_100.png"
							h="80%"
							w="70%"
						/>
					</Link>
				</Flex>
				<Box
					d="flex"
					alignSelf="center"
					color="white"
					flexWrap="wrap"
					justifyContent="space-between"
					w="45%"
					paddingLeft="10"
				>
					<Link href="#">NUEVO INGRESO</Link>
					<Link href="#">BLOG</Link>
					<Link paddingRight="7" href="#">
						CONTACTO
					</Link>
				</Box>
			</Flex>
		</Box>
	);
};
export default Navbar;
