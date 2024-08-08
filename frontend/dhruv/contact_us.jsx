export const ContactUs = () => {
  const imageURL =
    "https://static.vecteezy.com/system/resources/previews/005/264/202/original/contact-us-concept-icons-such-as-mobile-phone-e-mail-address-chat-global-communication-on-black-background-for-presentation-web-banner-article-business-and-network-connection-and-company-free-vector.jpg";
  return (
    <div
      className="ContactForm bg-gray-500 h-screen w-screen flex"
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="contactForm bg-white shadow-lg p-8 h-screen">
        <h1>Contact Us</h1>
        <form id="contact-form" noValidate>
          {/* Row 1 of form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
            <div>
              <input
                type="text"
                name="name"
                className="form-control formInput w-full p-3 border 
                  bg-transparent
                  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="form-control formInput w-full p-3 border 
                  bg-transparent
                  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Email address"
              />
            </div>
          </div>
          {/* Row 2 of form */}
          <div className="mb-6">
            <input
              type="text"
              name="subject"
              className="form-control formInput w-full p-3 border 
                bg-transparent
                border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Subject"
            />
          </div>
          {/* Row 3 of form */}
          <div className="mb-6">
            <textarea
              rows={5}
              name="message"
              className="form-control formInput w-full p-3 border 
                text-black
                bg-transparent
                border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="submit-btn bg-black text-white py-3 px-6 rounded hover:bg-black transition-colors duration-200 "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
