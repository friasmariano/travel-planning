<template>
    <div>
        <div>
            <div class="jumbotron text-center">
                <h1 class="display-4">{{ title }}</h1>
                <p class="lead">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello World',
            subtitle: 'This is a subtitle',
        }
    },
}
</script>

<style lang="scss" scoped></style>