const INIT_STATE ={
    carts: []
}


export const  cartreducer = (state = INIT_STATE,action)=>{

    switch (action.type) {
        case "ADD_CART":
        const existitem = state.carts.findIndex((ele)=>ele.id === action.payload.id)

        if(existitem >= 0){
            state.carts[existitem].qnty +=1
        }else{
            const temp = {...action.payload,qnty:1}
            return{
                ...state,
                carts:[...state.carts, temp]
            }
        }
            
        case "RMV_CART":
            const data = state.carts.filter((ele)=> ele.id !== action.payload);
            return{
                ...state,
                carts: data,
            }
                
           
    
        default:
            return state
    }

}