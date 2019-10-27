<template>
<!-- Changed my codepen to HTML markup and saved hours 
a few things will need to be adjusted to work with the CLI format but shouldn't take mutch
so much easier playing around in code pen for instant visualization without the constant rebuild
even with php artisan vallet or gulp watch- or yarn serve or npm run serve or or or....
only because every once in a while i hard refresh before it recompiles and think my changes don't 
work when they are working-->
<div id="app">
  <v-app light="light">
    <v-navigation-drawer v-model="drawer" app="app" stateless="stateless" floating="floating" width="220">
      <v-toolbar class="blue darken-3">
        <v-list>
          <v-list-tile @click="">
            <v-list-tile-content><v-list-tile-title.title class=v-icon.mr-2 home>Krystal's CRM</v-list-tile-title>
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
        <v-btn flat="flat" slot="activator" small="small">Monster Account Manager
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
    <v-content>
      <v-container class="pa-4" fluid="fluid" grid-list-md="grid-list-md">
        <v-layout wrap="wrap">
          <v-flex xs12="xs12">
            <h1 class="display-1 mb-1">Dashboard</h1>
          </v-flex>
          <v-flex xs12="xs12" md6="md6">
            <v-layout wrap="wrap">
              <v-flex v-for="stat in stats" xs6="xs6">
                <v-card class="text-xs-center" height="100%">
                  <v-card-text>
                    <div class="display-1 mb-2">{{ stat.number }}</div>{{ stat.label }}
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md6="md6">
            <v-card height="100%">
              <v-card-title class="grey light-4">Tasks</v-card-title>
              <v-data-table class="mt-1" :items="tasks" hide-headers="hide-headers" hide-actions="hide-actions">
                <template slot="items" slot-scope="props">
                  <td>
                    <v-checkbox @click="clickDeleteTask(props.item)"></v-checkbox>
                  </td>
                  <td>{{ props.item.title }}</td>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
          <v-flex xs12="xs12">
            <v-card>
              <v-card-title class="grey light-4">New Leads
                <v-spacer></v-spacer>
                <v-text-field v-model="newLeadsSearch" append-icon="search" label="Search"></v-text-field>
              </v-card-title>
              <v-data-table :headers="newLeadsHeaders" :items="newLeads" :search="newLeadsSearch">
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.firstName }} {{ props.item.lastName }}</td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.company }}</td>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>



  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
