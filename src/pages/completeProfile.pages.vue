<template>
  <div id="completeProfile">
    <container display="flex">
      <div class="card">
        <div class="title">Kullanıcı Bilgileri</div>
        <div class="divider"></div>
        <div class="content">
          <div class="row">
            <div class="row-label">
              <label required>Email</label>
            </div>
            <div class="row-input">
              <input type="text" v-model="email" disabled/>
            </div>
          </div>
          <div class="row">
            <div class="row-label">
              <label required="">Kullanıcı Adı</label>
            </div>
            <div class="row-input">
              <input type="text" v-model="username" disabled/>
            </div>
          </div>
          <div class="row">
            <div class="row-label">
              <label required="">Ad</label>
            </div>
            <div class="row-input">
              <input type="text" v-model="name"/>
            </div>
          </div>
          <div class="row">
            <div class="row-label">
              <label required="">Soyad</label>
            </div>
            <div class="row-input">
              <input type="text" v-model="surname"/>
            </div>
          </div>
          <div class="row">
            <div class="row-label">
              <label required="">CİNSİYET</label>
            </div>
            <div class="row-input">
              <dropdowninput :selectList="genders" :defaultText="'CİNSİYETİNİZİ SEÇİNİZ'" @change="getGender"></dropdowninput>
            </div>
          </div>
        </div>
        <div class="title">Okul Bilgileri</div>
        <div class="divider"></div>
        <div class="content">
          <div class="row">
            <div class="row-label">
              <label required="">ÖĞRENCİ Numarası</label>
            </div>
            <div class="row-input">
              <input type="number" max="100" v-model="stuNo"/>
            </div>
          </div>
          <div class="row">
            <div class="row-label">
              <label>GİRİŞ Yılı</label>
            </div>
            <div class="row-input">
              <input type="number" v-model="enrollYear" disabled/>
            </div>
          </div>
          <div class="row">
            <div class="row-label">
              <label required>Fakülte</label>
            </div>
            <div class="row-input">
              <input type="text" v-model="faculty" disabled/>
            </div>
          </div>
          <div class="row">
            <div class="row-label">
              <label required="">Bölüm</label>
            </div>
            <div class="row-input">
              <input type="text" v-model="department" disabled/>
            </div>
          </div>
          <div class="row row-button">
            <a href="javascript:;" @click="submitUserInfos">Kaydet</a>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import store from '../store'
import container from '../components/container'
import dropdowninput from '../components/dropdowninput'
import { mapGetters } from 'vuex'
import { usersRef } from '../firebase/index'
export default {
  name: 'completeProfile.pages.vue',
  components: { container, dropdowninput },
  store,
  data: function () {
    return {
      email: '',
      username: '',
      name: '',
      surname: '',
      stuNo: '',
      enrollYear: '',
      faculty: '',
      department: '',
      gender: '',
      genders: [
        {
          value: 0,
          text: 'KADIN'
        },
        {
          value: 1,
          text: 'ERKEK'
        },
        {
          value: 2,
          text: 'BELİRTMEK İSTEMİYORUM'
        }
      ]
    }
  },
  watch: {
    email: function () {
      if (this.email.length > 8) {
        this.username = this.email.split('@')[0]
      }
    },
    stuNo: function () {
      if (this.stuNo.length === 2) {
        this.enrollYear = '20' + this.stuNo.slice(0, 2)
      } else if (this.stuNo.length === 4) {
        var facultyNo = this.stuNo.slice(2, 4)
        if (facultyNo === '21') {
          this.faculty = 'Mühendislik Fakültesi'
        }
      } else if (this.stuNo.length === 6) {
        var departmentNo = this.stuNo.slice(4, 6)
        if (departmentNo === '22') {
          this.department = 'Bilgisayar Mühendisliği'
        }
      } else if (this.stuNo.length === 10) {
        // console.log(this.stuNo.slice(6, 10))
      }
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'loggedIn'
    ])
  },
  created () {
    this.email = this.getUser.email + (this.getUser.emailVerified ? ' (onaylandı)' : ' (onaylanmadı)')
  },
  methods: {
    getGender: function (data) {
      this.gender = data
    },
    submitUserInfos: function () {
      console.log('heyyo')
      console.log(this.getUser.uid)
      usersRef.push({
        uid: this.getUser.uid,
        email: this.getUser.email,
        username: this.username,
        role: 4,
        name: this.name,
        surname: this.surname,
        gender: this.gender,
        studentNumber: this.stuNo,
        enrollYear: this.enrollYear,
        faculty: {
          code: this.stuNo.slice(2, 4)
        },
        department: {
          code: this.stuNo.slice(4, 6)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#completeProfile {
  display: flex;
  color: #62646a;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}
#completeProfile {
  .card {
    padding: 30px;
    width: 600px;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
  }
  .card {
    .title {
      font-size: 16px;
    }
    .divider {
      width: 100%;
      margin: 15px 0 25px;
      border-bottom: 1px solid #e5e5e5;
    }
    .content {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .content {
      .row {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;
      }
      .row {
        .row-label {
          width: 33%;
          padding: 0 5% 10px 0;
        }
        .row-label {
          label {
            display: block;
            font-size: 12px;
            line-height: 17px;
            font-weight: 700;
            color: #777777;
            padding-top: 5px;
            text-transform: uppercase;
          }
          label[required="required"]:after {
            content: '*';
            color: red;
          }
        }
        .row-input {
          width: 62%;
        }
        .row-input {
          input {
            width: 100%;
            color: #7a7d85;
            border-radius: 3px;
            padding: 6px 7px 7px;
            box-sizing: border-box;
            border: 1px solid #b5b6ba;
            background-color: #ffffff;
          }
          input:disabled {
            background-color: #fafafa;
          }
        }
      }
      .row-button {
        text-align: right;
        padding-bottom: 10px;
        justify-content: flex-end;
      }
      .row-button {
        a {
          margin: 0;
          color: #ffffff;
          font-size: 12px;
          box-shadow: none;
          font-weight: 700;
          padding: 8px 30px;
          letter-spacing: 0;
          line-height: 12px;
          border-radius: 3px;
          white-space: nowrap;
          text-transform: none;
          display: inline-block;
          border: 1px solid #004680;
          background-color: #004680;
          text-shadow: 0 -1px 1px rgba(0,0,0,.2);
          transition: color .2s, background-color .2s, box-shadow .2s;
        }
        a:hover {
          border-color: #000000;
        }
      }
    }
  }
}
</style>
