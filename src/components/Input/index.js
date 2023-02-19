const Input = ({value}) => {
    return (
      <div className='bg-purple-400 w-full h-20 flex items-center justify-end font-semibold'>
        <input disabled value={value} className="bg-purple-400 w-full h-20 decoration-none ml-3 mr-3 flex items-end font-semibold text-white"/>
      </div>
    );
}
  
  export default Input;