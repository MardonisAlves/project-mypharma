import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Category } from "../../filterproducts/category.interface";


const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin:50px 0px 0px 0px;
`;

const FormSelect = styled(Form.Select)`
    padding:11px;
    border: 4px solid #ccc;
`

type PropsSelect = {
  options:Category[],
  handleChaneValue:(categoria:string) => any
}


export default function SelectCustom({ options, handleChaneValue}: PropsSelect) {
  return (
    <SelectWrapper>
      <FormSelect 
        id="disabledSelect" 
        onClick={(e:any) => handleChaneValue(e.target.value)}
        >
        <option value="null">Selecione Categorias</option>
        {options !== undefined ?
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.category}
            </option>
          ))
          : ""}
      </FormSelect>
    </SelectWrapper>
  )
}