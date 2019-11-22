<template>
    <!-- CONTENT -->
    <v-content>
      <div id="app">
  <v-app id="inspire">
    <v-card color="grey lighten-4" flat>
      <v-card-text>
        <v-container fluid>
          <v-layout row>
            <v-flex xs8>
              <v-text-field
                name="input-10-1"
                label="Enter your password"
                hint="At least 8 characters"
                v-model="password"
                min="8"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                counter
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-app>
</div>
    </v-content>
</template>

<script>
new Vue({
  el: "#app",
  data() {
    return {
      e1: true
      //set to variable check if password is set in store or default to empty string then
      //update signedIn to True when logIn Happens correctly
      //password: 'Password Visable'

      //pull from store if signedIn = true
      //leave blank if new to page or logedOut, look up auto populate for chrome pws storage
      //for this class simply make it work always and link to CRM 
      //add vue oath valuation...
    };
  }
});

</script>
