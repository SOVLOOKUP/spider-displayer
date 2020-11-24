import Moment from 'moment'

function dateTime (ts : number) { 
    const stamp = new Date(ts)
    const time = Moment(stamp).format('YYYY-MM-DD HH:mm:ss')
    return time
}

function todateTime (stamp : number) { 
    const time = Moment(stamp).format('YYYY年MM月DD日 HH:mm:ss')
    return time
}

export { dateTime, todateTime }