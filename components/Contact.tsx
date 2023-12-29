import React from "react";

const Contact = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black ">
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-4 heading">
              Contact Us
            </h2>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to us for any inquiries or questions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Section */}
              <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">Phone</h3>
                <p className="text-gray-600">
                  For phone inquiries, please contact us at:
                </p>
                <p className="text-blue-500 font-bold">8477081261</p>
              </div>

              {/* Email Section */}
              <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="text-gray-600">
                  You can also reach us via email:
                </p>
                <p className="text-blue-500 font-bold">
                  Shrey.sadhukhan21@gmail.com
                </p>
              </div>

              {/* Address Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p className="text-gray-600">Visit us at our office:</p>
                <address className="not-italic text-blue-500">
                  2ns Street Friends Colony
                  <br />
                  Muradnagar, Ghaziabad 201206
                  <br />
                  India
                </address>
              </div>
            </div>

            <form
              className="max-w-lg mx-auto"
              method="POST"
              action="https://formspree.io/f/mleqerkq"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
