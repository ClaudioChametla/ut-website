/* eslint-disable react/no-array-index-key */
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
import { useRef, useEffect } from "react";
import icon from "../../data/icon.json";
import links from "../../data/links.json";
import styles from "../../styles/styles.json";
import MenuComponent from "./MenuComponent";

const Navbar = () => {
	const iconsImg = icon.icons;
	const navbar2 = useRef(null);
	const navcontainer = useRef(null);

	function scrollAnimation() {
		if (global.document.documentElement.scrollTop > 45) {
			navcontainer.current.style.transform = "translateY(-45px)";
			navcontainer.current.style.position = "fixed";
			navbar2.current.style.backgroundColor = "#0B2A49";
		}
		if (global.document.documentElement.scrollTop < 45) {
			navcontainer.current.style.transform = "translateY(0px)";
			navbar2.current.style.backgroundColor = "#00489E";
		}
	}
	useEffect(() => {
		global.window.onscroll = () => scrollAnimation();
	});

	return (
		<Box>
			<Box overflow="hidden" w="100%" zIndex={99} ref={navcontainer} position="fixed">
				<Center w="100%" maxW="100%" bg={styles.background.navBgLight}>
					<Box w={styles.container.width} fontFamily="Montserrat">
						<Box w={styles.container.width} fontFamily="Montserrat">
							<link
								href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
								rel="stylesheet"
							/>
							<Flex
								bg={styles.background.navBgLight}
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
									<Box
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
									</Box>
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
												style={{ textDecoration: "none" }}
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
				<Center w="100%" maxW="100%" bg={styles.background.light} ref={navbar2}>
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
								<Link
									_focus={{
										boxShadow: "none",
									}}
									alignSelf="center"
									href="/"
									marginRight="2"
									_hover={{ textDecoration: "none" }}
								>
									INICIO
								</Link>
								{links.navbar.map((item) => (
									<MenuComponent key={`FlexNav-${item.name}`} item={item} />
								))}
							</Box>

							<Flex w="10%" justifyContent="center" alignSelf="center">
								<Link
									href="/"
									h="100%"
									d="flex"
									justifyContent="center"
									_focus={{
										boxShadow: "none",
									}}
								>
									<Image
										src="/images/logo_UT_FFF_100.webp"
										alt="Logo"
										fallbackSrc="https://www.universidadtollancingo.com/wp-content/uploads/2020/07/logo_UT_FFF_100.webp"
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
								{links.navbar2.map((item, index) => (
									<Link
										href={item.link}
										marginRight="8"
										key={`Links-2Navbar-${index}`}
										_focus={{
											boxShadow: "none",
										}}
										_hover={{ textDecoration: "none" }}
									>
										{item.name}
									</Link>
								))}
							</Box>

							<Popover id="Popover-inNavar" isLazy>
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
			</Box>
			<Box>
				<Flex
					w="100%"
					maxW="100%"
					h={["80px", "90px", "90px", "100px"]}
					fontSize={["8px", "5px", "5px", "13px"]}
					id="navBar"
					d={["flex", "flex", "flex", "none"]}
					fontWeight="bold"
					bg={styles.background.light}
					position="fixed"
					justifyContent="space-between"
					p="2"
					zIndex="80"
				>
					<Flex w="20%" justifyContent="center" alignSelf="center">
						<Link href="/" h="100%" d="flex" justifyContent="center">
							<Image
								src="/images/logo_UT_FFF_100.webp"
								alt="Logo"
								fallbackSrc="https://www.universidadtollancingo.com/wp-content/uploads/2020/07/logo_UT_FFF_100.webp"
								h="85%"
								w="75%"
							/>
						</Link>
					</Flex>
					<Menu
						id="Menu-inNavbar"
						preventOverflow
						strategy="fixed"
						offset={[20, 8]}
						isLazy
					>
						<MenuButton
							marginEnd="5"
							role="button"
							id="Menu-button-01"
							key="KMenu-button-01"
						>
							<Box
								d="flex"
								justifyContent="center"
								border="1px"
								borderColor="white"
								boxSize="55px"
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
						<Portal w="100%" bg="red">
							<Center w="100vw">
								<MenuList
									border="none"
									w={["95vw", "80vw", "100%", "100%"]}
									color="white"
									bg={styles.background.navBgSolid}
									py="4"
									boxShadow="none"
									zIndex="70"
								>
									<Flex
										h="auto"
										w="100%"
										flexDir="column"
										bg={styles.background.navBgSolid}
									>
										<Box
											align="center"
											w="100%"
											p="3"
											bg={styles.background.light}
										>
											<Link href="/">INICIO</Link>
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
															<Box
																p="2"
																ml="4"
																flex="1"
																textAlign="center"
															>
																<Link href={item.link}>
																	{item.name}
																</Link>
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
																	<Link href={option.link}>
																		{option.name}
																	</Link>
																</Text>
															))}
														<Divider color="#2E3138" />
													</AccordionPanel>
												</AccordionItem>
											</Accordion>
										))}
										{links.navbar2.map((item, index) => (
											<Box
												align="center"
												w="100%"
												bg={styles.background.navBgSolid}
												p="3"
												key={`LinkNavbar2-${index}`}
											>
												<Link href={item.link}>{item.name}</Link>
												<Divider color="#2E3138" />
											</Box>
										))}

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
							</Center>
						</Portal>
					</Menu>
				</Flex>
			</Box>
		</Box>
	);
};

export default Navbar;
