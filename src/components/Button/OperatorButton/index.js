import { ButtonContainer } from "./styled";

 const OperatorButton = ({Label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {Label}
        </ButtonContainer>
    )
};

export default OperatorButton;