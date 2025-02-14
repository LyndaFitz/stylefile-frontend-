export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-green-600 text-2xl font-bold">Style Files</h1>
      <nav>
        <a href="/login" className="mx-2 text-gray-600 hover:text-green-500">
          Login
        </a>
        <a href="/signup" className="px-4 py-2 bg-green-500 text-white rounded">
          Sign Up
        </a>
      </nav>
    </header>
  );
};
