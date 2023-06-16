import { ButtonContainer } from "./styled";

 const NumberButton = ({Label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {Label}
        </ButtonContainer>
    )
};

export default NumberButton;