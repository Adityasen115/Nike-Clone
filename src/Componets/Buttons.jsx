
const Buttons = ({label, iconURL}) => {
  return (
    <button className="flex gap-2 px-7 py-4 border text-white font-monserrat text-lg leading-none bg-coral-red rounded-full  items-center justify center border-coral-red w-max">
        {label}

        <img src={iconURL} alt="Right pointing arrow" 
        className="ml-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Buttons