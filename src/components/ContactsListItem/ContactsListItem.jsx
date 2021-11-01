import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

const Button = styled.button`
  padding: 5px 10px;
  width: 150px;
  margin-top: 10px;
  background-color: #ff1414;
  color: whitesmoke;
  border-radius: 5px;
  transition: background-color 200ms linear, color 500ms linear;

  &:hover,
  &:focus {
    background-color: #c9baba;
    color: red;
    transition: background-color 200ms linear, color 500ms linear;
  }
`;
const P = styled.p`
  font-size: 25px;
`;

export default function ContactsListItem({ contact: { name, number } }) {
  const dispatch = useDispatch();
  return (
    <>
      <P>
        {name}: {number}
      </P>
      <Button
        type="button"
        onClick={() => {
          dispatch(deleteContact(number));
        }}
      >
        delete
      </Button>
    </>
  );
}

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
