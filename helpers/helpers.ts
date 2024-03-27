import { getDate, getMonth, getYear } from 'date-fns'
import { ref } from 'vue'

const helloWorld = () => {
    console.log('Hello World')
}

export const fullDate = () => {
    let day = ref(getDate(new Date()).toString());
    let month = ref((getMonth(new Date()) + 1).toString());

    if (getDate(new Date()) < 10) day.value = '0' + day
    if (getMonth(new Date()) < 10) month.value = '0' + month

    let full = ref(day + '-' + month + '-' + getYear(new Date()));

    return full

}

export function useCounter() {
    // create a reactive variable
    const count = ref(0);
  
    // return the reactive variable and function
    return { count };
  }
