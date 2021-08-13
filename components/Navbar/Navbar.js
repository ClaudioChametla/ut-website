import { Flex, Image, Link, Box, Text, Menu, MenuButton, Portal, MenuList } from "@chakra-ui/react";
import { useEffect } from "react";
import icon from "../../data/icon.json";
import conocenos from "../../data/links.json";
import vinculacion from "../../data/links.json";

const Navbar = () => {
	const iconsImg = icon.icons;
	const Conocenos = conocenos.conocenos;
	const Vinculacion = vinculacion.vinculacion;

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
							src="/icons/phone-alt.svg"
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
							src="/icons/envelope.svg"
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
				fontSize={["8px", "5px", "5px", "13px"]}
				id="navBar"
				d={["none", "none", "none", "flex"]}
				fontWeight="bold"
			>
				<Box
					d="flex"
					alignItems="center"
					color="white"
					justifyContent="flex-end"
					w="10%"
					h="100%"
				>
					<Link paddingRight="2" href="#">
						INICIO
					</Link>
				</Box>
				<Box d="flex" w="35%" fontWeight="bold" justifyContent="center">
					{Conocenos &&
						Conocenos.map((item) => (
							<Flex alignSelf="center" color="white" textAlign="center">
								<Box>
									<Menu ArrowDown>
										<MenuButton fontWeight="bold" paddingRight="8">
											{item.name}
										</MenuButton>

										<Portal>
											<MenuList
												border="none"
												color="white"
												bg="none"
												p="4"
												boxShadow="none"
											>
												<Flex
													d="flex"
													fontSize={["8px", "12px", "12px", "15px"]}
													top="100px"
													bg="#2C2D32"
													p="5"
													color="whiteAlpha.800"
													flexDirection="column"
													transform="translate(-10%, 10px)"
													borderRadius="2"
												>
													<Link href={item.l1}>{item.childs[0]}</Link>
													<br />
													<Link href={item.l2}>{item.childs[1]}</Link>
													<br />
													<Link href={item.l3}>{item.childs[2]}</Link>
													<br />
													<Link href={item.l4}>{item.childs[3]}</Link>
													<br />
													<Link href={item.l5}>{item.childs[4]}</Link>
												</Flex>
											</MenuList>
										</Portal>
									</Menu>
								</Box>
							</Flex>
						))}

					<Flex
						objectFit="cover"
						alignSelf="center"
						justifyContent="flex-end"
						color="white"
					>
						<Box>
							<Menu>
								<MenuButton fontWeight="bold" paddingRight="8">
									OFERTA EDUCATIVA
								</MenuButton>

								<Portal>
									<MenuList
										border="none"
										bg="none"
										color="white"
										p="4"
										boxShadow="none"
									>
										<Flex
											d="flex"
											fontSize={["8px", "12px", "12px", "15px"]}
											top="100px"
											bg="#2C2D32"
											p="5"
											color="whiteAlpha.800"
											flexDirection="column"
											transform="translate(-10%, 10px)"
											borderRadius="2"
										>
											<Menu isLazy>
												<MenuButton textAlign="start" p="1">
													LICENCIATURA
												</MenuButton>
												<MenuList
													bg="none"
													w="0"
													h="0"
													border="none"
													p="2"
													boxShadow="none"
												>
													<Flex
														fontSize={["8px", "12px", "12px", "15px"]}
														top="100px"
														bg="#2C2D32"
														p="5"
														color="whiteAlpha.800"
														flexDirection="column"
														transform="translate(78%, -40px)"
														borderRadius="2"
													>
														<Link>PEDAGOGIA</Link>
														<br />
														<Link>GASTRONOMIA</Link>
														<br />
														<Link>PSICOLOGÍA</Link>
														<br />
														<Link>CONTADURÍA</Link>
														<br />
														<Link>ARQUITECTURA</Link>
														<br />
														<Link>DERECHO</Link>
													</Flex>
												</MenuList>
											</Menu>
											<br />
											<Menu isLazy>
												<MenuButton textAlign="start" p="1">
													POSGRADO
												</MenuButton>
												<MenuList
													flexDirection="column"
													bg="none"
													w="0"
													border="none"
													p="2"
													boxShadow="none"
												>
													<Flex
														fontSize={["8px", "12px", "12px", "15px"]}
														top="100px"
														bg="#2C2D32"
														p="5"
														color="whiteAlpha.800"
														flexDirection="column"
														transform="translate(78%, -50px)"
														borderRadius="2"
													>
														<Menu isLazy>
															<MenuButton textAlign="start" p="1">
																ESPECIALIDAD
															</MenuButton>
															<MenuList
																d="flex"
																flexDirection="column"
																bg="none"
																border="none"
																p="2"
																boxShadow="none"
															>
																<Flex
																	fontSize={[
																		"8px",
																		"12px",
																		"12px",
																		"15px",
																	]}
																	top="100px"
																	bg="#2C2D32"
																	p="5"
																	color="whiteAlpha.800"
																	flexDirection="column"
																	transform="translate(60%, -50px)"
																	borderRadius="2"
																>
																	<Link>DERECHO DE AMPARO</Link>
																	<br />
																	<Link>FORMACIÓN DOCENTE</Link>
																	<br />
																	<Link>
																		PSICOLOGIA EDUCATIVA
																	</Link>
																	<br />
																	<Link>
																		COSTOS DE LA CONSTRUCCIÓN
																	</Link>
																</Flex>
															</MenuList>
														</Menu>
													</Flex>
												</MenuList>
											</Menu>
										</Flex>
									</MenuList>
								</Portal>
							</Menu>
						</Box>
					</Flex>

					{Vinculacion &&
						Vinculacion.map((item) => (
							<Flex alignSelf="center" color="white" flexWrap="wrap">
								<Box>
									<Menu ArrowDown>
										<MenuButton fontWeight="bold" paddingRight="8">
											{item.name}
										</MenuButton>

										<Portal>
											<MenuList
												border="none"
												bg="none"
												color="white"
												p="4"
												boxShadow="none"
											>
												<Flex
													d="flex"
													fontSize={["8px", "12px", "12px", "15px"]}
													top="100px"
													bg="#2C2D32"
													p="5"
													color="whiteAlpha.800"
													flexDirection="column"
													transform="translate(-10%, 10px)"
													borderRadius="2"
												>
													<Link href={item.l1}>{item.childs[0]}</Link>
													<br />
													<Link href={item.l2}>{item.childs[1]}</Link>
													<br />
													<Link href={item.l3}>{item.childs[2]}</Link>
													<br />
													<Link href={item.l4}>{item.childs[3]}</Link>
													<Link href={item.l5}>{item.childs[4]}</Link>
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
					justifyContent="center"
					w="35%"
					p="10"
					h="100%"
				>
					<Link href="#" paddingRight="8">
						NUEVO INGRESO
					</Link>
					<Link href="#" paddingRight="8">
						BLOG
					</Link>
					<Link href="#" paddingRight="10">
						CONTACTO
					</Link>
				</Box>
				<Flex h="100%" justifyContent="flex-start" alignItems="center" w="10%">
					<Link
						href="#"
						d="flex"
						justifyContent="center"
						border="1px"
						borderColor="white"
						w="40px"
						h="40px"
						alignItems="center"
						p="1"
					>
						<Image
							src="/icons/search.svg"
							alt="mail"
							h="60%"
							w="60%"
							filter="invert(93%) sepia(0%) saturate(0%) hue-rotate(166deg) brightness(90%) contrast(91%)"
							_hover={{ transform: "scale(1.2)" }}
						/>
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;
