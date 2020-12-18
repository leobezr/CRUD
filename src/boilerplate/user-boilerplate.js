import formRules from "@/boilerplate/formRules.js";

export default {
   name: {
      value: "",
      rule: formRules.name,
      label: "Nome completo",
      type: "text"
   },
   role: {
      value: "",
      rule: formRules.select,
      label: "Cargo",
      type: "select",
      options: ["Dev Front-end", "Dev Back-end", "Marketing", "Designer"]
   },
   cpf: {
      value: "",
      rule: formRules.cpf,
      mask: "XXX.XXX.XXX-XX",
      label: "CPF",
      type: "text"
   },
   phone: {
      value: "",
      rule: formRules.phone,
      mask: "(XX) 9XXXX-XXXX",
      label: "Celular",
      type: "text"
   },
   email: {
      value: "",
      rule: formRules.email,
      label: "E-mail",
      type: "text"
   },
   gender: {
      value: "",
      type: "select",
      options: ["Masculino", "Feminino"],
      rule: formRules.select,
      label: "Gênero"
   },
   status: {
      value: true,
      type: "checkbox",
      rule: null,
      hidden: true
   },
   birthday: {
      value: "",
      rule: formRules.validDate,
      mask: "XX/XX/XXXX",
      label: "Data de nascimento",
      type: "text"
   },
}
