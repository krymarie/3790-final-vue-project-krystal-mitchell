<style>
html {
  height: 100%;
  background: #FFF;
  color: #000;
  font-size: 62.5%;
}

body {
  min-height: 100%;
  margin: 0;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}

h1 {
  font-size: 20px;
}

.button {
  position: absolute;
  top: 80px;
  right: 20px;
  border: none;
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1rem;
  padding: .5em 1em;
  border-radius: .3em;
  cursor: pointer;
}

.modalButton {
  border: none;
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1rem;
  padding: .5em 1em;
  border-radius: .3em;
  cursor: pointer;
}

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: 400px;
  height: fit-content;
  max-width: 22em;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

</style>


<template>
    <!-- CONTENT -->
  <v-content>
      <div id="app">
        
        <button @click="showModal = true" class="button">Log Out</button>
        
        <transition name="fade" appear>
          <div class="modal-overlay" 
              v-if="showModal" 
              @click="showModal = false"></div>
        </transition>
  
        <transition name="pop" appear>
          <div class="modal" 
              role="dialog" 
              v-if="showModal">
            
            <h1>LogIn Transition</h1>
            
            <v-flex xs8>
              <v-text-field
                      name="input-10-1"
                      label="Enter your username"
                      hint="Favorite Car"
                      v-model="username"
                      min="8"
                      :append-icon="e1 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (e1 = !e1)"
                      :type="e1 ? 'password' : 'text'"
                      counter>
              </v-text-field>
              
              <v-text-field
                      name="input-10-1"
                      label="Enter your password"
                      hint="At least 8 characters"
                      v-model="password"
                      min="8"
                      :append-icon="e2 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (e2 = !e2)"
                      :type="e2 ? 'password' : 'text'"
                      counter>
              </v-text-field>
            </v-flex>
            
            <button @click="showModal = false" class="modalButton">Log In</button>

          </div>
        </transition>
      </div>
    </v-content>
</template>

<script>
export default {
  el: '#app',
  data: () => ({
      showModal: false,
      e1: false,
      e2: true,
      username: 'Mclaren',
      //password: 'Password Visable',
      //password: mclaren,
  }),
};

</script>
