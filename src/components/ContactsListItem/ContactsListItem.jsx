import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { StyledButton } from 'components/Button/Button';

const DeleteButton = styled(StyledButton)`
  padding: 5px 3px;
  width: 120px;
  text-transform: lowercase;
  font-size: 16px;
  margin: 0;
`;

export default function ContactsListItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  return (
    <>
      <p>
        {name}: {number}
      </p>

      <DeleteButton
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        delete
      </DeleteButton>
    </>
  );
}

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
