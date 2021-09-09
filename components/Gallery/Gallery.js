/* eslint-disable react/no-array-index-key */
import { Image, Grid, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import Styles from "../../styles/styles.json";

const Gallery = ({ pageData }) => {
	const MotionImage = motion(Image);
	const { imagenes } = pageData;
	let slideIndex = 1;
	const controls = useAnimation();
	const icon = {
		hidden: { opacity: 0, scale: 0, x: "-100%" },
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

	function showSlides(n) {
		const slides = global.document.getElementsByClassName("mySlides");
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
			slides[i].style.initial = "hidden";
		}
		slides[slideIndex - 1].style.display = "block";
		slides[slideIndex - 1].style.animate = "visible";
	}

	useEffect(() => {
		// showSlides(slideIndex);
	}, []);

	function currentSlide(index) {
		// showSlides((slideIndex = n));
		setCurrentImg(index);
	}

	return (
		<Box align="center" w={Styles.container.width} pos="relative" bg="blue">
			<Box pt="30px" align="center" variants={icon} pos="relative" h="430px" bg="red">
				{imagenes &&
					imagenes.map((item, index) => (
						<MotionImage
							key={`galeriaimagenes-${index}`}
							src={item}
							alt="img"
							w="60%"
							h="400px"
							left="150px"
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
			<Grid templateColumns="repeat(5, 1fr)" w="60%" m="auto" gap={2} mt="5px">
				{imagenes &&
					imagenes.map((item, index) => (
						<MotionImage
							key={`gridimagenes-${index}`}
							src={item}
							alt="img"
							w="100%"
							id="demo"
							onClick={() => currentSlide(index)}
							_hover={{ filter: "brightness(60%)", cursor: "pointer" }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 1 }}
						/>
					))}
			</Grid>
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
