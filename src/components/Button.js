export default function Button({children,action}){
    return (
      <button onClick={action} className="button">{children}</button>
    )
  }