<template>
  <div class="container">
    <h1 class="display-1">CookMore</h1>
    <hr/>
    <div class="row d-flex justify-content-around">
      <div class="col-6 mt-5">
        <p>
          This is an app that will help you to cook more, because it's awesome like that.
          You should definitely give it a try. Because cooking is important,
          because food is important,
          because eating is important.
        </p>
      </div>
      <div class="col-4 mt-5">
        <b-card>
          <b-form @submit="onSubmit">
            <b-form-group
              label="Email"
            >
              <b-form-input
                v-model="email"
                type="email"
                placeholder="user@example.com"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Password"
            >
              <b-form-input
                v-model="password"
                type="password"
                required
              ></b-form-input>
            </b-form-group>
            <p class="small text-danger">{{ this.error }}</p>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.login({ email: this.email, password: this.password })
        .then((data) => {
          this.$router.push('dash');
        }).catch((err) => {
          let msg = 'Whoops! Something went wrong';
          if (err.response.data) {
            msg = err.response.data;
          }
          this.error = msg;
        });
    },
    ...mapActions([
      'login',
    ]),
  },
};
</script>

<style scoped>
h1 {
  margin-top: 5rem;
  color: pink;
}
</style>
