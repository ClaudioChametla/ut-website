import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Divider } from "@chakra-ui/react";

function tabs() {
	const m = "PAgina Uno";
	return (
		<Center marginTop="100px" marginBottom="100px" w="100%">
			<Tabs variant="unstyled">
				<TabList>
					<Tab isDisabled>
						<br />
					</Tab>
					<Tab
						color="#777777"
						bg="#FAFAFA"
						paddingLeft="50"
						paddingRight="50"
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
						paddingLeft="50"
						paddingRight="50"
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
						paddingLeft="50"
						paddingRight="50"
						_hover={{ color: "white", bg: "#0047A1" }}
						_selected={{ color: "white", bg: "#0047A1" }}
					>
						Posgrados
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<p>{m}</p>
					</TabPanel>
					<TabPanel>
						<p>Uno</p>
					</TabPanel>
					<TabPanel>
						<p>Licenciatura</p>
					</TabPanel>
					<TabPanel>
						<p>three!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Center>
	);
}

export default tabs;
