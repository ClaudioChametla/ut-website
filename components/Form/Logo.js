/* eslint-disable react/no-array-index-key */
import { Text, Image, Box, Center } from "@chakra-ui/react";

const logo = () => (
	<Center
		_hover={{
			cursor: "pointer",
			filter: "invert(100%) sepia(92%) saturate(1247%) hue-rotate(191deg) brightness(90%) contrast(94%)",
		}}
		flexDirection={["row", "row", "column", "column"]}
	>
		<Box
			filter={["invert(0%)", "none", "invert(100%)", "invert(100%)"]}
			rounded={["none", "none", "full", "full"]}
			p="5"
			bg={["none", "none", "pink.500", "pink.500"]}
			boxSize={["70px", "80px", "90px", "90px"]}
		>
			<Image loading="lazy" src="/icons/verify.svg" alt="Logo de formulario de registro" />
		</Box>
		<Text
			color={["none", "none", "green.500", "green.500"]}
			fontSize={["10px", "12px", "18px", "20px"]}
			fontWeight="bold"
		>
			REGISTRO
		</Text>
	</Center>
);

export default logo;
