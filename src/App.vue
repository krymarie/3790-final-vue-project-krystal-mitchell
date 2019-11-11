<template>
  <v-app>
 
    
    <!-- again not sure if app="app" is needed with vutify with v-app is doing the same thing--> -->
<v-navigation-drawer v-model="drawer" app="app" stateless="stateless" floating="floating" width="220">
      <v-toolbar class="blue darken-3">
        <v-list>
          <v-list-tile @click="">
            <v-list-tile-content><v-list-tile-title.title class=v-icon.mr-2 home>FLC CRM</v-list-tile-title>
<v-icon>mdi-mouse</v-icon>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar><v-list>
      <v-list-tile v-for="(title, icon) in mainMenu" @click=""><v-list-tile-action>
<v-icon> {{ icon }}</v-icon>
</v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title> {{ title }}</v-list-tile-title>
</v-list-tile-content>  
      </v-list-tile></v-list>
    </v-navigation-drawer>
    <v-toolbar class="blue darken-4" app="app">
      <v-toolbar-side-icon @click.stop="clickToggleDrawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-btn icon="icon">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon="icon">
        <v-icon>email</v-icon>
      </v-btn>
      <v-menu offset-y="offset-y">
        <v-btn flat="flat" slot="activator" small="small">FLC Account Manager
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="">
            <v-icon class="mr-2">settings</v-icon>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-icon class="mr-2">exit_to_app</v-icon>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-avatar class="mr-2" size="36"><img src="https://www.uvu.edu/dgm/web-design-dev/images/interaction/quote-krystal-mitchell.png"/></v-avatar>
    </v-toolbar>
    <v-content CRM> <!-- possibly this CRM here similar to app...-->
      <CRM></CRM> <!-- something like this onely prittier sees an error -->
    </v-content>
  </v-app>
</template>

<script>
import CRM from './components/CRM';//route to file looks correct time to rebuild
import Vue from 'vue';

export default {
  name: 'App',
  components: {
    Vue,
    CRM,
  },
  data: () => ({
    //not currently using this update with axios call
  }),
};

//left only the drawer and mainMenu //keep using french menue meaning petite
// watch for the extra "e" old habits die hard and break code
const vm = new Vue({
  el: '#app',
  data: {
    drawer: true,
    mainMenu: {
      home: 'Home',
      people: 'Parents/Teachers',
      person: 'Students',
      info: 'Analytics',
      settings: 'Settings',
    },
    ///don't forgtet ABOVE the first term pulls the icon for the main menue items
    //that's why 'person' and 'people'...that's the name of the material icon.
  },

  //leave the Drawer logic
  methods: {
    clickToggleDrawer() {
      this.drawer = !this.drawer
    },
  },
})
</script>
