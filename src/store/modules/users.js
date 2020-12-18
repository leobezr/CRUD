import { users } from "@/service/endpoints";
import model from "@/service/__model__.json";

export default {
   actions: {
      async getUsers({ commit }) {
         try {
            let req = await users.get();

            commit("updateUserList", req.data.users);
            return req.data.users;
         } catch (err) {
            commit("updateUserList", model);

            console.error("O servidor parece estar fora do ar, você está usando um model personalizado");
            throw new Error(err);
         }
      },
      async createUser({ dispatch }, props) {
         let req = await users.create(props);

         dispatch("getUsers");
         return req;
      },
      async deleteUserById({ dispatch }, props) {
         let req = await users.delete(props);

         dispatch("getUsers");
         return req;
      }
   },
   mutations: {
      updateUserList(state, userList) {
         state.users = userList;
      }
   },
   state: {
      users: null
   },
   getters: {
      completeUserList: state => state.users
   },
}
