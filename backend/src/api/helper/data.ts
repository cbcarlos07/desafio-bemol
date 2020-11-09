export const convertDate = curDate =>{    
    
    let montth  = curDate.getMonth() + 1 < 10 ? `0${curDate.getMonth() + 1}` : curDate.getMonth() + 1
    let day     = curDate.getDate() < 10 ? `0${curDate.getDate()}` :  curDate.getDate()
    let hour    = curDate.getHours() < 10 ? `0${curDate.getHours()}` : curDate.getHours()
    let minute  = curDate.getMinutes() < 10 ? `0${curDate.getMinutes()}` : curDate.getMinutes()
    let second  = curDate.getSeconds() < 10 ? `0${curDate.getSeconds()}` : curDate.getSeconds()
    let formatedDate = `${day}/${montth}/${curDate.getFullYear()} ${hour}:${minute}:${second}`
    return formatedDate
    
}

