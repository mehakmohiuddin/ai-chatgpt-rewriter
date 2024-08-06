// components/Advantages.js
import Image from "next/image";

const Advantages = () => {
  const svgIcon = (
    <Image src="https://articlerewritertool.com/svg/advantage.svg" width={400} height={400} alt="Advantages" className="pl-10"/>
  );

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Advantages of our AI Article Rewriter Tool</h2>
          <p className="mb-6 text-md">
            Our developers have worked hard to meet the needs of various writers, resulting in the AI Article Rewriter Tool.
            Our website is the go-to solution for writing content, catering to both professionals, experts, and beginners.
            With a constantly updated and improved word database, our AI rewriter tool ensures precision and meets the needs of all authors and professionals.
          </p>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-md">
              <span className="font-semibold">Save Time:</span> This tool helps us work quickly and save time. Just by clicking one button, we get our rephrased content.
            </li>
            <li className="text-md">
              <span className="font-semibold">Enhance Creativity:</span> It supports us in enhancing our creativity and presents us with unique perspectives on writing expressions. This intriguing feature encourages us to think differently, ultimately leading to a boost in our creativity.
            </li>
            <li className="text-md">
              <span className="font-semibold">Fix the AI Content Problem:</span> Our biggest problem with using AI-generated content is that it is detectable by AI tools, and many search engines do not support this AI content. Therefore, our AI Chatgpt Rewriter solves this problem by rewriting and rephrasing the content into a unique text.
            </li>
          </ul>
        </div>
        <div className="overflow-hidden md:w-1/2 justify-center md:justify-end mt-6 md:mt-0 hidden md:block">
          <div className="bg-dark p-20 rounded-l-full md:ml-10">
            {svgIcon}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
