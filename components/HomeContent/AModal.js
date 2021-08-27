import {
	AspectRatio,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	useDisclosure,
	Flex,
} from "@chakra-ui/react";

function BasicUsage() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Flex>
			<Image
				_hover={{ cursor: "pointer", filter: "brightness(60%)" }}
				w="1370px"
				h="auto"
				onClick={onOpen}
				src="/images/background_video.jpg"
				m="10"
			/>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<AspectRatio maxW="1080px">
							<iframe
								title="UniversidadVideo"
								src="https://www.youtube.com/embed/QhBnZ6NPOY0"
								allowFullScreen
							/>
						</AspectRatio>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Flex>
	);
}

export default BasicUsage;
