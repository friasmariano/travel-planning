
<template>
    <Teleport to="body">
        <main class="content">
            <slot />
        </main>
    </Teleport>
    
</template>

<style lang="scss" scoped>
.content {
    display: flex;

    align-items: center;
    justify-content: center;

    height: 100%;

    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgb(23, 172, 175) 0%, rgba(255,255,255,1) 100%);
}


</style>