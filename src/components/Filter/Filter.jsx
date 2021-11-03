import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/filter/filter-actions';
import { getValue } from 'redux/contacts/contacts-selectors';
import { Input } from 'components/ContactsForm/ContactsForm';

export default function Filter() {
  const value = useSelector(getValue);
  const dispatch = useDispatch();
  return (
    <Input
      type="text"
      name="filter"
      value={value}
      id="my-contacts"
      onChange={({ target: { value } }) => dispatch(updateFilter(value))}
      style={{
        margin: '0 auto',
        display: 'block',
        marginTop: '70px',
      }}
      placeholder="Search Contacts"
    />
  );
}
