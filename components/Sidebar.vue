<template>
    <div class="sidebar">
        <button class="button"><font-awesome-icon class="icon" :icon="['fas', 'house']" /> Home</button>
        <button class="button"><font-awesome-icon class="icon"  :icon="['fas', 'circle-user']" /> Profile</button>
        <button class="button"><font-awesome-icon class="icon" :icon="['fas', 'map-location-dot']" /> Destinations</button>
        <button class="button"><font-awesome-icon class="icon" :icon="['fas', 'calendar-check']" /> Itinerary</button>
        <button class="button"><font-awesome-icon class="icon" :icon="['fas', 'cloud-sun']" /> Weather</button>
        <button class="button"><font-awesome-icon class="icon" :icon="['fas', 'lightbulb']" /> Recommendations</button>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.button {
    width: 295px;
    height: 40px;

    text-align: left;

    padding-left: 40px;

    margin-bottom: 20px;

    color: rgb(56, 56, 56);

    background-color: rgb(242, 242, 242);
    border-radius: 8px 8px 8px 8px;
}

.button:hover {
    color: rgb(50, 50, 50);
    background-color: rgb(189, 189, 189);
}

.icon {
    margin-right: 5px;
}

.sidebar {
    height: 100vh;
    width: 300px;

    padding-left: 2px;
    padding-top: 30px;

    background-color: rgb(242, 242, 242);

    box-shadow: 0.5px 0px 20px rgba(0,0,0,0.2);
}
</style>