<template>
    <div ref="dropdown" class="dropdown-wrapper" @click="toggle">
      <a class="show" href="javascript:;">{{ selectedText ? selectedText : defaultText }}</a>
      <ul>
        <li v-for="item in list" :key="item.value" @click="selectThis(item.value)" :class="item.value===selectedVal ? 'selected' : ''"><a href="javascript:;">{{ item.text }}</a></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'dropdowninput',
  props: {
    selectList: {
      type: Array,
      default: () => []
    },
    defaultText: {
      type: String,
      default: 'Lütfen seçim yapınız'
    }
  },
  data () {
    return {
      list: this.selectList,
      selectedVal: '',
      selectedText: ''
    }
  },
  methods: {
    documentClick: function (e) {
      try {
        var el = this.$refs.dropdown
        var target = e.target
        if (el !== target && !el.contains(target)) {
          this.closeList()
        }
      } catch (e) {
      }
    },
    openList: function () {
      document.querySelector('.dropdown-wrapper').classList.add('open')
    },
    selectThis: function (data) {
      this.selectedVal = data
      for (var el of this.selectList) {
        if (el.value === data) {
          this.selectedText = el.text
        }
      }
      this.$emit('change', { value: this.selectedVal, text: this.selectedText })
    },
    closeList: function () {
      document.querySelector('.dropdown-wrapper').classList.remove('open')
    },
    toggle: function () {
      const el = document.querySelector('.dropdown-wrapper')
      if (el.classList.contains('open')) {
        el.classList.remove('open')
      } else {
        el.classList.add('open')
      }
    }
  },
  beforeMount () {
    document.addEventListener('click', this.documentClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.documentClick)
  }
}
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  margin: 0;
  width: 180px;
  color: #777777;
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  text-align: left;
  border-radius: 3px;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  text-decoration: none;
  border: 1px solid #b2b2b2;
  text-transform: uppercase;
  padding: 7px 30px 7px 10px;
}
.dropdown-wrapper {
  .show {
    color: #777777;
  }
  &:hover .show {
    color: #004680;
  }
  .show:after {
    top: 8px;
    z-index: 1;
    right: 7px;
    display: block;
    color: #999999;
    font-size: 19px;
    content: '\25BE';
    line-height: 16px;
    position: absolute;
  }
  &.open ul {
    display: block;
  }
  ul {
    top: -3px;
    left: -1px;
    float: left;
    width: 220px;
    display: none;
    z-index: 1000;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    border-radius: 3px;
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    background-clip: padding-box;
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
  }
  ul {
    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }
    li {
      a {
        clear: both;
        display: block;
        color: #777777;
        font-size: 12px;
        cursor: pointer;
        transition: none;
        text-align: left;
        font-weight: 500;
        padding: 6px 10px;
        white-space: nowrap;
        text-transform: uppercase;
      }
    }
    li:hover {
      a {
        color: #004680;
      }
    }
    li.selected a {
      color: #004680;
      font-weight: 700;
    }
  }
}
</style>
