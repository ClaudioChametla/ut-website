/* eslint-disable react/no-array-index-key */
import {
	Center,
	Box,
	Text,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.json";
import footerSN from "../../data/footerSN.json";

const Modalcomponent = ({ dataModal, isOpen, onClose }) => (
	<div>
		<Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
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
				<ModalBody maxH="90vh">
					<Image
						objectFit="cover"
						src={dataModal.img ? dataModal.img : ""}
						w="100%"
						h="auto"
					/>
					<Text textAlign="center" fontSize={styles.font.text} fontWeight="bold">
						{dataModal.title ? dataModal.title : ""}
					</Text>
				</ModalBody>
			</ModalContent>
		</Modal>
	</div>
);

const minimap = () => {
	const { instalaciones } = footerSN;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [dataModal, setDataModal] = useState({});
	const action = (item) => {
		setDataModal(item);
		return onOpen;
	};
	return (
		<Box>
			<Box w={["95%", "300px", "300px", "300px"]} h="auto" align="strench">
				<Center pt="20px">
					<Grid templateColumns="repeat(3, 1fr)" gap={4}>
						{instalaciones &&
							instalaciones.map((item, index) => (
								<Box onClick={onOpen} key={`GridItemFooter-${item.title}-${index}`}>
									<Image
										key={`ImgFooter-${item.title}-${index}`}
										src={item.img}
										_hover={{ filter: "brightness(60%)" }}
										boxSize={["80px", "85px", "85px", "85px"]}
										onClick={() => action(item)}
										objectFit="cover"
									/>
								</Box>
							))}
					</Grid>
				</Center>
			</Box>
			<Modalcomponent dataModal={dataModal} isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

Modalcomponent.propTypes = {
	dataModal: PropTypes.objectOf(PropTypes.any),
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
};

Modalcomponent.defaultProps = {
	dataModal: {},
	isOpen: false,
	onClose: null,
};

export default minimap;
