<template>
  <div class="section">
    <h2>公司介绍</h2>
    <p>
      岱威金属智能装备致力于提供高效智能的金属加工解决方案，服务各行业客户。
    </p>
    <a-row gutter="16">
      <a-col :span="8"><img :src="imgUrl" width="100%" /></a-col>
      <a-col :span="16">
        <a-row>
          <a-col :span="8"><div>15+ 项目经验</div></a-col>
          <a-col :span="8"><div>200+ 专业团队</div></a-col>
          <a-col :span="8"><div>1000+ 合作客户</div></a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import imgUrl from "@/assets/images/factory.jpg";

export default {
  data() {
    return {
      imgUrl,
    };
  },
};
</script>

<style scoped>
.section {
  padding: 50px;
  text-align: center;
}
</style>
