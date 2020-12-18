<template>
   <div id="MenuSideBar">
      <v-btn
         icon
         color="primary"
         class="mobile-menu-toggle"
         @click="toggleSidebar"
      >
         <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="innerContainer">
         <h3>Adicione um usuário</h3>
         <!--  -->
         <!-- UserForm -->
         <FormBuilder
            :director="form"
            force-hide-detail
            :send-request="request"
         />
      </div>
   </div>
</template>

<script>
import "@/shared/scss/_menu-sidebar.scss";
import FormBuilder from "@/shared/components/AD/atoms/FormBuilder.vue";
import userBoilerplate from "@/boilerplate/user-boilerplate.js";
import { mapActions } from "vuex";

export default {
   name: "MenuSideBar",
   data() {
      return {
         form: userBoilerplate,
      };
   },
   methods: {
      ...mapActions(["createUser"]),

      async request(userData) {
         return await this.createUser(userData);
      },
   },
   components: {
      FormBuilder,
   },
   props: {
      "toggle-sidebar": {
         type: Function,
         default: () => {},
      },
   },
};
</script>
