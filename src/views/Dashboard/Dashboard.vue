<template>
   <div id="dashboard">
      <div class="title">
         <h2>Usuários registrados</h2>
         <div class="meta">
            <label
               >Total de usuários: <strong>{{ userList.length }}</strong></label
            >
         </div>
      </div>
      <div class="card-display">
         <div class="fixed loading" v-if="loading">
            <v-progress-circular color="primary" indeterminate />
         </div>
         <UserCard
            :user="user"
            v-for="(user, index) in userList"
            :key="index"
            :loading="setLoading"
         />
      </div>
   </div>
</template>

<script>
import "@/views/Dashboard/scss/_dashboard.scss";
import UserCard from "@/views/Dashboard/components/UserCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
   name: "Dashboard",
   data() {
      return {
         loading: false,
      };
   },
   computed: {
      ...mapGetters(["completeUserList"]),

      userList() {
         return this.completeUserList || [];
      },
   },
   components: {
      UserCard,
   },
   methods: {
      ...mapActions(["getUsers"]),

      init() {
         this.fetchUsers();
      },
      setLoading(config) {
         config = JSON.parse(config) || false;

         this.loading = config;
      },
      fetchUsers() {
         this.setLoading(true);

         this.getUsers()
            .catch((e) => {
               throw new Error(e);
            })
            .finally(() => this.setLoading(false));
      },
   },
   created() {
      this.init();
   },
};
</script>
