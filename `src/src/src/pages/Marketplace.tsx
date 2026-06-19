export default function Marketplace() {
  const beats = [
    { title: "Evergreen Beat 1", price: 20 },
    { title: "Evergreen Beat 2", price: 20 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {beats.map((beat, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <h3 className="font-bold">{beat.title}</h3>
          <p className="text-gray-600">${beat.price} MP3 Lease</p>
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded">Buy Now</button>
        </div>
      ))}
    </div>
  );
}
