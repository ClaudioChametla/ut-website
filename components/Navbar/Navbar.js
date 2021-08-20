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
} from "@chakra-ui/react";
import { useRef } from "react";
import icon from "../../data/icon.json";
import links from "../../data/links.json";
import styles from "../../styles/styles.json";
import MenuComponent from "./MenuComponent";

const Navbar = () => {
	const iconsImg = icon.icons;

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
											key={`LinkNav-${item.name}`}
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
						<Box
							d="flex"
							color="white"
							w="45%"
							fontWeight="bold"
							justifyContent="center"
						>
							<Link alignSelf="center" href="#" marginRight="2">
								INICIO
							</Link>
							{links.navbar.map((item) => (
								<MenuComponent key={`FlexNav-${item.name}`} item={item} />
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
								{links.navbar.map((item) => (
									<Accordion allowToggle key={`Accordion-${item.name}`}>
										<AccordionItem>
											<h2>
												<AccordionButton
													_expanded={{
														bg: styles.background.light,
														color: "white",
													}}
												>
													<Box p="2" ml="4" flex="1" textAlign="center">
														{item.name}
													</Box>
													<AccordionIcon />
												</AccordionButton>
											</h2>

											<AccordionPanel
												bg={styles.background.navBgLight}
												pb={4}
											>
												{item.options &&
													item.options.map((option) => (
														<Text
															p="2"
															align="center"
															key={`Text-${option.name}`}
														>
															{option.name}
														</Text>
													))}
												<Divider color="#2E3138" />
											</AccordionPanel>
										</AccordionItem>
									</Accordion>
								))}
								<Box
									align="center"
									w="100%"
									p="3"
									bg={styles.background.navBgSolid}
								>
									<Text>NUEVO INGRESO</Text>
								</Box>
								<Divider color="#2E3138" />
								<Box
									align="center"
									w="100%"
									p="3"
									bg={styles.background.navBgSolid}
								>
									<Text>BLOG</Text>
								</Box>
								<Divider color="#2E3138" />
								<Box
									align="center"
									w="100%"
									p="3"
									bg={styles.background.navBgSolid}
								>
									<Text>CONTACTO</Text>
								</Box>
								<Divider color="#2E3138" />
								<Flex
									flexDirection="row"
									h="80px"
									w="100%"
									justifyContent="center"
									alignItems="center"
								>
									<Input
										w="60%"
										borderRadius="none"
										border="none"
										bg={styles.background.navBgOne}
										placeholder="Buscar"
									/>
									<Image
										p="2"
										borderLeft="1px"
										src="/icons/search.svg"
										filter=" invert(73%) sepia(8%) saturate(80%) hue-rotate(169deg) brightness(90%) contrast(91%)"
										w="40px"
										h="40px"
									/>
								</Flex>
								<Center borderTop="1px" borderColor="#2E3138">
									{iconsImg &&
										iconsImg.map((item) => (
											<Link
												key={`LinkIconsImg-${item.name}`}
												href={item.link}
												target="_blank"
												d="flex"
												justifyContent="center"
												borderRight="1px"
												borderLeft="1px"
												borderColor="#2E3138"
												w="70px"
												h="35px"
												alignItems="center"
											>
												<Image
													src={item.src}
													alt="mail"
													h="50%"
													w="50%"
													filter="invert(72%) sepia(7%) saturate(95%) hue-rotate(169deg) brightness(91%) contrast(90%)"
													_hover={{
														filter: item.filter,
														transform: "scale(1.3)",
													}}
												/>
											</Link>
										))}
								</Center>
							</Flex>
						</MenuList>
					</Portal>
				</Menu>
			</Flex>
		</Box>
	);
};

export default Navbar;
