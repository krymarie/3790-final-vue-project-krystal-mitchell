<template>
      <v-container class="pa-4" fluid="fluid" grid-list-md="grid-list-md">
        <v-layout wrap="wrap">
          <v-flex xs12="xs12">
            <h1 class="display-1 mb-1">Accounts</h1>
          </v-flex>
          <!-- <v-flex xs12="xs12" md12="md12" lg12="lg12"> -->
          <v-flex xs12="xs12">
            <v-layout wrap="wrap">
                  <v-flex v-for="stat in stats" xs6="xs6"> <!-- should render multiple time for multiple rows -->
                  <v-card class="text-xs-center" height="100%">
                    <v-card-text>
                      <div class="display-1 mb-2">{{ stat.number }}</div>{{ stat.label }}
                    </v-card-text>
                  </v-card>
                </v-flex>
            </v-layout>
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
                  <td>{{ props.item.area }}</td>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
//consider adding this to editor.js then import above using
//import { stats } from 'path/to/confic/folder/vue-editor.js'
//really tho if i have time use axios user data imported to get count....lables are the same numbers will be logic count pulled from axios
//if axios is pulled once a day as a job this can easily be pulled via AWS or newrelic
//check with this vue template if this needs a export?
//esport const stats...
export const stats = [
  {
    number: '45,678',//pull user count with updatedAt dates > 30 days from timestamp now see php version below
    label: 'Active Students',
  },
  {
    number: '42',//lastActive moment date-and-time timestamt between this is PHP specific Cabon::now() and $ThirdyDayFromNow => (Cabon::now()+30 days);
    label: 'Active Accounts',
  },
  {
    number: '233', //pull array and getCount
    label: 'Completed Programs',
  },
  {
    number: '24,748', //pull array and getCount
    label: 'Programs in Progress',
  },
];

//troubleshoot why last names aren't populating
export const newLeads = [
  {
    firstName: 'Giselbert',
    lastName: 'Hartness',
    email: 'ghartness0@mail.ru',
    area: 'Idaho: Victor',
  },
  {
    firstName: 'Honey',
    lastName: 'Allon',
    email: 'hallon1@epa.gov',
    area: 'Utah: Utah County',
  },
  {
    firstName: 'Tommy',
    lastName: 'Rickards',
    email: 'trickards2@timesonline.co.uk',
    area: 'Idaho: Victor',
  },
  {
    firstName: 'Giffy',
    lastName: 'Farquharson',
    email: 'gfarquharson3@goo.gl',
    area: 'California: Canyon Country',
  },
  {
    firstName: 'Rahel',
    lastName: 'Matches',
    email: 'rmatches4@sfgate.com',
    area: 'Idaho: Victor',
  },
  {
    firstName: 'Krystal',
    lastName: 'Natte',
    email: 'knatte5@opera.com',
    area: 'Massachusetts: Worcester',
  },
  {
    firstName: 'Ronnica',
    lastName: 'Galliver',
    email: 'rgalliver6@epa.gov',
    area: 'Massachusetts: Worcester',
  },
  {
    firstName: 'Jenny',
    lastName: 'Bugge',
    email: 'jbugge7@independent.co.uk',
    area: 'California: Canyon Country',
  },
  {
    firstName: 'Tracee',
    lastName: 'Viscovi',
    email: 'tviscovi8@techcrunch.com',
    area: 'Massachusetts: Worcester',
  },
  {
    firstName: 'Teodor',
    lastName: 'Fitzsimmons',
    email: 'tfitzsimmons9@mediafire.com',
    area: 'Utah: Utah County',
  },
];

export const newLeadsHeaders = [
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
    value: 'area',
  }
]


export default {
  el: '#app',
  data: () => ({
    stats,
    newLeads,
    newLeadsHeaders,
    newLeadsSearch: '',
  }),
  //removed tasks for this project might add back in for assignemnet requierments
  // methods: {
  //   clickDeleteTask(task) {
  //     const i = this.tasks.indexOf(task)
  //     this.tasks.splice(i, 1)
  //   },
  // },
};


//USE THIS AND NOTES FRMO CLASS TO IMPORT AXIOS HERE FOR USERS
// <li v-for="$this.data.allTheDataYouWantAtYourFingers.justLikeWork"
//this is all the stuff that Thor taught today that i'll use when I add the axios
//axios
methods: {
  getDataFromAxios() {
    axios.get('https://randomuser.me/api/?results=5000');
    .then(response => {
        //const allLeadData = response.data
        const students = response.data
        // //this part only needed for firebase data
        // const objectsToArray = Object.entires(allCoursesObj).map(e => 
        // Object.assign(e[1], {kry: e[0]}));
        // console.log(ojectsToArray);
        // this.courses = ojectsToArray;
        });

//         $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
});
        
        //don't need to do any of this is your server response with beautiful json
      
  };

//move this to it's own file as Max did
//set up api for numbers below
//grab and cache these numbers with a daily job
//job will simply pull basic count and totals for
// - new leads since last login on last login timestamp
// - total sales this week use sales data from last '+7 days' or '1 week'
// - then with '+1 month' for both
//stick this in a firebase json file like max shoes
//For scaleability possibly set up a job that pulls this data to newrelic
//or S3 at the begining of the day

</script>
