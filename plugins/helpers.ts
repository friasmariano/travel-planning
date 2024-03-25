import helpers from "~/helpers/helpers"

export default defineNuxtPlugin(() => {
    return {
        provide: {
            helpers
        }
    }
})