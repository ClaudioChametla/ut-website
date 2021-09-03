import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Center,
	Flex,
	Text,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import styles from "../../styles/styles.json";
import carreras from "../../data/educativeOffer.json";

const List = () => {
	const carrera = carreras[0];
	return (
		<Center fontFamily={styles.font.fontFamily} my="10">
			<Flex w={styles.container.width} flexDir="column">
				<Box fontWeight="bold">
					<Text>Carrera: {carrera.carrera}</Text>
					<Text>Duración: {carrera.plan.duracion}</Text>
					<Text>Creditos: {carrera.plan.creditos}</Text>
					<Text>Acuerdo de la SEP: N° {carrera.plan.acuerdo}</Text>

					<Box>
						{carrera.plan.mapaCurricular &&
							carrera.plan.mapaCurricular.map((mapa) => (
								<Accordion
									allowToggle
									w={["100%", "100%", "100%", "60%"]}
									my="2"
									border="1px"
									borderColor="#999999"
									color="#555555"
									fontWeight="bold"
								>
									<AccordionItem>
										<AccordionButton
											_expanded={{
												bg: "#00489E",
												color: "white",
											}}
										>
											<Box flex="1" textAlign="left">
												{mapa.periodo}
											</Box>

											<AccordionIcon />
										</AccordionButton>
										<AccordionPanel pb={4}>
											<UnorderedList
												listStyleType="circle"
												fontSize={styles.font.text}
												color="#555555"
											>
												{mapa.materias &&
													mapa.materias.map((materia) => (
														<ListItem>{materia}</ListItem>
													))}
											</UnorderedList>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							))}
					</Box>
				</Box>
			</Flex>
		</Center>
	);
};

export default List;
