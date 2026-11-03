"use client";

import { useRef } from "react";

export default function MobileNav() {
  const navRef = useRef<HTMLDetailsElement>(null);

  function closeAfterNavigate() {
    if (navRef.current) navRef.current.open = false;
  }

  return (
    <details className="mobile-nav" ref={navRef}>
      <summary aria-label="Buka navigasi">
        <span className="mobile-nav-label">Jelajah</span>
        <span className="mobile-nav-icon" aria-hidden="true"><i /><i /></span>
      </summary>
      <div className="mobile-nav-panel">
        <div className="mobile-nav-heading"><span>RMB / KROYA</span><span>MENU UTAMA</span></div>
        <a href="#merek" onClick={closeAfterNavigate}><span className="mobile-nav-number">01</span><span className="mobile-nav-link-copy">Usaha RMB<small>Ragam usaha kuliner</small></span><span className="mobile-nav-arrow" aria-hidden="true">↗</span></a>
        <a href="#tentang" onClick={closeAfterNavigate}><span className="mobile-nav-number">02</span><span className="mobile-nav-link-copy">Tentang RMB<small>Cerita kami</small></span><span className="mobile-nav-arrow" aria-hidden="true">↗</span></a>
        <a href="#lokasi" onClick={closeAfterNavigate}><span className="mobile-nav-number">03</span><span className="mobile-nav-link-copy">Lokasi Kroya<small>Kantor &amp; tempat usaha</small></span><span className="mobile-nav-arrow" aria-hidden="true">↗</span></a>
        <div className="mobile-nav-footer"><span>RAGAM USAHA KULINER</span><span>SEJAK 2020</span></div>
      </div>
    </details>
  );
}
