import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgShare from 'lightgallery/plugins/share';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';

export function initGallery() {
  const gallery = document.querySelector('#lightgallery');
  if (!gallery) return;

  const lg = lightGallery(gallery, {
    selector: 'a.gallery-item',
    plugins: [lgZoom, lgFullscreen, lgThumbnail, lgShare],
    speed: 500,
    download: true,
    counter: true,
    thumbnail: true,

    /* ---------- DISABLE DEFAULT BUTTONS ---------- */
    // Turn off LightGallery's built-in buttons so they don't fight our code
    share: true,
    facebook: false,
    pinterest: false,
    twitter: false,

    /* ---------- REBUILD ALL BUTTONS AS CUSTOM OPTIONS ---------- */
    additionalShareOptions: [
      {
        type: 'custom-facebook',
        selector: '.custom-share-facebook',
        dropdownHTML: `
          <li>
            <a class="custom-share-facebook" target="_blank" style="display: flex; align-items: center; gap: 10px;">
              <svg style="width: 18px; height: 18px; pointer-events: none;" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span style="pointer-events: none;">Facebook</span>
            </a>
          </li>`
      },
      {
        type: 'custom-pinterest',
        selector: '.custom-share-pinterest',
        dropdownHTML: `
          <li>
            <a class="custom-share-pinterest" target="_blank" style="display: flex; align-items: center; gap: 10px;">
              <svg style="width: 18px; height: 18px; pointer-events: none;" viewBox="0 0 24 24" fill="#E60023" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.288 1.148c-.043.165-.138.2-.282.133-1.04-.492-1.689-2.022-1.689-3.253 0-2.651 1.927-5.087 5.556-5.087 2.922 0 5.197 2.083 5.197 4.869 0 2.903-1.83 5.239-4.372 5.239-1.066 0-2.067-.553-2.411-1.207l-.657 2.508c-.237.915-.878 2.06-1.311 2.76 1.038.318 2.134.489 3.267.489 6.621 0 11.988-5.367 11.988-11.987C24.034 5.367 18.638 0 12.017 0z"/>
              </svg>
              <span style="pointer-events: none;">Pinterest</span>
            </a>
          </li>`
      },
      {
        type: 'custom-whatsapp',
        selector: '.custom-share-whatsapp',
        dropdownHTML: `
          <li>
            <a class="custom-share-whatsapp" target="_blank" style="display: flex; align-items: center; gap: 10px;">
              <svg style="width: 18px; height: 18px; pointer-events: none;" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span style="pointer-events: none;">WhatsApp</span>
            </a>
          </li>`
      },
      {
        type: 'custom-copy',
        selector: '.custom-share-copy',
        dropdownHTML: `
          <li>
            <a class="custom-share-copy" style="cursor: pointer; display: flex; align-items: center; gap: 10px;">
              <svg style="width: 18px; height: 18px; pointer-events: none;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span style="pointer-events: none;">Copy Link</span>
            </a>
          </li>`
      }
    ]
  });

  /* ---------- FORCE DIRECT IMAGE URLS ---------- */
  gallery.addEventListener('lgAfterSlide', (event) => {
    
    setTimeout(() => {
      const slideElements = gallery.querySelectorAll('a.gallery-item');
      const rawSrc = slideElements[event.detail.index].getAttribute('href');
      const absoluteUrl = new URL(rawSrc, window.location.origin).href;

      // Select our new custom buttons
      const fbLink = document.querySelector('.custom-share-facebook');
      const pinLink = document.querySelector('.custom-share-pinterest');
      const waLink = document.querySelector('.custom-share-whatsapp');
      const copyBtn = document.querySelector('.custom-share-copy');

      // Inject the precise URL formatting each platform requires
      if (fbLink) {
        fbLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absoluteUrl)}`;
      }
      if (pinLink) {
        pinLink.href = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(absoluteUrl)}&media=${encodeURIComponent(absoluteUrl)}`;
      }
      if (waLink) {
        waLink.href = `https://wa.me/?text=${encodeURIComponent(absoluteUrl)}`;
      }
      if (copyBtn) {
        copyBtn.setAttribute('data-link', absoluteUrl);
      }
    }, 50);

  });

  /* ---------- HANDLE COPY LINK CLICK ---------- */
  document.body.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.custom-share-copy');
    if (copyBtn) {
      e.preventDefault(); 
      
      const urlToCopy = copyBtn.getAttribute('data-link');
      if (urlToCopy) {
        navigator.clipboard.writeText(urlToCopy).then(() => {
          alert('Image Link Copied!');
        });
      }
    }
  });
}