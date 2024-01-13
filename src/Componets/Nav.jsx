import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'




const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29}/>
                
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'>
                    {item.label}
                  </a>
                </li>
              ))}
              
            </ul>

            <div className='hidden max-lg:block cursor-pointer' onClick={(item) => {
              let menu = document.querySelector('#Sliding-menu')
              menu.style.width = menu.style.width === '35%' ? '0' : '35%'
              }}>
              <img src={hamburger} alt="humburger" width={25} height={25} />
              
                
            </div>
        </nav>
        <nav id='Sliding-menu' className='h-full w-0 fixed z-10 top-0 left-0 bg-gray-900 overflow-x-hidden pt-16 duration-500 min-lg:hidden'>
          <ul className='p-0 space-y-4'>
          {navLinks.map((item) => (
                <li key={item.label}
                className='w-full'
                >
                  <a href={item.href}
                  className='p-2 text-white cursor-pointer border-b border-gray-500 hover:bg-gray-700 hover:text-white'
                  >
                    {item.label}
                  </a>
                </li>
          ))}

          </ul>
        </nav>
    </header>
  )
}

export default Nav