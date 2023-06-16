import { InputContainer } from "./styled";

const Input = ({value}) => {
    return (
        <InputContainer>
             <input dir="rtl" disabled value={value} />
        </InputContainer>
    )
};

export default Input;