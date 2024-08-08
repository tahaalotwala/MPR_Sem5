import image from "../assets/images/contact-image.jpg";

export const ContactUs = () => {
  return (
    <>
      <div className="contact-container flex justify-evenly p-[3rem]">
        <div className="contactForm bg-white shadow-lg p-8">
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
        <img src={image} alt="" className="h-[30rem]" />
      </div>
    </>
  );
};
