// components/FeaturesSection.jsx

import { FaRegLightbulb, FaRegSmile, FaShieldAlt, FaRocket, FaCogs, FaPenFancy } from 'react-icons/fa';

const features = [
  {
    icon: <FaRegLightbulb className="text-indigo-600 w-12 h-12" />,
    title: "No learning curve",
    description: "There is no need to learn how to use this tool. Simply paste your text in the input space, and within a second, it will give you the rewritten version of your text."
  },
  {
    icon: <FaRegSmile className="text-indigo-600 w-12 h-12" />,
    title: "Retain original meaning",
    description: "The tool maintains the original meaning of your text while presenting a new way of writing expression."
  },
  {
    icon: <FaShieldAlt className="text-indigo-600 w-12 h-12" />,
    title: "No plagiarism",
    description: "The basic pillar of writing is originality.This tool rewrites your existing content and adds new words; therefore, it will make your content unique."
  },
  // {
  //   icon: <FaRocket className="text-indigo-600 w-12 h-12" />,
  //   title: "Fast Processing",
  //   description: "Experience quick rewriting speeds for large amounts of text."
  // },
  // {
  //   icon: <FaCogs className="text-indigo-600 w-12 h-12" />,
  //   title: "Customizable",
  //   description: "Tailor the rewriting settings to fit your specific needs."
  // },
  // {
  //   icon: <FaPenFancy className="text-indigo-600 w-12 h-12" />,
  //   title: "High Quality",
  //   description: "Generate high-quality content that reads naturally and accurately."
  // }
];

export default function FeaturesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Features of our AI Article Rewriter Tool</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-grey rounded-lg shadow-lg ">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
