class TreeNode:
    # Represents a single node within a binary search tree.
    # Each node contains a key and references to its left and right children.

    def __init__(self, key):
        # Initializes a new TreeNode instance.
        # The 'key' parameter holds the value of the node.
        # 'self.left' and 'self.right' are pointers to the left and right child nodes,
        # initialized to None, as the node starts without children.
        self.key = key
        self.left = None
        self.right = None

    def __str__(self):
        # Defines the string representation of the node, primarily for debugging.
        # Returns the key as a string.
        return str(self.key)

class BinarySearchTree:
    # Implements a Binary Search Tree (BST) with various methods for insertion, deletion, search,
    # and in-order traversal.

    def __init__(self):
        # Initializes the BinarySearchTree with an empty root node.
        # 'self.root' will hold the top node of the tree.
        self.root = None

    def _insert(self, node, key):
        # Private method to handle the recursive insertion of a new key.
        # Takes a starting 'node' and a 'key' to insert.
        # If 'node' is None, creates a new TreeNode with the key and returns it.
        if node is None:
            return TreeNode(key)

        # Compares the key to the current node's key to decide on insertion direction.
        if key < node.key:
            # If key is less, recursively insert into the left subtree.
            node.left = self._insert(node.left, key)
        elif key > node.key:
            # If key is greater, recursively insert into the right subtree.
            node.right = self._insert(node.right, key)

        # Returns the node to maintain the tree's structure after recursion.
        return node

    def insert(self, key):
        # Public method to initiate insertion from the root.
        # Starts the insertion from the root node and updates the root if necessary.
        self.root = self._insert(self.root, key)
        
    def _search(self, node, key):
        # Private method for recursive search.
        # Takes the starting 'node' and 'key' to search for.
        # Base case: If 'node' is None or matches the 'key', it returns the node.
        if node is None or node.key == key:
            return node

        # If key is smaller than node's key, search in the left subtree.
        if key < node.key:
            return self._search(node.left, key)
        
        # Otherwise, search in the right subtree.
        return self._search(node.right, key)
    
    def search(self, key):
        # Public method to initiate search from the root.
        # Calls the recursive '_search' method starting from the root node.
        return self._search(self.root, key)

    def _delete(self, node, key):
        # Private method for recursive deletion of a key.
        # Takes the starting 'node' and 'key' to delete.
        
        # Base case: If 'node' is None, the key is not found, so return None.
        if node is None:
            return node

        # Traverse to the left subtree if the key is smaller than the current node's key.
        if key < node.key:
            node.left = self._delete(node.left, key)
        
        # Traverse to the right subtree if the key is greater than the current node's key.
        elif key > node.key:
            node.right = self._delete(node.right, key)
        
        # If the key matches the current node's key, this node is to be deleted.
        else:
            # Case 1: Node has no left child, return right child to bypass this node.
            if node.left is None:
                return node.right
            
            # Case 2: Node has no right child, return left child to bypass this node.
            elif node.right is None:
                return node.left   
            
            # Case 3: Node has two children. Replace this node's key with the smallest key
            # from its right subtree (in-order successor), then delete that in-order successor.
            node.key = self._min_value(node.right)
            node.right = self._delete(node.right, node.key)   
        
        # Return the node to maintain tree structure after deletion.
        return node

    def delete(self, key):
        # Public method to initiate deletion from the root.
        # Calls the recursive '_delete' method starting from the root node.
        self.root = self._delete(self.root, key)

    def _min_value(self, node):
        # Finds the minimum value in a subtree.
        # This is typically used to find the in-order successor for a node.
        
        # Traverse to the leftmost node, as it holds the smallest key in a BST.
        while node.left is not None:
            node = node.left
        
        # Return the key of the leftmost (smallest) node.
        return node.key

    def _inorder_traversal(self, node, result):
        # Private method for recursive in-order traversal.
        # Traverses the left subtree, adds the node's key to 'result',
        # then traverses the right subtree.
        
        if node:
            # Traverse the left subtree.
            self._inorder_traversal(node.left, result)
            
            # Append the current node's key to the result list.
            result.append(node.key)
            
            # Traverse the right subtree.
            self._inorder_traversal(node.right, result)

    def inorder_traversal(self):
        # Public method to perform in-order traversal and return the result.
        # Initializes an empty list to collect keys in sorted order.
        result = []
        
        # Calls the recursive '_inorder_traversal' starting from the root.
        self._inorder_traversal(self.root, result)
        
        # Returns the sorted keys as a list.
        return result

# Example usage
bst = BinarySearchTree()  # Creates an empty binary search tree.
nodes = [50, 30, 20, 40, 70, 60, 80]  # List of nodes to insert.

# Inserts each node in the BST.
for node in nodes:
    bst.insert(node)

# Searches for a node with key 80.
print('Search for 80:', bst.search(80))

# Prints the in-order traversal, which returns keys in sorted order.
print("Inorder traversal:", bst.inorder_traversal())

# Deletes the node with key 40.
bst.delete(40)

# Attempts to search for the deleted node.
print("Search for 40:", bst.search(40))

