<template>
    <div class="mb-20">
        <div class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"></div>
        <img :src="event.image.name"
                            alt="cover image"
                            class="w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded object-center object-cover">
        <div class="container w-full max-w-6xl mx-auto mt-8">
            {{event.description}}
      </div>
    </div>
</template>

<script>
import {eventQuery} from '../../graphql/query'

export default {
  data() {
    return {
      event: {},
    }
  },
  mounted () {
      console.log(this.event);;
  },
   apollo: {
    event: {
      prefetch: true,
      query: eventQuery,
       variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  },
}
</script>