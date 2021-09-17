/* eslint-disable react/no-array-index-key */
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
	Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.json";

const List = ({ pageData }) => (
	<Center fontFamily={styles.font.fontFamily} my="10">
		<Flex w={["90vw", "85vw", "53vw", "48vw"]} flexDir="column">
			<Box fontWeight="bold">
				<Text>Carrera: {pageData && pageData.carrera}</Text>
				<Text>Duración: {pageData && pageData.plan.duracion}</Text>
				<Text>Creditos: {pageData && pageData.plan.creditos}</Text>
				<Text>Acuerdo de la SEP: N° {pageData && pageData.plan.acuerdo}</Text>

				<Box>
					{pageData &&
						pageData.plan.mapaCurricular.map((mapa, index) => (
							<Accordion
								allowToggle
								key={`List-Accordion-${pageData.id}${index}`}
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
													<ListItem key={`ListMateria-${materia}`}>
														{materia}
													</ListItem>
												))}
										</UnorderedList>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						))}
				</Box>
			</Box>
			<Button
				bg={styles.background.light}
				_hover={{ filter: "brightness(130%)" }}
				color="white"
				w={["100%", "100%", "60%", "60%"]}
			>
				Descargar Mapa Curricular
			</Button>
		</Flex>
	</Center>
);

List.propTypes = {
	pageData: PropTypes.objectOf(PropTypes.any),
};

List.defaultProps = {
	pageData: null,
};

export default List;
