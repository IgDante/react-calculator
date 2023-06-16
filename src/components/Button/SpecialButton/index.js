import { ButtonContainer } from "./styled";

 const SpecialButton = ({Label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {Label}
        </ButtonContainer>
    )
};

export default SpecialButton;