import '../index.css'
export const Page404 = () => {
  return (
    <>
      <main className="'h-[100vh] w-[100vw] bg-white flex justify-center items-center bg-cover">
        <div className="text-center">
          <p className="mt-[80%] text-6xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/"
              className="bg-[#3199F3] hover:bg-[#006BC7] rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            
          </div>
        </div>
      </main>
    </>
  );
};
