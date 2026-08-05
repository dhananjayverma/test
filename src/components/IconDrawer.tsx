import React, { useState, useEffect } from 'react';
import styles from './IconDrawer.module.css';

export interface IconData {
  id: number;
  icon_name: string;
  tags: string[];
  category: string;
  style: string;
  svg_path: string;
}

interface IconDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  icon: IconData | null;
}

const IconDrawer: React.FC<IconDrawerProps> = ({ isOpen, onClose, icon }) => {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#E3E3E3');
  const [activeTab, setActiveTab] = useState<'Web' | 'Android' | 'Apple'>('Web');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [snippets, setSnippets] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setCopiedText(null), 300);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!icon) return;
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/api/icons/${icon.id}/snippets?size=${size}`)
      .then(res => res.json())
      .then(data => setSnippets(data))
      .catch(err => console.error("Error fetching snippets:", err));
  }, [icon, size]);

  if (!icon && !isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const getFullSvgString = () => {
    if (!icon) return "";
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="${color}"><path d="${icon.svg_path}"/></svg>`;
  };

  const downloadSVG = () => {
    if (!icon) return;
    const apiUrl = import.meta.env.VITE_API_URL;
    window.location.href = `${apiUrl}/api/icons/download/svg?id=${icon.id}&size=${size}&color=${encodeURIComponent(color)}`;
  };

  const downloadPNG = () => {
    if (!icon) return;
    const apiUrl = import.meta.env.VITE_API_URL;
    window.location.href = `${apiUrl}/api/icons/download/png?id=${icon.id}&size=${size}&color=${encodeURIComponent(color)}`;
  };

  return (
    <>
      <div className={`${styles.drawerOverlay} ${isOpen ? styles.open : ''}`} onClick={onClose} />
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{icon?.icon_name.replace(/_/g, ' ')}</h2>
          <div className={styles.headerActions}>
            <button className={styles.iconButton} title="Refresh settings" onClick={() => { setSize(24); setColor('#E3E3E3'); }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
            </button>
            <button className={styles.iconButton} onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
          </div>
        </div>

        {icon && (
          <div className={styles.content}>
            <div className={styles.previewSection}>
              <div className={styles.iconPreview}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size > 140 ? 140 : size} height={size > 140 ? 140 : size} fill={color}>
                  <path d={icon.svg_path} />
                </svg>
                <button className={styles.copyIconBtn} onClick={() => handleCopy(getFullSvgString(), 'svg')} title="Copy SVG">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                </button>
              </div>
              <div className={styles.settings}>
                <div className={styles.settingGroup}>
                  <span className={styles.settingLabel}>Size</span>
                  <div className={styles.controlBox}>
                    <button onClick={() => setSize(s => Math.max(12, s - 4))}>−</button>
                    <input type="number" value={size} onChange={(e) => setSize(Number(e.target.value) || 24)} />
                    <button onClick={() => setSize(s => Math.min(200, s + 4))}>+</button>
                  </div>
                </div>
                <div className={styles.settingGroup}>
                  <span className={styles.settingLabel}>Color</span>
                  <div className={styles.colorPickerBox}>
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    <input type="text" value={color.toUpperCase()} onChange={(e) => setColor(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.description}>
              {icon.tags.length > 0 ? icon.tags.join(', ') : 'No tags available for this icon.'}
            </div>

            <div className={styles.downloadButtons}>
              <button className={styles.downloadBtn} onClick={downloadSVG}>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                SVG
              </button>
              <button className={styles.downloadBtn} onClick={downloadPNG}>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                PNG
              </button>
            </div>

            <div className={styles.tabs}>
              {['Web', 'Android', 'Apple'].map(tab => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab as any)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.instructionsSection}>
              {activeTab === 'Web' && snippets && (
                <>
                  <div className={styles.instructionGroup}>
                    <h4>Instructions</h4>
                    <p>Check the <a href="#">Material Symbols guide</a> for advanced examples such as animations and font loading optimization.</p>
                  </div>
                  <div className={styles.instructionGroup}>
                    <h4>Variable icon font</h4>
                    <p>Add the variable font stylesheet request to your head tag and the current variable axes configuration to icons using CSS.</p>
                    <div className={styles.codeBlockWrapper}>
                      <pre className={styles.codeBlock}>{snippets.webVariableCode}</pre>
                      <button className={styles.copyCodeBtn} onClick={() => handleCopy(snippets.webVariableCode, 'varCode')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        {copiedText === 'varCode' ? 'Copied!' : 'Copy code'}
                      </button>
                    </div>
                    <div className={styles.codeBlockWrapper} style={{marginTop: '-20px'}}>
                      <pre className={styles.codeBlock}>{snippets.webVariableCSS}</pre>
                      <button className={styles.copyCodeBtn} onClick={() => handleCopy(snippets.webVariableCSS, 'varCSS')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        {copiedText === 'varCSS' ? 'Copied!' : 'Copy code'}
                      </button>
                    </div>
                  </div>
                  <div className={styles.instructionGroup}>
                    <h4>Static icon font</h4>
                    <p>Alternatively, the current configuration can be loaded as a static font instead of a variable one.</p>
                    <div className={styles.codeBlockWrapper}>
                      <pre className={styles.codeBlock}>{snippets.webStaticCode}</pre>
                      <button className={styles.copyCodeBtn} onClick={() => handleCopy(snippets.webStaticCode, 'staticCode')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        {copiedText === 'staticCode' ? 'Copied!' : 'Copy code'}
                      </button>
                    </div>
                  </div>
                  <div className={styles.instructionGroup}>
                    <h4>Inserting the icon</h4>
                    <div className={styles.codeBlockWrapper}>
                      <pre className={styles.codeBlock}>{snippets.insertCode}</pre>
                      <button className={styles.copyCodeBtn} onClick={() => handleCopy(snippets.insertCode, 'insertCode')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        {copiedText === 'insertCode' ? 'Copied!' : 'Copy code'}
                      </button>
                    </div>
                  </div>
                  <div className={styles.instructionGroup}>
                    <h4>Code point</h4>
                    <div className={styles.codeBlockWrapper}>
                      <pre className={styles.codeBlock}>{snippets.codePoint}</pre>
                      <button className={styles.copyCodeBtn} onClick={() => handleCopy(snippets.codePoint, 'codePoint')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        {copiedText === 'codePoint' ? 'Copied!' : 'Copy code'}
                      </button>
                    </div>
                  </div>
                  <div className={styles.instructionGroup}>
                    <h4>Icon name</h4>
                    <div className={styles.codeBlockWrapper}>
                      <pre className={styles.codeBlock}>{snippets.iconName}</pre>
                      <button className={styles.copyCodeBtn} onClick={() => handleCopy(snippets.iconName, 'iconName')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        {copiedText === 'iconName' ? 'Copied!' : 'Copy code'}
                      </button>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 'Web' && !snippets && (
                <div style={{padding: '20px', textAlign: 'center'}}>Loading snippets...</div>
              )}

              {activeTab === 'Android' && snippets && (
                <div className={styles.instructionGroup}>
                  <h4>Android usage</h4>
                  <p>In your XML layouts, you can use the icon vector drawable directly.</p>
                  <div className={styles.codeBlockWrapper}>
                    <pre className={styles.codeBlock}>{snippets.androidCode}</pre>
                    <button className={styles.copyCodeBtn} onClick={() => handleCopy(snippets.androidCode, 'androidCode')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        {copiedText === 'androidCode' ? 'Copied!' : 'Copy code'}
                      </button>
                  </div>
                </div>
              )}

              {activeTab === 'Apple' && snippets && (
                <div className={styles.instructionGroup}>
                  <h4>Apple usage</h4>
                  <p>In your Swift code or Storyboard, you can refer to the asset.</p>
                  <div className={styles.codeBlockWrapper}>
                    <pre className={styles.codeBlock}>{snippets.appleCode}</pre>
                    <button className={styles.copyCodeBtn} onClick={() => handleCopy(snippets.appleCode, 'appleCode')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        {copiedText === 'appleCode' ? 'Copied!' : 'Copy code'}
                      </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default IconDrawer;
