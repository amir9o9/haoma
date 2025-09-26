import { Send } from "lucide-react";

function Registration() {
  return (
    <section id="registration" className="min-h-screen py-10 text-[#1d1d1d]">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold section-title mt-3 mb-4 text-center">
          Registration
        </h2>

        <h3 className="text-base sm:text-lg text-center mb-3">
          Send your information to us. Our experts will call you and guide you.
        </h3>

        {/* Form */}
        <form
          action=""
          className="bg-[#1d1d1d] text-white w-full sm:w-3/4 md:w-1/2 p-8 rounded-xl flex flex-col items-center justify-center gap-4"
        >
          <h3 className="text-lg font-semibold text-center mb-4">
              Information Form
          </h3>

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="input-field w-full p-2 rounded-md text-black"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="input-field w-full p-2 rounded-md text-black"
          />

          {/* Age */}
          <input
            type="number"
            placeholder="Age"
            className="input-field w-full p-2 rounded-md text-black"
          />

          {/* Submit Button */}
          <button className="bg-[#08CB00] w-full p-3 rounded-md mt-4 hover:bg-[#06a700] transition-colors">
            <div className="flex items-center justify-center gap-2 text-black font-semibold">
              <Send className="w-5 h-5" />
              Send
            </div>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Registration;