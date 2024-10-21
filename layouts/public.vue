
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

    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}

// body {
//     margin: 0;
//         display: grid;
//         grid-template-columns: repeat(12, 1fr);
//         grid-gap: 0px;
//         grid-template-rows: auto auto 1fr auto auto;
// }
</style>