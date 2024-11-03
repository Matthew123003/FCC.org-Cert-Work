# Define a graph represented as an adjacency list using a dictionary
# Each key (node) points to a list of tuples
# Each tuple contains a neighboring node and the "weight" (distance) to that node
my_graph = {
    'A': [('B', 5), ('C', 3), ('E', 11)],     # Node 'A' connects to 'B' with weight 5, 'C' with weight 3, and 'E' with weight 11
    'B': [('A', 5), ('C', 1), ('F', 2)],      # Node 'B' connects to 'A', 'C', and 'F' with specified weights
    'C': [('A', 3), ('B', 1), ('D', 1), ('E', 5)], # Node 'C' connects to 'A', 'B', 'D', and 'E'
    'D': [('C', 1), ('E', 9), ('F', 3)],      # Node 'D' connects to 'C', 'E', and 'F'
    'E': [('A', 11), ('C', 5), ('D', 9)],     # Node 'E' connects to 'A', 'C', and 'D'
    'F': [('B', 2), ('D', 3)]                 # Node 'F' connects to 'B' and 'D'
}

# Define a function to find the shortest path between a start node and all other nodes
# Optionally, a specific target node can be specified
def shortest_path(graph, start, target=''):
    """
    This function calculates the shortest paths from the 'start' node to all other nodes.
    If a specific 'target' node is provided, it will only print the path to that node.
    
    Parameters:
    - graph: Dictionary representing the graph.
    - start: The starting node for finding paths.
    - target: Optional node for which we want the shortest path; if empty, all paths will be displayed.
    
    Returns:
    - distances: Dictionary of shortest distances from 'start' to each node.
    - paths: Dictionary of paths for the shortest route from 'start' to each node.
    """

    # Initialize a list of unvisited nodes (all nodes in the graph)
    unvisited = list(graph)  # Creates a list of all keys (nodes) from the graph dictionary.

    # Create a dictionary to store the shortest distance to each node
    # For the start node, distance is set to 0; all others start with infinity (float('inf'))
    distances = {node: 0 if node == start else float('inf') for node in graph}

    # Create a dictionary to store the shortest path to each node
    # Each node initially has an empty list as its path
    paths = {node: [] for node in graph}

    # Add the starting node to its own path
    paths[start].append(start)  # Adds the start node itself as the beginning of its path.

    # Main loop continues until all nodes are visited
    while unvisited:
        # Find the unvisited node with the smallest known distance
        # `distances.get` provides the distance for comparison within the `min` function
        current = min(unvisited, key=distances.get)

        # Loop over neighboring nodes of the current node
        # Each neighbor is represented as a tuple (node, distance) in the adjacency list
        for node, distance in graph[current]:
            # Calculate the tentative distance to this neighbor via the current node
            # This is the distance to `current` plus the edge weight to `node`
            if distance + distances[current] < distances[node]:
                # If the calculated distance is less than the known distance, update it
                distances[node] = distance + distances[current]
                
                # Update the path for this neighbor node
                if paths[node] and paths[node][-1] == node:  
                    # If the path already includes `node` as the last element, replace it
                    paths[node] = paths[current][:]
                else:
                    # Otherwise, extend the path from `current` to include `node`
                    paths[node].extend(paths[current])
                # Finally, add the neighbor node to the path
                paths[node].append(node)

        # Remove the current node from the unvisited list, marking it as "visited"
        unvisited.remove(current)

    # Determine which paths to display
    # If 'target' is specified, only show the path to that node
    # If no target is specified, show paths to all nodes
    targets_to_print = [target] if target else graph

    # Loop over each node in targets_to_print to display distance and path information
    for node in targets_to_print:
        # Skip the start node as there's no need to print its distance to itself
        if node == start:
            continue
        # Display the shortest distance and path from start to the current node
        print(f'\n{start}-{node} distance: {distances[node]}\nPath: {" -> ".join(paths[node])}')

    # Return the computed distances and paths for potential use outside the function
    return distances, paths

# Call the function with 'A' as the start node
# This will print the shortest paths and distances from 'A' to all other nodes
shortest_path(my_graph, 'A')
