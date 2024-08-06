// import Image from 'next/image';

// const FinalThoughts = () => {
//   return (
//     <div className="flex flex-col mx-[3rem] md:flex-row items-center justify-center px-5 ">
//       <div className="md:w-1/2 p-4">
//         <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
//         <p className="mb-4">
//           The AI Chatgpt Rewriter does a very sharp, transparent, and specific task for you. It rewrites the content and shapes it into a fully new way of expression while maintaining its original meaning. More precisely, this rephrasing technique by AI Chatgpt Rewriter is very useful for writers in this current era. Writers need to accomplish a lot of projects in a shorter period; ChatGPT helps to do this in a short time.
//         </p>
//       </div>
//       <div className="md:w-1/2 p-4 order-first md:order-last">
//         <Image
//           src="/final-thoughts.jpg"
//           alt="GPT Rewriter"
//           width={500}
//           height={400}
//           className="rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default FinalThoughts;


import Image from 'next/image';

const FinalThoughts = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-[3rem] md:flex-row items-center justify-center px-4 md:px-5">
      <div className="md:w-1/2 p-1">
        <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
        <p className="mb-4">
          The AI Chatgpt Rewriter does a very sharp, transparent, and specific task for you. It rewrites the content and shapes it into a fully new way of expression while maintaining its original meaning. More precisely, this rephrasing technique by AI Chatgpt Rewriter is very useful for writers in this current era. Writers need to accomplish a lot of projects in a shorter period; ChatGPT helps to do this in a short time.
        </p>
      </div>
      <div className="md:w-1/2 p-4 order-first md:order-last">
        <Image
          src="/final-thoughts.jpg"
          alt="GPT Rewriter"
          width={500}
          height={400}
          className="rounded-lg w-full h-auto md:w-full md:h-auto"
        />
      </div>
    </div>
  );
};

export default FinalThoughts;
