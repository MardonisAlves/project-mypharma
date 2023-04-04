import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Category } from "../../../interfaces/category.interface";


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
      <FormSelect id="disabledSelect" name="pesuisa" onChange={(e:any) => handleChaneValue(e.target.value)}>
        <option value="">Disabled categoria</option>
        {options !== undefined ?
          options.map((option: any) => (
            <option key={option.value} value={option.id}>
              {option.category}
            </option>
          ))
          : ""}
      </FormSelect>
    </SelectWrapper>
  )
}