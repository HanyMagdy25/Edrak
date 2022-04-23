import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// import dataJson from "./Edrak.json"
export const fetchAsyncEdrak = createAsyncThunk("edrak/fetchAsyncEdrak", async () => {
  const response = await fetch(`https://edrakback.herokuapp.com/allP`);
    const data = await response.json();
      

    console.log("this from redux",data);
    return data;

//   return fetch(`http://localhost:8000/edrakJson`)
//         .then(res => {
//             return res.json();
//         })
//         .then(data=> {
//             console.log("this data",data)
//             return data
//         });

})
// export const fetchAsyncEdrakAuthors = createAsyncThunk("edrak/fetchAsyncEdrakAuthors", async (_id) => {
//     const res = await fetch(`https://edrakback.herokuapp.com/allP/${_id}`);
//       const dataAuthors = await res.json();
        
  
//       console.log("this from redux authors",dataAuthors);
//       return dataAuthors;
  
//   })

const initialState = {
    edrak:[],
    // edrakAuthours:[],
 
  }

  export const edrakSlice = createSlice({
    name: 'edrak',
    initialState,
    reducers: {
      addEdrak: (state,{payload}) => {
        state.edrak = payload
      },
      // addEdrakAuthors: (state,{payload}) => {
      //   state.edrakAuthours = payload
      // },


      
    },
    extraReducers:{
      [fetchAsyncEdrak.pending]:()=>{
        console.log("pending")
      },
      [fetchAsyncEdrak.fulfilled]:(state,action)=>{
        console.log("fulfilled");
        state.edrak=action.payload
      },
      [fetchAsyncEdrak.rejected]:()=>{
        console.log("rejected");
        
      },
      // [fetchAsyncEdrakAuthors.pending]:()=>{
      //   console.log("pending au")
      // },
      // [fetchAsyncEdrakAuthors.fulfilled]:(state,{payload})=>{
      //   console.log("fulfilled au");
      //   return{...state, edrak:payload}
      // },
      // [fetchAsyncEdrakAuthors.rejected]:()=>{
      //   console.log("rejected au");
        
      // },

  
    }
  })

  // Action creators are generated for each case reducer function
export const { addEdrak } = edrakSlice.actions
export const getAllEdrak = (state) => state.edrak.edrak;
// export const getAllEdrakAuthors = (state) => state.edrak.edrakAuthours;

export default edrakSlice.reducer