/* eslint-disable react/no-array-index-key */
import { Center, Image, Divider, Grid, Box, GridItem } from "@chakra-ui/react";
import vincualcionLogos from "../../data/vinculacionLogos.json";

const vinculacionMap = () => {
	const { logosU } = vincualcionLogos;
	return (
		<Center m="100">
			<Grid templateColumns={["none", "none", "repeat(5, 1fr)", "repeat(5, 1fr)"]}>
				{logosU &&
					logosU.map((item, index) => (
						<GridItem key={`GridItem-${index}`}>
							<Center as="a" href="/vinculacion" h="100%">
								<Box>
									<Image
										htmlWidth=""
										htmlHeight=""
										loading="lazy"
										src={item.img}
										alt={item.id}
									/>
								</Box>
								<Center m="2" h={["none", "none", "50%", "80%"]}>
									<Divider orientation="vertical" />
								</Center>
							</Center>
						</GridItem>
					))}
			</Grid>
		</Center>
	);
};
export default vinculacionMap;
