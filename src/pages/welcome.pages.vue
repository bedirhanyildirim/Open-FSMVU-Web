<template>
  <div class="welcome-page">
    <container display="flex" align-items="center" justify-content="center">
      <div class="content">
        <h3 class="title">Hoşgeldin</h3>
        <div id="signup">
          <input type="text" v-model="email" name="email" placeholder="E-mail"/>
          <div class="error-message"></div>
          <input type="password" v-model="password" name="password" placeholder="Şifre"/>
          <div class="error-message"></div>
          <input type="password" v-model="passwordAgain" name="passwordrepeat" placeholder="Şifre Tekrar"/>
          <div class="error-message"></div>
          <div class="button">
            <button @click="signup">Üye Ol</button>
          </div>
          <div class="divider"></div>
          <div class="signin">
            <span>Zaten üye misin?</span>
            <a href="javascript:;" @click="openSignin">Giriş Yap</a>
          </div>
        </div>
        <div id="signin">
          <input type="text" v-model="email" name="email" placeholder="E-mail"/>
          <div class="error-message"></div>
          <input type="password" v-model="password" name="password" placeholder="Şifre"/>
          <div class="error-message"></div>
          <div class="button">
            <button @click="signin">Giriş Yap</button>
          </div>
          <div class="divider"></div>
          <div class="signup">
            <span>Hala üye değil misin?</span>
            <a href="javascript:;" @click="openSignup">Üye Ol</a>
          </div>
        </div>
        <span v-if="loggedIn" style="margin-top: 15px; display: block; text-align: center">{{this.getUser.email}} <a href="javascript:;" @click="logout">Çıkış Yap</a></span>
      </div>
    </container>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import store from '../store'
import { mapGetters } from 'vuex'
import container from '../components/container'
export default {
  name: 'WelcomePage',
  components: { container },
  store,
  data: function () {
    return {
      email: '',
      password: '',
      passwordAgain: '',
      userMail: '',
      user: ''
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'loggedIn'
    ])
  },
  mounted: function () {
    const signupEmail = document.querySelector('#signup input[name=email]')
    const signupPassword = document.querySelector('#signup input[name=password]')
    const signupPasswordR = document.querySelector('#signup input[name=passwordrepeat')
    const signinEmail = document.querySelector('#signin input[name=email]')
    const signinPassword = document.querySelector('#signin input[name=password]')

    signupEmail.addEventListener('keyup', function () {
      if (this.value.length >= 8) {
        if (!this.value.includes('@stu.fsm.edu.tr')) {
          this.nextSibling.style.display = 'block'
          this.nextSibling.innerText = 'Lütfen okul emaili ile üye olunuz!'
        } else {
          this.nextSibling.style.display = 'none'
        }
      }
    })
    signupPassword.addEventListener('keyup', function () {
      if (this.value.length >= 4 && this.value.length < 8) {
        this.nextSibling.style.display = 'block'
        this.nextSibling.innerText = 'En az 8 karakter içermelidir!'
      } else {
        this.nextSibling.style.display = 'none'
      }
    })
    signupPasswordR.addEventListener('keyup', function () {
      if (this.value !== signupPassword.value) {
        this.nextSibling.style.display = 'block'
        this.nextSibling.innerText = 'Şifreler eşleşmedi!'
      } else {
        this.nextSibling.style.display = 'none'
      }
    })
    signinEmail.addEventListener('keyup', function () {
      if (this.value.length >= 8) {
        if (!this.value.includes('@stu.fsm.edu.tr')) {
          this.nextSibling.style.display = 'block'
          this.nextSibling.innerText = 'Lütfen okul emaili ile giriş yapınız!'
        } else {
          this.nextSibling.style.display = 'none'
        }
      }
    })
    signinPassword.addEventListener('keyup', function () {
      if (this.value.length >= 4 && this.value.length < 8) {
        this.nextSibling.style.display = 'block'
        this.nextSibling.innerText = 'En az 8 karakter içermelidir!'
      } else {
        this.nextSibling.style.display = 'none'
      }
    })
  },
  methods: {
    openSignin: function () {
      document.getElementById('signup').style.display = 'none'
      document.getElementById('signup').style.opacity = '0'
      document.getElementById('signin').style.display = 'block'
      document.getElementById('signin').style.opacity = '1'
    },
    openSignup: function () {
      document.getElementById('signup').style.display = 'block'
      document.getElementById('signup').style.opacity = '1'
      document.getElementById('signin').style.display = 'none'
      document.getElementById('signin').style.opacity = '0'
    },
    signup: function () {
      if (this.email.includes('@stu.fsm.edu.tr')) {
        if (this.password.length >= 8) {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (err) {
            console.log(err.code, err.message)
          }).then(console.log, this.openSignin)
        } else {
          console.log('Şifre kısa!')
        }
      } else {
        console.log('Hatalı email adresi!')
      }
    },
    signin: function () {
      if (this.email.includes('@stu.fsm.edu.tr')) {
        if (this.password.length >= 8) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function (err) {
            console.log(err.code, err.message)
          }).then(res => {
            this.$store.dispatch('setUser', res.user)
          })
        } else {
          console.log('Şifre kısa!')
        }
      } else {
        console.log('Hatalı email adresi!')
      }
    },
    addError: function (el, message) {
      var p = document.createElement('p')
      p.classList.add('error-message')
      p.innerHTML = message.trim()
      el.parentNode.insertBefore(p, el.nextSibling)
    },
    logout: function () {
      firebase.auth().signOut().catch(function (err) {
        console.log(err)
      }).then(_ => {
        this.$store.dispatch('logOut')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcome-page {
  .container {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    .content {
      padding: 50px 0;
      transition: opacity 1s ease-out;
    }
    .content {
      .divider {
        margin: 20px 0;
        border-bottom: 2px dashed #e5e5e5;
      }
      .title {
      text-align: center;
      margin-bottom: 30px;
      }
      #signup, #signin {
      padding: 30px;
      border-radius: 5px;
      animation: fadeIn 1s;
      background-color: #fafafa;
      border: 1px solid #e5e5e5;
      -webkit-animation: fadeIn 1s;
      }
      #signup, #signin {
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
          box-shadow: 0px 0px 5px 0px rgba(0,70,128,.75);
        }
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button {
          button {
            display: block;
            font-size: 14px;
            box-shadow: none;
            padding: 10px 40px;
            border-radius: 5px;
            font-weight: normal;
            border: 1px solid #e5e5e5;
            background-color: #ffffff;
            width: 100%;
          }
          button:hover {
            cursor: pointer;
          }
          button:disabled {
            background-color: #fafafa;
          }
        }
        span {
          display: block;
          font-size: 14px;
        }
        .signin, .signup {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .signin, .signup {
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
      #signin {
        opacity: 0;
        display: none;
      }
      .error-message {
        font-size: 12px;
        text-align: left;
        padding: 3px 5px;
        margin-top: -15px;
        margin-bottom: 5px;
        border-radius: 5px;
        color: rgba(139,0,0,1);
      }
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
