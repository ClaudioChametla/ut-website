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
				w="100%"
				h="auto"
				padding="10"
				_hover={{ cursor: "pointer", filter: "brightness(60%)" }}
				onClick={onOpen}
				src="/images/background_video.jpg"
			/>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalBody maxW="1080px">
						<AspectRatio>
							<iframe
								title="UniversidadVideo"
								src="https://www.youtube.com/embed/aFmjC5ViALk"
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
