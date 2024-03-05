<template>
  <div class="sidebar">
    <button
      class="button"
      :class="{ 'active-route': route.path === '/'}"
      @mouseover="filledHomeIcon"
      @mouseleave="regularHomeIcon"
    >
      <i :class="homeIcon" style="margin-right: 5px"></i>
      <span class="button-text">Home</span>
    </button>
    <button
      class="button"
      @mouseover="filledProfileIcon"
      @mouseleave="regularProfileIcon"
    >
      <i :class="profileIcon" style="margin-right: 5px"></i>
      <span class="button-text">Profile</span>
    </button>
    <button
      class="button"
      @mouseover="filledDestinationsIcon"
      @mouseleave="regularDestinationsIcon"
    >
      <i :class="destinationsIcon" style="margin-right: 5px"></i>
      <span class="button-text">Destinations</span>
    </button>
    <button
      class="button"
      @mouseover="filledItineraryIcon"
      @mouseleave="regularItineraryIcon"
    >
      <i :class="itineraryIcon" style="margin-right: 5px"></i>
      <span class="button-text">Itinerary</span>
    </button>
    <button
      class="button"
      @mouseover="filledWeatherIcon"
      @mouseleave="regularWeatherIcon"
    >
      <i :class="weatherIcon" style="margin-right: 5px"></i>
      <span class="button-text">Weather</span>
    </button>
    <button
      class="button"
      @mouseover="filledRecommendationsIcon"
      @mouseleave="regularRecommendationsIcon"
    >
      <i :class="recommendationsIcon" style="margin-right: 5px"></i>
      <span class="button-text">Recommendations</span>
    </button>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        let homeIcon = ref('bi bi-house');
        let profileIcon = ref('bi bi-person');
        let destinationsIcon = ref('bi bi-pin-map');
        let itineraryIcon = ref('bi bi-calendar4-event');
        let weatherIcon = ref('bi bi-cloud-sun');
        let recommendationsIcon = ref('bi bi-lightbulb');

        let currentWidth = ref(0);
        let currentHeight = ref(0);

        const trackSize = () => {
            currentWidth.value = window.innerWidth;
            currentHeight.value = window.innerHeight;
        }

        const onResize = (event) => {
            trackSize();
        }

        onMounted(() => {
            window.addEventListener('resize', onResize);
            // setIcons();
            
            trackSize();

            setIcons();

            console.log(route);
        })

        onBeforeUnmount(() => {
            window.removeEventListener('resize', onResize);
        })

        let isSmall = ref(false)

        // Home icon
        const filledHomeIcon = () => {
            homeIcon.value = "bi bi-house-fill";
        }
        const regularHomeIcon = () => {
            homeIcon.value = "bi bi-house";
        }

        // Profile icon
        const filledProfileIcon = () => {
            profileIcon.value = "bi bi-person-fill";
        }
        const regularProfileIcon = () => {
            profileIcon.value = "bi bi-person";
        }

        // Destinations icon
        const filledDestinationsIcon = () => {
            destinationsIcon.value = "bi bi-pin-map-fill";
        }
        const regularDestinationsIcon = () => {
            destinationsIcon.value = "bi bi-pin-map";
        }

        // Itinerary icon
        const filledItineraryIcon = () => {
            itineraryIcon.value = "bi bi-calendar-event-fill";
        }
        const regularItineraryIcon = () => {
            itineraryIcon.value = "bi bi-calendar4-event";
        }

        // Weather icon
        const filledWeatherIcon = () => {
            weatherIcon.value = "bi bi-cloud-sun-fill";
        }
        const regularWeatherIcon = () => {
            weatherIcon.value = "bi bi-cloud-sun";
        }

        // Recommendations icon
        const filledRecommendationsIcon = () => {
            recommendationsIcon.value = "bi bi-lightbulb-fill";
        }
        const regularRecommendationsIcon = () => {
            recommendationsIcon.value = "bi bi-lightbulb";
        }

        const setIcons = () => {
            if (currentWidth.value <= 600) {
                filledHomeIcon()
                filledProfileIcon()
                filledDestinationsIcon()
                filledItineraryIcon()
                filledWeatherIcon()
                filledRecommendationsIcon()
            } else {
                regularHomeIcon()
                regularProfileIcon()
                regularDestinationsIcon()
                regularItineraryIcon()
                regularWeatherIcon()
                regularRecommendationsIcon()
            }
        }

        watch(currentWidth, (newValue, oldValue) => {
            setIcons()
        })

        const route = useRoute();

        return {
            homeIcon,
            profileIcon,
            destinationsIcon,
            itineraryIcon,
            weatherIcon,
            recommendationsIcon,
            onMounted,
            onBeforeUnmount,
            isSmall,
            trackSize,
            onResize,
            filledHomeIcon,
            regularHomeIcon,
            filledProfileIcon,
            regularProfileIcon,
            filledDestinationsIcon,
            regularDestinationsIcon,
            filledItineraryIcon,
            regularItineraryIcon,
            filledWeatherIcon,
            regularWeatherIcon,
            filledRecommendationsIcon,
            regularRecommendationsIcon,
            route
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
  width: 280px;
  height: 50px;

  text-align: left;

  padding-left: 40px;

  margin-bottom: 32px;

  // color: rgb(10, 73, 91);
  color: rgba(18, 115, 142, 0.9);

  background-color: rgb(244, 244, 244);
  border-radius: 0px 32px 32px 0px;
}

.button:hover {
  color: white;
  // background-color: rgb(189, 189, 189);
  background: linear-gradient(
    to left,
    rgb(10, 73, 91),
    rgb(19, 123, 151),
    rgb(28, 165, 203)
  );

  font-weight: 600;

  box-shadow: 0px 1px 8px 0px rgba(53, 53, 53, 0.4);
}

.active-route {
    color: white;

    background: linear-gradient(
    to left,
    rgb(10, 73, 91),
    rgb(19, 123, 151),
    rgb(28, 165, 203)
  );

  font-weight: 600;

  box-shadow: 0px 1px 8px 0px rgba(53, 53, 53, 0.4);
}

.icon {
  margin-right: 5px;
}

.sidebar {
  height: 90vh;
  width: 290px;

  padding-left: 0px;
  padding-top: 50px;

  background-color: rgb(244, 244, 244);

  box-shadow: 0.5px 0px 20px rgba(0, 0, 0, 0.2);
}

.button-text {
  display: inline-block;
}

@media (max-width: 600px) {
  .sidebar {
    width: 100px;
  }

  .button {
    width: 92px;
  }

  .button-text {
    display: none;
  }
}
</style>
