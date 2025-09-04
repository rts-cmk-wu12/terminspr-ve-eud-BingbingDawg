import { FiSearch } from 'react-icons/fi';

export default function SearchFunction() {
    return (
        <div className='realtive'>
        <input type="search" name="search"  className="bg-search-color opacity-[30%] mb-[55px] mt-[13px] p-[0.6rem] w-full relative" />
        <FiSearch className='absolute right-[40px] h-[24px] w-auto top-[105px] text-white'/>
        </div>
    )
}