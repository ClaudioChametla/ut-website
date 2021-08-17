import {
	Flex,
	Image,
	Link,
	Box,
	Text,
	Menu,
	MenuButton,
	Portal,
	MenuList,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	PopoverArrow,
	Input,
	Center,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Divider,
	useDisclosure,
} from "@chakra-ui/react";
import icon from "../../data/icon.json";
import links from "../../data/links.json";
import styles from "../../styles/styles.json";

const Navbar = () => {
	const iconsImg = icon.icons;
	const { conocenos, vinculacion } = links;
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box>
			<Center w="100%" bg="#22283C">
				<Box w={styles.container.width} fontFamily="Montserrat">
					<Box w={styles.container.width} fontFamily="Montserrat">
						<link
							href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
							rel="stylesheet"
						/>
						<Flex
							bg={styles.background.navbarBgOne}
							p="1"
							fontSize={["12px", "15px", "15px", "17px"]}
							w="100%"
							h="45px"
							d={["none", "none", "none", "flex"]}
						>
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
									borderColor="rgba(255,255,255,0.4)"
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
								<Text p="1" fontSize="12px" fontWeight="bold" marginRight="2">
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
									borderColor="rgba(255,255,255,0.4)"
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
												_hover={{
													filter: item.filter,
													transform: "scale(1.3)",
												}}
											/>
										</Link>
									))}
							</Box>
						</Flex>
					</Box>
				</Box>
			</Center>
			<Center w="100%" bg={styles.background.light}>
				<Box w={styles.container.width} fontFamily="Montserrat">
					<Flex
						w="100%"
						h="90px"
						fontSize={["8px", "5px", "5px", "13px"]}
						id="navBar"
						d={["none", "none", "none", "flex"]}
						fontWeight="bold"
					>
						<Box d="flex" w="45%" fontWeight="bold" justifyContent="center">
							<Link alignSelf="center" href="#" marginRight="2">
								INICIO
							</Link>

							<Flex alignSelf="center" color="white" textAlign="center" h="100%">
								<Box>
									<Menu isOpen={isOpen} h="20px">
										<MenuButton
											marginLeft="2"
											fontWeight="bold"
											marginRight="2"
											onMouseEnter={onOpen}
											onMouseLeave={onClose}
											h="100%"
										>
											{conocenos.name}
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
													onMouseEnter={onOpen}
													onMouseLeave={onClose}
													fontSize={["8px", "12px", "12px", "15px"]}
													top="100px"
													bg="#2C2D32"
													p="5"
													_hover={{ d: "flex" }}
													color="whiteAlpha.800"
													flexDirection="column"
													transform="translate(-10%, -25px)"
													borderRadius="2"
												>
													{conocenos &&
														conocenos.childs.map((item) => (
															<Link py="2" href={item.link}>
																{item.name}
															</Link>
														))}
												</Flex>
											</MenuList>
										</Portal>
									</Menu>
								</Box>
							</Flex>

							<Flex color="white">
								<Box alignSelf="center" h="100%" align="center">
									<Menu>
										<MenuButton fontWeight="bold" h="100%" marginRight="2">
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
													transform="translate(-10%, -25px)"
													borderRadius="2"
												>
													<Menu>
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
													<Menu>
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
																transform="translate(78%, -50px)"
																borderRadius="2"
															>
																<Menu>
																	<MenuButton
																		textAlign="start"
																		p="1"
																	>
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
																			<Link>
																				DERECHO DE AMPARO
																			</Link>
																			<br />
																			<Link>
																				FORMACIÓN DOCENTE
																			</Link>
																			<br />
																			<Link>
																				PSICOLOGIA EDUCATIVA
																			</Link>
																			<br />
																			<Link>
																				COSTOS DE LA
																				CONSTRUCCIÓN
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

							{vinculacion &&
								vinculacion.map((item) => (
									<Flex alignSelf="center" h="100%" color="white">
										<Box h="100%">
											<Menu>
												<MenuButton
													fontWeight="bold"
													h="100%"
													marginRight="2"
												>
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
															transform="translate(-10%, -25px)"
															borderRadius="2"
														>
															<Link href={item.l1}>
																{item.childs[0]}
															</Link>
															<br />
															<Link href={item.l2}>
																{item.childs[1]}
															</Link>
															<br />
															<Link href={item.l3}>
																{item.childs[2]}
															</Link>
															<br />
															<Link href={item.l4}>
																{item.childs[3]}
															</Link>
															<Link href={item.l5}>
																{item.childs[4]}
															</Link>
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
							alignItems="center"
							color="white"
							justifyContent="center"
							w="35%"
							h="100%"
							textAlign="center"
						>
							<Link href="#" marginRight="8">
								NUEVO INGRESO
							</Link>
							<Link href="#" marginRight="8">
								BLOG
							</Link>
							<Link href="#" marginRight="4">
								CONTACTO
							</Link>
						</Box>
						<Popover>
							<PopoverTrigger>
								<Flex
									h="100%"
									justifyContent="flex-start"
									alignItems="center"
									w="10%"
								>
									<Box
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
									</Box>
								</Flex>
							</PopoverTrigger>
							<PopoverContent>
								<PopoverArrow />
								<PopoverBody>
									<Input placeholder="Buscar" />
								</PopoverBody>
							</PopoverContent>
						</Popover>
					</Flex>
				</Box>
			</Center>
			<Flex
				w="100%"
				h={["80px", "90px", "90px", "100px"]}
				fontSize={["8px", "5px", "5px", "13px"]}
				id="navBar"
				d={["flex", "flex", "flex", "none"]}
				fontWeight="bold"
				bg={styles.background.light}
				position="fixed"
				justifyContent="space-between"
				p="2"
			>
				<Flex w="20%" justifyContent="center" alignSelf="center">
					<Link href="#" h="100%" d="flex" justifyContent="center">
						<Image
							src="/images/logo_UT_FFF_100.png"
							alt="Logo"
							fallbackSrc="https://www.universidadtollancingo.com/wp-content/uploads/2020/07/logo_UT_FFF_100.png"
							h="85%"
							w="75%"
						/>
					</Link>
				</Flex>
				<Menu>
					<MenuButton marginEnd="5">
						<Box
							href="#"
							d="flex"
							justifyContent="center"
							border="1px"
							borderColor="white"
							w="55px"
							h="55px"
							alignItems="center"
							p="1"
							borderRadius="5"
						>
							<Image
								src="/icons/bars.svg"
								alt="mail"
								h="60%"
								w="60%"
								filter="invert(93%) sepia(0%) saturate(0%) hue-rotate(166deg) brightness(90%) contrast(91%)"
								_hover={{ transform: "scale(1.2)" }}
							/>
						</Box>
					</MenuButton>
					<Portal w="100vw">
						<MenuList
							border="none"
							w="100vw"
							color="white"
							bg={styles.background.navBgSolid}
							p="4"
							boxShadow="none"
						>
							<Flex
								h="auto"
								w="100%"
								flexDir="column"
								bg={styles.background.navBgSolid}
							>
								<Box align="center" w="100%" p="3" bg={styles.background.light}>
									<Text>INICIO</Text>
								</Box>
								<Accordion allowToggle>
									<AccordionItem>
										<h2>
											<AccordionButton
												_expanded={{
													bg: styles.background.light,
													color: "white",
												}}
											>
												<Box p="3" ml="4" flex="1" textAlign="center">
													CONÓCENOS
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										{conocenos &&
											conocenos.childs.map((item) => (
												<AccordionPanel
													bg={styles.background.navBgLight}
													pb={4}
												>
													<Text p="3" align="center">
														{item.name}
													</Text>
													<Divider />
												</AccordionPanel>
											))}
									</AccordionItem>

									<AccordionItem>
										<h2>
											<AccordionButton
												_expanded={{
													bg: styles.background.light,
													color: "white",
												}}
											>
												<Box flex="1" p="3" textAlign="center">
													OFERTA EDUCATIVA
												</Box>
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4} bg={styles.background.navBgLight}>
											<Text p="3" align="center">
												LICENCIATURA
											</Text>
											<Divider />
											<Text p="3" align="center">
												POSGRADO
											</Text>
										</AccordionPanel>
									</AccordionItem>

									<AccordionItem>
										<h2>
											<AccordionButton
												_expanded={{
													bg: styles.background.light,
													color: "white",
												}}
											>
												<Box p="3" flex="1" textAlign="center">
													VINCULACIÓN
												</Box>
											</AccordionButton>
										</h2>
										{vinculacion &&
											vinculacion.map((item) => (
												<AccordionPanel
													pb={4}
													bg={styles.background.navBgLight}
												>
													<Text p="3" align="center">
														{item.childs[0]}
													</Text>
													<Divider />
													<Text p="3" align="center">
														{item.childs[1]}
													</Text>
													<Divider />
													<Text p="3" align="center">
														{item.childs[2]}
													</Text>
													<Divider />
													<Text p="3" align="center">
														{item.childs[3]}
													</Text>
												</AccordionPanel>
											))}
									</AccordionItem>
								</Accordion>
								<Box
									align="center"
									w="100%"
									p="3"
									bg={styles.background.navBgSolid}
								>
									<Text>NUEVO INGRESO</Text>
								</Box>
								<Divider />
								<Box
									align="center"
									w="100%"
									p="3"
									bg={styles.background.navBgSolid}
								>
									<Text>BLOG</Text>
								</Box>
								<Divider />
								<Box
									align="center"
									w="100%"
									p="3"
									bg={styles.background.navBgSolid}
								>
									<Text>CONTACTO</Text>
								</Box>
								<Divider />
							</Flex>
						</MenuList>
					</Portal>
				</Menu>
			</Flex>
		</Box>
	);
};

export default Navbar;
