import React, {useState} from "react";
import { useForm } from "react-hook-form";

//import saveData from "./some_other_file";



 export const Form=()=> {
    const [result,setResult]=useState([])
    const { register, handleSubmit } = useForm();
    const saveData =(data)=> setResult([
        ...result,data])

const obj={
        name:'name',
    date:'date',
    address:'address',
    order:'order'
}


    return (
        <form onSubmit={handleSubmit(saveData)}>

            <h1>New Order</h1>
            <label>Name</label>
            <input {...register(obj.name)}  />
            <label>Address</label>
            <input {...register(obj.address)} />
            <label>Date</label>
            <input {...register(obj.date)} type='date' />
            <label>Order Number</label>
            <input {...register(obj.order)} />
            <input type="submit" />
            <p>{result.map(item=><div><p>{item.date}</p><p>{item.order}</p> </div>)}</p>
        </form>
    );
}

// // import {useState} from "react";
// //
// //
// // const FormSample =()=>{
// //     const onChangeHandler =e=>{
// //         setInputInitState(prev=>(
// //             [{
// //             ...prev,
// //             [e.target.name]:e.target.value
// //         }]))
// //         console.log(inputInitState)
// //     }
// //     const [inputInitState,setInputInitState]=useState([
// //     //     {
// //     //     type:'',
// //     //     name:'',
// //     //     value:'',
// //     //     placeholder:'',
// //     // }
// //         {type:'text',name:'client',value:'',placeholder:'client',onChangeHandler:onChangeHandler},
// //         {type:'text',name:'product',value:'',placeholder:'product',onChangeHandler:onChangeHandler},
// //         {type:'number',name:'price',value:'',placeholder:'price',onChangeHandler:onChangeHandler},])
// //
// //
// //
// //     return <form >
// //         {inputInitState.map(item=><input key={item.name} value={inputInitState.value}
// //                                name={item.name} placeholder={item.placeholder} onChange={item.onChangeHandler} />)}
// //     </form>
// // }
// // export default FormSample
// //
// // // export const FormWithHook=()=>{
// // //     const {reset, ...username} = useField('text','client')
// // //     const data=[ {
// // //         type:'text',
// // //         id:'username',
// // //         name:'client',
// // //         value:username.value
// // //     },
// // //         {
// // //             type:'text',
// // //             id:'user',
// // //             name:'clien',
// // //             value:username.value
// // //         },{
// // //             type:'text',
// // //             id:'usern',
// // //             name:'cli',
// // //             value:username.value
// // //         }]
// // //     const handleFormSubmit = (event) => {
// // //         event.preventDefault()
// // //         console.log(username)
// // //         let userObject = {
// // //             username: username.value
// // //         }
// // //         console.log(userObject,event.target)
// // //         // send data to backend
// // //         reset()
// // //     }
// // //     return <form onSubmit={handleFormSubmit}>
// // //         {data.map(item=><input key={item.name} {...username} value={item.value}
// // //                                type={item.type} id={item.id} name={item.name}/>)}
// // //
// // //         <button type='submit'>Send</button>
// // //     </form>
// // // }
// //
