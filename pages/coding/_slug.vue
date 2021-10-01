<template>
    <div>
         <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
            <h2 class="text-2xl font-extrabold text-gray-900">CODING EVENTS</h2>
            <section>
               <EventCard :events="codingEvent" />    
            </section>
        </article>
    </section>
    </div>
</template>

<script>
import { allEventQuery } from "../../graphql/query";
export default {
  data() {
    return {
      events: [],
      codingEvent: []
    }
  },
  mounted() {
      console.log(this.codingEvent);
     this.getMeetUps()
     console.log(this.codingEvent);
  },

  methods:{
      getMeetUps() {
          this.codingEvent = this.events.filter(event => {
              return event.categories[0].name === "coding"
          })
      }
  },
  apollo: {
    events: {
      prefetch: true,
      query: allEventQuery,
            variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  },
}
</script>