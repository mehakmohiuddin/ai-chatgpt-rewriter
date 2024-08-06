// components/PrecautionsSection.tsx
import Image from "next/image";

const PrecautionsSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-4xl">
            Precautions for getting better results
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <div className="md:w-1/2 p-4 hidden md:block">
            <Image
              src="/precautions.jpg"
              alt="precautions image"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <p>There are the following key points which provide you with better output:</p>
            <h4 className="mt-2 font-bold mb-2">Key Points:</h4>
            <ul className="list-disc list-inside">
              <li className="text-md mb-2">
                <span className="font-semibold">Assist sharp and context-loaded text:</span>{" "}
                If you provide more information to AI, it will understand the concept behind your text more clearly.
              </li>
              <li className="text-md mb-2">
                <span className="font-semibold">Review output:</span> Try to read the rephrased context to ensure that it aligns with your intended message and tone.
              </li>
              <li className="text-md">
                <span className="font-semibold">Use repeatedly:</span> Always use this tool to rephrase content without any fear until it matches your required intended message and tone.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecautionsSection;
