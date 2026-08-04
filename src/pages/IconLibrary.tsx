import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import styles from "./IconLibrary.module.css";

interface IconData {
  id: number;
  icon_name: string;
  tags: string[];
  category: string;
  style: string;
  svg_path: string;
}

const IconLibrary: React.FC = () => {
  const [icons, setIcons] = useState<IconData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [opticalSize, setOpticalSize] = useState(24);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Fetch icons from backend
  useEffect(() => {
    const fetchIcons = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append('search', searchTerm);
        if (selectedCategory) queryParams.append('category', selectedCategory);
        if (selectedStyle) queryParams.append('style', selectedStyle);

        // Fetching from the standalone backend on port 5000
        const response = await fetch(`http://localhost:5000/api/icons?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setIcons(data);
      } catch (error) {
        console.error("Error fetching icons:", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce the fetch slightly for search input
    const timerId = setTimeout(() => {
      fetchIcons();
    }, 300);

    return () => clearTimeout(timerId);
  }, [searchTerm, selectedCategory, selectedStyle]);

  const categories = ['Actions', 'UI actions', 'Social', 'Communication'];
  
  return (
    <div className={styles.iconLibraryPage}>
      <Header hBKNewLogo1="/HBK-New-Logo-1.svg" />
      
      <main className={styles.bodyLayout}>
        <SideNavigation />

        <div className={styles.mainContent}>
          {/* Inner Sidebar for Icon Filters */}
          <div style={{ display: 'flex', height: '100%' }}>
            <aside className={styles.filtersSidebar}>
              
              <div className={styles.filterSection}>
                <div className={styles.filterTitle}>
                  Optical Size 
                  <span style={{fontWeight: 400}}>{opticalSize}px</span>
                </div>
                <div className={styles.sliderContainer}>
                  <input 
                    type="range" 
                    min="20" 
                    max="48" 
                    value={opticalSize} 
                    onChange={(e) => setOpticalSize(Number(e.target.value))}
                  />
                  <div className={styles.sliderHeader}>
                    <span>20px</span>
                    <span>48px</span>
                  </div>
                </div>
              </div>

              <div className={styles.filterSection}>
                <div className={styles.filterTitle}>Style</div>
                <select 
                  className={styles.filterSelect}
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                >
                  <option value="">All Styles</option>
                  <option value="Outlined">Outlined</option>
                  <option value="Solid">Solid</option>
                  <option value="Rounded">Rounded</option>
                </select>
              </div>

              <div className={styles.filterSection}>
                <div className={styles.filterTitle}>Category</div>
                <div className={styles.categoryList}>
                  <div 
                    className={`${styles.categoryItem} ${selectedCategory === '' ? styles.categoryItemActive : ''}`}
                    onClick={() => setSelectedCategory('')}
                  >
                    All Categories
                  </div>
                  {categories.map(cat => (
                    <div 
                      key={cat}
                      className={`${styles.categoryItem} ${selectedCategory === cat ? styles.categoryItemActive : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Icon Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              
              <div className={styles.searchHeader}>
                <input 
                  type="text" 
                  className={styles.searchInput}
                  placeholder="Search icons (e.g. settings, home...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className={styles.iconGridWrapper}>
                {loading ? (
                  <div className={styles.noResults}>Loading icons...</div>
                ) : icons.length > 0 ? (
                  <div className={styles.iconGrid}>
                    {icons.map(icon => (
                      <div key={icon.id} className={styles.iconCard}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          width={opticalSize} 
                          height={opticalSize} 
                          fill="currentColor"
                        >
                          <path d={icon.svg_path} />
                        </svg>
                        <span className={styles.iconName}>{icon.icon_name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noResults}>
                    <h3>No icons found</h3>
                    <p>Try adjusting your search or filters.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IconLibrary;
