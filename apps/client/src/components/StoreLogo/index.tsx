// import storeLogo from '../../assets/mainLogo.png';
import { MdInventory } from 'react-icons/md';

export default function StoreLogoImg() {
  return (
    <div className="flex items-center justify-evenly mb-4">
      <div className="bg-[#F77E21] p-4 rounded-full">
        <MdInventory
          style={{ width: '32px', height: '32px', color: '#ffffff' }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-black text-3xl text-center select-none tracking-wide font-black">
          Brightsons
        </span>
        <div className="flex items-center ">
          <span className="text-black text-[0.75rem]  select-none tracking-wide font-bold">
            GENERAL MERCHANDISE
          </span>
        </div>
      </div>
    </div>
  );
}
