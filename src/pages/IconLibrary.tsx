import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import Footer from "../components/Footer";
import styles from "./IconLibrary.module.css";
import bannerStyles from "./TypographyOverview.module.css";

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
  
  // Customization States
  const [fill, setFill] = useState(false);
  const [weight, setWeight] = useState(400);
  const [grade, setGrade] = useState(0);
  const [opticalSize, setOpticalSize] = useState(24);
  
  const [selectedStyle, setSelectedStyle] = useState<string>('Outlined');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Expanded Categories based on Material Symbols
  const categories = [
    'Actions', 'Activities', 'Android', 'Audio & Video', 'Business',
    'Communicate', 'Hardware', 'Home', 'Household', 'Images', 
    'Maps', 'Privacy', 'Social', 'Text', 'Transit', 'Travel', 'UI actions'
  ];

  const resetAll = () => {
    setFill(false);
    setWeight(400);
    setGrade(0);
    setOpticalSize(24);
    setSelectedStyle('Outlined');
    setSelectedCategory('');
  };

  // Fetch icons from backend
  useEffect(() => {
    const fetchIcons = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append('search', searchTerm);
        if (selectedCategory) queryParams.append('category', selectedCategory);
        if (selectedStyle) queryParams.append('style', selectedStyle);

        // Fetching from the standalone backend on port 3000
        const response = await fetch(`http://localhost:3000/api/icons?${queryParams.toString()}`);
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


  return (
    <div className={styles.iconLibraryPage}>
      <Header hBKNewLogo1="/HBK-New-Logo-1.svg" />
      
      <main className={styles.bodyLayout}>
        <SideNavigation />

        <div className={styles.mainContent}>
          {/* Hero Banner (Standard) */}
          <section className={bannerStyles.mainContentAreaInner}>
            <div className={bannerStyles.frameContainer}>
              <div className={bannerStyles.frameParent2}>
                <div className={bannerStyles.chooseYourContextToExploreWrapper}>
                  <div className={bannerStyles.chooseYourContext}>Foundation</div>
                </div>
                <div className={bannerStyles.buttonParent}>
                  <h2 className={bannerStyles.button}>Icon Library</h2>
                  <div className={bannerStyles.chooseYourContext2}>
                    Product icons create visual recognition and help users quickly identify products across experiences.
                  </div>
                </div>
              </div>
              <div className={bannerStyles.frame2}>
                <img
                  className={bannerStyles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/Typo.png"
                />
              </div>
            </div>
          </section>

          {/* Main Icon Area */}
          <div className={styles.iconAreaLayout}>
            
            {/* Mobile Category Dropdown */}
            <div className={styles.mobileCategoryDropdown}>
              <label htmlFor="mobile-category">Category</label>
              <select 
                id="mobile-category" 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Icons</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              
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

            {/* Right Sidebar for Categories (Using standard sideNav style) */}
            <aside className={styles.sideNav}>
              <div className={styles.sideNavTitle}>Category</div>
              <div
                className={`${styles.navItem} ${selectedCategory === '' ? styles.navItemActive : ''}`}
                onClick={() => setSelectedCategory('')}
              >
                All Icons
              </div>
              {categories.map(cat => (
                <div 
                  key={cat}
                  className={`${styles.navItem} ${selectedCategory === cat ? styles.navItemActive : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                >
                  {cat}
                </div>
              ))}
            </aside>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default IconLibrary;
