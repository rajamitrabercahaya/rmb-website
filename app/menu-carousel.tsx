"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type TouchEvent } from "react";

export type MenuItem = {
  name: string;
  brand: string;
  note: string;
  image?: string;
  type: string;
};

export type BusinessMenu = {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  products: MenuItem[];
};

export default function MenuCarousel({ businesses }: { businesses: BusinessMenu[] }) {
  const [businessIndex, setBusinessIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [showProductPreview, setShowProductPreview] = useState(false);
  const [dialogRequest, setDialogRequest] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const activeBusiness = businesses[businessIndex];
  const activeProduct = activeBusiness.products[activeProductIndex] ?? null;

  useEffect(() => {
    setActiveProductIndex(0);
    setShowProductPreview(false);
  }, [businessIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialogRequest > 0 && dialog && !dialog.open) dialog.showModal();
  }, [dialogRequest]);

  function selectAdjacentBusiness(direction: -1 | 1) {
    setBusinessIndex((index) => (index + direction + businesses.length) % businesses.length);
  }

  function handleSwipeStart(event: TouchEvent<HTMLDivElement>) {
    const touch = event.changedTouches[0];
    swipeStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleSwipeEnd(event: TouchEvent<HTMLDivElement>) {
    if (!swipeStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - swipeStart.current.x;
    const deltaY = touch.clientY - swipeStart.current.y;
    swipeStart.current = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
    selectAdjacentBusiness(deltaX < 0 ? 1 : -1);
  }

  function selectAdjacentProduct(direction: -1 | 1) {
    const selectableIndices = activeBusiness.products.flatMap((product, index) => product.image ? [index] : []);
    if (!selectableIndices.length) return;
    setShowProductPreview(true);
    setActiveProductIndex((index) => {
      const currentPosition = selectableIndices.indexOf(index);
      const nextPosition = (currentPosition + direction + selectableIndices.length) % selectableIndices.length;
      return selectableIndices[nextPosition];
    });
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectAdjacentProduct(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectAdjacentProduct(-1);
    }
  }

  function openDetail(productIndex: number) {
    setShowProductPreview(true);
    setActiveProductIndex(productIndex);
    setDialogRequest((request) => request + 1);
  }

  return (
    <>
      <div className="carousel-meta">
        <span><b>{String(businessIndex + 1).padStart(2, "0")} — {String(businesses.length).padStart(2, "0")}</b><i>USAHA RMB</i></span>
        <div className="business-controls">
          <button className="business-nav-button" type="button" aria-label="Usaha sebelumnya" title="Usaha sebelumnya" onClick={() => selectAdjacentBusiness(-1)}>←</button>
          <div className="business-pagination" role="group" aria-label="Pilih usaha">
            {businesses.map((business, index) => (
              <button
                key={business.id}
                className={`business-dot${index === businessIndex ? " is-active" : ""}`}
                type="button"
                aria-label={`Tampilkan ${business.name}`}
                aria-pressed={index === businessIndex}
                onClick={() => setBusinessIndex(index)}
              />
            ))}
          </div>
          <button className="business-nav-button" type="button" aria-label="Usaha berikutnya" title="Usaha berikutnya" onClick={() => selectAdjacentBusiness(1)}>→</button>
        </div>
      </div>

      <div className="menu-experience" id="menu-rmb" onTouchStart={handleSwipeStart} onTouchEnd={handleSwipeEnd} onTouchCancel={() => { swipeStart.current = null; }}>
        <div className="business-slide-track">
          {businesses.map((business, businessSlideIndex) => {
            const isActive = businessSlideIndex === businessIndex;
            const product = business.products[isActive ? activeProductIndex : 0] ?? null;
            const previewProduct = isActive && showProductPreview ? product : null;

            return (
              <article className="business-slide" key={business.id} style={{ transform: `translate3d(${(businessSlideIndex - businessIndex) * 100}%, 0, 0)` }} aria-hidden={!isActive} inert={!isActive}>
                <div className="table-stage" key={`${business.id}-${isActive ? businessIndex : "idle"}`} role="group" aria-label={`Logo ${business.name}`} onKeyDown={handleStageKeyDown}>
                  <div className="table-orbit" aria-hidden="true" />
                  <div className="table-platter" aria-hidden="true" />
                  {business.products.map((item, index) => {
                    const selectedIndex = isActive ? activeProductIndex : 0;
                    const angle = -90 + ((index - selectedIndex + business.products.length) % business.products.length) * (360 / business.products.length);
                    const radians = (angle * Math.PI) / 180;
                    const position = 50 + Math.cos(radians) * 41;
                    const vertical = 50 + Math.sin(radians) * 41;

                    return (
                      <button
                        className={`table-choice${isActive && index === activeProductIndex ? " is-active" : ""}`}
                        key={`${business.id}-${item.name}`}
                        type="button"
                        style={{
                          left: `${position}%`,
                          top: `${vertical}%`,
                          "--bubble-left": `${position}%`,
                          "--bubble-top": `${vertical}%`,
                          animationDelay: `${index * 32}ms, ${index * 32 + 480}ms`,
                        } as CSSProperties}
                        aria-label={item.image ? `Lihat detail ${item.name}` : `${item.name}, detail menyusul`}
                        disabled={!item.image}
                        onClick={() => { if (isActive && item.image) openDetail(index); }}
                      >
                        {item.image ? (
                          <span className="table-choice-image">
                            <Image src={item.image} alt="" fill sizes="80px" unoptimized={item.image.startsWith("https://")} />
                          </span>
                        ) : (
                          <span className="table-choice-placeholder" aria-hidden="true">MENU</span>
                        )}
                        <span className="table-choice-number">{String(index + 1).padStart(2, "0")}</span>
                      </button>
                    );
                  })}

                  <div className={`featured-dish${previewProduct?.image ? " featured-menu-preview" : " featured-business"}`} aria-hidden="true">
                    {previewProduct?.image ? (
                      <>
                        <Image
                          src={previewProduct.image}
                          alt=""
                          fill
                          sizes="(max-width: 680px) 48vw, 320px"
                          loading={isActive ? "eager" : "lazy"}
                          unoptimized={previewProduct.image.startsWith("https://")}
                        />
                        <span className="featured-menu-caption">{previewProduct.type}</span>
                      </>
                    ) : (
                      <Image src={business.logo} alt="" fill sizes="(max-width: 680px) 48vw, 320px" />
                    )}
                  </div>
                </div>

                <div className="menu-detail" aria-live={isActive ? "polite" : "off"} aria-atomic="true">
                  <p className="menu-detail-brand">{business.category}</p>
                  <p className="menu-detail-category">{String(businessSlideIndex + 1).padStart(2, "0")} <span>/</span> {String(businesses.length).padStart(2, "0")} USAHA RMB</p>
                  <h3>{business.name}</h3>
                  <p className="menu-detail-note">{business.description}</p>
                  {isActive && product && business.products.length > 1 && <p className="menu-current-dish">Pilihan saat ini <strong>{product.name}</strong></p>}
                </div>

              </article>
            );
          })}
        </div>
      </div>

      {activeProduct?.image && <dialog ref={dialogRef} className="dish-dialog" aria-labelledby="dish-dialog-title" onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
        <button className="dish-dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Tutup foto sajian">×</button>
        <div className="dish-dialog-image">
          <Image src={activeProduct.image} alt={`Foto ${activeProduct.name}`} fill sizes="(max-width: 700px) 92vw, 56vw" loading="eager" unoptimized={activeProduct.image.startsWith("https://")} />
        </div>
        <div className="dish-dialog-copy">
          <p className="menu-detail-brand">{activeProduct.brand} · {activeProduct.type}</p>
          <h2 id="dish-dialog-title">{activeProduct.name}</h2>
          <p>{activeProduct.note}</p>
        </div>
      </dialog>}
    </>
  );
}
