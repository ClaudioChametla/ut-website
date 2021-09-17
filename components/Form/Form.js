/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import { Select, Flex, Input, Button, Text, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import educativeOffer from "../../data/educativeOffer.json";
import styles from "../../styles/styles.json";

const form = () => {
	const [validation, setValidation] = useState(null);
	const carrera = educativeOffer;
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		if (
			errors.telefono ||
			errors.nombre ||
			errors.primerApellido ||
			errors.segundoApellido ||
			errors.correo
		) {
			return setValidation(false);
		}
		return setValidation(true);
	};

	return (
		<Flex fontFamily={styles.font.fontFamily}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id="name"
					{...register("nombre", { required: true })}
					variant="flushed"
					placeholder="* Nombre Completo: "
				/>
				{/* errors will return when field validation fails  */}
				{errors.nombre && <Text color="red"> Este campo es requerido.</Text>}
				<Input
					id="lastName"
					{...register("primerApellido", { required: true })}
					variant="flushed"
					placeholder="* Apellido Paterno: "
				/>
				{errors.primerApellido && <Text color="red"> Este campo es requerido.</Text>}
				<Input
					id="secondLastName"
					{...register("segundoApellido", { required: true })}
					variant="flushed"
					placeholder="* Apellido Materno: "
				/>
				{errors.segundoApellido && <Text color="red"> Este campo es requerido.</Text>}
				<Input
					id="email"
					{...register("correo", { required: true })}
					variant="flushed"
					placeholder="* Correo: "
				/>
				{errors.correo && <Text color="red"> Este campo es requerido.</Text>}
				<Input
					id="phone"
					{...register("telefono", { required: true })}
					variant="flushed"
					placeholder="* WhatsApp(10 Dígitos): "
				/>
				{errors.telefono && <Text color="red"> Este campo es requerido.</Text>}
				<Text>Me quiero inscribir a </Text>
				<Select variant="flushed" placeholder="---">
					{carrera.map((item, index) => (
						<option
							{...register("carrera", { required: false })}
							key={`option-${index}`}
						>
							{item.carrera}
						</option>
					))}
				</Select>
				<Button
					padding="30"
					bg="#0D47A1"
					_hover={{ color: "#FFFFFF", filter: "brightness(88%)" }}
					color="white"
					marginTop="25px"
					marginBottom="25px"
					type="submit"
				>
					Registrarme
				</Button>
				{!validation == null && (
					<Box bgColor="red" m="5" w="300px" h="50px">
						<Text color="#666">
							{" "}
							Uno o más campos tienen un error. Por favor revíselo y reinténtelo.
						</Text>
					</Box>
				)}
				{validation !== null && validation && (
					<Box bgColor="blue" m="5" w="300px" h="50px">
						<Text color="#666">
							{" "}
							Uno o más campos tienen un error. Por favor revíselo y reinténtelo.
						</Text>
					</Box>
				)}
				{watch.telefono && (
					<Text> Gracias por tu mensaje. El mensaje ha sido enviado. </Text>
				)}
				<Text color="#666">
					Al hacer clic en “REGISTRARME”, reconoces haber leído las
					<a href="https://www.universidadtollancingo.com/politicas-de-privacidad/">
						<Text color="#0D47A1">Políticas de Privacidad</Text>
					</a>
					y confirmas estar de acuerdo con el uso de ellas.
				</Text>
			</form>
		</Flex>
	);
};

export default form;
