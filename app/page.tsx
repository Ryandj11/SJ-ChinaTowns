import Image from "next/image";
import { Timeline } from "@/components/timeline";
import { ChinatownInfo } from "@/components/chinatown-info";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ChinesePatternDivider } from "@/components/chinese-pattern-divider";
import { Lantern } from "@/components/lantern";
import dynamic from "next/dynamic";

// Dynamically import MapComponent with SSR turned off
const MapComponentWithNoSSR = dynamic(
  () => import("@/components/map-component").then((mod) => mod.MapComponent),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-parchment">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-chinese-red/90 to-chinese-red/80 text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

        {/* Decorative lanterns */}
        <div className="absolute top-10 left-10 hidden lg:block">
          <Lantern size="lg" color="gold" />
        </div>
        <div className="absolute top-20 right-20 hidden lg:block">
          <Lantern size="md" color="red" />
        </div>
        <div className="absolute bottom-10 left-1/4 hidden lg:block">
          <Lantern size="sm" color="gold" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-tight">
                San Jose's Five Chinatowns
              </h1>
              <p className="text-xl md:text-2xl font-serif mb-6">
                A visual history of displacement, resilience, and cultural
                heritage
              </p>
              <p className="text-white/90 mb-8">
                Explore the forgotten history of five Chinatowns that once
                thrived in San Jose, California from 1866-1931, and learn about
                the systematic displacement of these communities through arson,
                legal discrimination, and urban renewal.
              </p>
              <a
                href="#map"
                className="px-6 py-3 bg-chinese-gold text-chinese-black font-medium rounded-md hover:bg-chinese-gold/90 transition-colors shadow-lg"
              >
                Explore the Map
              </a>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl border-4 border-white/20">
              <Image
                src="/coverpic2.jpg"
                alt="Historic photo of San Jose Chinatown"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chinese-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm">
                <p className="font-serif italic">Market Street Chinatown</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChinesePatternDivider />

      {/* Academic Context */}
      <section
        id="about-chinatowns"
        className="w-full py-16 px-4 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
          <Image src="/chinese-pattern.svg" alt="" width={200} height={200} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
          <Image src="/chinese-pattern.svg" alt="" width={200} height={200} />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center mb-12">
            <div className="h-0.5 w-12 bg-chinese-red"></div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mx-4 text-chinese-black">
              About San Jose's Chinatowns
            </h2>
            <div className="h-0.5 w-12 bg-chinese-red"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-center leading-relaxed mb-12 font-serif">
              San Jose was once home to five historic Chinatowns, built by
              Chinese immigrants during a time of extreme anti-Asian racism in
              California. These neighborhoods served as safe havens where
              immigrants could live, work, and support each other.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-chinese-white/80 p-6 rounded-lg shadow-md border-l-4 border-chinese-red">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-chinese-red">
                  Why Chinatowns Existed
                </h3>
                <p className="leading-relaxed">
                  Due to discrimination, Chinese immigrants were pushed out of
                  mainstream society and forced to form ethnic enclaves which
                  were self-contained communities that provided housing, jobs,
                  food, and cultural connection. Chinatowns helped preserve
                  identity and survival under hostile conditions.
                </p>
              </div>

              <div className="bg-chinese-white/80 p-6 rounded-lg shadow-md border-l-4 border-chinese-red">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-chinese-red">
                  Systemic Racism and Destruction
                </h3>
                <p className="leading-relaxed">
                  Despite their contributions to the local economy, San Jose's
                  Chinatowns were repeatedly destroyed, most infamously in 1887
                  when the Market Street Chinatown was burned down. These
                  attacks were not random and they reflected institutional
                  racism, supported by local policies and attitudes.
                </p>
              </div>
            </div>

            <div className="mb-12 bg-chinese-white/80 p-6 rounded-lg shadow-md border-l-4 border-chinese-gold">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-chinese-black">
                Labor, Capitalism, and Exploitation
              </h3>
              <p className="leading-relaxed">
                As described by Bonacich and Cheng, immigrants were recruited as
                cheap, expendable labor under capitalism. Denied citizenship and
                labor rights, Chinese workers were exploited in railroads,
                farms, and factories, yet they were targeted when they
                threatened white economic power.
              </p>
            </div>

            <div className="mb-12 bg-chinese-white/80 p-6 rounded-lg shadow-md border-l-4 border-chinese-red">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-chinese-red">
                Why This Matters
              </h3>
              <p className="leading-relaxed mb-4">
                It matters that we remember these Chinatowns because they were
                once vibrant communities full of life, culture, and resilience,
                and their erasure wasn't an accident, it was the result of
                racism, exclusion, and violence. By forgetting these histories,
                we erase the people who built them and the struggles they went
                through just to survive. Learning about what happened in San
                Jose helps us see patterns that still exist today, and reminds
                us why it's so important to protect and honor the stories of
                marginalized communities. Remembering these Chinatowns isn't
                just about the past but it's about about making sure this kind
                of history isn't repeated or ignored.
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg font-serif italic text-chinese-black">
                Bonacich, Edna and Lucie Cheng. "A Theoretical Orientation to
                International Labor Migration."
              </p>
            </div>
          </div>
        </div>
      </section>

      <ChinesePatternDivider />

      {/* Interactive Map */}
      <section id="map" className="w-full py-16 px-4 bg-chinese-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-chinese-red flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              Mapping San Jose's Five Chinatowns
            </h2>
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            <strong className="font-extrabold">Click on markers</strong> to
            learn more about each location, its time period, its establishment,
            and its destruction.
          </p>
          <div className="h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl border-4 border-chinese-red/20">
            <MapComponentWithNoSSR />
          </div>
          <div className="mt-8 p-4 bg-chinese-red/10 border-l-4 border-chinese-red rounded-r-md">
            <p className="text-sm text-gray-700">
              <strong>Note on historical accuracy:</strong> The locations shown
              are approximate based on historical records, photographs, and
              archaeological evidence. Some boundaries and exact locations may
              have been lost to time and urban development.
            </p>
          </div>
        </div>
      </section>

      <ChinesePatternDivider />

      {/* Timeline */}
      <section
        id="timeline"
        className="w-full py-16 px-4 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-chinese-gold flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-chinese-black"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              Timeline of Displacement
            </h2>
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Follow the chronological history of San Jose's Chinatowns from
            establishment to displacement, within the broader context of
            anti-Asian legislation and social movements in the United States.
          </p>
          <Timeline />
        </div>
      </section>

      <ChinesePatternDivider />

      {/* Chinatown Information Sections */}
      <ChinatownInfo />

      <ChinesePatternDivider />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
