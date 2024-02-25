<template>
    <div>
        <Teleport to="body">
            <header>
                <Navbar />
            </header>
            <aside>
                <Sidebar />
            </aside>
            <section class="banner">
                <Banner />
            </section>
            <main class="content">
                <slot />
            </main>
            
            <footer>Footer</footer>
        </Teleport>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
header {
    grid-area: header;
    background-color: #18667a;
    color: hsl(192, 0%, 80%);
    border: 1.5px solid hsl(192, 0%, 80%);

    grid-row-start: 1;
    grid-row-end: 2;

    grid-column-start: 1;
    grid-column-end: 13;

    position: sticky;
}


aside {
    grid-area: aside;

    color: hsl(192, 0%, 80%);

    grid-row-start: 2;
    grid-row-end: 5;

    grid-column-start: 1;
    grid-column-end: 2;
}

.banner {
    grid-area: banner;
    /* background-color: #18667a; */
    color: hsl(192, 0%, 80%);
    /* border: 1.5px solid hsl(192, 0%, 80%); */

    /* CSS Grid */
    grid-column-start: 2;
    grid-column-end: 13;

    grid-row-start: 2;
    grid-row-end: 3; 
}

main {
    grid-area: content;

    color: hsl(192, 0%, 80%);
    border-top: 1.5px solid hsl(192, 0%, 86%);

    grid-row-start: 3;
    grid-row-end: 4; 

    grid-column-start: 2;
    grid-column-end: 13;

    // max-height: 50vh;
}

footer {
    grid-area: header;
    background-color: #18667a;
    color: hsl(192, 0%, 80%);
    border: 1.5px solid hsl(192, 0%, 80%);

    grid-column-start: 1;
    grid-column-end: 13;

    grid-row-start: 4;
    grid-row-end: 5;
}
</style>