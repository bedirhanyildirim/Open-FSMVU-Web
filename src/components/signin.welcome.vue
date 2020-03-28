<template>
  <div id="signin">
    <div id="form-error" v-if="error">{{ this.errorMessage }}</div>
    <label for="signin-email" class="input-name">Email</label>
    <input id="signin-email" type="text" v-model="email" name="email" placeholder="ad.soyad@stu.fsm.edu.tr"/>
    <label for="password" class="input-name">Şifre</label>
    <input id="password" type="password" v-model="password" name="password" placeholder="********"/>
    <div class="button">
      <button @click="signin" :disabled="!(this.isEmailValid && this.isPassValid)">Giriş Yap</button>
    </div>
    <div class="divider"></div>
    <div class="signup">
      <span>Hala üye değil misin?</span>
      <a href="javascript:;" @click="signup">Üye Ol</a>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import store from '../store'
import router from '../router'
export default {
  name: 'signin.welcome',
  store,
  router,
  data: function () {
    return {
      email: '',
      isEmailValid: false,
      password: '',
      isPassValid: false,
      error: '',
      errorMessage: ''
    }
  },
  watch: {
    email: function () {
      const signinEmail = document.querySelector('input[name=email]')
      if (signinEmail.value.length >= 8) {
        if (!signinEmail.value.includes('@stu.fsm.edu.tr')) {
          this.isEmailValid = false
        } else {
          this.isEmailValid = true
        }
      }
    },
    password: function () {
      const signinPassword = document.querySelector('input[name=password]')
      if (signinPassword.value.length >= 0 && signinPassword.value.length < 8) {
        this.isPassValid = false
      } else {
        this.isPassValid = true
      }
    }
  },
  mounted: function () {
    document.querySelector('input[name=email]').focus()
  },
  methods: {
    signin: function () {
      if (this.isEmailValid && this.isPassValid) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(err => {
            this.setError(err.code)
          })
          .then(res => {
            if (res) {
              this.$store.dispatch('setUser', res.user)
              router.push('home')
            }
          })
      } else {
        this.setError('Bir hata oluştu!')
      }
    },
    setError: function (errorCode) {
      this.error = true
      switch (errorCode) {
        case 'auth/user-disabled':
          this.errorMessage = 'Kullanıcıya erişim kesildi!'
          break
        case 'auth/invalid-email':
          this.errorMessage = 'Email adresinizi girdiğinizden emin olun!'
          break
        case 'auth/user-not-found':
          this.errorMessage = 'Böyle bir kullanıcı bulunamadı!'
          break
        case 'auth/wrong-password':
          this.errorMessage = 'Şifre yanlış!'
          break
        default:
          this.errorMessage = 'Bir hata oluştu!'
      }
    },
    signup: function () {
      this.$emit('goToSignup')
    }
  }
}
</script>

<style lang="scss" scoped>
#form-error {
  color: #721c24;
  font-size: 14px;
  font-weight: bold;
  text-shadow: none;
  padding: 8px 12px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
}
.divider {
  margin: 20px 0;
  border-bottom: 2px dashed #e5e5e5;
}
#signin {
  padding: 30px;
  border-radius: 5px;
  animation: fadeIn 1s;
  background-color: #fafafa;
  border: 1px solid #e5e5e5;
  -webkit-animation: fadeIn 1s;
}
#signin {
  .input-name {
    font-size: 14px;
    color: #004680;
    font-weight: bold;
    display: block;
    margin: 0 0 5px 6px;
  }
  input {
    display: block;
    min-width: 250px;
    font-size: 14px;
    padding: 10px 6px;
    border-radius: 5px;
    width: calc(100% - 14px);
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
  }
  input:last-child {
    margin-bottom: 0px!important;
  }
  input:focus {
    box-shadow: 0px 0px 3px 0px rgba(0,70,128,.75);
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button {
    button {
      width: 100%;
      color: #ffffff;
      display: block;
      font-size: 14px;
      box-shadow: none;
      padding: 10px 40px;
      border-radius: 5px;
      font-weight: normal;
      border: 1px solid #e5e5e5;
      background-color: #004680;
    }
    button:hover:enabled {
      cursor: pointer;
    }
    button:hover:disabled {
      cursor: not-allowed;
    }
    button:disabled {
      background-color: #7b7b7b;
    }
  }
  span {
    display: block;
    font-size: 14px;
  }
  .signup {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signup {
    span {
      color: #000000;
      font-size: 14px;
      margin-right: 10px;
    }
    a {
      color: #004680;
      font-weight: bold;
    }
  }
}
@-webkit-keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
