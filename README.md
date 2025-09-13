# 🚆 Mumbai Local Train Route Finder

> *A personal project to help navigate Mumbai's local train network easily* 
> 
> This is for my girlfriend who gets confused in local trains - now she can travel confidently! 💕

A beautiful, interactive route finder for Mumbai's suburban railway system built with vanilla HTML, CSS, and JavaScript. Find the best routes between any two stations across Western, Orange, and Harbour lines with real-time visualization and smart pathfinding.

![Mumbai Railway Route Finder](https://img.shields.io/badge/Status-Live-brightgreen) ![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue) ![No Dependencies](https://img.shields.io/badge/Dependencies-None-orange) ![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red)

## 🌟 Live Demo

**[Try it now →](https://lekzza.github.io/mumbai-local-train-route/)**

## ✨ Features

### 🎯 **Smart Route Planning**
- **Interactive Station Selection**: Click directly on stations or use dropdown menus
- **Dijkstra's Algorithm**: Finds optimal routes with minimal transfers
- **Multiple Route Options**: Shows up to 2 different routes with alternatives
- **Transfer Instructions**: Clear step-by-step directions like "Take Western Line from Andheri to Mahim, then Orange Line to CSMT"

### 🗺️ **Beautiful Visualization**
- **Color-coded Lines**: Blue (Western), Orange (Andheri-CSMT), Yellow (Harbour)
- **Side-by-side Parallel Lines**: See all services on shared tracks
- **Smart Zoom**: Automatically focuses on selected route
- **Dotted Route Highlighting**: Clear path indication with small black dots
- **Station Highlighting**: Route stations stand out while others fade

### 📱 **User Experience**
- **Route Instructions First**: See directions before the map
- **Responsive Design**: Works perfectly on mobile and desktop
- **Real-time Updates**: Instant route calculation and visualization
- **Clean Interface**: Minimalist design focused on usability

## 🚇 Mumbai Railway Lines Covered

### 🔵 **Western Line** (29 stations)
`Churchgate → Marine Lines → Charni Road → Grant Road → Mumbai Central → Mahalakshmi → Lower Parel → Prabhadevi → Dadar → Matunga Road → Mahim Junction → Bandra Junction → Khar Road → Santa Cruz → Ville Parle → Andheri → Jogeshwari → Ram Mandir → Goregaon → Malad → Kandivli → Borivali → Dahisar → Mira Road → Bhayandar → Naigaon → Vasai Road → Nalla Sopara → Virar`

### 🟠 **Orange Line** (15 stations) 
`Andheri → Ville Parle → Santa Cruz → Khar Road → Bandra Junction → Mahim Junction → Kings Circle → Vadala Road → Sewri → Cotton Green → Reay Road → Dockyard Road → Sandhurst Road → Masjid → C Shivaji Maharaj Terminus`

### 🟡 **Yellow Line (Harbour)** (25 stations)
`C Shivaji Maharaj Terminus → Masjid → Sandhurst Road → Dockyard Road → Reay Road → Cotton Green → Sewri → Vadala Road → Guru Teghbahadurnagar → Chunabhatti → Kurla Junction → Tilak Nagar → Chembur → Govandi → Mankhurd → Vashi → Sanpada → Juinagar → Nerul → Sea Wood Darave → Belapur CBD → Kharghar → Mansarovar → Khandeshwar → Panvel`

## 🚀 How to Use

1. **Select Start Station**: Click on map or use "From" dropdown
2. **Select Destination**: Click on map or use "To" dropdown  
3. **Find Routes**: Click "Find Routes" button
4. **View Instructions**: See step-by-step directions at the top
5. **Visualize Route**: Click any route option to see it highlighted on map
6. **Smart Zoom**: Map automatically zooms to focus on your route
7. **Clear & Repeat**: Use "Clear" button to start over

## 🛠️ Technical Features

- **Algorithm**: Dijkstra's shortest path for optimal route finding
- **No Backend**: 100% client-side application
- **Vanilla JavaScript**: No frameworks, fast loading
- **SVG Graphics**: Scalable vector graphics for crisp visuals
- **Modern CSS**: Flexbox, animations, and responsive design
- **GitHub Pages**: Free hosting and deployment

## 📱 Screenshots

### Main Interface
*Clean, intuitive interface with station selection*

### Route Planning
*Smart route instructions with line-specific directions*

### Interactive Map
*Color-coded lines with automatic zoom and highlighting*

### Mobile Experience
*Fully responsive design works perfectly on mobile*

## 🎯 Perfect For

- **Daily Commuters**: Plan your journey efficiently
- **Tourists & Visitors**: Navigate Mumbai's railway system confidently  
- **Local Residents**: Discover new routes and connections
- **Anyone Confused by Local Trains**: Clear, visual route guidance

## 🚀 Quick Start

### Option 1: Use Online
Just visit: **[https://lekzza.github.io/mumbai-local-train-route/](https://lekzza.github.io/mumbai-local-train-route/)**

### Option 2: Run Locally
```bash
# Clone the repository
git clone https://github.com/lekzzA/mumbai-local-train-route.git
cd mumbai-local-train-route

# Serve locally (choose one)
python -m http.server 8000
# OR
npx serve .

# Open browser to http://localhost:8000
```

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Graphics**: SVG for interactive map
- **Algorithm**: Dijkstra's pathfinding algorithm  
- **Hosting**: GitHub Pages
- **Version Control**: Git & GitHub

## 📂 Project Structure

```
mumbai-local-train-route/
├── index.html          # Main application page
├── styles.css          # All styling and animations
├── script.js           # Main application logic
├── metroData.js        # Mumbai railway system data
├── pathfinding.js      # Dijkstra's algorithm implementation
└── README.md           # This file
```

## 🎨 Customization

Want to adapt this for another city? Easy! Just modify `metroData.js`:

```javascript
const metroData = {
    stations: {
        'STATION_CODE': {
            id: 'STATION_CODE',
            name: 'Station Name',
            x: 400,  // SVG x coordinate
            y: 300,  // SVG y coordinate
            lines: ['line1', 'line2']
        }
    },
    lines: {
        'line1': {
            name: 'Line Name',
            color: '#4A90E2',
            stations: ['STATION1', 'STATION2', 'STATION3']
        }
    }
    // ...connections and travel times
};
```

## 🤝 Contributing

Found a bug or want to add a feature? 

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Submit a pull request

Ideas for contributions:
- Add more railway lines (Central Line, Metro Lines)
- Real-time train status integration
- Multi-language support
- Accessibility improvements
- Offline support (PWA)

## 🙏 Acknowledgments

- **Mumbai Railway System**: For the comprehensive network data
- **Dijkstra's Algorithm**: For efficient pathfinding
- **GitHub Pages**: For free hosting
- **Love & Confusion**: The inspiration behind this project 💕

## 📄 License

MIT License - Feel free to use this for any purpose!

---

**Made with ❤️ for easier Mumbai local train travel**

*P.S. - Hope this helps with the train confusion! 🚆*
