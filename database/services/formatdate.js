

export const formatdate = (date)=>{
    let newdata = new Date(date)
    let dd = String(newdata.getDate()).padStart(2,0)
    let mm = String(newdata.getMonth()+1).padStart(2,0)
    let yyyy = newdata.getFullYear()

    return `${dd}/${mm}/${yyyy}`
}


export const reformatdate = (date)=>{
    let newdata = new Date(date)
    let dd = String(newdata.getDate()).padStart(2,0)
    let mm = String(newdata.getMonth()+1).padStart(2,0)
    let yyyy = newdata.getFullYear()

    return `${yyyy}-${mm}-${dd}`
}