export default function addContact(allContacts, contact) {
  const isContactExisting = allContacts.some(
    ({ name, number }) => name === contact.name || number === contact.number,
  );
  if (isContactExisting) {
    alert(`${contact.name} is already in contacts`);
    return allContacts;
  }
  return [...allContacts, contact];
}
