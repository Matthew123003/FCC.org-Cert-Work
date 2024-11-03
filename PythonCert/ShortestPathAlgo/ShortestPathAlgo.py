# Define a graph represented as an adjacency list using a dictionary.
# Each key (node) in the dictionary points to a list of tuples.
# Each tuple represents a neighboring node and the "weight" (distance) to that node.
my_graph = {
    'A': [('B', 5), ('C', 3), ('E', 11)],     # Node 'A' connects to 'B' with weight 5, 'C' with weight 3, and 'E' with weight 11.
    'B': [('A', 5), ('C', 1), ('F', 2)],      # Node 'B' connects to 'A', 'C', and 'F' with the specified weights.
    'C': [('A', 3), ('B', 1), ('D', 1), ('E', 5)], # Node 'C' connects to 'A', 'B', 'D', and 'E'.
    'D': [('C', 1), ('E', 9), ('F', 3)],      # Node 'D' connects to 'C', 'E', and 'F'.
    'E': [('A', 11), ('C', 5), ('D', 9)],     # Node 'E' connects to 'A', 'C', and 'D'.
    'F': [('B', 2), ('D', 3)]                 # Node 'F' connects to 'B' and 'D'.
}

# Define a function to find the shortest path between a starting node and all other nodes.
# Optionally, a specific target node can be specified to find the shortest path only to that node.
def shortest_path(graph, start, target=''):
    """
    This function calculates the shortest paths from the 'start' node to all other nodes in the graph.
    If a specific 'target' node is provided, it will only print the path to that target node.
    
    Parameters:
    - graph: Dictionary representing the graph (adjacency list format).
    - start: The starting node for finding paths.
    - target: Optional specific node for which we want the shortest path; if left empty, paths to all nodes will be displayed.
    
    Returns:
    - distances: Dictionary of shortest distances from 'start' to each node in the graph.
    - paths: Dictionary of paths that represent the shortest route from 'start' to each node.
    """

    # Initialize a list of unvisited nodes, starting with all nodes in the graph.
    unvisited = list(graph)  # 'list(graph)' converts the dictionary keys (nodes) into a list of nodes.

    # Create a dictionary to store the shortest known distance to each node.
    # The start node's distance is initialized to 0 (itself), while other nodes start with infinity (float('inf')).
    distances = {node: 0 if node == start else float('inf') for node in graph}

    # Create a dictionary to store the shortest path to each node.
    # Each node initially has an empty list to hold the path.
    paths = {node: [] for node in graph}

    # Add the starting node to its own path as the beginning of its journey.
    paths[start].append(start)  # The starting node 'start' appends itself to its path.

    # Main loop to continue processing until all nodes are visited.
    while unvisited:
        # Find the unvisited node with the smallest known distance so far.
        # `distances.get` retrieves each node's distance for comparison within `min`.
        current = min(unvisited, key=distances.get)

        # Iterate over each neighboring node connected to 'current' in the graph.
        # Each neighbor is a tuple (node, distance), representing an edge.
        for node, distance in graph[current]:
            # Calculate the tentative distance to this neighbor via 'current'.
            # This is the known distance to `current` plus the edge weight to `node`.
            if distance + distances[current] < distances[node]:
                # If the new calculated distance is less than the previously known distance, update it.
                distances[node] = distance + distances[current]
                
                # Update the path for this neighbor node based on the updated distance.
                if paths[node] and paths[node][-1] == node:  
                    # If the path already includes 'node' as its last element, replace it.
                    paths[node] = paths[current][:]
                else:
                    # Otherwise, extend the path from 'current' to include 'node'.
                    paths[node].extend(paths[current])
                # Append the neighbor 'node' to the path, finalizing the update.
                paths[node].append(node)

        # Remove 'current' from the unvisited list, marking it as "visited".
        unvisited.remove(current)

    # Determine which paths to display.
    # If 'target' is specified, only the path to that node will be shown.
    # If no target is specified, paths to all nodes will be shown.
    targets_to_print = [target] if target else graph

    # Loop over each node in 'targets_to_print' to display distance and path information.
    for node in targets_to_print:
        # Skip printing the start node's path to itself (as there's no real distance).
        if node == start:
            continue
        # Display the shortest distance and path from 'start' to the current 'node'.
        print(f'\n{start}-{node} distance: {distances[node]}\nPath: {" -> ".join(paths[node])}')

    # Return the computed distances and paths for external use if needed.
    return distances, paths

# Call the function with 'A' as the starting node.
# This will calculate and print the shortest paths and distances from 'A' to all other nodes.
shortest_path(my_graph, 'A')
