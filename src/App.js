import { useState } from "react";
function FriendsList(){
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const friends=initialFriends
  return (
    <ul>
      {
        friends.map((friend)=>{
          return <Friend friend={friend} key={friend.id}/>
        })
      }
    </ul>
  )
}
function Friend({friend}){
  return (
    <li>
      <img src={friend.image} alt={friend.name}/>
      <h3>{friend.name}</h3>
      {friend.balance<0&&<p className="red">You owe {friend.name} {Math.abs(friend.balance)}$</p>}
      {friend.balance>0&&<p className="green"> {friend.name} owes you {Math.abs(friend.balance)}$</p>}
      {friend.balance===0&&<p>You and {friend.name} are even </p>}
      <Button>Select</Button>
    </li>
  )
}
function FormAddFriend(){
  return (
    <form className="form-add-friend">
      <label>🌟 Friend name</label>
      <input type="text"/>
      <label>🌟  Image URL</label>
      <input type="text"/>
      <Button>Add</Button>
    </form>
  )
}
function Button({children,action}){
  return (
    <button onClick={action} className="button">{children}</button>
  )
}
function FormSplitBill(){
  return (
    <form className="form-split-bill">
      <h2>Split a bill with Clark</h2>
      <label>🤑 Bill Value</label>
      <input type="number"/>

      <label>🤑 Your expenses</label>
      <input type="number"/>

      <label>🤑 Clark expenses</label>
      <input type="number" disabled/>

      <label>🤑 Who is paying bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>Clark</option>
      </select>
      <Button>Add</Button>
    </form>
  )
}
function App() {
const [showAddFriend,setShowAddFriend]=useState(false)
 const handleAddFriend=()=>{
  setShowAddFriend((prevState)=>{
    return !prevState
  })
 }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList/>
        {
          showAddFriend?
        <FormAddFriend/>:null
       }
        <Button action={handleAddFriend} >{showAddFriend?"Close":"Add friend"}</Button>
      </div>
      <FormSplitBill/>
    </div>
  );
}

export default App;
