
  const Button = ({label, onClick}) => {  
    return (
        <div onClick={onClick} type='button' className="m-0 p-5 w-20 border border-zinc-300 bg-emerald-500 text-zinc-100 font-bold hover:bg-emerald-400">
          {label}
        </div>
    )
  }
  
export default Button;