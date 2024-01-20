
const Buttons = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex gap-2 px-7 py-4 border font-monserrat text-lg leading-none  rounded-full  items-center justify center
    ${backgroundColor ?  `${backgroundColor} ${textColor} ${borderColor}` :
   "bg-coral-red  text-white  border-coral-red"}
     ${fullWidth && w-max}`}>
        {label}

        {iconURL && <img src={iconURL} alt="Right pointing arrow" 
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Buttons