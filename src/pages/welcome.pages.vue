<template>
  <div class="welcome-page">
    <div class="container">
      <div class="content">
        <h3 class="title">Hoşgeldin</h3>
        <div id="signup">
          <input type="text" name="email" placeholder="E-mail"/>
          <input type="password" name="password" placeholder="Şifre"/>
          <input type="password" name="passwordrepeat" placeholder="Şifre Tekrar"/>
          <div class="button">
            <button>Üye Ol</button>
          </div>
          <div class="divider"></div>
          <div class="signin">
            <span>Zaten üye misin?</span>
            <a href="javascript:;" @click="openSignin">Giriş Yap</a>
          </div>
        </div>
        <div id="signin">
          <input id="email" type="text" name="email" placeholder="E-mail"/>
          <input id="password" type="password" name="password" placeholder="Şifre"/>
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
export default {
  name: 'WelcomePage',
  data: function () {
    return {
      email: '',
      password: ''
    }
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
