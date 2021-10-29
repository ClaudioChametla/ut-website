/* eslint-disable react/no-array-index-key */
import {
	Text,
	Stack,
	ListItem,
	UnorderedList,
	Box,
	Center,
	Flex,
	Image,
	AspectRatio,
} from "@chakra-ui/react";
import contentList from "../../data/homeContentList.json";
// eslint-disable-next-line no-unused-vars

import styles from "../../styles/styles.json";

const HomeContent = () => (
	<Center w="100%" direction="column" bg="#f5f5f5" zIndex="1">
		<Box w={styles.container.width}>
			<Stack marginTop="100px">
				<Text
					textAlign="center"
					fontSize={styles.font.title}
					fontFamily={styles.font.fontFamily}
					fontWeight="bold"
					lineHeight="1.5"
				>
					{" "}
					ALCANZA TU MÁXIMO POTENCIAL E INSPIRA A OTROS PARA QUE LO LOGREN{" "}
				</Text>
				<Center>
					<Image
						loading="lazy"
						alt="icon"
						src="/icons/award-solid.svg"
						filter="invert(80%) sepia(4%) saturate(0%) hue-rotate(138deg) brightness(107%) contrast(83%)"
						htmlHeight="50px"
						htmlWidth="50px"
					/>
				</Center>
			</Stack>
			<Stack
				flexDirection={["column", "column", "row", "row"]}
				fontSize={["10px", "16px", "16px", "16px"]}
				fontWeight="400"
				lineHeight="2"
				color="#777777"
				marginBottom="100px"
			>
				<Box marginTop="50px">
					<UnorderedList spacing={1}>
						{contentList.contentList.map((item, index) => (
							<ListItem key={`ListItem-${index}`} style={{ listStyle: "none" }}>
								<Flex key={`FlexHomeContent-${index}`}>
									<Image
										loading="lazy"
										borderRadius="0%"
										alt="Check"
										filter="invert(19%) sepia(73%) saturate(2298%) hue-rotate(207deg) brightness(94%) contrast(101%)"
										src={contentList.Icon}
										marginRight="10px"
										htmlHeight="25px"
										htmlWidth="25px"
									/>
									{item}
								</Flex>
							</ListItem>
						))}
					</UnorderedList>
				</Box>
				<Box w="90%">
					<AspectRatio marginTop="50px" marginLeft="20px" maxW="560px" ratio={16 / 9}>
						<iframe
							loading="lazy"
							title="universidadvideo"
							src="https://www.youtube.com/embed/aFmjC5ViALk"
							passive="true"
							allowFullScreen
							poster="bg_oferta.webp"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							srcDoc="<style>
							* {
							padding: 0;
							margin: 0;
							overflow: hidden;
							}
							
							body, html {
							  height: 100%;
							}
							
							img, svg {
							  position: absolute;
							  width: 100%;
							  top: 0;
							  bottom: 0;
							  margin: auto;
							}
							
							svg {
							  filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
							  transition: all 250ms ease-in-out;
							}
							
							body:hover svg {
							  filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
							  transform: scale(1.2);
							}
						  </style>
						  <a href='https://www.youtube.com/embed/GOW1oxrwUz0?autoplay=1'>
							<img src='/images/background_video.webp' alt='Coffee Recipe Javascript Project'>
							<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
						  </a>
						  "
						/>
					</AspectRatio>
				</Box>
			</Stack>
		</Box>
	</Center>
);

export default HomeContent;
