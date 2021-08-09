import dataCarrers from "../../data/example.json";
import { Flex, Center, Stack, Box, Text } from "@chakra-ui/react";

const Example = () => {
	const carrers = dataCarrers.carreras;

	return (
		<Flex flexDir="column" w="100%" h="auto">
			<Center w="100%">
				<Stack direction="row" spacing={5}>
					{carrers &&
						carrers.map((item, index) => (
							<Box
								bg="tomato"
								w="200px"
								h="500px"
								rounded="10px"
								key={`${item.name}-Box`}
							>
								<Text key={`${item.name}-Text1`}>
									{item.name} - {index}
								</Text>
								<Text key={`${item.name}-Text-2`}>{item.description}</Text>
								<Text key={`${item.name}-Text-3`}>{item.cost}</Text>
								<Text key={`${item.name}-Text-4`}>
									{item.ubication && item.ubication}
								</Text>
								{item.tags &&
									item.tags.map((tag) => <Text bg="green.100">{tag}</Text>)}
							</Box>
						))}
				</Stack>
			</Center>
		</Flex>
	);
};

export default Example;
