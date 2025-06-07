<template>
  <a-table :columns="columns" :data-source="softwares" row-key="name"
    :pagination="false" class="software-table">
    <template #download="{ record }">
      <a :href="record.download" target="_blank">
        <a-button type="link" size="small">下载</a-button>
      </a>
    </template>
  </a-table>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  softwares: {
    type: Array,
    default: () => []
  }
})

const columns = computed(() => [
  { title: '软件名称', dataIndex: 'name', key: 'name' },
  { title: '下载', dataIndex: 'download', key: 'download', width: 120, slots: { customRender: 'download' } }
])
</script>

<style scoped>
.software-table {
  font-size: 15px;
  margin-top: 12px;
}
</style>