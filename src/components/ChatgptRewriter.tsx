import Image from 'next/image';

const ChatgptRewriter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6">
      <div className="md:w-1/2 p-4 flex justify-center">
        <Image
          src="/image1.jpg"
          alt="GPT Rewriter"
          width={400}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">AI ChatGPT Rewriter</h2>
        <p className="mb-4 text-md" style={{ fontSize: "14px" }}>
          AI Chatgpt Rewriter, pushed by advanced AI technology, assists you in rewriting and rephrasing your text written by ChatGPT. It is a tool that has natural language processing (NLP) algorithms for understanding context and semantics. 
          <p>This refers to keeping your rephrased content aligned with its original content but in a different writing style and in a more humanized way.</p>
        </p>
        <h3 className="text-lg font-bold">reason for usage</h3>
        <p className="mb-4" style={{ fontSize: "14px" }}>
          The internet is loaded with an abundant amount of content, including different writing materials like blogs, thesis articles, and so on.
          AI tools usually generate text that sounds robotic as well as can easily be detected by AI detecting tools. 
          The biggest problem of this scenario is that various search engines start to eliminate AI content from their search results.
        </p>
      </div>
    </div>
  );
};

export default ChatgptRewriter;
