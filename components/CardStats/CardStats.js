/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import { Box, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import cardsinfo from "../../data/cardsinfo.json";

const CardStats = () => {
	const infocardStats = cardsinfo.CardStats;
	const { ref, inView } = useInView({
		threshold: 0,
	});
	const [contadorState, setContadorState] = useState(null);

	useEffect(() => {
		const contadores = document.querySelectorAll(".contador_card");
		setContadorState(contadores);
	}, []);

	useEffect(() => {
		if (inView) {
			if (contadorState !== null || contadorState !== "") {
				for (const contador of contadorState) {
					let cantidad = 0;
					const maximum = contador.textContent;
					const velocity = 4;
					const timer = setInterval(() => {
						contador.textContent = cantidad += 5;

						if (cantidad >= maximum) {
							clearInterval(timer);
							contador.textContent = maximum;
						}
					}, velocity);
				}
			}
		}
	}, [inView]);

	return (
		<Center w="100%" ref={ref}>
			<Grid templateColumns={["", "", "", "repeat(3, 1fr)"]} w={["95%", "95%", "95%", "85%"]}>
				{infocardStats &&
					infocardStats.map((item, index) => (
						<Flex direction="column" align="center" key={`Flex-${index}`}>
							<Box
								bgColor="white"
								align="center"
								w="100%"
								h={["auto", "auto", "auto", "410px"]}
								p="100px 0 30px 0"
							>
								<Image
									src={item.icon}
									boxSize="85px"
									filter="invert(17%) sepia(99%) saturate(2350%) hue-rotate(203deg) brightness(87%) contrast(100%)"
								/>
								<Text
									w="100%"
									textAlign="center"
									fontSize="52px"
									color="#0B2A49"
									className="contador_card"
								>
									{item.title}
								</Text>
								<Text color="#0B2A49" textAlign="center" fontSize="18px">
									{item.subtitle}
								</Text>
							</Box>
						</Flex>
					))}
			</Grid>
		</Center>
	);
};

export default CardStats;
