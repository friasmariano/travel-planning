<template>
    <Teleport to="body">
        <div class="grid-layout">
            <header>
                <Navbar />
                <BurgerMenu />
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
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
@media (min-width: 601px) {
    .grid-layout {
        margin: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0px;

        grid-template-areas: 
            "header header header"
            "aside banner banner"
            "aside content content"
            "aside content content"
            "footer footer footer";

        grid-template-rows: auto auto 1fr auto auto;

        height: 100%;
    }
}

@media (max-width: 600px) {
    .grid-layout {
        margin: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0px;

        grid-template-areas: 
            "header header header"
            "banner banner"
            "content content"
            "   content content"
            "footer footer footer";

        grid-template-rows: auto auto 1fr auto auto;

        height: 100%;
    }
}

header {
    grid-area: header;
    /* background-color: #18667a; */
    color: hsl(192, 0%, 80%);
    /* border: 1.5px solid hsl(192, 0%, 80%); */

    grid-row-start: 1;
    grid-row-end: 2;

    grid-column-start: 1;
    grid-column-end: 13;

    position: sticky;
    /* box-shadow: 0px 1px 10px 0px rgba(53, 53, 53, 0.5); */

    z-index: 15;
}

aside {
    grid-area: aside;

    color: hsl(192, 0%, 80%);

    background-color: rgb(244, 244, 244);

    box-shadow: 0.5px 0px 20px rgba(0, 0, 0, 0.2);

    grid-row-start: 2;
    grid-row-end: 4;

    grid-column-start: 1;
    grid-column-end: 2;

    height: 100%;
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

    /* margin-top: 60px; */

    height: 320px;

    /* background-color: grey; */
}

main {
    grid-area: content;

    /* color: hsl(192, 0%, 80%); */
    border-top: 1.5px solid hsl(192, 0%, 86%);

    grid-row-start: 3;
    grid-row-end: 4; 

    grid-column-start: 2;
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

@media (max-width: 600px) {
    aside {
        width: 100px;
    }

    /* body { } */

    .banner {
        height: 250px;
    }
}

@media (min-width: 601px) and (max-width: 1024px) {
    .banner {
        height: 250px;
    }
}

@media (min-width: 1025px) and (max-width: 1279px) {
    .banner {
        height: 300px;
    }
}

@media (min-width: 1280px) {
    .banner {
        height: 320px;
    }
}
</style>