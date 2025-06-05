<template>
  <div class="section">
    <h2>联系我们</h2>
    <a-row>
      <a-col :span="12">
        <p>电话：400-000-0000</p>
        <p>邮箱：contact@daivmetal.com</p>
        <p>地址：山东省济南市高新区</p>
      </a-col>
      <a-col :span="12">
        <a-form layout="vertical">
          <a-form-item label="姓名"><a-input /></a-form-item>
          <a-form-item label="电话"><a-input /></a-form-item>
          <a-form-item label="留言"><a-textarea rows="4" /></a-form-item>
          <a-button type="primary">提交</a-button>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>
