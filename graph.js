class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.map((v) => this.addVertex(v));
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let arr = [];
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);

    while (toVisitStack.length) {
      let currNode = toVisitStack.pop();
      arr.push(currNode.value);

      for (let adjacent of currNode.adjacent) {
        if (!seen.has(adjacent)) {
          toVisitStack.push(adjacent);
          seen.add(adjacent);
        }
      }
    }
    return arr;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let arr = [];
    let toVisitQueue = [start];
    let seen = new Set(toVisitQueue);
    while (toVisitQueue.length) {
      let currNode = toVisitQueue.shift();

      arr.push(currNode.value);

      for (let adjacent of currNode.adjacent) {
        if (!seen.has(adjacent)) {
          toVisitQueue.push(adjacent);
          seen.add(adjacent);
        }
      }
    }
    return arr;
  }
}

const graph = new Graph();

let S = new Node("S");
let P = new Node("P");
let U = new Node("U");
let X = new Node("X");
let Q = new Node("Q");
let Y = new Node("Y");
let V = new Node("V");
let R = new Node("R");
let W = new Node("W");
let T = new Node("T");

graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);

console.log(graph.depthFirstSearch(S));

module.exports = { Graph, Node };
