// // components/Footer.js
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-[#0d1b2a] text-white py-4">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="mb-4 md:mb-0">
//             <h2 className="text-lg font-bold">AI Chatgpt Rewriter</h2>
//             <p className="text-[#778da9]">© 2024 AI Chatgpt Rewriter. All rights reserved.</p>
//           </div>
//           <div className="flex space-x-6 py-6">
//             <Link href="/" className="text-gray-400 hover:text-white">
//               Home
//             </Link>
//             <Link href="/" className="text-gray-400 hover:text-white">
//               About Us
//             </Link>
//             <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="/terms-and-services" className="text-gray-400 hover:text-white">
//               Terms and Services
//             </Link>
//             <Link href="/disclaimer" className="text-gray-400 hover:text-white">
//               Disclaimer
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold">AI Chatgpt Rewriter</h2>
            <p className="text-[#778da9]">© 2024 AI Chatgpt Rewriter. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              About Us
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-services" className="text-gray-400 hover:text-white">
              Terms and Services
            </Link>
            <Link href="/disclaimer" className="text-gray-400 hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
