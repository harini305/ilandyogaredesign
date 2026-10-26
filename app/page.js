import Header from "./components/Header";
import Motion from "./components/Motion";
import Picture from "./components/Picture";
import {
  site,
  whatsapp,
  viator,
  expectations,
  soundSessions,
  movement,
  days,
  dayNames,
  schedule,
  prices,
  retreats,
  oracle,
  reviews,
  faqs,
} from "./content";
import styles from "./page.module.css";

function ExternalLink({ href, className = "button", children }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

function Facts({ items }) {
  return (
    <ul className={styles.facts}>
      {items.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      {/* Hides hero items before hydration only when motion is allowed; CSS has a timed fallback. */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')",
        }}
      />
      {/* On a reload, start at the top: stop the browser restoring the old scroll position and drop any
          #section left in the URL by the menu. Fresh visits to a shared #section link are left alone. */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(){var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];if(!n||n.type!=='reload')return;if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname+location.search);var top=function(){window.scrollTo({top:0,left:0,behavior:'instant'})};top();window.addEventListener('load',function(){top();requestAnimationFrame(top)})})()",
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Hero */}
        <section id="top" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroText}>
            <div className={styles.heroCopy}>
              <h1 id="hero-title" data-hero-item>
                Your island reset starts here
              </h1>
              <p className={styles.heroLead} data-hero-item>
                Hammock sound healing, gong relaxation, sound journeys, yoga and dance in our open-air shala in
                Jungutbatu, Nusa Lembongan.
              </p>
              <div className={styles.actions} data-hero-item>
                <a className="button" href="#experiences">
                  Explore experiences
                </a>
                <a className="button button--quiet" href="#schedule">
                  See the weekly schedule
                </a>
              </div>
            </div>
            <dl className={styles.glance} data-hero-item>
              <div>
                <dt>Every day, 12:00pm</dt>
                <dd>Hammock Sound Healing</dd>
              </div>
              <div>
                <dt>Drop-in</dt>
                <dd>Yoga classes, no booking needed</dd>
              </div>
              <div>
                <dt>All levels</dt>
                <dd>Mats and props provided</dd>
              </div>
            </dl>
          </div>
          <div className={styles.heroMedia} data-hero-image>
            <Picture
              name="hero"
              priority
              sizes="(max-width: 860px) 100vw, 46vw"
              alt="A facilitator playing a hand gong beside a row of blue aerial hammocks, a guest resting inside"
              className={styles.heroImg}
            />
          </div>
        </section>

        {/* Introduction: text + expectations on top, a strip of three photos filling the rest of the screen */}
        <section className={`${styles.intro} ${styles.fit}`} aria-labelledby="intro-title">
          <div className={`container ${styles.fill}`}>
            <div className={styles.introTop} data-reveal>
              <div className={styles.introText}>
                <h2 id="intro-title">Sound healing, stillness &amp; dance</h2>
                <p>
                  Island Yoga &amp; Sound is a beautiful open-air shala on Nusa Lembongan, set in nature near the
                  beach. Come for Lembongan&rsquo;s signature hammock sound experiences, drop in for a feel-good yoga
                  class or dance into the sunset.
                </p>
                <p>
                  Beginners and experienced yogis are equally welcome, and our classes and sound sessions run for 60
                  minutes.
                </p>
              </div>
              <div className={styles.expect}>
                <h3>What to expect</h3>
                <ul>
                  {expectations.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.introStrip} data-reveal>
              <div>
                <Picture
                  name="shala"
                  sizes="(max-width: 600px) 33vw, 400px"
                  alt="A guest wearing a frangipani flower, seated in meditation in the open-air shala"
                />
              </div>
              <div>
                <Picture
                  name="ganesha"
                  sizes="(max-width: 600px) 33vw, 400px"
                  alt="A Ganesha figurine on a white hamsa tray with a shell, crystals and incense"
                />
              </div>
              <div>
                <Picture
                  name="celebration"
                  sizes="(max-width: 600px) 33vw, 400px"
                  alt="Guests dressed in white with flower crowns celebrating together"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section id="experiences" className={`${styles.experiences} ${styles.fit}`} aria-labelledby="exp-title">
          <div className={`container ${styles.fill}`}>
            <header className={styles.headRow} data-reveal>
              <h2 id="exp-title">Sound experiences</h2>
              <p>60-minute sessions &middot; prices per person in IDR</p>
            </header>

            <div className={styles.expGrid} data-reveal>
              <article className={`${styles.expCard} ${styles.expFeature}`}>
                <div className={styles.expMedia}>
                  <Picture
                    name="hammock-detail"
                    sizes="(max-width: 1100px) 100vw, 480px"
                    alt="Guests cocooned in blue aerial hammocks while a facilitator plays a hand gong"
                  />
                </div>
                <div className={styles.expBody}>
                  <p className={styles.tag}>Our most loved experience</p>
                  <h3>Hammock Sound Healing</h3>
                  <p>Float into deep relaxation in a suspended hammock, held by layered sound healing frequencies.</p>
                  <Facts items={["Up to 12 guests", "400k"]} />
                  <p className={styles.sunrise}>
                    <strong>Sunrise Sanctuary Hammock</strong> daily at 6:00am &middot; 650k pp &middot; booking only
                  </p>
                  <div className={styles.cardActions}>
                    <ExternalLink href={viator.hammock}>Book on Viator</ExternalLink>
                    <ExternalLink
                      className="textlink"
                      href={whatsapp("Hi, I'd like to book the 6:00am Sunrise Sanctuary Hammock.")}
                    >
                      Book sunrise
                    </ExternalLink>
                  </div>
                </div>
              </article>

              {soundSessions.map((s) => (
                <article key={s.name} className={styles.expCard}>
                  <div className={styles.expMedia}>
                    <Picture name={s.image} alt={s.alt} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 380px" />
                  </div>
                  <div className={styles.expBody}>
                    <h3>{s.name}</h3>
                    <p>{s.text}</p>
                    <Facts items={s.facts.slice(1)} />
                    <div className={styles.cardActions}>
                      <ExternalLink className="textlink" href={s.action.href}>
                        {s.action.label}
                      </ExternalLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Yoga & movement */}
        <section className={styles.movement} aria-labelledby="move-title">
          <div className="container">
            <div className={styles.movementBanner} data-reveal>
              <Picture
                name="yoga"
                sizes="(max-width: 1280px) 100vw, 1200px"
                alt="Guests holding a warrior pose during a yoga class in the open-air shala"
              />
              <div className={styles.movementBannerText}>
                <h2 id="move-title">Yoga &amp; movement</h2>
                <p>Feel-good classes and sunset dance in the open air.</p>
              </div>
            </div>
            <div className={styles.movementCols} data-reveal>
              {movement.map((m) => (
                <div key={m.name} className={styles.movementItem}>
                  <h3>{m.name}</h3>
                  <p>{m.text}</p>
                  <Facts items={m.facts} />
                  {m.action && (
                    <ExternalLink className="textlink" href={whatsapp(m.action.message)}>
                      {m.action.label}
                    </ExternalLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className={styles.reviews} aria-labelledby="reviews-title">
          <Picture name="buddha" className={styles.reviewsBg} sizes="100vw" alt="" />
          <div className={`container ${styles.reviewsInner}`} data-reveal>
            <h2 id="reviews-title" className="visually-hidden">
              Guest words
            </h2>
            {reviews.map((r) => (
              <blockquote key={r.name}>
                <p>&ldquo;{r.quote}&rdquo;</p>
                <footer>
                  {r.name}, {r.date}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className={`${styles.schedule} ${styles.fit}`} aria-labelledby="schedule-title">
          <div className={`container ${styles.fill}`}>
            <header className={styles.headRow} data-reveal>
              <div>
                <h2 id="schedule-title">Weekly schedule</h2>
                <p>Doors open 15 minutes before each session. Timetables change through the season.</p>
              </div>
              <ExternalLink href={whatsapp("Hi, could you send me this week's timetable?")}>
                Ask for this week&rsquo;s timetable
              </ExternalLink>
            </header>

            <div className={styles.scheduleGrid} data-reveal>
              <div className={styles.scheduleTableWrap}>
                <table className={styles.scheduleTable}>
                  <caption className="visually-hidden">Regular weekly sessions</caption>
                  <thead>
                    <tr>
                      <th scope="col">Time</th>
                      {days.map((d, i) => (
                        <th scope="col" key={d}>
                          <abbr title={dayNames[i]}>{d}</abbr>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.sunriseRow}>
                      <th scope="row">6:00am</th>
                      <td colSpan={7}>Sunrise Sanctuary Hammock &middot; every day &middot; booking only</td>
                    </tr>
                    {schedule.map((row) => (
                      <tr key={row.time} className={row.highlight ? styles.rowHighlight : undefined}>
                        <th scope="row">{row.time}</th>
                        {days.map((d) => (
                          <td key={d}>
                            {row.sessions[d] && (
                              <>
                                {row.sessions[d]}
                                {row.note && <small>{row.note}</small>}
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <ol className={styles.scheduleDays}>
                {days.map((d, i) => (
                  <li key={d}>
                    <h3>{dayNames[i]}</h3>
                    <ul>
                      <li>
                        <span>6:00am</span> Sunrise Sanctuary Hammock <small>Booking only</small>
                      </li>
                      {schedule
                        .filter((row) => row.sessions[d])
                        .map((row) => (
                          <li key={row.time}>
                            <span>{row.time}</span> {row.sessions[d]}
                            {row.note && <small>{row.note}</small>}
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ol>

              <div className={styles.priceCard}>
                <h3>Prices (IDR)</h3>
                <dl className={styles.prices}>
                  {prices.map(([label, price]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{price}</dd>
                    </div>
                  ))}
                </dl>
                <p>Yoga is drop-in; sound sessions are best reserved.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Retreats */}
        <section id="retreats" className={`${styles.retreats} ${styles.fit}`} aria-labelledby="retreats-title">
          <div className={`container ${styles.fill}`}>
            <header className={styles.headRow} data-reveal>
              <div>
                <h2 id="retreats-title">Day retreats</h2>
                <p>Yoga, sound and pampering packages, available on request. Message us for dates and current rates.</p>
              </div>
            </header>
            <div className={styles.retreatGrid} data-reveal>
              {retreats.map((r) => (
                <article key={r.name} className={styles.retreatCard}>
                  <div className={styles.retreatMedia}>
                    <Picture name={r.image} alt={r.alt} sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 290px" />
                  </div>
                  <div className={styles.retreatBody}>
                    <p className={styles.duration}>{r.duration}</p>
                    <h3>{r.name}</h3>
                    <p>{r.text}</p>
                    <ExternalLink
                      className="textlink"
                      href={whatsapp(`Hi, I'd like to ask about dates and pricing for the ${r.name}.`)}
                    >
                      Enquire about dates &amp; pricing
                    </ExternalLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OMG Oracle */}
        <section id="oracle" className={`${styles.oracle} ${styles.fit}`} aria-labelledby="oracle-title">
          <div className={`container ${styles.oracleGrid}`}>
            <div className={styles.oracleMedia} data-reveal>
              <Picture
                name="oracle-deck"
                className={styles.oracleMain}
                sizes="(max-width: 860px) 70vw, 34vw"
                alt="A hand holding the OMG Oh My Goddess Clarity Oracle Cards deck among flowers"
              />
              <Picture
                name="blessing"
                className={styles.oracleInset}
                sizes="(max-width: 700px) 72vw, 30vw"
                alt="A guest in white seated on a rug surrounded by oracle cards and offerings"
              />
            </div>
            <div className={styles.oracleText} data-reveal>
              <h2 id="oracle-title">OMG Oracle Cards</h2>
              <p className={styles.oracleLead}>
                Meet your inner guidance with a beautifully designed deck for clarity, connection and daily
                inspiration, available at Island Yoga.
              </p>
              <div className={styles.oracleList}>
                {oracle.map((o) => (
                  <div key={o.name} className={styles.oracleItem}>
                    <h3>{o.name}</h3>
                    <p>{o.text}</p>
                    <div className={styles.oracleMeta}>
                      <Facts items={o.facts} />
                      <ExternalLink className="textlink" href={whatsapp(o.message)}>
                        Message to book
                      </ExternalLink>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.oracleHelp}>
                <p>Not sure which experience is for you? Send us a message and we&rsquo;ll happily guide you.</p>
                <ExternalLink
                  className="button"
                  href={whatsapp("Hi, I'm not sure which Oracle experience is right for me. Could you help?")}
                >
                  Ask us
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={`${styles.faq} ${styles.fit}`} aria-labelledby="faq-title">
          <div className={`container ${styles.faqGrid}`}>
            <div className={styles.faqAside} data-reveal>
              <h2 id="faq-title">Questions</h2>
              <p>Good to know before your first visit.</p>
              <Picture
                name="savasana"
                className={styles.faqImg}
                sizes="(max-width: 860px) 100vw, 40vw"
                alt="Guests resting in savasana on mats on the shala's wooden deck"
              />
            </div>
            <div className={styles.faqMain} data-reveal>
              <div className={styles.faqList}>
                {faqs.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
              <div className={styles.helpCard}>
                <div>
                  <h3>Still have a question?</h3>
                  <p>Send us a message and we&rsquo;ll happily help.</p>
                </div>
                <div className={styles.helpActions}>
                  <ExternalLink href={whatsapp("Hi Island Yoga & Sound, I have a question.")}>
                    Message us on WhatsApp
                  </ExternalLink>
                  <a className="textlink" href={site.phoneHref}>
                    Call {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${styles.contact} ${styles.fit}`} aria-labelledby="contact-title">
          <div className={styles.contactMedia}>
            <Picture
              name="venue"
              sizes="(max-width: 860px) 100vw, 50vw"
              alt="The open-air shala seen from the garden, with guests resting on mats"
            />
          </div>
          <div className={styles.contactBody} data-reveal>
            <h2 id="contact-title">Visit the shala</h2>
            <address className={styles.address}>
              Island Yoga &amp; Sound Lembongan
              <br />
              {site.address}
            </address>
            <ExternalLink className="textlink" href={site.mapUrl}>
              Open in Google Maps
            </ExternalLink>
            <ExternalLink href={whatsapp("Hi Island Yoga & Sound, I have a question.")}>
              Message us on WhatsApp
            </ExternalLink>
            <ul className={styles.contactList}>
              <li>
                <span>Call</span>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span>Instagram</span>
                <ExternalLink className="" href={site.instagram}>
                  @islandyogalembongan
                </ExternalLink>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <p className={styles.footerMark}>Island Yoga &amp; Sound Lembongan</p>
          <p>Jungutbatu, Nusa Lembongan, Bali</p>
          <p>&copy; {new Date().getFullYear()} Island Yoga &amp; Sound Lembongan</p>
        </div>
      </footer>

      <Motion />
    </>
  );
}
