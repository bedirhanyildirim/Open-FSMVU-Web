<template>
  <div id="signup">
    <div id="form-error" v-if="error">{{ this.errorMessage }}</div>
    <label for="signup-email" class="input-name">Email</label>
    <input id="signup-email" type="text" v-model="email" name="email" placeholder="ad.soyad@stu.fsm.edu.tr"/>
    <div class="error-message">Lütfen okul emailini kullanınız.</div>
    <input type="password" v-model="password" name="password" placeholder="Şifre"/>
    <div class="error-message">En az 8 karakter içermelidir.</div>
    <input type="password" v-model="passwordAgain" name="passwordRepeat" placeholder="Tekrar Şifre"/>
    <div class="error-message">Şifrenizin uyuşması gerekiyor.</div>
    <div class="button">
      <button @click="signup" :disabled="!(this.isEmailValid && this.isPassValid && this.isPassSame)">Üye Ol</button>
    </div>
    <div class="divider"></div>
    <div class="signin">
      <span>Zaten üye misin?</span>
      <a href="javascript:;" @click="signin">Giriş Yap</a>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import store from '../store'
import router from '../router'
export default {
  name: 'signup.welcome',
  store,
  router,
  data: function () {
    return {
      email: '',
      password: '',
      passwordAgain: '',
      isEmailValid: false,
      isPassValid: false,
      isPassSame: false,
      error: false,
      errorMessage: ''
    }
  },
  watch: {
    email: function () {
      const signupEmail = document.querySelector('input[name=email]')
      if (signupEmail.value.length >= 8) {
        if (!signupEmail.value.includes('@stu.fsm.edu.tr')) {
          this.isEmailValid = false
          signupEmail.nextSibling.classList.add('error-color')
          signupEmail.nextSibling.classList.remove('valid-color')
        } else {
          this.isEmailValid = true
          signupEmail.nextSibling.classList.add('valid-color')
          signupEmail.nextSibling.classList.remove('error-color')
        }
      }
    },
    password: function () {
      const signupPassword = document.querySelector('input[name=password]')
      if (signupPassword.value.length >= 0 && signupPassword.value.length < 8) {
        this.isPassValid = false
        signupPassword.nextSibling.classList.add('error-color')
        signupPassword.nextSibling.classList.remove('valid-color')
      } else {
        this.isPassValid = true
        signupPassword.nextSibling.classList.add('valid-color')
        signupPassword.nextSibling.classList.remove('error-color')
      }
      const signupPasswordR = document.querySelector('input[name=passwordRepeat')
      if (signupPassword.value.length >= 1 && signupPasswordR.value !== this.password) {
        this.isPassSame = false
        signupPasswordR.nextSibling.classList.add('error-color')
        signupPasswordR.nextSibling.classList.remove('valid-color')
      } else {
        this.isPassSame = true
        signupPasswordR.nextSibling.classList.add('valid-color')
        signupPasswordR.nextSibling.classList.remove('error-color')
      }
    },
    passwordAgain: function () {
      const signupPasswordR = document.querySelector('input[name=passwordRepeat')
      if (signupPasswordR.value !== this.password) {
        this.isPassSame = false
        signupPasswordR.nextSibling.classList.add('error-color')
        signupPasswordR.nextSibling.classList.remove('valid-color')
      } else {
        this.isPassSame = true
        signupPasswordR.nextSibling.classList.add('valid-color')
        signupPasswordR.nextSibling.classList.remove('error-color')
      }
    }
  },
  mounted: function () {
    document.querySelector('input[name=email]').focus()
  },
  methods: {
    signup: function () {
      if (this.isEmailValid && this.isPassValid && this.isPassSame) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch(err => {
            this.setError(err.code)
          })
          .then(res => {
            if (res) {
              this.$store.dispatch('setUser', res.user)
              router.push('/')
            }
          })
      } else {
        this.setError('auth/operation-not-allowed')
      }
    },
    setError: function (errorCode) {
      this.error = true
      switch (errorCode) {
        case 'auth/email-already-in-use':
          this.errorMessage = 'Email adresi kullanılmakta!'
          break
        case 'auth/invalid-email':
          this.errorMessage = 'Email adresinizi girdiğinizden emin olun!'
          break
        case 'auth/operation-not-allowed':
          this.errorMessage = 'İşlem başarısız!'
          break
        case 'auth/weak-password':
          this.errorMessage = 'Zayıf şifre!'
          break
        default:
          this.errorMessage = 'Bir hata oluştu!'
      }
    },
    signin: function () {
      this.$emit('goToSignin')
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
#signup {
  padding: 30px;
  border-radius: 5px;
  animation: fadeIn 1s;
  background-color: #fafafa;
  border: 1px solid #e5e5e5;
  -webkit-animation: fadeIn 1s;
}
#signup {
  .input-name {
    font-size: 14px;
    color: #004680;
    font-weight: bold;
    display: block;
    margin: 0 0 5px 6px;
  }
  .error-message {
    font-size: 13px;
    color: #aaaaaa;
    margin: 3px 0 15px 6px;
    display: inline-block;
  }
  .error-color {
    color: rgba(139,0,0,1)!important;
  }
  .valid-color {
    color: rgb(61, 148, 32) !important;
  }
  input {
    display: block;
    min-width: 250px;
    font-size: 14px;
    padding: 10px 6px;
    border-radius: 5px;
    width: calc(100% - 14px);
    border: 1px solid #e5e5e5;
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
  .signin {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signin {
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
