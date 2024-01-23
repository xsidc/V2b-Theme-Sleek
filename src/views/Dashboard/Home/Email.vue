<script setup>
import {computed, defineProps, onMounted, ref, watch} from 'vue'
import {useDataStore} from "@/store/user.js";
import {Info, User_update} from "@/api/v1/User.js";
import {Show_Alerts} from "@/components/Alerts/index.js";

const show=useDataStore()

const ll=computed(()=>{
  return  show.Info.remind_traffic === 1
})


// 更新邮箱提醒
const check=(remind_traffic)=>{
  User_update(remind_traffic,remind_traffic).then(res=>{
    Show_Alerts("修改成功拉",null,200)
  }).catch(err=>{
    Show_Alerts("修改失败拉","请重新尝试",400)
  })
      .finally(()=>{
        Info().then(res=>{
          show.Info=res.data.data
        })
      })
}


</script>
<template >


  <div class="checkbox-wrapper-35"
       v-if="show.Info!==undefined"
       @click="check(show.Info.remind_traffic===1?0:1)"
  >

    <input value="private" name="switch" id="switch" type="checkbox" v-model="ll" class="switch">
    <label for="switch">
      <span class="switch-x-text">邮箱提醒</span>
    </label>
  </div>
</template>

<style scoped>
.checkbox-wrapper-35 .switch {
  display: none;
}

.checkbox-wrapper-35 .switch + label {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #78768d;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 15px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-wrapper-35 .switch + label::before,
.checkbox-wrapper-35 .switch + label::after {
  content: '';
  display: block;
}

.checkbox-wrapper-35 .switch + label::before {
  background-color: #333333;
  border-radius: 500px;
  height: 15px;
  margin-right: 8px;
  -webkit-transition: background-color 0.125s ease-out;
  transition: background-color 0.125s ease-out;
  width: 25px;
}

.checkbox-wrapper-35 .switch + label::after {
  background-color: #fff;
  border-radius: 13px;
  box-shadow: 0 3px 1px 0 rgba(37, 34, 71, 0.05), 0 2px 2px 0 rgba(37, 34, 71, 0.1), 0 3px 3px 0 rgba(37, 34, 71, 0.05);
  height: 13px;
  left: 1px;
  position: absolute;
  top: 1px;
  -webkit-transition: -webkit-transform 0.125s ease-out;
  transition: -webkit-transform 0.125s ease-out;
  transition: transform 0.125s ease-out;
  transition: transform 0.125s ease-out, -webkit-transform 0.125s ease-out;
  width: 13px;
}

.checkbox-wrapper-35 .switch + label .switch-x-text {
  display: block;
  margin-right: .3em;
}

.checkbox-wrapper-35 .switch + label .switch-x-toggletext {
  display: block;
  font-weight: bold;
  height: 15px;
  overflow: hidden;
  position: relative;
  width: 25px;
}

.checkbox-wrapper-35 .switch + label .switch-x-unchecked,
.checkbox-wrapper-35 .switch + label .switch-x-checked {
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transition: opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;
  transition: opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;
  transition: transform 0.125s ease-out, opacity 0.125s ease-out;
  transition: transform 0.125s ease-out, opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;
}

.checkbox-wrapper-35 .switch + label .switch-x-unchecked {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}

.checkbox-wrapper-35 .switch + label .switch-x-checked {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.checkbox-wrapper-35 .switch + label .switch-x-hiddenlabel {
  position: absolute;
  visibility: hidden;
}

.checkbox-wrapper-35 .switch:checked + label::before {
  background-color: rgb(0, 218, 80);
}

.checkbox-wrapper-35 .switch:checked + label::after {
  -webkit-transform: translate3d(10px, 0, 0);
  transform: translate3d(10px, 0, 0);
}

.checkbox-wrapper-35 .switch:checked + label .switch-x-unchecked {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.checkbox-wrapper-35 .switch:checked + label .switch-x-checked {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}
</style>