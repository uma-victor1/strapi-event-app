<template>
    <div>
         <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
            <h2 class="text-2xl font-extrabold text-gray-900">OUR EVENTS</h2>
            <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
               <EventCard :events="meetupEvent" />    
            </section>
        </article>
    </section>
    </div>
</template>

<script>
import { eventQuery } from "../../graphql/query";
export default {
  data() {
    return {
      events: [],
      meetupEvent: []
    }
  },
  mounted() {
      console.log(this.meetupEvent);
     this.getMeetUps()
     console.log(this.meetupEvent);
  },

  methods:{
      getMeetUps() {
          this.meetupEvent = this.events.filter(event => {
              return event.categories[0].name === "meetup"
          })
      }
  },
  apollo: {
    events: {
      prefetch: true,
      query: eventQuery,
    }
  },
}
</script>