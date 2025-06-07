<template>
  <a-table :columns="columns" :data-source="resources">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'download'">
        <a :href="record.download" target="_blank">
          <a-button type="link" size="small">下载</a-button>
        </a>
      </template>
      <template v-else-if="column.key === 'collection'">
        <a :href="record.collection" target="_blank">
          <a-button type="link" size="small">收藏</a-button>
        </a>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  resources: {
    type: Array,
    default: () => []
  }
})

const columns = [
  { title: '资料名称', dataIndex: 'name', key: 'name' },
  { title: '编号', dataIndex: 'number', key: 'number', width: 120 },
  { title: '下载', dataIndex: 'download', key: 'download', width: 90 },
  { title: '收藏', dataIndex: 'collection', key: 'collection', width: 90 }
]
</script>

<style scoped>
.resource-table {
  font-size: 15px;
  margin-top: 12px;
}
</style>