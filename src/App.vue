<template>
<!-- This needs to be  worked over big time all the formating was removed -->
<!-- v-app(light)

    v-navigation-drawer(v-model='drawer' app stateless floating width='220')
      v-toolbar.blue.darken-3
        v-list
          v-list-tile(@click='')
            v-list-tile-content
              v-list-tile-title.title #[v-icon.mr-2 home]Krystal's CRM
              <v-icon>mdi-mouse</v-icon>
      v-list
        v-list-tile(v-for='(title, icon) in mainMenu' @click='')
          v-list-tile-action
            v-icon {{ icon }}
          v-list-tile-content
            v-list-tile-title {{ title }}

    v-toolbar(app).blue.darken-4
      v-toolbar-side-icon(@click.stop='clickToggleDrawer')
      v-spacer
      v-btn(icon)
        v-icon search
      v-btn(icon)
        v-icon email
      v-menu(offset-y)
        v-btn(flat slot='activator' small)
          | Monster Account Manager
          v-icon keyboard_arrow_down
        v-list
          v-list-tile(@click='')
            v-icon.mr-2 settings
            v-list-tile-title Settings
          v-list-tile(@click='')
            v-icon.mr-2 exit_to_app
            v-list-tile-title Logout
      v-avatar(size='36' class='mr-2')
        img(src='https://www.uvu.edu/dgm/web-design-dev/images/interaction/quote-krystal-mitchell.png')

    v-content
      v-container.pa-4(fluid grid-list-md)
        v-layout(wrap)
          v-flex(xs12)
            h1.display-1.mb-1 Dashboard
          v-flex(xs12 md6)
            v-layout(wrap)
              v-flex(v-for='stat in stats' xs6)
                v-card(height='100%').text-xs-center
                  v-card-text
                    .display-1.mb-2 {{ stat.number }}
                    | {{ stat.label }}
          v-flex(md6)
            v-card(height='100%')
              v-card-title.grey.light-4 Tasks
              v-data-table.mt-1(:items='tasks' hide-headers hide-actions)
                template(slot='items' slot-scope='props')
                  td
                    v-checkbox(@click='clickDeleteTask(props.item)')
                  td {{ props.item.title }}
          v-flex(xs12)
            v-card
              v-card-title.grey.light-4
                | New Leads
                v-spacer
                v-text-field(v-model='newLeadsSearch' append-icon='search' label='Search')
              v-data-table(:headers='newLeadsHeaders' :items='newLeads' :search='newLeadsSearch')
                template(slot='items' slot-scope='props')
                  td {{ props.item.firstName }} {{ props.item.lastName }}
                  td {{ props.item.email }}
                  td {{ props.item.company }} -->




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
