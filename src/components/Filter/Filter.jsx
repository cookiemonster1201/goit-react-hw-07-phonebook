import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filter-actions';
import { getValue } from 'redux/contacts/contacts-selectors';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 42px;
  font-size: 25px;
  cursor: pointer;
`;
const Input = styled.input`
  max-width: 300px;
  height: 30px;
  margin-left: 30px;
  padding: 20px 10px;
  background: #e4e4e4;
  color: #036103;
`;

export default function Filter() {
  const value = useSelector(getValue);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={({ target: { value } }) => dispatch(updateFilter(value))}
      />
    </Label>
  );
}

