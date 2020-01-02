<template>
  <div>
    <h1>This is the Login Page</h1>
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
  </div>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  components: {
    ...components
  },
  data() {
    return {
      authConfig: {
        usernameAttributes: 'email',
        signUpConfig: {
          hideAllDefaults: true,
          signUpFields:[
            {
              label: 'Email You Asshole',
              key: 'email',
              required: 'true',
              displayOrder: 1,
              type: 'string',
              signUpWith: true
            },
            {
              label: 'Password you Bitch',
              key: 'password',
              required: 'true',
              displayOrder: 2,
              type: 'password'
            }
          ]
        },
        confirmSignUpConfig: {},
        forgotPasswordConfig: {},
        confirmSignInConfig: {}
      }
    }
  }
}
</script>

<style>
</style>