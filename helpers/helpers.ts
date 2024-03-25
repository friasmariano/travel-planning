import { getDate, getMonth, getYear } from 'date-fns'

const helloWorld = () => {
    console.log('Hello World')
}

const fullDate = () => {
    let day: String = getDate(new Date()).toString();
    let month: String = (getMonth(new Date()) + 1).toString();

    if (getDate(new Date()) < 10) day = '0' + day
    if (getMonth(new Date()) < 10) month = '0' + month

    return day + '-' + month + '-' + getYear(new Date())
}

export default {
    helloWorld,
    fullDate
}