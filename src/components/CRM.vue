<template>
  <v-container>
    <!-- later when cleaning up layout check if this 
    is from what i did in codepen looks wrong-->
    <v-layout text-center wrap>
      <v-flex xs12>

<!-- this ="app" fills in the 
use maxes examples on routes
SEE BELOW don't need both v-app forom vuetify and id="app" non vuetify way-->
<!-- is this the missing piece look at code i did at work today-->
<!-- <div id="CRM"> -->
  
    <!-- wait until i find what's missing here first before moving it back to app.vue -->
    <v-content>
      <v-container class="pa-4" fluid="fluid" grid-list-md="grid-list-md">
        <v-layout wrap="wrap">
          <v-flex xs12="xs12">
            <h1 class="display-1 mb-1">Dashboard</h1>
          </v-flex>
          <v-flex xs12="xs12" md6="md6">
            <v-layout wrap="wrap">
               <v-flex v-for="stat in stats" xs6="xs6"> <!--rendering multiple times ?-->
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
<!-- </div>-->
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

//add routes here or in router.js
//after routes
//mode: 'history';//will get rid of the hashtag in the domain...
//but history mode won't always work with all servers

// import Router from 'vue-router'; //follow max on this
// import store from '../store';//add this
import Vue from 'vue';//check this since i moved everything around
// Vue.use (router);
export default {
  name: 'CRM',
  data: () => ({
    ecosystem: [
    ]}),
}

// <li v-for="$this.data.allTheDataYouWantAtYourFingers.justLikeWork"

//this is all the stuff that Thor taught today that i'll use when I add the axios
//axios
// methods: {
//   getDataFromAxios() {
//     axios.get('https://URLwithTheRoutIWantToSaveTime.com');
//     .then(response => {
//         const allLeadData = response.data
//         //this part only needed for firebase data
//         const objectsToArray = Object.entires(allCoursesObj).map(e => 
//         Object.assign(e[1], {kry: e[0]}));
//         console.log(ojectsToArray);
//         this.courses = ojectsToArray;
//         });
        
//         //don't need to do any of this is your server response with beautiful json
      
//   };
// };

//this is Thor's notes on routes

//move this to it's own file as Max did
//set up api for numbers below
//grab and cache these numbers with a daily job
//job will simply pull basic count and totals for
// - new leads since last login on last login timestamp
// - total sales this week use sales data from last '+7 days' or '1 week'
// - then with '+1 month' for both

const stats = [
  {
    number: '45,678',//pull array and getCount
    label: 'Accounts',//consider diffrent data
  },
  {
    number: '42',//pull accounts with created timestamp timeBetween...now and 30days < now
    label: 'New Accounts',
  },
  {
    number: '233', //pull array and getCount
    label: 'Completed Programs',
  },
  {
    number: '24,748', //pull array and getCount
    label: 'Programs in Progress',
  },
]

//this could be from a DB and sorted based on creation_date or due_Date...
//once everything is working add due date isset($this.data.tasks.dueDate) format if ftc timestamp...
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

//this ia all the leads and they're hard coded wich works but this is definitly
//a great place to pull from api or i this case axios. use egar loading to
//improve UX and reduce loadtime
const newLeads = [
  {
    firstName: 'Giselbert',
    lastName: 'Hartness',
    email: 'ghartness0@mail.ru',
    company: 'Idaho: Victor',
  },
  {
    firstName: 'Honey',
    lastName: 'Allon',
    email: 'hallon1@epa.gov',
    company: 'Utah: Utah County',
  },
  {
    firstName: 'Tommy',
    lastName: 'Rickards',
    email: 'trickards2@timesonline.co.uk',
    company: 'Idaho: Victor',
  },
  {
    firstName: 'Giffy',
    lastName: 'Farquharson',
    email: 'gfarquharson3@goo.gl',
    company: 'California: Canyon Country',
  },
  {
    firstName: 'Rahel',
    lastName: 'Matches',
    email: 'rmatches4@sfgate.com',
    company: 'Idaho: Victor',
  },
  {
    firstName: 'Krystal',
    lastName: 'Natte',
    email: 'knatte5@opera.com',
    company: 'Massachusetts: Worcester',
  },
  {
    firstName: 'Ronnica',
    lastName: 'Galliver',
    email: 'rgalliver6@epa.gov',
    company: 'Massachusetts: Worcester',
  },
  {
    firstName: 'Jenny',
    lastName: 'Bugge',
    email: 'jbugge7@independent.co.uk',
    company: 'California: Canyon Country',
  },
  {
    firstName: 'Tracee',
    lastName: 'Viscovi',
    email: 'tviscovi8@techcrunch.com',
    company: 'Massachusetts: Worcester',
  },
  {
    firstName: 'Teodor',
    lastName: 'Fitzsimmons',
    email: 'tfitzsimmons9@mediafire.com',
    company: 'Utah: Utah County',
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
    text: 'Area',
    value: 'company',//update all 'company' to area above not using that data
  },
]

const vm = new Vue({
  el: '#app',
  data: {
    stats,
    tasks,
    newLeads,
    newLeadsHeaders,
    newLeadsSearch: '',
  },
  methods: {
    clickDeleteTask(task) {
      const i = this.tasks.indexOf(task)
      this.tasks.splice(i, 1)
    },
  },
})
</script>
