import React,{ useState }  from 'react'
import { data } from '../data/data';

    const Options = () => {
        const [isOpen, setIsOpen] = useState(true);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };

        return (
    <div className=" bg-slate-200">
        <div className="flex flex-col items-center">
          <ul>
            {data.map((item) => (
              <li
                key={item.id}
                className="p-5 pt-7 border border-slate-300 "
              >
                <a href="/">{item.title}</a>
                {item.title === 'Documentation' && item.options && isOpen && (
                  <ul className="mt-5">
                    {item.options.map((option) => (
                      <li
                        key={option.id}
                        className="pl-3 py-5  hover:bg-gray-100 "
                      >
                        <a href="/">{option.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
            </div>
          );
}

export default Options




  