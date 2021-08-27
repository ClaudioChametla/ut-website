/* eslint-disable react/no-array-index-key */
import {
	Text,
	HStack,
	List,
	ListItem,
	UnorderedList,
	Box,
	Center,
	Flex,
	Image,
	Divider,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import contentList from "../../data/homeContentList.json";
import AModal from "./AModal";

const HomeContent = () => (
	<Box bg="#f5f5f5">
		<Center
			w="90%"
			margin="0 0 10px 50px"
			flexDir="column"
			fontSize="32px"
			fontFamily="Montserrat"
			fontWeight="bold"
			lineHeight="1.5"
			color="#333"
			textAlign="center"
			marginTop="50px"
			marginBottom="50px"
		>
			<Text> ALCANZA TU MÁXIMO POTENCIAL E INSPIRA A OTROS PARA QUE LO LOGREN </Text>
			<Box margin="10px 0 10px 0" w="50%" zIndex="99">
				<Divider orientation="horizontal" />
			</Box>
			<Image
				boxSize="50px"
				src="/icons/award-solid.svg"
				filter="invert(80%) sepia(4%) saturate(0%) hue-rotate(138deg) brightness(107%) contrast(83%)"
			/>
		</Center>
		<HStack
			marginRight="50px"
			marginBottom="100px"
			marginLeft="100px"
			fontSize="16px"
			fontWeight="400"
			lineHeight="1.625"
			color="#777777"
		>
			<Center>
				<UnorderedList spacing={1}>
					{contentList.contentList.map((item, index) => (
						<Flex>
							<Image
								boxSize="25px"
								borderRadius="0%"
								filter="invert(19%) sepia(73%) saturate(2298%) hue-rotate(207deg) brightness(94%) contrast(101%)"
								src={contentList.Icon}
								marginRight="10px"
							/>
							<List>
								<ListItem key={`ListItem-${index}`}>{item}</ListItem>
							</List>
						</Flex>
					))}
				</UnorderedList>
			</Center>
			<Center>
				<Wrap>
					<WrapItem>
						<AModal />
					</WrapItem>
				</Wrap>
			</Center>
		</HStack>
	</Box>
);

export default HomeContent;
