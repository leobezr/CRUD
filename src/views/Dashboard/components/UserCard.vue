<template>
   <div class="UserCard">
      <div class="card-header">
         <!--  -->
         <!-- LeftHeaderContainer -->
         <div class="left-container">
            <!--  -->
            <!-- Avatar -->
            <v-avatar color="primary" :size="30">
               <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on, attrs }">
                     <span
                        class="white--text headline"
                        v-bind="attrs"
                        v-on="on"
                        >{{ userName }}</span
                     >
                  </template>
                  <span>{{ user.name }}</span>
               </v-tooltip>
            </v-avatar>
            <!--  -->
            <!-- UserRole -->
            <div class="user-role">
               <h3>{{ user.role }}</h3>
            </div>
         </div>
         <!--  -->
         <!-- RightHeaderContainer -->
         <div class="right-container">
            <v-btn icon color="primary" @click="() => deleteUser(user.id)">
               <v-icon>mdi-delete</v-icon>
            </v-btn>
         </div>
      </div>
      <!--  -->
      <!-- CardContent -->
      <div class="card-content">
         <div class="metas">
            <ul>
               <li>
                  <v-icon left color="primary" :size="19">mdi-forum</v-icon>
                  {{ user.email }} <strong>||</strong> {{ user.phone }}
               </li>
               <li>
                  <v-icon left color="primary" :size="19">
                     mdi-gender-male-female
                  </v-icon>
                  {{ user.gender }}
               </li>
               <li>
                  <v-icon left color="primary" :size="19">
                     mdi-card-bulleted-outline
                  </v-icon>
                  {{ user.cpf }}
               </li>
               <li>
                  <v-icon left color="primary" :size="19">
                     mdi-cake-variant
                  </v-icon>
                  {{ user.birthday }}
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
   name: "UserCard",
   computed: {
      userName() {
         const USER = this.user;

         if (USER && typeof USER.name == "string") {
            let userName = USER.name.split(" ");

            return userName.length > 1
               ? userName[0].substr(0, 1).toUpperCase() + userName[1].substr(0, 1).toUpperCase()
               : userName[0].substr(0, 1).toUpperCase();
         }
         return "";
      },
   },
   methods: {
      ...mapActions(["deleteUserById"]),

      deleteUser(userId) {
         this.loading("true");

         this.deleteUserById({ id: userId })
            .catch((e) => {
               throw new Error(e);
            })
            .finally(() => this.loading("false"));
      },
   },
   props: {
      user: {
         type: [Object, Boolean],
         default: false,
      },
      loading: {
         type: Function,
         default: () => {},
      },
   },
};
</script>
