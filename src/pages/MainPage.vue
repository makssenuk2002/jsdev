<template>
  <div v-loading="loading" class="container">
    <div class="wrapper">
      <el-input class="search" v-model="searchText" placeholder="Введите название пакета" @input="handleSearch"></el-input>
      <el-table  @row-click="showPackageInfo" v-if="packages" :data="filteredPackages" border stripe>
        <el-table-column prop="name" label="Название пакета" ></el-table-column>
        <el-table-column prop="type" label="Тип пакета" ></el-table-column>
      </el-table>
      <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          :total="totalPackages"
      ></el-pagination>
      <el-dialog   v-model="modalVisible" width="50%" title="Расширенная информация о пакете">
        <div v-if="selectedPackage">
          <p>Название пакета: {{ selectedPackage.name }}</p>
        </div>
      </el-dialog>
    </div>
  </div>
  <Footer/>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer},
  setup() {
    const store = useStore()
    const searchText = ref('')
    const currentPage = ref(1)
    const pageSize = ref(10)
    const totalPackages = ref(0)
    const modalVisible = ref(false)
    const loading = ref(false)
    const selectedPackage = ref(null)

    const packages = computed(() => {
      return store.state.listOfPackages
    })

    const fetchPackages = async () => {
      try {
        loading.value = true
        await store.dispatch('fetchPackages', {
          page: currentPage.value,
          limit: pageSize.value,
          searchText: searchText.value
        })
        totalPackages.value = 100
      } catch (error) {
        console.error('Ошибка при получении пакетов:', error)
      }finally {
        loading.value = false
      }
    }

    const handleSearch = () => {
      currentPage.value = 1
      // fetchPackages()
    }

    const handleCurrentChange = (page) => {
      currentPage.value = page
      fetchPackages()
    }

    const showPackageInfo = (row) => {
      selectedPackage.value = row
      modalVisible.value = true
    }

    fetchPackages()

    const filteredPackages = computed(() => {
      return packages.value?.filter(pkg => pkg.name.toLowerCase().includes(searchText.value.toLowerCase()))
    })

    return {
      packages,
      searchText,
      currentPage,
      pageSize,
      totalPackages,
      modalVisible,
      selectedPackage,
      filteredPackages,
      loading,
      handleSearch,
      handleCurrentChange,
      showPackageInfo
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  width: 80%;
}
.wrapper {
  margin-top: 20px;
}
.el-table tr:hover {
  cursor: pointer;
}
.search{
  margin-bottom: 10px;
}
</style>
