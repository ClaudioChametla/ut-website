import {
	Flex,
	Link,
	Box,
	Menu,
	MenuButton,
	Portal,
	MenuList,
	useDisclosure,
	Image,
} from "@chakra-ui/react";
import { useRef } from "react";
import navbar from "../../data/links.json";

const MenuComponent = ({ item }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isM2Open, onOpen: onM2Open, onClose: onM2Close } = useDisclosure();
	const { isOpen: isM3Open, onOpen: onM3Open, onClose: onM3Close } = useDisclosure();
	const { isOpen: isM4Open, onOpen: onM4Open, onClose: onM4Close } = useDisclosure();
	const finalRef = useRef();
	return (
		<Flex color="white">
			<Box alignSelf="center" h="100%" align="center">
				<Menu isOpen={isOpen} ref={finalRef}>
					<MenuButton
						ref={finalRef}
						fontWeight="bold"
						h="100%"
						marginRight="2"
						onMouseEnter={onOpen}
						onMouseLeave={onClose}
					>
						{item.name}
					</MenuButton>

					<Portal>
						<MenuList border="none" bg="none" color="white" boxShadow="none">
							{item.options &&
								item.options.map((option, index) => (
									<Flex
										d="flex"
										fontSize={["8px", "12px", "12px", "15px"]}
										top="100px"
										key={`FlexNav-${option.name}`}
										bg="#2C2D32"
										p="2"
										color="whiteAlpha.800"
										flexDirection="row"
										transform="translate(0%, -17px)"
										onMouseEnter={onOpen}
										onMouseLeave={onClose}
										_hover={{
											borderLeft: "solid",
											borderColor: "blue",
										}}
										justifyContent="space-between"
									>
										<Menu isOpen={index === 0 ? isM2Open : isM4Open}>
											<MenuButton
												w="100%"
												textAlign="start"
												p="1"
												ref={finalRef}
												onMouseEnter={index === 0 ? onM2Open : onM4Open}
												onMouseLeave={index === 0 ? onM2Close : onM4Close}
											>
												{option.name}
												<br />
											</MenuButton>

											<MenuList
												bg="none"
												w="0"
												h="0"
												border="none"
												p="2"
												boxShadow="none"
											>
												{option.options &&
													option.options.map((subOption) => (
														<Flex
															fontSize={[
																"8px",
																"12px",
																"12px",
																"15px",
															]}
															key={`FlexNav2-${subOption.name}`}
															top="100px"
															bg="#2C2D32"
															p="2"
															color="whiteAlpha.800"
															flexDirection="row"
															transform="translate(95%, -40px)"
															justifyContent="space-between"
															_hover={{
																borderLeft: "solid",
																borderColor: "blue",
															}}
															onMouseEnter={
																index === 0 ? onM2Open : onM4Open
															}
															onMouseLeave={
																index === 0 ? onM2Close : onM4Close
															}
														>
															<Menu isOpen={isM3Open}>
																<MenuButton
																	textAlign="start"
																	p="1"
																	ref={finalRef}
																	onMouseEnter={onM3Open}
																	onMouseLeave={onM3Close}
																>
																	{subOption.name}
																	<br />
																</MenuButton>

																<MenuList
																	bg="none"
																	w="0"
																	h="0"
																	border="none"
																	p="2"
																	boxShadow="none"
																>
																	{subOption.options &&
																		subOption.options.map(
																			(lastOption, index) => (
																				<Flex
																					fontSize={[
																						"8px",
																						"12px",
																						"12px",
																						"15px",
																					]}
																					onMouseEnter={
																						onM3Open
																					}
																					onMouseLeave={
																						onM3Close
																					}
																					top="100px"
																					key={`FlexNav3-${lastOption.name}-${index}`}
																					bg="#2C2D32"
																					p="3"
																					color="whiteAlpha.800"
																					w="100%"
																					flexDirection="column"
																					transform="translate(90%, -30px)"
																					_hover={{
																						borderLeft:
																							"solid",
																						borderColor:
																							"blue",
																					}}
																				>
																					<Link href="#">
																						{
																							lastOption.name
																						}
																					</Link>
																				</Flex>
																			),
																		)}
																</MenuList>
															</Menu>
															<Image
																key={`ImgIcon-${option.icon}`}
																src={option.icon}
																w="15px"
																h="15px"
																alignSelf="center"
																filter={option.filter}
															/>
														</Flex>
													))}
											</MenuList>
										</Menu>

										<Image
											src={item.icon}
											w="15px"
											h="15px"
											alignSelf="center"
											filter={item.filter}
										/>
									</Flex>
								))}
						</MenuList>
					</Portal>
				</Menu>
			</Box>
		</Flex>
	);
};

export default MenuComponent;
