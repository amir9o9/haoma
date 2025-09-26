import { Instagram, Facebook, Linkedin } from 'lucide-react';

function ContactUs() {
  return (
    <section id="contactus" className="min-h-screen py-10 bg-gray-50 dark:bg-gray-900/80">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold section-title mt-3 mb-10 text-center">
          Contact Us
        </h2>

        {/* Social Card */}
        <div className="w-full sm:w-3/4 md:w-1/2 bg-[#1d1d1d] text-white rounded-2xl shadow-2xl shadow-[#08CB00]/50 mb-10">
            <div className="p-6 flex flex-col items-center justify-center gap-6 text-center">

                <a href="#" className="flex items-center justify-center gap-2 hover:text-[#08CB00] transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                </a>

                <a href="#" className="flex items-center justify-center gap-2 hover:text-[#08CB00] transition-colors">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                </a>

                <a href="#" className="flex items-center justify-center gap-2 hover:text-[#08CB00] transition-colors">
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                </a>
            </div>
        </div>

        {/* Subtitle */}
        <h3 className="text-lg sm:text-xl mt-6 text-center text-gray-700 dark:text-gray-300">
          Follow us on social media
        </h3>

        {/* Description */}
        <h3 className="text-base sm:text-lg mt-6 bg-[#1d1d1d] text-white rounded-2xl p-6 text-center leading-relaxed">
          You can reach out through any of the platforms above. Our experts are ready to guide you toward the best opportunities.
        </h3>
      </div>
    </section>
  );
}

export default ContactUs;