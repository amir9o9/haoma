import { Brain, Crown, Sprout } from "lucide-react";

function OurPath() {
  return (
    <section id="ourpath" className="py-10">
      <div className="container mx-auto max-w-5xl min-h-screen px-4">
        {/* main title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold section-title mt-3 mb-10 text-center">
          Our Path
        </h2>

        <div className="grid grid-cols-1 gap-10">
          {/* Card 1 */}
          <div className="flex justify-end">
            <div className="path-cards max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-gray-900 hover:-translate-x-5 transition-transform duration-300">
              <Brain className="mb-3 w-8 h-8 text-indigo-600 mx-auto" />
              <p className="text-sm sm:text-base leading-relaxed">
                "At Haoma, learning begins with discovery. We believe every child carries a unique spark—and our mission is to help it shine brighter."
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-start">
            <div className="path-cards max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-gray-900 hover:translate-x-5 transition-transform duration-300">
              <Sprout className="mb-3 w-8 h-8 text-green-600 mx-auto" />
              <p className="text-sm sm:text-base leading-relaxed">
                Discover → Explore → Create → Grow <br />
                "Students start by uncovering their passions, dive into hands-on experiences, build real-world projects, and grow into confident innovators."
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-end">
            <div className="path-cards max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-gray-900 hover:-translate-x-5 transition-transform duration-300">
              <Crown className="mb-3 w-8 h-8 text-yellow-500 mx-auto" />
              <p className="text-sm sm:text-base leading-relaxed">
                "Ready to begin your journey of discovery and innovation? Let’s take the first step together."
              </p>
            </div>
          </div>
        </div>

        {/* Closing Text */}
        <h2 className="text-center w-full mt-16 text-lg sm:text-xl md:text-2xl font-medium text-gray-900">
          Be with us in this long journey and build your future—new ways make new things.
        </h2>
      </div>
    </section>
  );
}

export default OurPath;