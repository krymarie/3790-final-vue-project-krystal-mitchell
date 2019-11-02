<template>
<!-- Install Pritier -->
  <v-app>

    <!-- Consider getting rid of this completly with CRM and just linke to CRM
    pages that each have their part and consider moving the head of the CRM back here 
    or better yet break it up give it it's own vue file mport it here
    you are the best rubber duck ever -->

    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">An Unecessary Bar for CRM design</span>
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

<!-- Import content from a seperate .vue file 
just like all the compents i set up every day at work -->
    <v-content>
      <CRM/>
    </v-content>
  </v-app>
</template>

<script>
import CRM from './components/CRM';

export default {
  name: 'App',
  components: {
    CRM,
  },
  data: () => ({
    //not currently using this update with axios call
  }),
};

const stats = [
  {
    number: '42',
    label: 'New leads this week',
  },
  {
    number: '$8,312',
    label: 'Sales this week',
  },
  {
    number: '233',
    label: 'New leads this month',
  },
  {
    number: '$24,748',
    label: 'Sales this month',
  },
]

const tasks = [
  {
    id: 0,
    title: 'Book meeting for Thursday'
  },
  {
    id: 1,
    title: 'Review new leads'
  },
  {
    id: 2,
    title: 'Be awesome!'
  },
]

const newLeads = [
  {
    firstName: 'Giselbert',
    lastName: 'Hartness',
    email: 'ghartness0@mail.ru',
    company: 'Kling LLC',
  },
  {
    firstName: 'Honey',
    lastName: 'Allon',
    email: 'hallon1@epa.gov',
    company: 'Rogahn-Hermann',
  },
  {
    firstName: 'Tommy',
    lastName: 'Rickards',
    email: 'trickards2@timesonline.co.uk',
    company: 'Kreiger, Wehner and Lubowitz',
  },
  {
    firstName: 'Giffy',
    lastName: 'Farquharson',
    email: 'gfarquharson3@goo.gl',
    company: 'Heathcote-Funk',
  },
  {
    firstName: 'Rahel',
    lastName: 'Matches',
    email: 'rmatches4@sfgate.com',
    company: 'Maggio, Russel and Feeney',
  },
  {
    firstName: 'Krystal',
    lastName: 'Natte',
    email: 'knatte5@opera.com',
    company: 'Sanford-Feeney',
  },
  {
    firstName: 'Ronnica',
    lastName: 'Galliver',
    email: 'rgalliver6@epa.gov',
    company: 'Schaefer Group',
  },
  {
    firstName: 'Jenny',
    lastName: 'Bugge',
    email: 'jbugge7@independent.co.uk',
    company: 'Gutmann, Miller and Prosacco',
  },
  {
    firstName: 'Tracee',
    lastName: 'Viscovi',
    email: 'tviscovi8@techcrunch.com',
    company: 'Anderson, Kohler and Renner',
  },
  {
    firstName: 'Teodor',
    lastName: 'Fitzsimmons',
    email: 'tfitzsimmons9@mediafire.com',
    company: 'Durgan-Kovacek',
  },
]

const newLeadsHeaders = [
  {
    text: 'Name',
    value: 'firstName',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Company',
    value: 'company',
  },
]

const vm = new Vue({
  el: '#app',
  data: {
    drawer: true,
    mainMenu: {
      dashboard: 'Dashboard',
      people: 'Leads',
      business: 'Companies',
      business_center: 'Deals',
      file_copy: 'Invoices',
      settings: 'Settings',
    },
    stats,
    tasks,
    newLeads,
    newLeadsHeaders,
    newLeadsSearch: '',
  },
  methods: {
    clickToggleDrawer() {
      this.drawer = !this.drawer
    },
    clickDeleteTask(task) {
      const i = this.tasks.indexOf(task)
      this.tasks.splice(i, 1)
    },
  },
})
</script>
