<template>
  <footer class="footer">
    <p>Автор: Сенюк Максим</p>
    <a href="https://github.com/makssenuk2002" target="_blank">Ссылка на GitHub</a>
  </footer>
</template>

<script setup>

</script>
<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 14px;
  color: #666;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.footer a {
  color: #3498db;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>
