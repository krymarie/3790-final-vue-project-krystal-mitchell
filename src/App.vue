<template>
  <v-app light="light">
 
    
    <!-- v-app and app="app" don't need both in vuetify-->
<v-navigation-drawer v-model="drawer" app="app" stateless="stateless" floating="floating" width="220">
      <v-toolbar class="blue darken-3">
        <v-list>
          <v-list-tile @click="">
            <v-list-tile-content><v-list-tile-title.title class=v-icon.mr-2 home>FLC Account Manager</v-list-tile-title.title>
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
<!-- Import CRM Content Here -->
    <v-content> 
      <CRM/>
    </v-content>

  </v-app>
</template>

<script>
import CRM from './components/CRM';

//ADD A FEW ROUTES HERE TO 
//add routes here or in router.js
//after routes
//mode: 'history';//will get rid of the hashtag in the domain...
//but history mode won't always work with all servers

// import Router from 'vue-router'; //follow max on this
// import store from '../store';//add this
// import Vue from 'vue';//check this since i moved everything around
// Vue.use (router);

export default {
  name: 'App',
  el: '#app',
  components: {
    CRM,
  },

  data: () => ({
     drawer: true,
    mainMenu: {
      home: 'Home',
      people: 'Parents/Teachers',
      person: 'Students',
      info: 'Analytics',
      settings: 'Settings',
    },
  }),
  methods: {
    clickToggleDrawer() {
      this.drawer = !this.drawer
    },
  },
};
</script>
