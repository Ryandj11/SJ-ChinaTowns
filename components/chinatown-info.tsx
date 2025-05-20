import Image from "next/image"

export function ChinatownInfo() {
  return (
    <section id="chinatowns" className="w-full py-16 px-4 bg-chinese-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
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
              <path d="M3 21h18"></path>
              <path d="M5 21V7l8-4v18"></path>
              <path d="M19 21V11l-6-4"></path>
              <path d="M9 9v.01"></path>
              <path d="M9 12v.01"></path>
              <path d="M9 15v.01"></path>
              <path d="M9 18v.01"></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">The Five Chinatowns of San Jose</h2>
        </div>

        {/* First Chinatown */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-chinese-red text-white text-sm font-medium rounded-full mb-2">
                1866-1870
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">First Market Street Chinatown</h3>
              <p className="mb-4 leading-relaxed">
                  San Jose’s first Chinese settlement was established in 1866 at the corner of Market Street and San Fernando Street, 
                  in the heart of downtown. Chinese immigrants—many of whom had arrived during or after the Gold Rush—built a vibrant 
                  community that included businesses, homes, temples, and social organizations.
              </p>
              <p className="mb-4 leading-relaxed">
              Despite their economic contributions, residents faced severe racism and exclusion, both socially and legally. 
              Anti-Chinese sentiment was widespread, and local policies and public attitudes often targeted the Chinatown. 
              In May 1870, the entire community was destroyed by arson in a racially motivated attack. No one was held 
              accountable, and the Chinese residents were forced to rebuild elsewhere—eventually forming the second Chinatown 
              in the Heinlenville area.
              </p>
              <div className="bg-chinese-red/10 p-4 rounded-lg border-l-4 border-chinese-red">
                <h4 className="font-bold mb-2 font-serif">Key Facts:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Population: Approximately 500 residents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Location: Corner of Market Street and San Fernando Street</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Destruction: Arson in 1870</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Current site: Part of downtown San Jose, near the San Jose Museum of Art and Circle of Palms Plaza, 
                      where a historical marker now commemorates the site</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden shadow-xl border-4 border-chinese-red/20">
              <Image
                src="/coverpic2.jpg"
                alt="First Market Street Chinatown"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif italic">First Market Street Chinatown</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chinese-divider my-12"></div>

        {/* Second Chinatown */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl border-4 border-chinese-red/20">
              <Image
                src="/vinestreet.jpeg"
                alt="Vine Street Chinatown"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif italic">Vine Street</p>
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-chinese-red text-white text-sm font-medium rounded-full mb-2">
                1870-1872
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Vine Street Chinatown</h3>
              <p className="mb-4 leading-relaxed">
                Following the arson of the Market Street Chinatown in 1870, San Jose’s Chinese community rebuilt a second 
               settlement on Vine Street, near St. James Park. Despite being another center for work, housing, and 
               cultural life, this new enclave did not last long. Just two years later, in 1872, it too was 
               destroyed by fire, under suspicious circumstances, and was likely fueled by anti-Chinese hostility and racism.
              </p>
              <p className="mb-4 leading-relaxed">
                The repeated destruction of Chinese settlements in San Jose reflects the intense anti-Chinese sentiment
                that was prevalent in California during this period, a key focus in Asian American studies of
                institutional racism and community resilience.
              </p>
              <div className="bg-chinese-red/10 p-4 rounded-lg border-l-4 border-chinese-red">
                <h4 className="font-bold mb-2 font-serif">Key Facts:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Population: Approximately 400 residents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Location: Vine Street near St. James Park</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Destruction: Fire in 1872</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Current site: Part of downtown San Jose near St. James Park</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="chinese-divider my-12"></div>

        {/* Third Chinatown */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-chinese-red text-white text-sm font-medium rounded-full mb-2">
                1872-1887
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Woolen Mills Chinatown</h3>
              <p className="mb-4 leading-relaxed">
              After the Vine Street Chinatown was destroyed in 1872, some Chinese residents relocated near the woolen mills along the Guadalupe River, where many found work. Known as Woolen Mills Chinatown, this community of about 300 residents lasted around 15 years before it was destroyed by arson in 1887 which was the same year as the Second Market Street Chinatown. These coordinated attacks reflect the intense anti-Chinese sentiment in San Jose at the time.
              </p>
              <p className="mb-4 leading-relaxed">
              Woolen Mills Chinatown shows how Chinese immigrants built communities near labor opportunities but remained vulnerable to racism and economic instability. It shows core themes such as labor exploitation, racial exclusion, and immigrant resilience. The area is now part of Guadalupe River Park, though little remains to honor the lives once rooted there.
              </p>
              <div className="bg-chinese-red/10 p-4 rounded-lg border-l-4 border-chinese-red">
                <h4 className="font-bold mb-2 font-serif">Key Facts:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Population: Approximately 300 residents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Location: Near the woolen mills along the Guadalupe River</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Destruction: Arson in 1887</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Current site: Now near the Guadalupe River Park</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden shadow-xl border-4 border-chinese-red/20">
              <Image
                src="/woodenmills.jpeg"
                alt="Woolen Mills Chinatown"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif italic">Woolen Mills Chinatown</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chinese-divider my-12"></div>

        {/* Fourth Chinatown */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl border-4 border-chinese-red/20">
              <Image
                src="secondmarket.jpeg"
                alt="Second Market Street Chinatown"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif italic">Second Market Street Chinatown</p>
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-chinese-red text-white text-sm font-medium rounded-full mb-2">
                1872-1887
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Second Market Street Chinatown</h3>
              <p className="mb-4 leading-relaxed">
                  During the same time as the Woolen Mills Chinatown, another Chinese settlement known as the Second Market Street Chinatown or Plaza Chinatown was established back on the original Market Street site. This became the largest and most active Chinatown in San Jose, with over 1,000 Chinese residents and dozens of businesses, temples, and associations.
              </p>
              <p className="mb-4 leading-relaxed">
                  Despite its economic contributions and size, the Chinatown was the target of systematic anti-Chinese policies and racism In May 1887, it was deliberately burned down in a coordinated act of arson, carried out with the knowledge and support of city officials, who had declared the Chinatown a “public nuisance.” This destruction, alongside the burning of the Woolen Mills Chinatown that same year, was part of a broader campaign to remove Chinese people from the city center.
              </p>
              <div className="bg-chinese-red/10 p-4 rounded-lg border-l-4 border-chinese-red">
                <h4 className="font-bold mb-2 font-serif">Key Facts:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Population: Over 1,000 residents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Location: Market Street area</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Destruction: Arson in 1887</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Current site: Now the site of the Fairmont Hotel and part of downtown San Jose</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="chinese-divider my-12"></div>

        {/* Fifth Chinatown */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-chinese-red text-white text-sm font-medium rounded-full mb-2">
                1887-1931
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Heinlenville</h3>
              <p className="mb-4 leading-relaxed">
                After the destruction of both the Woolen Mills and Second Market Street Chinatowns in 1887, German
                businessman John Heinlen leased land to displaced Chinese residents. This area, which became known as
                Heinlenville, was the last of San Jose's Chinatowns.
              </p>
              <p className="mb-4 leading-relaxed">
              Heinlenville thrived for over four decades, becoming a cultural and economic hub. It featured temples, a Chinese language school, a theater, businesses, and housing, as well as a branch of the Chinese consulate. At its peak, it housed approximately 1,000 Chinese residents. Importantly, Heinlenville was not exclusively Chinese but it also included Japanese, Filipino, and other immigrant groups who lived and worked in the area. These overlapping communities represent an early example of multiethnic coexistence in urban immigrant enclaves. Today, Heinlenville's former site is San Jose’s Japantown and despite its legacy, still faces threats from city development and gentrification that risk erasing its history.
              </p>

              <div className="bg-chinese-red/10 p-4 rounded-lg border-l-4 border-chinese-red">
                <h4 className="font-bold mb-2 font-serif">Key Facts:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Population: Approximately 1,000 residents at its peak</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Location: Area now part of Japantown in San Jose</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Destruction: Economic decline and urban renewal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-chinese-red">•</div>
                    <span>Current site: Now part of Japantown in San Jose</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden shadow-xl border-4 border-chinese-red/20">
              <Image
                src="/Heinlinville.jpg"
                alt="Heinlenville Chinatown"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif italic">Heinlenville, San Jose</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
