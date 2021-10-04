/* eslint-disable react/no-array-index-key */
import {
	Box,
	Center,
	Text,
	Flex,
	Divider,
	Image,
	Grid,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	ListItem,
	UnorderedList,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.json";
import history from "../../data/history.json";
import images from "../../data/images.json";
import Gallery from "../Gallery";
import imgGallery from "../../data/gallerySmall.json";

const Modalcomponent = ({ dataModal, isOpen, onClose }) => (
	<div>
		<Modal isOpen={isOpen} onClose={onClose} size={["xl", "xl", "xl", "large"]} isCentered>
			<ModalOverlay />
			<ModalContent
				w="auto"
				h="auto"
				p="2"
				bgColor="rgba(255, 255, 255, .8)"
				borderRadius="5"
			>
				<ModalCloseButton
					position="absolute"
					top="0"
					right={["0", "0", "-50px", "-50px"]}
					boxSize="50px"
					bg="#0053B8"
					borderRadius="0"
					color="white"
					_focus={{ border: 0 }}
				/>
				<ModalBody>
					<Image
						loading="lazy"
						objectFit="cover"
						src={dataModal || ""}
						w={["400px", "400px", "500px", "800px"]}
						h={["300px", "400px", "400px", "600px"]}
						p="2"
					/>
				</ModalBody>
			</ModalContent>
		</Modal>
	</div>
);

const History = () => {
	const rectoria = history.msjRectoria;
	const historia = history.Historia;
	const { identidad } = history;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [dataModal, setDataModal] = useState({});
	const action = (item) => {
		setDataModal(item);
		return onOpen;
	};
	return (
		<Box>
			<Flex my="5%" w="100%" id="msjRectoria" justifyContent="center">
				<Flex
					justifyContent="center"
					flexDir={["column", "column", "row", "row"]}
					h="100%"
					w={["100%", "100%", "100%", styles.container.width, styles.container.width]}
					m="2"
					id="msjRectoria"
				>
					{rectoria &&
						rectoria.map((item, index) => (
							<Box
								key={`BoxRectoria-${index}`}
								w={["100%", "100%", "50%", "50%"]}
								fontFamily={styles.font.fontFamily}
								textAlign={["center", "center", "left", "left"]}
								zIndex="15"
							>
								<Text fontWeight="bold" fontSize={styles.font.text}>
									MENSAJE DE RECTORÍA
								</Text>
								<Text fontSize="14px" color={styles.font.color}>
									{item.contenido}
								</Text>
							</Box>
						))}
					<Box
						w={["100%", "100%", "50%", "50%"]}
						h="320px"
						my={["10px", "10px", "0px", "0px"]}
						zIndex="10"
					>
						<Gallery pageData={imgGallery} variant="small" />
					</Box>
				</Flex>
			</Flex>

			<Box w="100%" id="historia" textAlign="center">
				<Text fontSize={styles.font.title} fontWeight="bold">
					HISTORIA
				</Text>
				<Flex justifyContent="center" alignItems="center">
					<Divider w={["40%", "40%", "10%", "10%"]} />{" "}
					<Image
						loading="lazy"
						src="/icons/award-solid.svg"
						w="30px"
						h="30px"
						filter="invert(80%) sepia(4%) saturate(0%) hue-rotate(138deg) brightness(107%) contrast(83%)"
					/>
					<Divider w={["40%", "40%", "10%", "10%"]} />
				</Flex>

				<Grid
					w="100%"
					templateColumns={[
						"repeat(1, 1fr)",
						"repeat(1, 1fr)",
						"repeat(1, 1fr)",
						"repeat(3, 1fr)",
					]}
					my="10"
					alignContent="center"
				>
					{historia &&
						historia.map((itemTwo, indexTwo) => (
							<Flex
								zIndex="0"
								key={`historyCards-${indexTwo}`}
								w="100%"
								borderLeft="1px"
								borderColor="#F3F3F3"
								flexDirection="column"
								alignItems="center"
							>
								<Box
									borderRadius="full"
									bg="#f3f3f3"
									w="90px"
									h="90px"
									p="4"
									my="5"
									_hover={{
										bg: "#00489e",
									}}
								>
									<Image
										loading="lazy"
										src="/icons/arrow-right.svg"
										w="100%"
										h="100%"
										filter="invert(19%) sepia(95%) saturate(2337%) hue-rotate(202deg) brightness(82%) contrast(102%)"
										_hover={{
											filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(77deg) brightness(100%) contrast(103%)",
										}}
									/>
								</Box>
								<Text w="100%" mx="10" mb="5">
									{itemTwo.nombre}
								</Text>
								<Text
									w="100%"
									px="10"
									color={styles.font.color}
									fontSize={styles.font.littleText}
								>
									{itemTwo.contenido}
								</Text>
							</Flex>
						))}
				</Grid>
			</Box>
			<Box w="100%" textAlign="center">
				<Text id="identidad" fontSize={styles.font.title} fontWeight="bold">
					IDENTIDAD
				</Text>
				<Flex justifyContent="center" alignItems="center">
					<Divider w={["40%", "40%", "10%", "10%"]} />
					<Image
						loading="lazy"
						src="/icons/award-solid.svg"
						w="30px"
						h="30px"
						filter="invert(80%) sepia(4%) saturate(0%) hue-rotate(138deg) brightness(107%) contrast(83%)"
					/>
					<Divider w={["40%", "40%", "10%", "10%"]} />
				</Flex>

				<Center w="100%">
					<Flex w={styles.container.width} flexDir={["column", "column", "row", "row"]}>
						<Box
							w={["100%", "100%", "50%", "50%"]}
							p={["0", "0", "5", "10"]}
							mt={["5", "5", "0", "0"]}
						>
							<Image loading="lazy" src="/images/fundador-optimized.webp" />
						</Box>
						<Box
							my={["5", "5", "0", "0"]}
							p={["0", "0", "5", "10"]}
							w={["100%", "100%", "50%", "50%"]}
						>
							<Accordion allowToggle id="Accordion-history">
								{identidad &&
									identidad.map((itemThree) => (
										<AccordionItem mb="1" key={`Accordion-${itemThree}`}>
											<h2>
												<AccordionButton
													_expanded={{ color: "#333" }}
													color="#666"
													bg="#ebebeb"
													fontSize="10px"
													fontWeight="bold"
													py="3"
													_focus={{
														boxShadow: "none",
													}}
												>
													<Box flex="1" textAlign="left">
														{itemThree.nombre}
													</Box>
													<AccordionIcon />
												</AccordionButton>
											</h2>
											<AccordionPanel pb={4}>
												<UnorderedList
													listStyleType="none"
													textAlign="start"
													m="0"
													fontSize="13px"
												>
													{itemThree.contenido &&
														itemThree.contenido.map((item) => (
															<ListItem
																key={`ListContenido-${item}`}
																my="2"
															>
																{item}
															</ListItem>
														))}
												</UnorderedList>
											</AccordionPanel>
										</AccordionItem>
									))}
							</Accordion>
						</Box>
					</Flex>
				</Center>
			</Box>
			<Box id="instalaciones" w="100%" textAlign="center">
				<Text fontSize={styles.font.title} fontWeight="bold">
					NUESTRAS INSTALACIONES
				</Text>
				<Text fontSize="14px" color={styles.font.color}>
					Universidad Tollancingo cuenta con instalaciones cuidadosamente diseñadas para
					tu desarrollo profesional.
				</Text>
				<Flex justifyContent="center" alignItems="center">
					<Divider w={["40%", "40%", "10%", "10%"]} />{" "}
					<Image
						loading="lazy"
						src="/icons/image.svg"
						w="30px"
						h="30px"
						filter="invert(80%) sepia(4%) saturate(0%) hue-rotate(138deg) brightness(107%) contrast(83%)"
					/>
					<Divider w={["40%", "40%", "10%", "10%"]} />
				</Flex>
				<br />
				<Center>
					<Grid
						w="100%"
						templateColumns={[
							"repeat(1, 1fr)",
							"repeat(1, 1fr)",
							"repeat(1, 1fr)",
							"repeat(3, 1fr)",
						]}
						my="10"
						p={["2", "2", "10", "10"]}
						gridColumnGap={5}
						gridRowGap={2}
						alignContent="center"
					>
						<Flex
							zIndex="0"
							w="100%"
							flexDirection="column"
							alignItems="center"
							onClick={onOpen}
						>
							{images &&
								images.imagenesCol1.map((itemImg) => (
									<Image
										loading="lazy"
										src={itemImg}
										key={`imageCol1-${itemImg}`}
										h="742px"
										w={["100%", "100%", "100%", "438px"]}
										objectFit="cover"
										_hover={{ filter: "brightness(60%)" }}
										onClick={() => action(itemImg)}
										mt="5"
									/>
								))}{" "}
						</Flex>
						<Flex
							zIndex="0"
							w="100%"
							flexDirection="column"
							alignItems="center"
							onClick={onOpen}
						>
							{" "}
							{images &&
								images.imagenesCol2small.map((itemImg) => (
									<Image
										loading="lazy"
										src={itemImg}
										key={`imageSmall-${itemImg}`}
										h="371px"
										w={["100%", "100%", "100%", "438px"]}
										objectFit="cover"
										_hover={{ filter: "brightness(60%)" }}
										onClick={() => action(itemImg)}
										mt="5"
									/>
								))}{" "}
							{images &&
								images.imagenesCol2.map((itemImg) => (
									<Image
										loading="lazy"
										src={itemImg}
										key={`imageCol2-${itemImg}`}
										h="742px"
										w={["100%", "100%", "100%", "438px"]}
										objectFit="cover"
										_hover={{ filter: "brightness(60%)" }}
										onClick={() => action(itemImg)}
										mt="5"
									/>
								))}{" "}
						</Flex>
						<Flex
							zIndex="0"
							w="100%"
							flexDirection="column"
							alignItems="center"
							onClick={onOpen}
						>
							{images &&
								images.imagenesCol3.map((itemImg) => (
									<Image
										loading="lazy"
										src={itemImg}
										key={`imageCol3-${itemImg}`}
										h="742px"
										w={["100%", "100%", "100%", "438px"]}
										objectFit="cover"
										_hover={{ filter: "brightness(60%)" }}
										onClick={() => action(itemImg)}
										mt="5"
									/>
								))}{" "}
						</Flex>
					</Grid>
				</Center>
			</Box>
			<Modalcomponent dataModal={dataModal} isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

Modalcomponent.propTypes = {
	dataModal: PropTypes.objectOf(PropTypes.any),
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
};

Modalcomponent.defaultProps = {
	dataModal: {},
	isOpen: false,
	onClose: null,
};

export default History;
