import React from "react";

function Qualification() {
  return (
    <div className="my-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-600">
          Education Qualification
      </h2>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-800 text-white text-center">
            <th className="border-2 border-black p-3">Degree</th>
            <th className="border-2 border-black p-3">Year</th>
            <th className="border-2 border-black p-3">CGPA</th>
            <th className="border-2 border-black p-3">Institution/Board</th>
          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-gray-700 hover:text-white text-center">
            <td className="border-2 border-black p-3">10<sup>th</sup></td>
            <td className="border-2 border-black p-3">2020</td>
            <td className="border-2 border-black p-3">9 CGPA</td>
            <td className="border-2 border-black p-3">CBSE</td>
          </tr>

          <tr className="hover:bg-gray-700 hover:text-white text-center">
            <td className="border-2 border-black p-3">12<sup>th</sup></td>
            <td className="border-2 border-black p-3">2022</td>
            <td className="border-2 border-black p-3">9 CGPA</td>
            <td className="border-2 border-black p-3">CBSE</td>
          </tr>

          <tr className="hover:bg-gray-700 hover:text-white text-center">
            <td className="border-2 border-black p-3">B.Tech</td>
            <td className="border-2 border-black p-3">2027</td>
            <td className="border-2 border-black p-3">8.3 CGPA</td>
            <td className="border-2 border-black p-3">LPU</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Qualification;
