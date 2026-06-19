```tsx
    export default function Header() {
      return (
        <header className="w-full bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Feature Fortune</div>
          <nav className="flex gap-6 items-center">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/marketplace" className="hover:text-blue-600">Marketplace</a>
            <a href="/community" className="hover:text-blue-600">Community</a>
            <a href="/sell" className="hover:text-blue-600">Sell on Feature Fortune</a>
            <a href="/profile" className="font-semibold">My Profile</a>
            <button className="bg-red-500 text-white px-4 py-1 rounded">Sign Out</button>
          </nav>
        </header>
      );
    }
