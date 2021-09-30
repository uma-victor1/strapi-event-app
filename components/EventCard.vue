 <template>
     <div class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
           <article v-for="event in events" :key="event.id" class="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                    <div class="relative w-full h-80 md:h-64 lg:h-44">
                        <img :src="event.image.name"
                            alt="cover image"
                            class="w-full h-full object-center object-cover">
                    </div>
                    <div class="px-3 py-4">
                        <h3 class="text-sm text-gray-500 pb-2">
                            <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                <span class="absolute inset-0"></span>
                                {{event.title}}
                            </a>
                        </h3>
                        <p
                            class="text-base font-semibold text-gray-900">
                           {{event.date.toLocaleString('en-US', { timeZone: 'UTC' })}}</p>
                            <p class="text-indigo-400 mt-3 font-medium">More info</p>
                    </div>
                </article>
     </div>
 </template>
              
<script>
export default {
    props: ['events']
}
</script>