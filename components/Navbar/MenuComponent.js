/* eslint-disable react/no-array-index-key */
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
import PropTypes from "prop-types";

const MenuComponent = ({ item }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isM2Open, onOpen: onM2Open, onClose: onM2Close } = useDisclosure();
	const { isOpen: isM3Open, onOpen: onM3Open, onClose: onM3Close } = useDisclosure();
	const { isOpen: isM4Open, onOpen: onM4Open, onClose: onM4Close } = useDisclosure();
	const finalRef = useRef();
	return (
		<Flex color="white">
			<Box alignSelf="center" h="100%" align="center">
				<Menu id="Menu-inMenuComponent" isOpen={isOpen} isLazy>
					<Link href={item.link} _hover={{ textDecoration: "none" }}>
						<MenuButton
							ref={finalRef}
							role="button"
							id="MenuComponent-button-01"
							key="KMenuComponent-button-01"
							fontWeight="bold"
							h="100%"
							marginRight="2"
							onMouseEnter={onOpen}
							onMouseLeave={onClose}
							w="100%"
							_focus={{
								boxShadow: "none",
							}}
						>
							{item.name}
						</MenuButton>
					</Link>
					<Portal>
						<MenuList
							border="none"
							zIndex="70"
							bg="none"
							color="white"
							boxShadow="none"
						>
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
										<Menu
											id="Menu-inMenuComponent2"
											isOpen={index === 0 ? isM2Open : isM4Open}
											isLazy
										>
											<Link
												role="button"
												id={`IDMenuButton-${option.name}-${index}`}
												key={`KMenuButton-${option.name}-${index}`}
												w="100%"
												h="100%"
												href={option.link}
												textAlign="start"
												p="1"
												ref={finalRef}
												onMouseEnter={index === 0 ? onM2Open : onM4Open}
												onMouseLeave={index === 0 ? onM2Close : onM4Close}
												_focus={{
													boxShadow: "none",
												}}
												_hover={{ textDecoration: "none" }}
											>
												{option.name}
												<br />
											</Link>

											<MenuList
												bg="none"
												w="0"
												h="0"
												border="none"
												p="2"
												boxShadow="none"
											>
												{option.options &&
													option.options.map((subOption, index2) => (
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
															w="100%"
															zIndex="80"
															color="whiteAlpha.800"
															flexDirection="row"
															transform="translate(99%, 0px)"
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
															<Menu isOpen={isM3Open} isLazy>
																<Link
																	href={subOption.link}
																	_hover={{
																		textDecoration: "none",
																	}}
																>
																	<MenuButton
																		role="button"
																		id={`IDMenuButton-${option.name}-${index2}`}
																		key={`KMenuButton-${option.name}-${index2}`}
																		textAlign="start"
																		p="1"
																		ref={finalRef}
																		onMouseEnter={onM3Open}
																		onMouseLeave={onM3Close}
																		w="100%"
																		_focus={{
																			boxShadow: "none",
																		}}
																	>
																		{subOption.name}
																		<br />
																	</MenuButton>
																</Link>

																<MenuList
																	bg="none"
																	w="0"
																	h="0"
																	border="none"
																	p="2"
																	boxShadow="none"
																	onMouseEnter={onM3Open}
																	onMouseLeave={onM3Close}
																>
																	{subOption.options &&
																		subOption.options.map(
																			(
																				lastOption,
																				index3,
																			) => (
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
																					key={`FlexNav3-${lastOption.name}-${index3}`}
																					bg="#2C2D32"
																					p="3"
																					color="whiteAlpha.800"
																					w="100%"
																					flexDirection="column"
																					transform="translate(86%, -50px)"
																					_hover={{
																						borderLeft:
																							"solid",
																						borderColor:
																							"blue",
																					}}
																				>
																					<Link
																						href={
																							lastOption.link
																						}
																						_focus={{
																							boxShadow:
																								"none",
																						}}
																						_hover={{
																							textDecoration:
																								"none",
																						}}
																					>
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
																h="20px"
																alignSelf="center"
																filter={option.filter}
																onMouseEnter={onM3Open}
																onMouseLeave={onM3Close}
															/>
														</Flex>
													))}
											</MenuList>
										</Menu>

										<Image
											src={item.icon}
											w="15px"
											h="20px"
											alignSelf="center"
											filter={item.filter}
											onMouseEnter={index === 0 ? onM2Open : onM4Open}
											onMouseLeave={index === 0 ? onM2Close : onM4Close}
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
MenuComponent.propTypes = {
	item: PropTypes.objectOf(PropTypes.any),
};

MenuComponent.defaultProps = {
	item: {},
};
export default MenuComponent;
