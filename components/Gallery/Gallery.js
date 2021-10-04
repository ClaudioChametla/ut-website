/* eslint-disable react/no-array-index-key */
import {
	Image,
	Flex,
	Box,
	useMediaQuery,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "../../styles/styles.json";

const Gallery = ({ pageData }) => {
	const MotionImage = motion(Image);
	const { imagenes, titles } = pageData;
	const { isOpen, onOpen, onClose } = useDisclosure();
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
		<>
			<Box h="100%" w="100%" align="center">
				<Box align="center" variants={icon} pos="relative" h="75%">
					<Box
						w="100%"
						h="100%"
						pos="relative"
						_hover={{ filter: "brightness(80%)" }}
						animation="all 3s ease"
					>
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
									onClick={onOpen}
								/>
							))}
						{imagenes && imagenes.length > 2 ? (
							<Button
								h="100%"
								bg="none"
								transition="none"
								position="absolute"
								_hover={{ bg: "rgba(0,0,0,.3)" }}
								borderRadius="0deg"
								onClick={() => prevScroll()}
								_focus={{ boxShadow: "none" }}
								left="0"
							>
								<Image
									loading="lazy"
									transform="scale(2)"
									src="/icons/chevron-left.svg"
									filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
								/>
							</Button>
						) : (
							""
						)}

						{imagenes && imagenes.length > 2 ? (
							<Button
								h="100%"
								bg="none"
								transition="none"
								position="absolute"
								_hover={{ bg: "rgba(0,0,0,.3)" }}
								borderRadius="0deg"
								onClick={() => nextScroll()}
								_focus={{ boxShadow: "none" }}
								right="0"
							>
								<Image
									loading="lazy"
									transform="scale(2)"
									src="/icons/chevron-right.svg"
									filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
								/>
							</Button>
						) : (
							""
						)}
					</Box>
				</Box>
				<Flex
					h="25%"
					w="100%"
					mt="5px"
					id="gallery"
					direction="row"
					overflowX="auto"
					position="initial"
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
								loading="lazy"
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
			{imagenes && (
				<Modal isOpen={isOpen} onClose={onClose} size="xl">
					<ModalOverlay />

					<ModalContent w="auto" h="auto" borderRadius="0">
						<ModalCloseButton
							position="absolute"
							top="0"
							right={["0", "0", "-50px", "-50px"]}
							boxSize="50px"
							bg="#0053B8"
							borderRadius="0"
							color="white"
							_focus={{ border: 0 }}
						/>
						<ModalBody h="auto">
							<Button
								h="50%"
								bg="none"
								transition="none"
								position="absolute"
								_hover={{ bg: "rgba(0,0,0,.1)" }}
								borderRadius="0deg"
								onClick={() => prevScroll()}
								_focus={{ boxShadow: "none" }}
								left="20px"
								top="25%"
							>
								<Image
									loading="lazy"
									transform="scale(2)"
									src="/icons/chevron-left.svg"
									filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
								/>
							</Button>
							<Button
								h="50%"
								bg="none"
								transition="none"
								position="absolute"
								_hover={{ bg: "rgba(0,0,0,.1)" }}
								borderRadius="0deg"
								onClick={() => nextScroll()}
								_focus={{ boxShadow: "none" }}
								right="20px"
								top="25%"
							>
								<Image
									loading="lazy"
									transform="scale(2)"
									src="/icons/chevron-right.svg"
									filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
								/>
							</Button>
							<Image
								loading="lazy"
								objectFit="cover"
								src={imagenes[currentImg] ? imagenes[currentImg] : ""}
								w="100%"
								h="auto"
							/>
							{pageData.titles && (
								<Text
									textAlign="center"
									fontSize={styles.font.text}
									fontWeight="bold"
								>
									{titles[currentImg] ? titles[currentImg] : ""}
								</Text>
							)}
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</>
	);
};

Gallery.propTypes = {
	pageData: PropTypes.objectOf(PropTypes.any),
};

Gallery.defaultProps = {
	pageData: {},
};

export default Gallery;
