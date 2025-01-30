import {
  FaEnvelope,
  FaComments,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white mt-4">
      <div className="container px-6 py-6 mx-auto">
        <div>
          <p className="font-medium text-blue-500">Contact us</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            Chat to our friendly team
          </h1>

          <p className="mt-3 text-gray-500">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-6 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                <FaEnvelope className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Email
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-sm text-blue-500">hello@merakiui.com</p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                <FaComments className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Live chat
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-sm text-blue-500">Start new chat</p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                <FaMapMarkerAlt className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Office
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-sm text-blue-500">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                <FaPhone className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Phone
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-blue-500">+1 (555) 000-0000</p>
            </div>
          </div>

          <div className="p-2 mb-2 lg:mb-8 rounded-lg bg-gray-50 md:p-2">
            <form>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John "
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-lg hover:bg-blue-400 focus:outline-none">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
