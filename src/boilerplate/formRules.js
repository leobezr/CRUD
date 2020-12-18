export default new class Rules {
   constructor() {
      this.email = [
         v => !!v || "Preencha seu e-mail",
         v => /.+@.+/.test(v) || "Esse campo precisa ser um e-mail válido"
      ];
      this.name = [
         v => (typeof v == "string" && String(v).split("").length >= 2) ||
            "Esse campo é obrigatório"
      ];
      this.phone = [
         v => (v && v.length >= 15) || "Número de telefone precisa ter 11 dígitos",
         v => (v && v.replace(/\D+/g, "").length == 11) || "Use apenas números"
      ]
      this.cpf = [
         v => !!v && v.replace(/\D+/g, "").length == 11 || "Este campo é obrigatório"
      ]
      this.validDate = [
         v => {
            if (v) {
               const [day, month, year] = v.split("/");

               if (day && month && year) {
                  let date = `${year}-${month}-${day}`;
                  if (year.toString().length < 4) return "Data inválida"
                  date = new Date(date);

                  return date instanceof Date && !isNaN(date) || "Data inválida";
               } else {
                  return "Data inválida"
               }
            }
            return "Data inválida"
         }
      ]
      this.select = [
         v => !!v || "Campo obrigatório"
      ]
   }
}
