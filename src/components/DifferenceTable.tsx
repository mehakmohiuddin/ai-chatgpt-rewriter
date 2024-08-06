// import React from 'react';

// const DifferenceTable: React.FC = () => {
//   return (
//     <div className="bg-skin flex-col w-full px-20 py-10 mb-8">
//       <h1 className="text-2xl font-bold mb-4">Difference Between Manually Rewrite Chat GPT Text vs Using Our AI Chatgpt Rewriter Tool</h1>
//       <div className="flex flex-col md:flex-row gap-10">
        
//         {/* Features Table */}
//         <div className="overflow-x-auto shadow-grey shadow-lg ">
//           <table className="w-[20rem] bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-10 border border-gray-300 text-left">Feature</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">Slow</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="py-2 px-4 border border-gray-300">very vulnerable and risky</td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">Limited</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="py-2 px-4 border border-gray-300">Could not apply</td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">Learning Opportunity</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Manual Rewrite Table */}
//         <div className="overflow-x-auto shadow-grey shadow-lg ">
//           <table className="w-[20rem] bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border border-gray-300 text-left text-blue-600">Manual rewritten text of AI
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">Fast</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="py-2 px-4 border border-gray-300">Security</td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">Limitation of usage</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="py-2 px-4 border border-gray-300">User interface</td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">High</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* AI Chatgpt Rewriter Tool Table */}
//         <div className="overflow-x-auto shadow-grey shadow-lg">
//           <table className="w-[20rem] bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border border-gray-300 text-left text-blue-600">AI Chatgpt Rewriter text
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">Extremely fast</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="py-2 px-4 border border-gray-300">Fully secure</td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">Unlimited</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="py-2 px-4 border border-gray-300">Straightforward and smooth</td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-4 border border-gray-300">Low</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DifferenceTable;



import React from 'react';

const DifferenceTable: React.FC = () => {
  return (
    <div className="bg-skin flex-col w-full px-4 py-10 mb-8 md:px-24">
      <h1 className="text-2xl font-bold mb-4 text-center">Difference Between Manually Rewrite Chat GPT Text vs Using Our AI Chatgpt Rewriter Tool</h1>
      <div className="flex flex-col md:flex-row gap-10">

        {/* Features Table */}
        <div className="overflow-x-auto shadow-grey shadow-lg md:w-[20rem] w-full">
          <table className="w-full md:w-[20rem] bg-white border border-gray-300">
            <thead className="hidden md:table-header-group">
              <tr>
                <th className="py-2 px-4 border border-gray-300 text-left">Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">Slow</td>
              </tr>
              <tr className="bg-gray-100 md:table-row">
                <td className="py-2 px-4 border border-gray-300">Very vulnerable and risky</td>
              </tr>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">Limited</td>
              </tr>
              <tr className="bg-gray-100 md:table-row">
                <td className="py-2 px-4 border border-gray-300">Could not apply</td>
              </tr>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">Learning Opportunity</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Manual Rewrite Table */}
        <div className="overflow-x-auto shadow-grey shadow-lg md:w-[20rem] w-full">
          <table className="w-full md:w-[20rem] bg-white border border-gray-300">
            <thead className="hidden md:table-header-group">
              <tr>
                <th className="py-2 px-4 border border-gray-300 text-left text-blue-600">Manual rewritten text of AI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">Fast</td>
              </tr>
              <tr className="bg-gray-100 md:table-row">
                <td className="py-2 px-4 border border-gray-300">Security</td>
              </tr>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">Limitation of usage</td>
              </tr>
              <tr className="bg-gray-100 md:table-row">
                <td className="py-2 px-4 border border-gray-300">User interface</td>
              </tr>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">High</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* AI Chatgpt Rewriter Tool Table */}
        <div className="overflow-x-auto shadow-grey shadow-lg md:w-[20rem] w-full">
          <table className="w-full md:w-[20rem] bg-white border border-gray-300">
            <thead className="hidden md:table-header-group">
              <tr>
                <th className="py-2 px-4 border border-gray-300 text-left text-blue-600">AI Chatgpt Rewriter text</th>
              </tr>
            </thead>
            <tbody>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">Extremely fast</td>
              </tr>
              <tr className="bg-gray-100 md:table-row">
                <td className="py-2 px-4 border border-gray-300">Fully secure</td>
              </tr>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">Unlimited</td>
              </tr>
              <tr className="bg-gray-100 md:table-row">
                <td className="py-2 px-4 border border-gray-300">Straightforward and smooth</td>
              </tr>
              <tr className="md:table-row">
                <td className="py-2 px-4 border border-gray-300">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DifferenceTable;
