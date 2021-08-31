import { AspectRatio } from "@chakra-ui/react";

const Example = () => (
	<AspectRatio marginTop="50px" marginLeft="20px" maxW="560px" ratio={16 / 9}>
		<iframe
			title="universidadvideo"
			src="https://www.youtube.com/embed/aFmjC5ViALk"
			allowFullScreen
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		/>
	</AspectRatio>
);
export default Example;
