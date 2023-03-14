import { NextPage } from "next";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const AccountPage: NextPage = () => {
  return (
    <div>
      <header className="bg-white">
        <nav className="flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Permissive</span>
            </a>
          </div>
          <div className="hidden md:block">
          <ul className="ml-10 flex items-center space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white font-medium">Account</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white font-medium">Permissions</a>
            </li>
          </ul>
        </div>
          <div className="flex-shrink-0">
            <ConnectButton/>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default AccountPage;
