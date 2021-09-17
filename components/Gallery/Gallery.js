/* eslint-disable react/no-array-index-key */
import { Image, Flex, Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Gallery = ({ pageData }) => {
	const MotionImage = motion(Image);
	const { imagenes } = pageData;
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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
	const [currentImg, setCurrentImg] = useState(0);

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
							objectFit="fill"
							display="block"
							className="mySlides"
							variants={icon}
							initial="hidden"
							animate={currentImg === index ? "visible" : "hidden"}
						/>
					))}
			</Box>
			<Flex h="25%" w="100%" mt="5px" direction="row" overflowX="hidden">
				{imagenes &&
					imagenes.map((item, index) => (
						<Image
							key={`gridimagenes-${index}`}
							src={item}
							alt="img"
							mr="5px"
							fallbackSrc={item}
							w="33.3%"
							h="auto"
							onClick={() => setCurrentImg(index)}
							_hover={{
								filter: "brightness(60%)",
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
