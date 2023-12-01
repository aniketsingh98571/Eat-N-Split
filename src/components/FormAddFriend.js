import Button from "./Button"
export default function FormAddFriend({inputHandler,handleSubmit,friendData}){
    return (
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>🌟 Friend name</label> 
        <input type="text" name="name" value={friendData.name} onChange={inputHandler}/>
        <label>🌟  Image URL</label>
        <input type="text" name="image" value={friendData.image} onChange={inputHandler}/>
        <Button>Add</Button>
      </form>
    )
  }