const Loader = () => {
  return (
    <div>
       <div className="fixed top-0 left-0 z-50 w-screen h-screen flex flex-col items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900 mb-4"></div>
          <p className="text-grey">Loading...</p>
        </div>
    </div>
  );
};

export default Loader;
