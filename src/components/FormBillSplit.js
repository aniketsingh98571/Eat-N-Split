import Button from "./Button"
import { useState } from "react"
export default function FormSplitBill({selectedFriend,handleSplitBill}){
    const [billDetails,setBillDetails]=useState({
      bill:0,
      user_paid:0,
      bill_payer:'user'
    })
    const frinedPaid= Number(billDetails.bill)-Number(billDetails.user_paid)
    const billInputHandler=(e)=>{
      const name=e.target.name
      const value=e.target.value
      setBillDetails((prevBillDetails)=>{
        return {...prevBillDetails,[name]:value}
      })
    }
    const billSplitSubmitHandler=(e)=>{
      e.preventDefault()
      if(!billDetails.bill||!billDetails.user_paid)
        return
    
      console.log(billDetails)
      const payer=billDetails.bill_payer==="user"?frinedPaid:-billDetails.user_paid
      handleSplitBill(payer)
    }
      return (
        <form className="form-split-bill" onSubmit={billSplitSubmitHandler}>
          <h2>Split a bill with {selectedFriend.name}</h2>
          <label>🤑 Bill Value</label>
          <input type="number" value={ billDetails.bill} onChange={billInputHandler} name="bill"/>
    
          <label>🤑 Your expenses</label>
          <input type="number" value={Number(billDetails.bill)>=Number(billDetails.user_paid)? billDetails.user_paid:0} onChange={billInputHandler} name="user_paid"/>
    
          <label>🤑 {selectedFriend.name} expenses</label>
          <input type="number" disabled value={ Number(billDetails.bill)>=Number(billDetails.user_paid)?frinedPaid:0}/>
    
          <label>🤑 Who is paying bill</label>
          <select value={billDetails.bill_payer} onChange={billInputHandler} name="bill_payer">
            <option value='user'>You</option>
            <option value='friend'>{selectedFriend.name}</option>
          </select>
          <Button>Add</Button>
        </form>
      )
    }