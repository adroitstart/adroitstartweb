import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FaEnvelope } from 'react-icons/fa';

const MailchimpSubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email ${email} to Mailchimp`);
  };

  const url =
    "https://<MAILCHIMP_SERVER_PREFIX>.api.mailchimp.com/3.0/lists/<MAILCHIMP_LIST_ID>";

  return (
    <section className="bg-gray-100 py-16 items-center" id="get-involved">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-400">Get Involved</h2>
        <h3 className="text-xl font-bold text-center mb-8 text-gray-300">Subscribe to our mailing list</h3>
        <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <label htmlFor="email" className="sr-only">
                Email Address
            </label>
            <div className="relative rounded-md shadow-sm">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full text-gray-600 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-3 pr-12 sm:text-sm"
                placeholder="Enter your email"
                />
                <button
                type="submit"
                onClick={() => subscribe({ EMAIL: email })}
                disabled={status === "sending"}
                className="absolute inset-y-0 right-0 px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-adroitOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adroitBlue"
                >
                {status === "sending" ? "Submitting..." : "Subscribe"}
                </button>
            </div>
            {status === "error" && (
                <p className="mt-2 text-sm text-red-600">{message}</p>
            )}
            {status === "success" && (
                <p className="mt-2 text-sm text-green-600">Thank you for subscribing!</p>
            )}
            </form>
        )}
        />
        <div className="container px-4 mx-auto items-center">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-400">To get volunteer, send an email to our.....</h2>
            <div className="flex justify-center space-x-4">
                <a
                    href={`mailto:test@gmail.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-adroitOrange text-center"
                    >
                    <FaEnvelope size={24} />
                </a>
            </div>
        </div>
    </section>
  );
};

export default MailchimpSubscribeForm;
