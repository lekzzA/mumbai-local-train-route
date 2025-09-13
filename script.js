// Main application logic
class MetroApp {
    constructor() {
        this.pathFinder = new PathFinder(metroData.stations, metroData.connections, metroData.travelTimes);
        this.selectedStart = null;
        this.selectedEnd = null;
        this.currentRoutes = [];
        this.activeRoute = null;
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.populateStationSelectors();
        this.drawMetroMap();
        this.setupEventListeners();
    }
    
    populateStationSelectors() {
        const startSelect = document.getElementById('start-station');
        const endSelect = document.getElementById('end-station');
        
        // Sort stations alphabetically
        const stationsList = Object.values(metroData.stations)
            .sort((a, b) => a.name.localeCompare(b.name));
        
        stationsList.forEach(station => {
            const option1 = new Option(station.name, station.id);
            const option2 = new Option(station.name, station.id);
            startSelect.add(option1);
            endSelect.add(option2);
        });
    }
    
    drawMetroMap() {
        const svg = document.getElementById('metro-map');
        svg.innerHTML = ''; // Clear existing content
        
        // Draw metro lines first (so they appear behind stations)
        this.drawMetroLines(svg);
        
        // Draw stations
        this.drawStations(svg);
    }
      drawMetroLines(svg) {        // Calculate offsets for parallel lines - equal spacing between adjacent lines
        const lineOffsets = {
            western: -3,
            orange: 3,
            yellow: 9
        };
        
        Object.entries(metroData.lines).forEach(([lineId, line]) => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            let pathData = '';
            const stations = line.stations;
            const offset = lineOffsets[lineId] || 0;
            
            for (let i = 0; i < stations.length; i++) {
                const station = metroData.stations[stations[i]];
                if (station) {
                    const offsetX = station.x + offset;
                    const offsetY = station.y;
                    
                    if (i === 0) {
                        pathData += `M ${offsetX} ${offsetY}`;
                    } else {
                        pathData += ` L ${offsetX} ${offsetY}`;
                    }
                }
            }
            
            path.setAttribute('d', pathData);
            path.setAttribute('class', `metro-line line-${lineId}`);
            path.setAttribute('stroke', line.color);
            svg.appendChild(path);
        });
    }
    
    drawStations(svg) {
        Object.values(metroData.stations).forEach(station => {
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.setAttribute('class', 'station');
            group.setAttribute('data-station-id', station.id);
            
            // Station circle
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', station.x);
            circle.setAttribute('cy', station.y);
            circle.setAttribute('r', 8);
              // Station label
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', station.x + 15);
            text.setAttribute('y', station.y + 5);
            text.textContent = station.name;
            
            group.appendChild(circle);
            group.appendChild(text);
            
            // Add click event
            group.addEventListener('click', () => this.onStationClick(station.id));
            
            svg.appendChild(group);
        });
    }
    
    setupEventListeners() {
        const startSelect = document.getElementById('start-station');
        const endSelect = document.getElementById('end-station');
        const findButton = document.getElementById('find-route');
        const clearButton = document.getElementById('clear-route');
        
        startSelect.addEventListener('change', (e) => {
            this.selectedStart = e.target.value || null;
            this.updateStationVisuals();
            this.updateFindButton();
        });
        
        endSelect.addEventListener('change', (e) => {
            this.selectedEnd = e.target.value || null;
            this.updateStationVisuals();
            this.updateFindButton();
        });
        
        findButton.addEventListener('click', () => this.findRoutes());
        clearButton.addEventListener('click', () => this.clearSelection());
    }
    
    onStationClick(stationId) {
        if (!this.selectedStart) {
            this.selectedStart = stationId;
            document.getElementById('start-station').value = stationId;
        } else if (!this.selectedEnd && stationId !== this.selectedStart) {
            this.selectedEnd = stationId;
            document.getElementById('end-station').value = stationId;
        } else {
            // Reset if clicking on already selected station
            if (stationId === this.selectedStart) {
                this.selectedStart = null;
                document.getElementById('start-station').value = '';
            } else if (stationId === this.selectedEnd) {
                this.selectedEnd = null;
                document.getElementById('end-station').value = '';
            }
        }
        
        this.updateStationVisuals();
        this.updateFindButton();
    }
    
    updateStationVisuals() {
        const stations = document.querySelectorAll('.station');
        
        stations.forEach(station => {
            const stationId = station.getAttribute('data-station-id');
            station.classList.remove('start', 'end', 'selected');
            
            if (stationId === this.selectedStart) {
                station.classList.add('start');
            } else if (stationId === this.selectedEnd) {
                station.classList.add('end');
            }
        });
    }
    
    updateFindButton() {
        const findButton = document.getElementById('find-route');
        findButton.disabled = !this.selectedStart || !this.selectedEnd;
    }
    
    findRoutes() {
        if (!this.selectedStart || !this.selectedEnd) return;
        
        this.currentRoutes = this.pathFinder.findRoutes(this.selectedStart, this.selectedEnd);
        this.displayRoutes();
        
        if (this.currentRoutes.length > 0) {
            this.showRoute(0); // Show first route by default
        }
    }
    
    displayRoutes() {
        const routesList = document.getElementById('routes-list');
        
        if (this.currentRoutes.length === 0) {
            routesList.innerHTML = '<p class="no-routes">No routes found between selected stations</p>';
            return;
        }
        
        routesList.innerHTML = '';
        
        this.currentRoutes.forEach((route, index) => {
            const routeDiv = document.createElement('div');
            routeDiv.className = 'route-option';
            routeDiv.addEventListener('click', () => this.showRoute(index));
            
            const transferInfo = this.pathFinder.getTransferInfo(route.path);
              const routeInstructions = this.generateRouteInstructions(route.path);
            
            routeDiv.innerHTML = `
                <div class="route-header">
                    <span class="route-title">${route.type}</span>
                    <div class="route-stats">
                        <span>${route.totalTime} min</span>
                        <span>${route.distance} stops</span>
                        <span>${transferInfo.transfers} transfers</span>
                    </div>
                </div>
                <div class="route-instructions">
                    ${routeInstructions}
                </div>
            `;
            
            routesList.appendChild(routeDiv);
        });
    }
      showRoute(routeIndex) {
        // Clear previous route highlighting
        this.clearRouteHighlight();
        
        // Update active route
        this.activeRoute = routeIndex;
        
        // Update route option styling
        const routeOptions = document.querySelectorAll('.route-option');
        routeOptions.forEach((option, index) => {
            option.classList.toggle('active', index === routeIndex);
        });
        
        // Highlight route on map and zoom to it
        this.highlightAndZoomRoute(this.currentRoutes[routeIndex]);
    }    highlightAndZoomRoute(route) {
        const svg = document.getElementById('metro-map');
        
        // Dim all existing lines
        const allLines = svg.querySelectorAll('.metro-line');
        allLines.forEach(line => {
            line.style.opacity = '0.3';
            line.style.strokeWidth = '2';
        });
        
        // Dim all stations
        const allStations = svg.querySelectorAll('.station circle');
        allStations.forEach(station => {
            station.style.opacity = '0.4';
        });
        
        // Highlight stations on the route
        route.path.forEach(stationId => {
            const stationElement = svg.querySelector(`[data-station-id="${stationId}"] circle`);
            if (stationElement) {
                stationElement.style.opacity = '1';
                stationElement.style.strokeWidth = '3';
            }
        });
        
        // Create dotted path with small black circles
        for (let i = 0; i < route.path.length - 1; i++) {
            const station1 = metroData.stations[route.path[i]];
            const station2 = metroData.stations[route.path[i + 1]];
            
            // Calculate the number of dots based on distance
            const distance = Math.sqrt(Math.pow(station2.x - station1.x, 2) + Math.pow(station2.y - station1.y, 2));
            const numDots = Math.floor(distance / 15); // One dot every 15 pixels
            
            // Create dots along the path
            for (let j = 1; j < numDots; j++) {
                const ratio = j / numDots;
                const dotX = station1.x + (station2.x - station1.x) * ratio;
                const dotY = station1.y + (station2.y - station1.y) * ratio;
                
                const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                dot.setAttribute('cx', dotX);
                dot.setAttribute('cy', dotY);
                dot.setAttribute('r', 3);
                dot.setAttribute('fill', '#333333');
                dot.setAttribute('class', 'route-highlight');
                
                svg.appendChild(dot);
            }
        }
        
        // Highlight the lines used in this route
        this.highlightRouteLines(route);
        
        // Calculate and apply zoom
        this.zoomToRoute(route);
    }
    
    highlightRouteLines(route) {
        const svg = document.getElementById('metro-map');
        const routeLines = new Set();
        
        // Determine which lines are used in this route
        route.path.forEach(stationId => {
            const station = metroData.stations[stationId];
            station.lines.forEach(lineId => routeLines.add(lineId));
        });
        
        // Highlight only the lines used in the route
        routeLines.forEach(lineId => {
            const lineElement = svg.querySelector(`.line-${lineId}`);
            if (lineElement) {
                lineElement.style.opacity = '1';
                lineElement.style.strokeWidth = '5';
            }
        });
    }
    
    zoomToRoute(route) {
        const svg = document.getElementById('metro-map');
        
        // Calculate bounding box of the route
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;
        
        route.path.forEach(stationId => {
            const station = metroData.stations[stationId];
            minX = Math.min(minX, station.x);
            maxX = Math.max(maxX, station.x);
            minY = Math.min(minY, station.y);
            maxY = Math.max(maxY, station.y);
        });
        
        // Add padding around the route
        const padding = 50;
        minX -= padding;
        maxX += padding;
        minY -= padding;
        maxY += padding;
        
        // Calculate dimensions
        const width = maxX - minX;
        const height = maxY - minY;
        
        // Update viewBox to zoom to route
        svg.setAttribute('viewBox', `${minX} ${minY} ${width} ${height}`);
        
        // Store original viewBox for reset
        if (!svg.dataset.originalViewBox) {
            svg.dataset.originalViewBox = '0 -200 800 800';
        }
    }
      clearRouteHighlight() {
        const svg = document.getElementById('metro-map');
        
        // Remove highlight dots
        const highlights = document.querySelectorAll('.route-highlight');
        highlights.forEach(highlight => highlight.remove());
        
        // Restore all lines to normal
        const allLines = svg.querySelectorAll('.metro-line');
        allLines.forEach(line => {
            line.style.opacity = '1';
            line.style.strokeWidth = '4';
        });
        
        // Restore all stations to normal
        const allStations = svg.querySelectorAll('.station circle');
        allStations.forEach(station => {
            station.style.opacity = '1';
            station.style.strokeWidth = '2';
        });
        
        // Reset zoom to original view
        if (svg.dataset.originalViewBox) {
            svg.setAttribute('viewBox', svg.dataset.originalViewBox);
        }
    }
    
    
    generateRouteInstructions(path) {
        if (path.length <= 1) return '';
        
        const instructions = [];
        let currentLine = null;
        let segmentStart = path[0];
        
        for (let i = 0; i < path.length - 1; i++) {
            const station1 = metroData.stations[path[i]];
            const station2 = metroData.stations[path[i + 1]];
            
            // Find common line between current and next station
            const commonLines = station1.lines.filter(line => station2.lines.includes(line));
            const bestLine = commonLines[0]; // Use first common line
            
            // Check if we need to change lines
            if (currentLine && currentLine !== bestLine) {
                // Add instruction for previous segment
                const lineInfo = metroData.lines[currentLine];
                const startStation = metroData.stations[segmentStart];
                const endStation = metroData.stations[path[i]];
                
                instructions.push(`Take <span class="line-name" style="color: ${lineInfo.color}">${lineInfo.name}</span> from <strong>${startStation.name}</strong> to <strong>${endStation.name}</strong>`);
                
                // Start new segment
                segmentStart = path[i];
            }
            
            currentLine = bestLine;
        }
        
        // Add final segment
        if (currentLine) {
            const lineInfo = metroData.lines[currentLine];
            const startStation = metroData.stations[segmentStart];
            const endStation = metroData.stations[path[path.length - 1]];
            
            instructions.push(`Take <span class="line-name" style="color: ${lineInfo.color}">${lineInfo.name}</span> from <strong>${startStation.name}</strong> to <strong>${endStation.name}</strong>`);
        }
        
        return instructions.join('<br>');
    }
    
    clearSelection() {
        this.selectedStart = null;
        this.selectedEnd = null;
        this.currentRoutes = [];
        this.activeRoute = null;
        
        document.getElementById('start-station').value = '';
        document.getElementById('end-station').value = '';
        document.getElementById('routes-list').innerHTML = '<p class="no-routes">Select stations to see route options</p>';
        
        this.updateStationVisuals();
        this.updateFindButton();
        this.clearRouteHighlight();
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MetroApp();
});
