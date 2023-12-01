import Friend from "./Friend"
export default function FriendsList({friendsList,seletedFriendHandler,selectedFriend}){
    const friends=friendsList
    return (
      <ul>
        {
          friends.map((friend)=>{
            return <Friend friend={friend} key={friend.id} action={seletedFriendHandler} selectedFriend={selectedFriend}/>
          })
        }
      </ul>
    )
  }