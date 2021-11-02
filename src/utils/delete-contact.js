export default function deleteContact(allContacts, toBeDeletedId) {
  const updatedContacts = allContacts.filter(({ id }) => id !== toBeDeletedId);
  return [...updatedContacts];
}
