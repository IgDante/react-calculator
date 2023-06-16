import { ButtonContainer } from "./styled";

 const ZeroButton = ({Label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {Label}
        </ButtonContainer>
    )
};

export default ZeroButton;