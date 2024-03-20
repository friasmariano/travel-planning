
import { createMemoryHistory, createRouter } from "vue-router";

import index from "~/pages/index.vue";
import destinations from "~/pages/destinations.vue";
import itinerary from "~/pages/itinerary.vue";
import recommendations from "~/pages/recommendations.vue";
import weather from "~/pages/weather.vue";

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/destinations',
        component: destinations
    },
    {
        path: '/itinerary',
        component: itinerary
    },
    {
        path: '/recommendations',
        component: recommendations
    },
    {
        path: '/weather',
        component: weather
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;