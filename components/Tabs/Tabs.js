import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Divider, Box } from "@chakra-ui/react";
import CarrersCards from "../CareerCards/CarrersCards";
import educativeOffer from "../../data/educativeOffer.json";

function tabs() {
	const especialidad = educativeOffer.filter((value) => value.nivel === "Especialidad");
	const licenciatura = educativeOffer.filter((value) => value.nivel === "Licenciatura");
	const posgrado = educativeOffer.filter((value) => value.nivel === "Posgrado");
	return (
		<Center marginTop="100px" marginBottom="100px" w="95%">
			<Box align="center">
				<Tabs size="sm" variant="unstyled">
					<TabList marginLeft={["0px", "50px", "150px", "300px"]}>
						<Tab isDisabled>
							<br />
						</Tab>
						<Tab
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
							<CarrersCards>{licenciatura}</CarrersCards>
						</TabPanel>
						<TabPanel>
							{especialidad.map((item) => (
								<Center>
									<h1>{item.carrera} </h1>
								</Center>
							))}
						</TabPanel>
						<TabPanel>
							{licenciatura.map((item) => (
								<Center>
									<h1>{item.carrera} </h1>
								</Center>
							))}
						</TabPanel>
						<TabPanel>
							{posgrado.map((item) => (
								<Center>
									<h1>{item.carrera} </h1>
								</Center>
							))}
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Center>
	);
}

export default tabs;
