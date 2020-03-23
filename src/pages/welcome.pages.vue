<template>
  <div class="welcome-page">
    <div class="container">
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
          <input type="text" name="email" placeholder="E-mail"/>
          <div class="error-message"></div>
          <input type="password" name="password" placeholder="Şifre"/>
          <div class="error-message"></div>
          <div class="button">
            <button>Giriş Yap</button>
          </div>
          <div class="divider"></div>
          <div class="signup">
            <span>Hala üye değil misin?</span>
            <a href="javascript:;" @click="openSignup">Üye Ol</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'WelcomePage',
  data: function () {
    return {
      email: '',
      password: '',
      passwordAgain: ''
    }
  },
  mounted: function () {
    var signupEmail = document.querySelector('#signup input[name=email]')
    var signupPassword = document.querySelector('#signup input[name=password]')
    var signupPasswordR = document.querySelector('#signup input[name=passwordrepeat')

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
          if (this.password.toString() === this.passwordAgain.toString()) {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (err) {
              console.log(err.code, err.message)
            }).then(
              console.log('başarılı :)')
            )
          } else {
            console.log('Password is not matching!')
          }
        } else {
          console.log('Password is too short.')
        }
      } else {
        console.log('Invalid email')
        this.addError(document.querySelector('input[name=email]'), 'Invalid Email')
      }
    },
    addError: function (el, message) {
      var p = document.createElement('p')
      p.classList.add('error-message')
      p.innerHTML = message.trim()
      el.parentNode.insertBefore(p, el.nextSibling)
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
