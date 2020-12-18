<template>
   <div id="navigation" :grow="growMenu">
      <MenuSideBar :toggle-sidebar="openMenu" />
      <router-view />
   </div>
</template>

<script>
import MenuSideBar from "@/shared/components/MenuSideBar";

export default {
   data() {
      return {
         growMenu: false,
      };
   },
   components: {
      MenuSideBar,
   },
   methods: {
      openMenu() {
         this.growMenu = !this.growMenu;
      },
   },
};
</script>
