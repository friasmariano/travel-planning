<template>
    <div>
        <nav class="bg-gray-800">
                <div class="mx-auto px-4 sm:px-6 lg:px-8 navbar-menu">
                    <div class="flex h-16 items-center justify-between">
                        <div class="flex items-center">
                            <img id="brandLogo" class="h-10 w-10" src="/img/logo.png" alt="Logo">
                            <p class="branding-text">Travel Planner</p>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4">
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-center md:ml-6">
                                <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">View notifications</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                                </button>

                                <!-- Profile dropdown -->
                                <div class="relative ml-3">
                                    <div>
                                        <button id="profileIcon" @click="burgerStore.changeStatus()" type="button" class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="false" aria-haspopup="true">
                                            <span class="absolute -inset-1.5"></span>
                                            <img id="profileImage" class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                                <i class="bi bi-list" style="font-size: 1.5rem;"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
</template>

<script>
import { useBurgerMenuStore } from '@/stores/burgerMenu'

    export default {
        setup() {
            const burgerStore = useBurgerMenuStore()

            return {
                burgerStore
            }
        }
    }
</script>

<style lang="scss" scoped>
.branding-text {
    margin-left: 7px;

    color: white;

    font-size: 1.2rem;
    font-weight: 500;
}

.navbar-menu {
    box-shadow: 0px 1px 10px 0px rgba(53, 53, 53, 0.5);
}
</style>