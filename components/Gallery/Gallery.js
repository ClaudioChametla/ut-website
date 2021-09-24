/* eslint-disable react/no-array-index-key */
import { Image, Flex, Box, useMediaQuery, Button, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Gallery = ({ pageData }) => {
	const MotionImage = motion(Image);
	const { imagenes } = pageData;
	const [currentImg, setCurrentImg] = useState(0);
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

	const nextScroll = () => {
		const container = global.document.getElementById("gallery");
		const card = global.document.getElementById("gallerySlide0");
		const cardSize = card && card.clientWidth;
		if (currentImg === imagenes.length - 1) {
			setCurrentImg(0);
			container.scrollLeft = 0;
		} else {
			setCurrentImg(currentImg + 1);
			container.scrollLeft += cardSize + 5;
		}
	};

	const prevScroll = () => {
		const container = global.document.getElementById("gallery");
		const card = global.document.getElementById("gallerySlide0");
		const cardSize = card && card.clientWidth;
		if (currentImg === 0) {
			setCurrentImg(imagenes.length - 1);
			container.scrollLeft = container.clientWidth;
		} else {
			setCurrentImg(currentImg - 1);
			container.scrollLeft -= cardSize + 5;
		}
	};

	const icon = {
		hidden: { opacity: 0, scale: 1, x: isLargerThan768 ? "-100%" : "-20px" },
		visible: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	return (
		<Box h="100%" w="100%" align="center">
			<Box align="center" variants={icon} pos="relative" h="75%">
				{imagenes &&
					imagenes.map((item, index) => (
						<MotionImage
							key={`galeriaimagenes-${index}`}
							src={item}
							alt="img"
							w="100%"
							h="100%"
							pos="absolute"
							objectFit="cover"
							display="block"
							className="mySlides"
							variants={icon}
							initial="hidden"
							animate={currentImg === index ? "visible" : "hidden"}
						/>
					))}
				<Flex
					justifyContent="space-between"
					alignItems="center"
					position="absolute"
					w="100%"
					h="100%"
				>
					<Button
						h="100%"
						bg="none"
						transition="none"
						position="relative"
						_hover={{ bg: "rgba(0,0,0,.3)" }}
						borderRadius="0deg"
						onClick={() => prevScroll()}
						_focus={{ boxShadow: "none" }}
					>
						<Image
							transform="scale(2)"
							src="/icons/chevron-left.svg"
							filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
						/>
					</Button>
					<Spacer />
					<Button
						h="100%"
						bg="none"
						transition="none"
						position="relative"
						_hover={{ bg: "rgba(0,0,0,.3)" }}
						borderRadius="0deg"
						onClick={() => nextScroll()}
						_focus={{ boxShadow: "none" }}
					>
						<Image
							transform="scale(2)"
							src="/icons/chevron-right.svg"
							filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
						/>
					</Button>
				</Flex>
			</Box>
			<Flex
				h="25%"
				w="100%"
				mt="5px"
				id="gallery"
				direction="row"
				overflowX="auto"
				cursor="grab"
				position="initial"
				_active={{
					cursor: "grabbing",
				}}
				style={{
					scrollSnapType: "x mandatory",
					WebkitOverflowScrolling: "touch",
					scrollBehavior: "smooth",
					overflowX: "hidden",
				}}
			>
				{imagenes &&
					imagenes.map((item, index) => (
						<Image
							key={`gridimagenes-${index}`}
							id={`gallerySlide${index}`}
							class="showcase-card"
							src={item}
							alt="img"
							mr="5px"
							fallbackSrc={item}
							w="33.3%"
							h="auto"
							objectFit="cover"
							filter={currentImg === index ? "" : "brightness(60%)"}
							onClick={() => setCurrentImg(index)}
							_hover={{
								filter: "brightness(80%)",
								cursor: "pointer",
							}}
							transition="all 200ms ease-in-out"
						/>
					))}
			</Flex>
		</Box>
	);
};

Gallery.propTypes = {
	pageData: PropTypes.objectOf(PropTypes.any),
};

Gallery.defaultProps = {
	pageData: {},
};

export default Gallery;
