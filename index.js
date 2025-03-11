const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }

  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

const roadGraph = buildGraph(roads);

// PART 1 IS ABOUT ROAD NETWORK AND GRAPH CONSTRUCTION
// PART ONE DONE
// ======================================================================================================================

class VillageState {
  constructor(place, parcels) {
    this.place = place; // Lokasi si karakter sekarang
    this.parcels = parcels; // List paket yang harus diantar
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place !== this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place !== p.address);
      return new VillageState(destination, parcels);
    }
  }

  static random(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph)); // Random tujuan paket
      let place;
      do {
        place = randomPick(Object.keys(roadGraph)); // Random lokasi awal paket
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels); // Mulai dari kantor pos
  }
}

// PART TWO IS ABOUT VILLAGE STATE MANAGEMENT
// PART TWO  DONE
// ======================================================================================================================

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];

  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];

    for (let place of graph[at]) {
      if (place == to) return route.concat(place); // Ketemu tempat tujuan, langsung return rutenya

      // Cek apakah tempat ini udah dikunjungi
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

// PART THREE IS ABOUT UTILITY FUNCTION
// PART THREE  DONE
// ======================================================================================================================

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];

    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }

  return { direction: route[0], memory: route.slice(1) };
}

// PART FOUR IS ABOUT LIST OF ROBOTS
// PART THREE  DONE
// ======================================================================================================================

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`); // Udah kelar, print hasilnya
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

// PART FIVE IS ABOUT FUNCTION RUNNER
// PART FIVE DONE
// ======================================================================================================================

// TEST TEST TEST
console.log("=== RANDOM ROBOT ===");
runRobot(VillageState.random(), randomRobot);

console.log("\n=== ROUTE ROBOT ===");
runRobot(VillageState.random(), routeRobot, []);

console.log("\n=== GOAL-ORIENTED ROBOT ===");
runRobot(VillageState.random(), goalOrientedRobot, []);
