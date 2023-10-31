<template>
    <Teleport to="body">
        <header>
            Header
        </header>
        <aside>
            Aside
            <nav></nav>
        </aside>
        <section class="banner">
            <banner />
        </section>
        <main class="content">Main content
        </main>
        <footer>Footer</footer>
    </Teleport>
</template>

<style scoped>
header {
    grid-area: header;
    background-color: #18667a;
    color: hsl(192, 0%, 80%);
    border: 1.5px solid hsl(192, 0%, 80%);

    grid-row-start: 1;
    grid-row-end: 2;

    grid-column-start: 1;
    grid-column-end: 13;
}


aside {
    grid-area: aside;
    background-color: #18667a;
    color: hsl(192, 0%, 80%);
    border: 1.5px solid hsl(192, 0%, 80%);

    grid-row-start: 2;
    grid-row-end: 4;

    grid-column-start: 1;
    grid-column-end: 3;

}

.banner {
    grid-area: banner;
    /* background-color: #18667a; */
    color: hsl(192, 0%, 80%);
    /* border: 1.5px solid hsl(192, 0%, 80%); */

    /* CSS Grid */
    grid-column-start: 3;
    grid-column-end: 13;

    grid-row-start: 2;
    grid-row-end: 3; 
}

main {
    grid-area: content;
    background-color: #18667a;
    color: hsl(192, 0%, 80%);
    border: 1.5px solid hsl(192, 0%, 80%);

    grid-row-start: 3;
    grid-row-end: 4; 

    grid-column-start: 3;
    grid-column-end: 13;

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