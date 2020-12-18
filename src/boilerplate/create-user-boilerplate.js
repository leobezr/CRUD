export default function (prop) {
   const USER_DATA = {
      name: null,
      role: null,
      cpf: null,
      phone: null,
      email: null,
      gender: null,
      status: null,
      birthday: null,
   }

   for (let key in prop) {
      USER_DATA[key] = prop[key].value;
   }
   return USER_DATA;
}
