<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item btn btn-light">
                                <router-link to="/" class="nav-link"> <i class="fa-solid fa-house"></i> Home</router-link>
                            </li>
                            <li class="nav-item btn btn-light">
                                <router-link to="/about" class="nav-link"><i class="fa-solid fa-circle-info"></i> About</router-link>
                            </li>
                            <li class="nav-item btn btn-light">
                                <router-link to="/contact" class="nav-link"><i class="fa-solid fa-id-card-clip"></i> Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    // top: 56px;
    // bottom: 0;
    // left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
}

.nav-item {
    text-align: left;
}

i {
    margin-right: 5px;
}

@media (max-width: 767.98px) {
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: -100%;
        z-index: 100;
        display: block;
        transition: all 0.3s ease-in-out;
    }

    .sidebar.show {
        left: 0;
        transition: all 0.3s ease-in-out;
    }
}
</style>