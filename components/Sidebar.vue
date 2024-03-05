<template>
    <div class="sidebar">
        <button class="button" @mouseover="filledHomeIcon" @mouseleave="regularHomeIcon">
            <i :class="homeIcon" style="margin-right: 5px;"></i> 
            Home
        </button>
        <button class="button" @mouseover="filledProfileIcon" @mouseleave="regularProfileIcon">
            <i :class="profileIcon" style="margin-right: 5px;"></i> 
            Profile
        </button>
        <button class="button" @mouseover="filledDestinationsIcon" @mouseleave="regularDestinationsIcon">
            <i :class="destinationsIcon" style="margin-right: 5px;"></i> 
            Destinations
        </button>
        <button class="button" @mouseover="filledItineraryIcon" @mouseleave="regularItineraryIcon">
            <i :class="itineraryIcon" style="margin-right: 5px;"></i> 
            Itinerary
        </button>
        <button class="button" @mouseover="filledWeatherIcon" @mouseleave="regularWeatherIcon">
            <i :class="weatherIcon" style="margin-right: 5px;"></i> 
            Weather
        </button>
        <button class="button" @mouseover="filledRecommendationsIcon" @mouseleave="regularRecommendationsIcon">
            <i :class="recommendationsIcon" style="margin-right: 5px;"></i> 
            Recommendations
        </button>
</div>
</template>

<script>
    export default {
        data() {
            return {
                homeIcon: 'bi bi-house',
                profileIcon: 'bi bi-person',
                destinationsIcon: 'bi bi-pin-map',
                itineraryIcon: 'bi bi-calendar4-event',
                weatherIcon: 'bi bi-cloud-sun',
                recommendationsIcon: 'bi bi-lightbulb'
            }
        },
        methods: {
            // Home icon
            filledHomeIcon() {
                this.homeIcon = 'bi bi-house-fill'
            },
            regularHomeIcon() {
                this.homeIcon = 'bi bi-house'
            },
            // Profile icon
            filledProfileIcon() {
                this.profileIcon = 'bi bi-person-fill'
            },
            regularProfileIcon() {
                this.profileIcon = 'bi bi-person'
            },
            // Destinations icon
            filledDestinationsIcon() {
                this.destinationsIcon = 'bi bi-pin-map-fill'
            },
            regularDestinationsIcon() {
                this.destinationsIcon = 'bi bi-pin-map'
            },
            // Itinerary icon
            filledItineraryIcon() {
                this.itineraryIcon = 'bi bi-calendar-event-fill'
            },
            regularItineraryIcon() {
                this.itineraryIcon = 'bi bi-calendar4-event'
            },
            // Weather icon
            filledWeatherIcon() {
                this.weatherIcon = 'bi bi-cloud-sun-fill'
            },
            regularWeatherIcon() {
                this.weatherIcon = 'bi bi-cloud-sun'
            },
            // Recommendations icon
            filledRecommendationsIcon() {
                this.recommendationsIcon = 'bi bi-lightbulb-fill'
            },
            regularRecommendationsIcon() {
                this.recommendationsIcon = 'bi bi-lightbulb'
            }
        }
    }
</script>

<style lang="scss" scoped>
.button {
    width: 290px;
    height: 50px;

    text-align: left;

    padding-left: 40px;

    margin-bottom: 32px;

    // color: rgb(10, 73, 91);
    color: rgba(15, 95, 117, 0.7);

    background-color: rgb(244, 244, 244);
    border-radius: 0px 32px 32px 0px;
}

.button:hover {
    color: white;
    // background-color: rgb(189, 189, 189);
    background: linear-gradient(to left, rgb(10, 73, 91) , rgb(19, 123, 151), rgb(28, 165, 203));

    font-weight: 600;

    box-shadow: 0px 1px 8px 0px rgba(53, 53, 53, 0.4);
}

.icon {
    margin-right: 5px;
}

.sidebar {
    height: 90vh;
    width: 300px;

    padding-left: 0px;
    padding-top: 50px;

    background-color: rgb(244, 244, 244);

    box-shadow: 0.5px 0px 20px rgba(0,0,0,0.2);
}
</style>