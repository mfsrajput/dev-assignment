export default function AssignmentGrid() {
    return (
      <div className="grid gap-4 p-4 bg-gray-900 h-screen">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full">
          {/* First column (left) */}
          <div className="col-span-1 row-span-3 bg-gradient-to-b from-teal-300 to-teal-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"></div>
  
          {/* Top row */}
          <div className="col-span-2 row-span-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"></div>
          <div className="col-span-1 row-span-1 bg-gradient-to-r from-red-400 to-red-600 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"></div>
  
          {/* Middle row */}
          <div className="col-span-1 row-span-1 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"></div>
          <div className="col-span-1 row-span-1 bg-gradient-to-b from-red-400 to-red-600 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"></div>
          <div className="col-span-1 row-span-2 bg-gradient-to-b from-green-400 to-green-600 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"></div>
  
          {/* Bottom row */}
          <div className="col-span-1 row-span-1 bg-gradient-to-b from-red-400 to-red-600 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"></div>
          <div className="col-span-1 row-span-1 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"></div>
        </div>
      </div>
    );
  }
  