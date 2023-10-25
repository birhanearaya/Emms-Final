import {useState } from "react";
export const Login = () => {
  const [email, setEmail]= useState ("")
  const [password, setPassword] = useState ("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email + password)
  }
  return (
    <>
      <div className="h-screen flex justify-center items-center">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-purple-500">Login</h1>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input 
                    className="border p-2 w-full rounded-lg" 
                    type="email" placeholder="email@example.com"
                    value={email} onChange = {(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Password
                  </label>
                  <input 
                    className="border p-2 w-full rounded-lg"
                    type="password" placeholder="***********"
                    value={password} onChange = {(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
                >
                  Login
                </button>
              </form>
        </div>
    </>
  );
};
