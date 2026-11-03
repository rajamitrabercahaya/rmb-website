import Image from "next/image";
import MenuCarousel, { type BusinessMenu, type MenuItem } from "./menu-carousel";
import MobileNav from "./mobile-nav";

const radjaProducts: MenuItem[] = [
  { name: "Es Teler Original Sedang", brand: "Radja Es Teler Sultan", note: "Jeli merah dan hijau, mutiara, jeli kelapa, alpukat, topping nangka, serta creamer khas Radja. Cup 16 oz.", image: "/products/radja-es-teler-sultan/1.png", type: "ORIGINAL · 16 OZ" },
  { name: "Es Teler Original Jumbo", brand: "Radja Es Teler Sultan", note: "Jeli merah dan hijau, mutiara, jeli kelapa, alpukat, topping nangka, serta creamer khas Radja. Cup 22 oz.", image: "/products/radja-es-teler-sultan/2.png", type: "ORIGINAL · 22 OZ" },
  { name: "Es Teler Durian Sedang", brand: "Radja Es Teler Sultan", note: "Jeli merah dan hijau, mutiara, jeli kelapa, alpukat, topping durian, serta creamer khas Radja. Cup 16 oz.", image: "/products/radja-es-teler-sultan/3.png", type: "DURIAN · 16 OZ" },
  { name: "Es Teler Durian Jumbo", brand: "Radja Es Teler Sultan", note: "Jeli merah dan hijau, mutiara, jeli kelapa, alpukat, topping durian, serta creamer khas Radja. Cup 22 oz.", image: "/products/radja-es-teler-sultan/4.png", type: "DURIAN · 22 OZ" },
  { name: "Alpukat Kocok Jumbo", brand: "Radja Es Teler Sultan", note: "Alpukat dengan susu dan creamer khas Radja Sultan. Cup 22 oz.", image: "/products/radja-es-teler-sultan/5.png", type: "ALPUKAT · 22 OZ" },
  { name: "Durian Kocok Sedang", brand: "Radja Es Teler Sultan", note: "Daging durian dengan susu dan creamer khas Radja Sultan yang lembut dan creamy. Cup 16 oz.", image: "/products/radja-es-teler-sultan/6.png", type: "DURIAN · 16 OZ" },
  { name: "Durian Kocok Jumbo", brand: "Radja Es Teler Sultan", note: "Daging durian dengan susu dan creamer khas Radja Sultan yang lembut dan creamy. Cup 22 oz.", image: "/products/radja-es-teler-sultan/7.png", type: "DURIAN · 22 OZ" },
  { name: "Es Teler Teko Original (Nangka)", brand: "Radja Es Teler Sultan", note: "Es teler Sateko dengan teko dan topping nangka. Isi 1,5 liter, cukup untuk 3 orang.", image: "/products/radja-es-teler-sultan/8.png", type: "TEKO · NANGKA" },
  { name: "Es Teler Teko Durian", brand: "Radja Es Teler Sultan", note: "Es teler Sateko dengan teko dan topping daging durian. Cukup untuk 3 orang.", image: "/products/radja-es-teler-sultan/9.png", type: "TEKO · DURIAN" },
  { name: "Sop Durian Premium", brand: "Radja Es Teler Sultan", note: "Sop durian dengan buah utuh, tambahan daging durian, gula aren, dan creamer. Manisnya pas dan legit. Ukuran 700 ml.", image: "/products/radja-es-teler-sultan/10.png", type: "PREMIUM · 700 ML" },
];

// Tambahkan foto sajian tiap usaha pada array products saat asetnya siap.
const businessMenus: BusinessMenu[] = [
  { id: "radja", name: "Radja Es Teler Sultan", category: "ES TELER · MINUMAN SEGAR", description: "Pilihan es teler dan minuman segar.", logo: "/brand/cutouts/radja-es-teler.png", products: radjaProducts },
  { id: "bakso", name: "Bakso Bar-Bar", category: "BAKSO · SAJIAN HANGAT", description: "Sajian Bakso Bar-Bar untuk dinikmati bersama.", logo: "/brand/cutouts/bar-bar-bakso.png", products: [] },
  { id: "dawet", name: "Es Dawet Durian Bar-Bar", category: "DAWET DURIAN · MINUMAN SEGAR", description: "Es dawet durian.", logo: "/brand/cutouts/bar-bar-es-dawet-durian.png", products: [] },
  { id: "mouza", name: "Mouza Coffee", category: "COFFEE · SOCIAL SPACE · PASTRY", description: "Kopi, pastry, dan ruang untuk berkumpul.", logo: "/brand/cutouts/mouza-coffee.png", products: [] },
];

function Mark() {
  return <Image src="/brand/cutouts/rmb-logo.png" alt="Logo Raja Mitra Bercahaya" width={990} height={784} className="rmb-logo" />;
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#merek">Lewati ke usaha RMB</a>
      <header className="site-header">
        <a className="identity" href="#top" aria-label="Raja Mitra Bercahaya, beranda"><Mark /><span>RAGAM USAHA<br />KULINER RMB</span></a>
        <nav aria-label="Navigasi utama"><a href="#merek">Usaha RMB</a><a href="#tentang">Tentang RMB</a><a href="#lokasi">Lokasi</a></nav>
        <MobileNav />
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" id="tentang">
          <p className="eyebrow"><span className="eyebrow-dot" /> RAGAM USAHA KULINER</p>
          <h1>Dari tegukan<br />hingga <em>suapan.</em></h1>
          <p className="hero-wordline" aria-label="Segar, hangat, beragam"><span className="hero-word-rotator"><span aria-hidden="true">Segar</span><span aria-hidden="true">Hangat</span><span aria-hidden="true">Beragam</span></span></p>
          <p className="hero-intro">Dari Kroya, Raja Mitra Bercahaya mengelola ragam usaha kuliner—dari tegukan segar hingga suapan hangat.</p>
          <a className="text-link" href="#menu-rmb">Jelajahi usaha <Arrow /></a>
        </div>
        <figure className="hero-art" aria-label="Logo Raja Mitra Bercahaya dengan aksen orbit">
          <div className="hero-logo-stage">
            <span className="hero-stage-kicker">USAHA KULINER RMB <i>/ KROYA</i></span>
            <span className="hero-stage-diamond hero-stage-diamond--one" aria-hidden="true" />
            <span className="hero-stage-diamond hero-stage-diamond--two" aria-hidden="true" />
            <span className="hero-stage-diamond hero-stage-diamond--three" aria-hidden="true" />
            <Image src="/brand/cutouts/rmb-logo.png" alt="Logo Raja Mitra Bercahaya" width={990} height={784} sizes="(max-width: 680px) 78vw, 540px" loading="eager" className="hero-brand-logo" />
            <figcaption className="hero-stage-index"><b>RAGAM USAHA RMB</b><span>BERAWAL DARI KROYA</span></figcaption>
          </div>
        </figure>
      </section>

      <section className="brands" id="merek">
        <div className="brands-head"><div><p className="eyebrow">RAJA MITRA BERCAHAYA</p><h2>Ragam rasa,<br /><em>cerita RMB.</em></h2></div><p>Setiap usaha memiliki ciri khasnya sendiri. Semuanya berawal dari Kroya dan menghadirkan sajian yang dekat dengan keseharian.</p></div>
        <MenuCarousel businesses={businessMenus} />
      </section>

      <section className="location" id="lokasi" aria-labelledby="location-title">
        <div className="location-copy">
          <p className="eyebrow">ALAMAT KANTOR &amp; GUDANG RMB</p>
          <h2 id="location-title">Pusat usaha<br /><em>RMB.</em></h2>
          <address className="office-address">
            <strong>96C7+XWV</strong><br />
            Jl. Tumapel, RT.03/RW.01, Babakan<br />
            Bajing Kulon, Kabupaten Cilacap
          </address>
          <p className="location-intro">Kantor dan gudang Raja Mitra Bercahaya berada di Babakan, Bajing Kulon.</p>
          <div className="warehouse-sale">
            <p className="outlet-kicker">PENJUALAN LANGSUNG DARI GUDANG</p>
            <p className="outlet-name">Durian untuk dibawa pulang</p>
            <p className="warehouse-sale-note">Daging durian beku dalam kemasan box, serta buah durian utuh yang didinginkan. Pembelian langsung di gudang RMB, sesuai ketersediaan stok.</p>
          </div>
          <div className="location-actions">
            <a className="light-button" href="https://maps.google.com/?q=96C7%2BXWV%2C+Jl.+Tumapel%2C+RT.03%2FRW.01%2C+Babakan%2C+Bajing+Kulon%2C+Kabupaten+Cilacap" target="_blank" rel="noreferrer">Petunjuk arah ke gudang <Arrow /></a>
            <a className="location-linktree" href="https://linktr.ee/rajamitrabercahaya" target="_blank" rel="noreferrer">Informasi &amp; lokasi RMB <Arrow /></a>
          </div>
          <div className="location-outlet">
            <p className="outlet-kicker">LOKASI USAHA DI KROYA</p>
            <p className="outlet-name">Dawet Durian Bar-Bar Cafe and Eatry Pusat Kroya</p>
            <address>Jl. Jenderal Sudirman No. 13–61, Kroya, Kabupaten Cilacap, Jawa Tengah 53282</address>
          </div>
        </div>
        <div className="map-frame">
          <iframe
            title="Peta kantor dan gudang Raja Mitra Bercahaya di Babakan, Bajing Kulon, Cilacap"
            src="https://maps.google.com/maps?q=96C7%2BXWV%2C%20Jl.%20Tumapel%2C%20RT.03%2FRW.01%2C%20Babakan%2C%20Bajing%20Kulon%2C%20Kabupaten%20Cilacap&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span className="map-label">KANTOR &amp; GUDANG RMB</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-invitation">
          <div className="footer-invitation-copy">
            <p className="eyebrow">RAGAM USAHA RMB</p>
            <h2>Setiap usaha<br /><em>punya cerita.</em></h2>
          </div>
          <div className="footer-invitation-action">
            <p>Jelajahi minuman segar, sajian hangat, dan kopi dari Raja Mitra Bercahaya.</p>
          </div>
        </div>
        <div className="footer-top">
          <a className="identity footer-identity" href="#top" aria-label="Raja Mitra Bercahaya, kembali ke atas"><Mark /><span>RAJA MITRA<br />BERCAHAYA</span></a>
          <div className="footer-social"><span>JELAJAHI</span><a href="#merek">Usaha RMB</a><a href="#tentang">Tentang RMB</a><a href="#lokasi">Kantor &amp; lokasi usaha</a></div>
          <div className="footer-social"><span>IKUTI RMB</span><a href="https://www.tiktok.com/@rajamitrabercahaya_" target="_blank" rel="noreferrer">TikTok <Arrow /></a><a href="https://www.instagram.com/lifeatrmb" target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href="https://www.youtube.com/@rajamitrabercahaya" target="_blank" rel="noreferrer">YouTube <Arrow /></a></div>
          <a className="footer-top-link" href="#top">KEMBALI KE ATAS ↑</a>
        </div>
        <div className="footer-bottom"><span>© 2026 RAJA MITRA BERCAHAYA</span><span>RAGAM USAHA KULINER</span></div>
      </footer>
    </main>
  );
}
