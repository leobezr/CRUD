import Api from "@/service/api";

const prefix = {
   get: "users/",
   create: "user/create",
   delete: "user/delete/"
}
const routes = {
   get: getUsers,
   create: createUser,
   delete: deleteUser
}

function getUsers() {
   return Api.GET({
      url: prefix.get,
   })
}

function createUser(payload) {
   return Api.POST({
      url: prefix.create,
      body: { ...payload }
   })
}

function deleteUser(payload) {
   return Api.DELETE({
      url: prefix.delete + payload.id
   })
}

export default { ...routes }
