/* eslint-disable react/no-array-index-key */
import { Center, Image, Divider } from "@chakra-ui/react";
import vincualcionLogos from "../../data/vinculacionLogos.json";

const vinculacionMap = () => {
	const { logosU } = vincualcionLogos;
	return (
		<Center m="100" flexDirection={["column", "column", "row", "row"]}>
			{logosU &&
				logosU.map((item, index) => (
					<Center
						key={`Center-${index}`}
						as="a"
						href="/vinculacion"
						m="5"
						w={["200%", "150%", "100%", "100%"]}
						h="auto%"
					>
						<Image m="5" src={item.img} alt={item.id} />
						<Center height={["none", "none", "100px", "200px"]}>
							<Divider orientation="vertical" />
						</Center>
					</Center>
				))}
		</Center>
	);
};
export default vinculacionMap;
