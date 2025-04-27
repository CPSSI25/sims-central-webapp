export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-blue-100 p-10 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login to SIMS Central</h2>
        <input className="border p-2 mb-4 w-full" type="text" placeholder="Username" />
        <input className="border p-2 mb-4 w-full" type="password" placeholder="Password" />
        <button className="bg-blue-700 text-white p-2 w-full rounded">Login</button>
      </div>
    </div>
  );
}