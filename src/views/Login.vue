<template>
  <div class="">
    <div v-if="error" class="">{{ error }}</div>
    <div class="top-img">
      <img class="lpo-img" src="../assets/lpo-logo.png" />
    </div>

    <div class="center-div">
      <h1 class="text-2xl my-4" align="center">
        Outil d'administration de l'application
      </h1>
      <form action="#" @submit.prevent="Login">
        <input placeholder="Email" id="email" type="email" class="label" name="email" value required autofocus
          v-model="email" />
        <br>
        <input placeholder="Mot de passe" id="password" type="password" class="label" name="password" required
          v-model="password" />
        <br>
        <button type="submit" class="btn greenbtn bg-green">Login</button>
      </form>
      <div id="linkContainer">
        <a id="linkCreate" href="/signIn">Pas de compte? Cliquez ici </a>
      </div>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "LoginComponent",
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Login = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/gestioncommune')
      }
      catch (err) {
        error.value = "Mauvais identifiant ou mot de passe"
      }
    }
    return { Login, email, password, error }
  }
};
</script>

<style scoped>
.center-div {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: center;
}

.lpo-img {
  justify-content: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2%;
  height: 10%;
  width: 10%;
}

.label {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.btn {
  display: block;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}

.label {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
*
#linkContainer {
  margin-top: 20px;
}

#linkCreate{
  text-decoration: underline;
  color: rgb(0, 166, 255);
  font-size: 13px;
  text-align: center;
}

</style>
