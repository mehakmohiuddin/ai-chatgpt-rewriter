// import React from 'react';

// const WorkingSection: React.FC = () => {
//   const steps = [
//     "Reach the tool through our ChatGPT website. ",
//     "Write the text in the given input space",
//     "Click the 'Rewrite' button  and see the magic of our tool.",
//     "Our advanced algorithms analyze and understand the context of your content.",
//     "The tool generates a unique version of your text while preserving the original meaning.",
//     "Review the rewritten content and make any necessary adjustments.",
//   ];

//   return (
//     <section className="flex w-full max-w-6xl p-10 mx-10 justify-center items-center py-10 mb-10">
//       <div className="">
//         <h2 className="text-3xl font-bold text-center mb-8">Working of our AI Article Rewriter Tool</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {steps.map((step, index) => (
//             <div key={index} className="flex items-center space-x-4">
//               <div className="text-4xl font-bold">{index + 1}</div>
//               <div className=" bg-lightGrey p-5 rounded-lg shadow flex-1">
//                 <p>{step}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkingSection;



import React from 'react';

const WorkingSection: React.FC = () => {
  const steps = [
    "Reach the tool through our ChatGPT website.",
    "Write the text in the given input space.",
    "Click the 'Rewrite' button and see the magic of our tool.",
    "Our advanced algorithms analyze and understand the context of your content.",
    "The tool generates a unique version of your text while preserving the original meaning.",
    "Review the rewritten content and make any necessary adjustments.",
  ];

  return (
    <section className="flex w-full max-w-6xl p-10 mx-auto justify-center items-center py-10 mb-10">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Working of our AI Article Rewriter Tool</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-white bg-dark h-10 w-10 flex items-center justify-center rounded-full shadow-lg ">
                {index + 1}
              </div>
              <div className="bg-grey p-5 rounded-lg shadow flex-1">
                <p>{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
