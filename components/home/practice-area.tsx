import Link from "next/link";

const PRACTICE_AREAS = [
  { title: "Kişiler Hukuku", param: "kisiler", className: "people" },
  { title: "Aile Hukuku", param: "aile", className: "family" },
  { title: "Miras Hukuku", param: "miras", className: "heritage" },
  { title: "Eşya Hukuku", param: "esya", className: "appliance" },
  { title: "Borçlar Hukuku", param: "borclar", className: "debt" },
  { title: "Ticaret Hukuku", param: "ticaret", className: "trade" },
  { title: "Tüketici Hukuku", param: "tuketici", className: "consumer" },
  { title: "Şirketler Hukuku", param: "sirketler", className: "company" },
  { title: "Sigorta Hukuku", param: "sigorta", className: "insurance" },
  {
    title: "Deniz Ticaret Hukuku",
    param: "deniz_ticaret",
    className: "seatrade",
  },
  { title: "Yabancılar Hukuku", param: "yabancilar", className: "foreigner" },
  { title: "İdare Hukuku", param: "idare", className: "admin" },
  { title: "AİHM & AYM", param: "aihm_aym", className: "court" },
  {
    title: "Fikri Mülkiyet Hukuku",
    param: "fikri_mulkiyet",
    className: "copyright",
  },
  { title: "İş Hukuku", param: "is", className: "work" },
  { title: "İcra Hukuku", param: "icra", className: "tow" },
  { title: "Ceza Hukuku", param: "ceza", className: "criminal" },
  {
    title: "Alternatif Uyuşmazlık Çözüm Yolları",
    param: "uyusmazlik",
    className: "reconciliation",
  },
];

const PracticeArea = () => (
  <section className="index-second">
    <div className="faaliyet_h3">
      <h3>Faaliyet Alanlarımız</h3>
    </div>
    <div className="faaliyet_icons">
      {PRACTICE_AREAS.map(({ title, param, className }, index) => (
        <Link key={title.substring(0, 8) + index} href={`/our-work?w=${param}`}>
          <div className="faaliyet_card">
            <div className={`faaliyet_cardIcon_${className}`}></div>
            <div className="faaliyet_cardH4">
              <h4>{title}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default PracticeArea;
