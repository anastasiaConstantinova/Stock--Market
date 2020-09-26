import React from 'react';
import {useForm} from 'react-hook-form';

export default function Form({onData}){
    const {register,handleSubmit}= useForm();
   //onSubmit data 
    return(
        <form onSubmit={handleSubmit(onData)}>
            <input name="stockSymbol" ref={register()}/>
            <input type="submit"/>

        </form>
    )
}
