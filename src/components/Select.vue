<template>
  <el-select v-model="value" @change='change'>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    name:'Select',
    props:['status'],
    data() {
      console.log(this.status)
      return {
        options: [{
          value: true,
          label: '已找回'
        }, {
          value: false,
          label: '未找回'
        }],
        value : this.status=='true' ? '已找回' : '未找回'
      }
    },
    methods:{
      change(e){
        this.value = e ? '已找回' : '未找回'
        this.$bus.$emit("data",String(e))
      }
    },
  }
</script>