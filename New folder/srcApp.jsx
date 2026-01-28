import { motion } from "framer-motion"

const Section = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 px-6 max-w-7xl mx-auto"
  >
    {children}
  </motion.section>
)

export default function App() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-purple-600 to-blue-600 text-white px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Stop Running Boring Ads — Your Fashion Brand Needs Ads People Connect With
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10">
            We create natural, relatable, high-performing videos that feel real and drive sales for fashion brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold">
              View Results
            </button>
            <button className="px-8 py-4 rounded-full border border-white">
              Get High-Converting Videos
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section>
        <h2 className="text-4xl font-bold text-center mb-6">
          Traditional Ads Don’t Work Anymore
        </h2>
        <p className="text-center text-gray-600 mb-12">
          People don’t trust perfect ads. They trust real experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="border p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Traditional Ads</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Over polished</li>
              <li>Feels fake</li>
              <li>Low retention</li>
            </ul>
          </div>
          <div className="border p-8 rounded-xl bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">Relatable Ads</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Feels native</li>
              <li>High engagement</li>
              <li>More sales</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* VALUE */}
      <Section>
        <h2 className="text-4xl font-bold text-center mb-12">
          Relatable Video Concepts That Convert
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            "Trending GRWM Videos",
            "POV & Mirror Shots",
            "Lifestyle Story Hooks",
            "Fast Cut Reels",
            "Emotional Transformations"
          ].map(item => (
            <div key={item} className="border p-6 rounded-xl">
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section>
        <h2 className="text-4xl font-bold text-center mb-12">
          Fashion Brands Are Getting Results
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">
              <div className="aspect-[9/16] bg-gray-200 flex items-center justify-center">
                Video
              </div>
              <div className="p-4 text-sm">
                {i % 2 === 0 ? "5× ROAS · 100K+ Views" : "From 1 product image"}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* AI ADVANTAGE */}
      <Section>
        <h2 className="text-4xl font-bold text-center mb-6">
          High-Quality Videos Without High Costs
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          We use AI-driven creators to remove the need for models, studios,
          cameras, and crews — saving fashion brands thousands.
        </p>
      </Section>

      {/* CTA */}
      <Section>
        <h2 className="text-4xl font-bold text-center mb-10">
          Ready to Create Videos That Sell?
        </h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input className="border p-4 rounded-lg" placeholder="Name" />
          <input className="border p-4 rounded-lg" placeholder="Brand" />
          <input className="border p-4 rounded-lg" placeholder="Email" />
          <textarea className="border p-4 rounded-lg" placeholder="Message" />
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-full font-semibold">
            Submit
          </button>
        </form>
      </Section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center">
        <p className="font-semibold">Digitivmedia</p>
        <p className="text-sm text-gray-500">© 2026 Digitivmedia</p>
      </footer>
    </>
  )
}
