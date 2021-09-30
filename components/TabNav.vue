<template>
    <div>
    <div style='border-bottom: 2px solid #eaeaea' class="ml-12">
	<ul v-for="(tab, id) in tabs" :key="id" class='flex cursor-pointer'>
     <NuxtLink :to="`/${tab}`"><li :class="currentTab === id ? 'active' : ''" @click="currentTab = id" class='py-2 px-6 bg-white rounded-t-lg'>{{tab}}</li></NuxtLink> 
	</ul>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
                  tabs: ['All Events', 'meetups', 'coding'],
      isActive: false,
      currentTab: 0
        }
    },
      methods: {
    selectTab() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped>
 .active {
   border-bottom: 2px solid #1f2937;
   border-left: 2px solid #1f2937;
 }
</style>

