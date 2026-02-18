import os
from graphviz import Digraph

def visualize_folder_structure(root_dir):
    # Create a directed graph
    dot = Digraph(comment="Folder Structure", format="png")

    # Walk the directory structure
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Create nodes for directories
        parent_dir = os.path.relpath(dirpath, root_dir)
        if parent_dir == ".":
            parent_dir = os.path.basename(root_dir)
        dot.node(parent_dir, label=parent_dir, shape='folder')

        # Add directories and files
        for dirname in dirnames:
            sub_dir = os.path.join(parent_dir, dirname)
            dot.node(sub_dir, label=dirname, shape='folder')
            dot.edge(parent_dir, sub_dir)
        
        for filename in filenames:
            file_node = os.path.join(parent_dir, filename)
            dot.node(file_node, label=filename, shape='note')
            dot.edge(parent_dir, file_node)

    # Save the visualization
    output_file = os.path.join(root_dir, 'folder_structure')
    dot.render(output_file)
    print(f"Folder structure saved as {output_file}.png")

# Example usage: Change this to the folder you want to visualize
visualize_folder_structure(r"c:\Users\7950X WS\Desktop\jaj-master")


