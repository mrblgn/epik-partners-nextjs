const ABOUT_CONTENT = [
  "Ankara merkezli olmak üzere ülkemizin önemli şehirlerinden olan İstanbul, Kocaeli, Antalya, Mersin, Adana, İzmir, Diyarbakır ve Elazığ’da yer alan ofislerimiz ile uluslararası ölçekte Fransa, Arnavutluk ve Katar başkentlerinde bulunan ofislerimizde Türkçe, İngilizce, Fransızca ve Arnavutça dillerinde faaliyet göstermekteyiz.",
  "11 kişiden oluşan alanında uzman avukat ve arabulucu kadrosuyla,",
  [
    "Medeni Hukuk (Kişiler, Aile, Eşya, Miras, Borçlar)",
    "Ticaret Hukuku (Şirketler, Sigorta, Deniz Ticaret)",
    "İş ve Sosyal Güvenlik Hukuku",
    "İcra ve İflas Hukuku",
    "Ceza Hukuku",
    "İdare ve Vergi Hukuku",
    "Tüketici Hukuku",
    "Fikri Mülkiyet Hukuku",
    "Gümrük Mevzuatı Hukuku",
    "Yabancılar Hukuku",
    "Alternatif Uyuşmazlık Çözüm Yolları (Arabuluculuk, Uzlaştırma, Tahkim)",
  ],
  "hukuk dallarında hizmet vermekteyiz.",
  "Kadromuzda yer alan avukat, arabulucu ve çözüm ortaklarımız sahip oldukları akademik kariyerleri gereği başta Hacettepe, Ankara, Gazi, Sorbonne Üniversitesi olmak üzere birçok üniversite ile ilişkilerini sürdürmektedir.",
  "Çalışmalarımızda müvekkillerimizin hedeflerini ve gelişme taleplerini göz önünde bulundurmakta, ileride doğması muhtemel hukuki problemleri öngörme noktasında titizlikle durmakta ve yaşanan hukuki durumun eksiksiz kavranması için takım çalışması içerisinde hareket ederek etkili ve güvenli hukuki çözümler sunmaktayız.",
];
export default function About() {
  return (
    <>
      <section className="about-slider">
        <h2>Hakkımızda</h2>
      </section>
      <section className="about-1">
        <div className="about-1-container">
          <h3>Epik Partners Hukuk Danışmanlık Bürosu Olarak;</h3>
          {ABOUT_CONTENT.map((content, index) =>
            typeof content === "string" ? (
              <p key={content.substring(0, 8) + index}>{content}</p>
            ) : (
              <ul key={content[0].substring(0, 8)} className="about-list">
                {content.map((item, itemIndex) => (
                  <li key={item.substring(0, 10) + itemIndex}>{item}</li>
                ))}
              </ul>
            )
          )}
        </div>
      </section>
    </>
  );
}
