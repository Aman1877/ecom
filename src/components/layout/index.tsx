import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Layout: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const items = useSelector((state: any) => state.cart.items);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 flex items-center justify-between p-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold dark:text-white">My App</div>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/home"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <div className="relative">
                <span className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  Cart
                </span>
                <span className="absolute top-0 end-0 -mt-2 -mr-5">
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900">
                    {items?.length}
                  </span>
                </span>
              </div>
            </Link>
            <Link
              to="/cart"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Wishlist
            </Link>
            <div className="rounded-full h-10 w-10 bg-gray-300 dark:bg-gray-600">
              <img
                className="rounded-full h-full w-full object-cover"
                src={`https://ui-avatars.com/api/?background=random&name=${user?.userName}`}
                alt=""
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
