<!--
 * @Descripttion: 
 * @Author: pangpf
 * @Date: 2021-12-02 15:11:03
 * @LastEditors: pangpf
-->
<template>
  <div>
    <i-frame :src="url"></i-frame>
  </div>
</template>

<script setup>
import iFrame from '@/components/iFrame'

import { ref } from 'vue'

const url = ref(import.meta.env.VITE_APP_BASE_API + 'druid/login.html')
</script>
