<template>
   <div id="formBuilder">
      <v-form ref="FormBuilder">
         <div class="grid-wrap">
            <div
               class="element"
               v-for="(item, index) in form"
               :key="index"
               :style="item.hidden ? 'display:none;' : ''"
            >
               <div :type="item.type || 'text'">
                  <!--  -->
                  <!-- If default -->
                  <div class="default mb-1" v-if="text(item) && !item.hidden">
                     <v-text-field
                        v-model="item.value"
                        v-mask="item.mask || false"
                        :label="item.label || ''"
                        :rules="item.rule || []"
                        :hide-details="forceHideDetail || !item.rule"
                        :disabled="item.disabled"
                        outlined
                        dense
                     />
                  </div>
                  <!--  -->
                  <!-- If Select -->
                  <div
                     class="select mb-1"
                     v-else-if="select(item) && !item.hidden"
                  >
                     <v-select
                        v-model="item.value"
                        :label="item.label || ''"
                        :rules="item.rule || []"
                        :items="item.options || []"
                        :hide-details="forceHideDetail || !item.rule"
                        :disabled="item.disabled"
                        outlined
                        dense
                     />
                  </div>
                  <!--  -->
                  <!-- If checkbox -->
                  <div
                     class="checkbox mb-1"
                     v-else-if="checkbox(item) && !item.hidden"
                  >
                     <v-checkbox
                        v-model="item.value"
                        :label="item.label || ''"
                        :hide-details="forceHideDetail || !item.rule"
                        :disabled="item.disabled"
                        dense
                     />
                  </div>
               </div>
            </div>
         </div>
         <div class="controller d-flex justify-end align-center flex-row">
            <v-btn color="error" text @click="clear" :disabled="loading"
               >Resetar</v-btn
            >
            <v-btn color="primary" @click="createRequest" :loading="loading"
               >Criar</v-btn
            >
         </div>
      </v-form>
   </div>
</template>

<script>
import createUserBoilerplate from "@/boilerplate/create-user-boilerplate.js";

export default {
   name: "FormBuilder",
   data() {
      return {
         form: null,
         loading: false,
      };
   },
   computed: {
      text() {
         return (item) => {
            if (item?.type && item.type == "text") {
               return true;
            }
            return false;
         };
      },
      select() {
         return (item) => {
            if (item?.type && item.type == "select") {
               return true;
            }
            return false;
         };
      },
      checkbox() {
         return (item) => {
            if (item?.type && item.type == "checkbox") {
               return true;
            }
            return false;
         };
      },
   },
   methods: {
      init() {
         this.setProps();
      },
      setProps() {
         if (this.director) {
            this.form = { ...this.director };
         }
      },
      createRequest() {
         const FORM = this.$refs.FormBuilder;

         if (FORM) {
            let isValid = FORM.validate();

            if (isValid) {
               this.loading = true;

               this.sendRequest(createUserBoilerplate(this.form))
                  .catch((err) => {
                     throw new err();
                  })
                  .finally(() => {
                     this.loading = false;
                     this.clear();
                  });
            }
         }
      },
      clear() {
         const FORM = this.$refs.FormBuilder;

         if (FORM) {
            FORM.reset();
         }
      },
   },
   props: {
      director: {
         type: Object,
         default: false,
      },
      "send-request": {
         type: Function,
         default: () => {},
      },
      "force-hide-detail": {
         type: Boolean,
         default: false,
      },
   },
   created() {
      this.init();
   },
};
</script>
