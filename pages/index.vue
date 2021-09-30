<template>
<div>
<!-- Events are displayed here -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
            <h2 class="text-2xl font-extrabold text-gray-900">OUR EVENTS</h2>
            <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
               <EventCard :events="events" />    
            </section>
        </article>
    </section>
</div>


</template>

<script>
import { eventQuery } from "../graphql/query";
export default {
  data() {
    return {
      events: [],
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
