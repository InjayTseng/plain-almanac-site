import Image from "next/image";

const SUPPORT_URL = "https://injaytseng.github.io/plain-almanac-site/";
const PRIVACY_URL = "https://injaytseng.github.io/plain-almanac-site/privacy.html";
const BADGE_URL = "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/zh-tw";

const COVERS = [
  { src: "/images/raw-01-today.webp", title: "看得懂的農民曆", text: "「開市」旁邊寫著開店、上架、發布新產品。長輩看得懂，年輕人才會開。" },
  { src: "/images/raw-04-find-lucky.webp", title: "沖到誰，就寫誰", text: "結婚登記、搬家、開店，往後 60、90 天適合的日子一次列出。記下家人生肖，沖到誰就寫誰。" },
  { src: "/images/raw-06-widgets.webp", title: "拿起手機就看到", text: "鎖定畫面與主畫面 Widget：農曆、值日、宜忌、沖到誰，不用開 App。" },
];

const FEATURES = [
  { src: "/images/raw-02-month.webp", title: "紅字假日，藍字吉日", text: "星期日與國定假日紅字，黃道吉日藍字，節氣與農曆寫在格子裡。" },
  { src: "/images/raw-10-terms.webp", title: "節氣時刻到分鐘", text: "今年 24 節氣的交節時刻用中央氣象署官方值。現在在哪個節氣、第幾天，一眼看到。" },
  { src: "/images/raw-03-find.webp", title: "先挑日子，再搬家", text: "選一件事，往後 30、60、90 天適合的日子一次列出。農曆七月的日子標出來，讓你自己決定。" },
  { src: "/images/raw-05-hours.webp", title: "今天哪個時段順", text: "十二時辰的吉與平，沖時標出來讓你避開。" },
  { src: "/images/raw-07-settings.webp", title: "家人生肖，只在手機", text: "記下家裡的人，沖到誰寫名字。明天宜忌、節氣前一天的提醒都在本機排程。" },
  { src: "/images/raw-08-honesty.webp", title: "算了什麼，寫成一頁", text: "有算的每一層由引擎自己列出來，跟家裡那本通書對照時，知道差在哪。" },
  { src: "/images/raw-12-tomorrow.webp", title: "滑一下，看明天", text: "像撕日曆一樣左右滑，昨天、明天、下週都在手邊。" },
];

const PLAN_ROWS: { name: string; free: boolean; pro: boolean }[] = [
  { name: "今日、月曆、節氣、時辰、日詳情", free: true, pro: true },
  { name: "家人生肖，沖到誰寫名字", free: true, pro: true },
  { name: "鎖定畫面與主畫面 Widget，全部尺寸", free: true, pro: true },
  { name: "找日子 30、60、90 天", free: true, pro: true },
  { name: "明天宜忌、節氣前一天提醒", free: true, pro: true },
  { name: "找日子 180 天、1 年、2 年", free: false, pro: true },
  { name: "加入行事曆不限次數（免費 3 次）", free: false, pro: true },
  { name: "沖到家人的早上提醒", free: false, pro: true },
];

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="text-blue" aria-label="有">✓</span>
  ) : (
    <span className="text-dim" aria-label="無">—</span>
  );
}

function Hero() {
  return (
    <header>
      <div className="band" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          <div className="min-w-0 flex-1">
            <Image src="/icon-1024.png" alt="每日農民曆的 App 圖示：紅色撕頁日曆，初二，15" width={112} height={112} priority className="rounded-[26px] border border-rule" />
            <h1 className="mt-8 text-5xl leading-tight font-bold tracking-wide md:text-6xl">每日農民曆</h1>
            <p className="serif mt-3 text-xl text-blue-ink md:text-2xl">今日宜忌・節氣・找好日子</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">
              今天適合做什麼、要避開什麼，看一眼就知道。每個傳統詞旁一句白話，找日子直接寫出沖到家裡誰。無廣告、不登入、不上傳。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <img src={BADGE_URL} alt="從 App Store 下載（尚未上架）" width={160} height={54} className="h-[54px] w-auto opacity-90" />
              <p className="text-sm text-dim">2026 年 12 月上架，先在這裡看。</p>
            </div>
          </div>
          <div className="hidden w-full min-w-0 max-w-[300px] self-center md:block md:self-start">
            <div className="shot">
              <Image src="/images/hero-today.webp" alt="今日頁：9 月 3 日，七月廿二，成日黃道吉日，宜開市嫁娶移徙，忌訴訟破土" width={660} height={1434} priority sizes="(min-width: 768px) 300px, 80vw" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Covers() {
  return (
    <section aria-labelledby="covers" className="border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 id="covers" className="text-3xl font-bold md:text-4xl">三件事，放進手機</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {COVERS.map((c) => (
            <figure key={c.src} className="flex min-w-0 flex-col">
              <div className="phone">
                <Image src={c.src} alt={c.title} width={660} height={1434} sizes="(min-width: 768px) 30vw, 90vw" />
              </div>
              <figcaption className="mt-5">
                <h3 className="text-2xl font-bold">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/80">{c.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section aria-labelledby="features" className="border-t border-rule bg-blue-bg/40">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 id="features" className="text-3xl font-bold md:text-4xl">功能</h2>
        <p className="mt-3 text-dim">左右滑動看七個畫面。</p>
        <ul className="scrollbar-hide -mx-6 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
          {FEATURES.map((f) => (
            <li key={f.src} className="w-[240px] shrink-0 snap-start md:w-[260px]">
              <div className="phone">
                <Image src={f.src} alt={f.title} width={660} height={1434} sizes="260px" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/80">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section aria-labelledby="plans" className="border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 id="plans" className="text-3xl font-bold md:text-4xl">免費與完整版</h2>
        <p className="mt-3 leading-relaxed text-ink/80">免費版本身就是完整的日曆，每天打開的理由都不鎖。完整版多的是往後看得更遠，和替家人設提醒。</p>
        <table className="mt-10 w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-rule text-sm text-dim">
              <th scope="col" className="py-3 pr-4 font-medium">功能</th>
              <th scope="col" className="w-20 py-3 text-center font-medium">免費</th>
              <th scope="col" className="w-20 py-3 text-center font-medium">完整版</th>
            </tr>
          </thead>
          <tbody>
            {PLAN_ROWS.map((r) => (
              <tr key={r.name} className="border-b border-rule">
                <th scope="row" className="py-3 pr-4 font-normal">{r.name}</th>
                <td className="py-3 text-center text-lg"><Check on={r.free} /></td>
                <td className="py-3 text-center text-lg"><Check on={r.pro} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="serif mt-10 text-2xl font-bold">完整版 US$9.99<span className="ml-2 text-base font-normal text-dim">約 NT$330，依商店在地價</span></p>
        <p className="mt-2 text-ink/80">一次買斷，不是訂閱，家庭共享適用。</p>
      </div>
    </section>
  );
}

function Honesty() {
  return (
    <section aria-labelledby="honesty" className="border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 id="honesty" className="text-3xl font-bold md:text-4xl">誠實與隱私</h2>
        <div className="mt-8 space-y-6 leading-relaxed text-ink/85">
          <p>不需要帳號，資料不上傳，沒有廣告。曆算 1901 到 2100 年全部在手機上完成，2026 年的 24 節氣用中央氣象署公布的分鐘值。</p>
          <p>家人的名字與生肖只存在你的手機上，不會離開裝置。找日子時沖到誰，直接寫名字。</p>
          <p>為了改進產品，App 會記錄少量匿名使用統計（TelemetryDeck）：打開了哪個分頁、找日子選了幾天。不含人名、生肖、你查的日期或行事曆內容。</p>
        </div>
        <p className="mt-10 border-l-2 border-red pl-4 text-sm text-dim">農民曆是文化與生活參考，不是醫療、法律或財務建議。</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-dim md:flex-row md:items-center md:justify-between">
        <p>每日農民曆 · 2026 David Tseng</p>
        <nav aria-label="頁尾連結" className="flex gap-6">
          <a href={SUPPORT_URL} className="text-blue underline-offset-4 hover:underline">支援</a>
          <a href={PRIVACY_URL} className="text-blue underline-offset-4 hover:underline">隱私權政策</a>
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Covers />
      <Features />
      <Plans />
      <Honesty />
      <Footer />
    </main>
  );
}
