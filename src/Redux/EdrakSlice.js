import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// import dataJson from "./Edrak.json"
export const fetchAsyncEdrak = createAsyncThunk("edrak/fetchAsyncEdrak", async () => {
  const response = await fetch(`http://localhost:3000/allP`);
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
// export const fetchAsyncEdrakAuthors = createAsyncThunk("edrak/fetchAsyncEdrakAuthours", async () => {
//     const response = await fetch(`http://localhost:8000/edrakAuthors`);
//       const dataAuthors = await response.json();
        
  
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
      addEdrakAuthors: (state,{payload}) => {
        state.edrakAuthours = payload
      },


      
    },
    extraReducers:{
      [fetchAsyncEdrak.pending]:()=>{
        console.log("pending")
      },
      [fetchAsyncEdrak.fulfilled]:(state,{payload})=>{
        console.log("fulfilled");
        return{...state, edrak:payload}
      },
      [fetchAsyncEdrak.rejected]:()=>{
        console.log("rejected");
        
      },

  
    }
  })

  // Action creators are generated for each case reducer function
export const { addEdrak} = edrakSlice.actions
export const getAllEdrak = (state) => state.edrak.edrak;
// export const getAllEdrakAuthors = (state) => state.edrak.edrakAuthours;

export default edrakSlice.reducer