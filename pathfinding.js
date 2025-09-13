// Dijkstra's algorithm implementation for finding shortest paths
class PathFinder {
    constructor(stations, connections, travelTimes) {
        this.stations = stations;
        this.connections = connections;
        this.travelTimes = travelTimes;
    }
    
    // Find shortest path using Dijkstra's algorithm
    findShortestPath(startId, endId) {
        const distances = {};
        const previous = {};
        const unvisited = new Set();
        
        // Initialize distances
        for (const stationId in this.stations) {
            distances[stationId] = Infinity;
            previous[stationId] = null;
            unvisited.add(stationId);
        }
        
        distances[startId] = 0;
        
        while (unvisited.size > 0) {
            // Find unvisited station with minimum distance
            let current = null;
            let minDistance = Infinity;
            
            for (const stationId of unvisited) {
                if (distances[stationId] < minDistance) {
                    minDistance = distances[stationId];
                    current = stationId;
                }
            }
            
            if (current === null || distances[current] === Infinity) {
                break; // No path found
            }
            
            unvisited.delete(current);
            
            if (current === endId) {
                break; // Found shortest path to destination
            }
            
            // Check neighbors
            const neighbors = this.connections[current] || [];
            for (const neighbor of neighbors) {
                if (unvisited.has(neighbor)) {
                    const travelTime = getTravelTime(current, neighbor);
                    const newDistance = distances[current] + travelTime;
                    
                    if (newDistance < distances[neighbor]) {
                        distances[neighbor] = newDistance;
                        previous[neighbor] = current;
                    }
                }
            }
        }
        
        // Reconstruct path
        if (distances[endId] === Infinity) {
            return null; // No path found
        }
        
        const path = [];
        let current = endId;
        
        while (current !== null) {
            path.unshift(current);
            current = previous[current];
        }
        
        return {
            path: path,
            totalTime: distances[endId],
            distance: path.length - 1 // number of stops
        };
    }
    
    // Find multiple route options
    findRoutes(startId, endId, maxRoutes = 2) {
        if (startId === endId) {
            return [];
        }
        
        const routes = [];
        const shortestPath = this.findShortestPath(startId, endId);
        
        if (shortestPath) {
            routes.push({
                ...shortestPath,
                type: 'Fastest Route'
            });
        }
        
        // Find alternative route by temporarily removing one connection from shortest path
        if (shortestPath && shortestPath.path.length > 2 && routes.length < maxRoutes) {
            const alternativeRoute = this.findAlternativeRoute(startId, endId, shortestPath.path);
            if (alternativeRoute && this.isSignificantlyDifferent(shortestPath, alternativeRoute)) {
                routes.push({
                    ...alternativeRoute,
                    type: 'Alternative Route'
                });
            }
        }
        
        return routes;
    }
    
    // Find alternative route by avoiding a station from the shortest path
    findAlternativeRoute(startId, endId, shortestPath) {
        if (shortestPath.length <= 2) {
            return null;
        }
        
        // Try removing middle stations from shortest path to force alternative
        const middleStations = shortestPath.slice(1, -1);
        
        for (const avoidStation of middleStations) {
            const originalConnections = this.connections[avoidStation];
            
            // Temporarily remove this station
            delete this.connections[avoidStation];
            
            // Also remove references to this station from other stations
            const affectedStations = {};
            for (const stationId in this.connections) {
                const connections = this.connections[stationId];
                const index = connections.indexOf(avoidStation);
                if (index > -1) {
                    affectedStations[stationId] = connections.splice(index, 1)[0];
                }
            }
            
            const alternativePath = this.findShortestPath(startId, endId);
            
            // Restore connections
            this.connections[avoidStation] = originalConnections;
            for (const stationId in affectedStations) {
                this.connections[stationId].push(affectedStations[stationId]);
            }
            
            if (alternativePath) {
                return alternativePath;
            }
        }
        
        return null;
    }
    
    // Check if two routes are significantly different
    isSignificantlyDifferent(route1, route2) {
        // Different if they share less than 70% of stations
        const path1Set = new Set(route1.path);
        const path2Set = new Set(route2.path);
        const intersection = new Set([...path1Set].filter(x => path2Set.has(x)));
        
        const similarity = intersection.size / Math.max(path1Set.size, path2Set.size);
        return similarity < 0.7;
    }
    
    // Get transfer information for a route
    getTransferInfo(path) {
        if (path.length <= 1) return { transfers: 0, lines: [] };
        
        const lines = [];
        let transfers = 0;
        let currentLine = null;
        
        for (let i = 0; i < path.length - 1; i++) {
            const station1 = this.stations[path[i]];
            const station2 = this.stations[path[i + 1]];
            
            // Find common line between stations
            const commonLines = station1.lines.filter(line => station2.lines.includes(line));
            
            if (commonLines.length > 0) {
                const line = commonLines[0]; // Use first common line
                
                if (currentLine && currentLine !== line) {
                    transfers++;
                }
                
                if (!lines.includes(line)) {
                    lines.push(line);
                }
                
                currentLine = line;
            }
        }
        
        return { transfers, lines };
    }
}
