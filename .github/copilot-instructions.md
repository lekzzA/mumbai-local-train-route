<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Metro Map Route Finder Project

This is a static web application for finding routes in a metro system. The project uses vanilla HTML, CSS, and JavaScript to create an interactive metro map with pathfinding capabilities.

## Key Features
- Interactive metro map visualization using SVG
- Station selection via dropdown menus or direct map clicks
- Dijkstra's algorithm for optimal route finding
- Alternative route suggestions
- Real-time route highlighting on the map
- Transfer information and travel time estimates

## Architecture
- `index.html` - Main HTML structure and layout
- `styles.css` - All styling including responsive design and animations
- `metroData.js` - Metro system configuration (stations, lines, connections)
- `pathfinding.js` - Dijkstra's algorithm implementation and route finding logic
- `script.js` - Main application logic and DOM manipulation

## Customization
To adapt this for a different metro system:
1. Modify the station data in `metroData.js`
2. Update the SVG coordinates for station positions
3. Adjust the line colors and routes
4. Update travel times between stations

## Deployment
This project is designed to be deployed on GitHub Pages as a static website.
