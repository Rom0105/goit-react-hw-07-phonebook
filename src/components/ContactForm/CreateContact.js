// import Loader from 'react-loader-spinner';
// import toast, { Toaster } from 'react-hot-toast';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { useCreateContactMutation } from '../../Redux/contactsApi';

// export const CreateContact = () => {
//   const [createContact, { isLoading }] = useCreateContactMutation();

//   const handleSubmit = event => {
//     event.preventDefault();
//     createContact({
//       name: event.currentTarget.elements.name.value,
//       phone: event.currentTarget.elements.phone.value,
//     }).then(response => {
//       const normalizedName = response.data.name.toLowerCase();

//       if (normalizedName) {
//         alert(`is already on contacts`);
//         return;
//       }
//     });

//     toast.success('Note created!');
//     event.currentTarget.reset();
//   };

//   return (
//     <>
//       <form autoComplete="on" onSubmit={handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="tel"
//             name="phone"
//             pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//             title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//       {isLoading && (
//         <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
//       )}
//       <Toaster />
//     </>
//   );
// };
