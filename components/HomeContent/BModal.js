import { AspectRatio } from "@chakra-ui/react";

const Example = () => (
	<AspectRatio marginTop="50px" marginLeft="20px" maxW="560px" ratio={16 / 9}>
		<iframe
			title="universidadvideo"
			src="https://www.youtube.com/embed/aFmjC5ViALk"
			allowFullScreen
		/>
	</AspectRatio>
);
export default Example;
