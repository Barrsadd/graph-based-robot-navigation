# Village Robot Simulation

This project simulates a delivery robot navigating a small village to pick up and deliver parcels efficiently. The simulation explores different robot strategies, including random movement, route-following, and goal-oriented pathfinding using graph traversal algorithms like Breadth-First Search (BFS).

## Features
- **Random Robot**: Moves randomly until all parcels are delivered.
- **Route-Following Robot**: Follows a predefined route to cover the entire village.
- **Goal-Oriented Robot**: Uses shortest-path algorithms to prioritize picking up and delivering parcels.
- **Customizable Simulation**: Easily test different scenarios by adjusting the number of parcels or starting locations.

## How It Works
1. The village is represented as a graph where locations are nodes and roads are edges.
2. Parcels are scattered across the village with random pickup and delivery locations.
3. The robot moves between locations, picking up parcels and delivering them to their destinations.
4. The simulation ends when all parcels are successfully delivered.

## Technologies Used
- **JavaScript**: Core programming language for the simulation.
- **Graph Traversal**: Implements BFS for efficient pathfinding.
- **Object-Oriented Design**: Models the village state and robot behavior using classes and methods.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Barrsadd/graph-based-robot-navigation.git