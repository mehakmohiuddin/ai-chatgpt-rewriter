import Head from "next/head";
import Link from "next/link";

export default function Disclaimer() {
    return (
        <div>
            <Head>
                <title>Disclaimer - AI Chatgpt Rewriter</title>
            </Head>
            <div className="container mx-[3rem] p-6 max-w-4xl text-black" style={{ fontSize: "14px", textAlign: "left" }}>
                <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
                <p className="mb-4">
                    If anyone needs any further information or has any queries relevant to our site's disclaimer, kindly contact us at 
                    &nbsp;<Link href="mailto:aichatgptrewriter.com" className="text-light">aichatgptrewriter.com</Link>.
                </p>
                <h2 className="text-lg font-semibold mt-4 mb-3">Disclaimers for AI Chatgpt Rewriter</h2>
                <p className="mb-4">
                    All the data and information available on our website are with good intentions. This information is present only as general-purpose information. AI Chatgpt Rewriter does not assure you of the accuracy and completeness of this information. Therefore, if you take any step on behalf of this information, it will not be considered our responsibility to justify it.
                </p>
                <p className="mb-4">
                    You can visit other websites by using our website via hyperlinks. We will try our best to facilitate you with quality links, but we have no control over the information present on these websites. As we know the site owners and the material present on them, there is a possibility of change without notice, and before we do something about it and remove the link, things get worse.
                </p>
                <p className="mb-4">
                    Further, please read the privacy policies and terms and conditions of other websites before visiting them via hyperlinks.
                </p>
                <h2 className="text-lg font-semibold mt-4 mb-3">Consent</h2>
                <p className="mb-4">
                    Using our website means you have given us consent to our disclaimer and are convinced of and agree to its terms.
                </p>
                <h2 className="text-lg font-semibold mt-4 mb-3">Update</h2>
                <p className="mb-4">
                    If we change any rule or make any kind of amendment, we will clearly post these changes here.
                </p>
            </div>
        </div>
    );
}
