#!/usr/bin/env python3
import re
import os
import glob

# Pattern to match spacing classes
spacing_pattern = r'\b(p-\d+|px-\d+|py-\d+|pt-\d+|pb-\d+|pl-\d+|pr-\d+|m-\d+|mx-\d+|my-\d+|mt-\d+|mb-\d+|ml-\d+|mr-\d+)\b'

def add_important_to_spacing(content):
    """Add ! prefix to spacing classes that don't already have it"""
    def replacer(match):
        class_name = match.group(1)
        # Check if already has ! prefix
        if match.string[match.start()-1:match.start()] == '!':
            return class_name
        return f'!{class_name}'
    
    return re.sub(spacing_pattern, replacer, content)

# Find all JSX files
jsx_files = glob.glob('src/**/*.jsx', recursive=True)

for filepath in jsx_files:
    print(f'Processing: {filepath}')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified_content = add_important_to_spacing(content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(modified_content)

print(f'\\nProcessed {len(jsx_files)} files')
