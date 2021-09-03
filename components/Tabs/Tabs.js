import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Divider, Box } from "@chakra-ui/react";
import CarrersCards from "../CareerCards/CarrersCards";
import educativeOffer from "../../data/educativeOffer.json";
import styles from "../../styles/styles.json";

function tabs() {
	const especialidad = educativeOffer.filter((value) => value.nivel === "Especialidad");
	const licenciatura = educativeOffer.filter((value) => value.nivel === "Licenciatura");
	const posgrado = educativeOffer.filter((value) => value.nivel === "Posgrado");
	return (
		<Center marginTop="100px" marginBottom="100px" w="100%">
			<Box align="center" w={styles.container.width}>
				<Tabs size="sm" variant="unstyled" align="center">
					<TabList>
						<Tab
							w="100px"
							id="Tab02"
							color="#777777"
							bg="#FAFAFA"
							_hover={{ color: "white", bg: "#0047A1" }}
							_selected={{ color: "white", bg: "#0047A1" }}
						>
							Todo
						</Tab>
						<Center height="50px">
							<Divider orientation="vertical" />
						</Center>
						<Tab
							w="100px"
							id="Tab02"
							color="#777777"
							bg="#FAFAFA"
							_hover={{ color: "white", bg: "#0047A1" }}
							_selected={{ color: "white", bg: "#0047A1" }}
						>
							Especialidad
						</Tab>
						<Center height="50px">
							<Divider orientation="vertical" />
						</Center>
						<Tab
							w="100px"
							id="Tab03"
							color="#777777"
							bg="#FAFAFA"
							_hover={{ color: "white", bg: "#0047A1" }}
							_selected={{ color: "white", bg: "#0047A1" }}
						>
							Licenciatura
						</Tab>
						<Center height="50px">
							<Divider orientation="vertical" />
						</Center>
						<Tab
							w="100px"
							id="Tab04"
							color="#777777"
							bg="#FAFAFA"
							_hover={{ color: "white", bg: "#0047A1" }}
							_selected={{ color: "white", bg: "#0047A1" }}
						>
							Posgrados
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Center>
								<CarrersCards data={educativeOffer} />
							</Center>
						</TabPanel>
						<TabPanel>
							<Center>
								<CarrersCards data={especialidad} />
							</Center>
						</TabPanel>
						<TabPanel>
							<Center>
								<CarrersCards data={licenciatura} />
							</Center>
						</TabPanel>
						<TabPanel>
							<Center>
								<CarrersCards data={posgrado} />
							</Center>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Center>
	);
}

export default tabs;
