import { Box, Text, Image, Flex, Link, Button } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import heroImg from "../../data/heroImg.json";
import styles from "../../styles/styles.json";

const Hero = () => {
	const img = heroImg.images;
	const slideShow = useRef(null);
	const clockSlide = useRef(null);

	const siguiente = () => {
		if (slideShow.current.children.length > 0) {
			slideShow.current.style.transition = `1000ms ease-out all`;
			const primerElemento = slideShow.current.children[0];

			const tamañoSlide = slideShow.current.children[0].offsetWidth;
			slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const trans = () => {
				slideShow.current.style.transition = "none";
				slideShow.current.style.transform = `translateX(0)`;
				slideShow.current.appendChild(primerElemento);
				slideShow.current.removeEventListener("transitionend", trans);
			};

			slideShow.current.addEventListener("transitionend", trans);
		}
	};

	const anterior = () => {
		console.log("anterior");
		if (slideShow.current.children.length > 0) {
			const index = slideShow.current.children.length - 1;
			const ultimoElemento = slideShow.current.children[index];
			slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild);
			slideShow.current.style.transition = "none";
			const tamañoSlide = slideShow.current.children[0].offsetWidth;
			slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideShow.current.style.transition = "1000ms ease-out all";
				slideShow.current.style.transform = `translateX(0)`;
			});
		}
	};

	useEffect(() => {
		clockSlide.current = setInterval(() => {
			siguiente();
		}, 5000);

		slideShow.current.addEventListener("mouseenter", () => {
			clearInterval(clockSlide.current);
		});
		slideShow.current.addEventListener("mouseleave", () => {
			clockSlide.current = setInterval(() => {
				siguiente();
			}, 5000);
		});
	}, []);

	return (
		<>
			<Box h={["45vh", "100vh"]} bg="black" overflow="hidden">
				<Flex w="100%" h="100%" flexWrap="nowrap" ref={slideShow} position="relative">
					{img &&
						img.map((item) => (
							<Flex
								fontFamily="mono"
								fontWeight="bold"
								textAlign="center"
								minW="100%"
								h="100%"
								alignSelf="center"
								zIndex="0"
								position="relative"
								justifyContent="center"
							>
								<Image
									src={item.src}
									position="relative"
									verticalAlign="top"
									w="100%"
								/>

								<Flex
									flexDir="column"
									color="white"
									fontWeight="bold"
									position="absolute"
									top={["30%", "40%"]}
									justifyContent="center"
									w={["90%", "90%", "90%", "90%", "50%"]}
								>
									<Text
										fontSize={["30px", "40px", "60px", "75px"]}
										fontFamily={styles.font.fontFamily}
									>
										{item.title}
									</Text>
									<Flex justifyContent="center">
										<Text
											d={["none", "none", "flex", "flex"]}
											fontSize="20px"
											fontFamily={styles.font.fontFamily}
										>
											{item.subtitle}
										</Text>
									</Flex>
									<Flex justifyContent="center" flexWrap="wrap">
										<Link
											href={item.link1}
											bg={styles.background.light}
											_hover={{ bg: "#0055FF" }}
											py="3"
											m={["5", "10"]}
											w="200px"
										>
											INSCRIBIRME
										</Link>
										<Link
											href={item.link2}
											_hover={{ bg: "whiteAlpha.300" }}
											border="1px"
											py="3"
											m={["2", "10"]}
											w="200px"
										>
											OFERTA EDUCATIVA
										</Link>
									</Flex>
								</Flex>
							</Flex>
						))}
				</Flex>
				<Flex
					justifyContent="space-between"
					alignSelf="center"
					alignItems="center"
					position="absolute"
					w="100%"
					pt="30px"
					top={["8%", "25%"]}
				>
					<Button
						h="100px"
						_hover={{ bg: "rgba(0,0,0,.5)" }}
						bg="none"
						onClick={anterior}
						transition="none"
						position="absolute"
					>
						<Image
							transform="scale(3)"
							src="/icons/chevron-left.svg"
							filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
						/>
					</Button>
					<Button
						h="100px"
						bg="none"
						_hover={{ bg: "rgba(0,0,0,0.5)" }}
						onClick={siguiente}
						transition="none"
						position="absolute"
						right="0"
					>
						<Image
							transform="scale(3)"
							src="/icons/chevron-right.svg"
							filter="invert(94%) sepia(92%) saturate(6%) hue-rotate(195deg) brightness(104%) contrast(96%)"
						/>
					</Button>
				</Flex>
			</Box>
		</>
	);
};
export default Hero;
