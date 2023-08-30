<script lang="ts" setup>
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'

const openFeedbackModal = ref(false)
const url = ref('')

function showModal() {
  openFeedbackModal.value = true
  url.value = location.href
}
</script>

<template>
  <VPButton text="为该页提供建议" style="margin-top: 1rem;" @click="showModal" />
  <Teleport to="#app" :disabled="!openFeedbackModal">
    <div v-if="openFeedbackModal" class="modal">
      <div class="model-content">
        <h1>为该页提供建议</h1>
        <form name="feedback" method="POST" data-netlify="true">
          <p><label>页面 URL<input v-model="url" type="url" name="url" disabled /></label>
          </p>
          <p><label>反馈内容<textarea name="content" placeholder="反馈内容"></textarea></label></p>
          <div style="display: flex; justify-content: right;">
            <VPButton @click="openFeedbackModal = false" text="取消并关闭" theme="alt" />
            <VPButton type="submit" text="提交" style="margin-left: 1rem;" />
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.model-content {
  background-color: var(--vp-c-bg);

  height: auto;
  width: 100vw;
  max-width: 500px;
  padding: 1.5rem;
  border-radius: 8px;
}

.model-content h1 {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 1rem;
}

.model-content input {
  background-color: var(--vp-c-bg-soft);
  margin: 4px;
  padding: 4px 12px;
  border-radius: 8px;
  width: 100%;
}

.model-content textarea {
  background-color: var(--vp-c-bg-soft);
  height: 150px;
  margin: 4px;
  padding: 4px 12px;
  border-radius: 8px;
  width: 100%;
}
</style>