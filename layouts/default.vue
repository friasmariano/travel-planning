<template>
    <div>
        <Teleport to="body">
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
        </Teleport>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h1 {
    color: red;
}
</style>