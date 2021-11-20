import { getFilter } from './filter/ContactFilterSelectors';

export const getContacts = state => state.contacts.items;

export const getvisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  return contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filter.toLowerCase()) || phone.includes(filter),
  );
};
