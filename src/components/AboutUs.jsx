function AboutUs() {
  return (
    <section id="aboutus" className="py-10">
      <div className="container mx-auto max-w-5xl px-4 mb-5">
        {/* main title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold section-title text-center mb-10">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image 1 */}
          <div className="flex justify-center">
            <img
              className="h-48 sm:h-56 md:h-64 rounded-lg shadow-2xl shadow-[#08CB00]/70 object-contain"
              src="/public/pictures/logo for Haoma.png"
              alt="Haoma Logo"
            />
          </div>

          {/* Text 1 */}
          <div className="text-base sm:text-lg leading-relaxed">
            In ancient Persia, Haoma was a sacred plant symbolizing life, vitality, spiritual enlightenment, and connection with nature.
          </div>

          {/* Text 2 */}
          <div className="text-base sm:text-lg leading-relaxed">
            At Haoma College, we uncover and nurture every student’s unique talents. Breaking away from traditional education, we ignite a passion for learning and create a space for creativity and personal growth. Haoma is where students discover themselves and prepare for a brilliant future. Join us and experience the spark!
          </div>

          {/* Image 2 */}
          <div className="flex justify-center">
            <img
              className="h-48 sm:h-56 md:h-64 rounded-lg shadow-2xl shadow-[#08CB00]/70 object-contain"
              src="/public/pictures/haoma.png"
              alt="Haoma Campus"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;