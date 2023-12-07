import { useState } from "react";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormBillSplit";
import Button from "./Button"
function App() {
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
  const id=crypto.randomUUID()
  const emptyObject={
    name:"",
    image:`https://i.pravatar.cc/48?u=${id}`,
    balance:0,
    id:id
  }
const [showAddFriend,setShowAddFriend]=useState(false)
const [friendsList,setFriendsList]=useState(initialFriends)
const [friendData,setFriendData]=useState(emptyObject)
const [selectedFriend,setSelectedFriend]=useState(null)
const inputHandler=(e)=>{
  const name=e.target.name
  const value=e.target.value
  setFriendData((prevData)=>{
    return {...prevData,[name]:value}
  })
}
const handleSubmit=(e)=>{
  e.preventDefault()
  if(!friendData.name||!friendData.image)
    return;
  setFriendsList((prevList)=>{
    return [...prevList,friendData]
  })
 console.log(friendData)
  setFriendData((prevData)=>{
    return emptyObject
  })
  setShowAddFriend((prevState)=>{
    return false
  })
}
 const handleAddFriend=()=>{
  setShowAddFriend((prevState)=>{
    return !prevState
  })
 }
 const seletedFriendHandler=(friend)=>{
  setSelectedFriend((prevSelected)=>{
    setShowAddFriend(false)
    if(prevSelected?.id===friend.id) return null
    else return friend
  })
 }
 const handleSplitBill=(value)=>{
  console.log(value)
  setFriendsList((prevLists)=>{
   return prevLists.map((friend)=>{
      if(friend.id===selectedFriend.id){
        return {...friend,balance:Number(friend.balance)+Number(value)}
      }
      else
      {
        return {...friend}
      }
    })
  })
  setSelectedFriend(null)
 }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friendsList={friendsList} seletedFriendHandler={seletedFriendHandler} selectedFriend={selectedFriend} />
        {
          showAddFriend?
        <FormAddFriend inputHandler={inputHandler} handleSubmit={handleSubmit} friendData={friendData}/>:null
       }
        <Button action={handleAddFriend} >{showAddFriend?"Close":"Add friend"}</Button>
      </div>
      {
        selectedFriend&&
      <FormSplitBill handleSplitBill={handleSplitBill} selectedFriend={selectedFriend} key={selectedFriend.id}/>
      }
    </div>
  );
}

export default App;
