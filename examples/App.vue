<!--
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 15:55:25
 * @LastEditors: chenju
 * @LastEditTime: 2022-11-30 17:37:30
-->
<template>
  <div>
    <el-button>测试</el-button>
    <el-button type="primary">测试</el-button>
    <el-button type="warning">测试</el-button>
    <el-button type="danger">测试</el-button>
    222
    <Button />
    <div class="test">测试</div>
  </div>
</template>
<script lang="ts" setup>
import { Button } from '@xfchenju/my-ui2'
</script>

<style lang="scss">
.test {
  background: blue;
}
</style>

