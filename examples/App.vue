<!--
 * @Description: 
 * @Author: chenju
 * @Date: 2022-11-30 15:55:25
 * @LastEditors: chenju
 * @LastEditTime: 2022-11-30 18:45:28
-->
<template>
  <div>
    <el-button>测试</el-button>
    <el-button type="primary">测试</el-button>
    <el-button type="warning">测试</el-button>
    <el-button type="danger">测试2</el-button>
    222
    <Button />
    <Icon />
    <!-- <StarrySky></StarrySky> -->
    <div class="test">测试2</div>
    <BaseTable></BaseTable>
    <GIcon type="g-daochu"></GIcon>
    2222
    <GNoTask></GNoTask>
  </div>
</template>
<script lang="ts" setup>
import { Button, Icon, BaseTable, GNoTask, GIcon } from '@xfchenju/my-ui2'
</script>

<style lang="scss">
.test {
  // background: blue;
}
</style>

