export const IncAction=(inp)=> async dispatch=>{
    dispatch({
        type:"increment",
        payload:inp
    })
}

export const DecAction=(inp)=> async dispatch=>{
    dispatch({
        type:"decrement",
        payload:inp
    })
}

