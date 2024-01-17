import os
from PIL import Image

root_dir = '.'  # Root directory to start from
black_list = ['node_modules']

def in_blacklist(path):
    """Check if any part of the path is in the blacklist."""
    return any(blacklisted in path.split(os.sep) for blacklisted in black_list)

for subdir, dirs, files in os.walk(root_dir):
    if in_blacklist(subdir):
        print(f'Skipping blacklisted directory: {subdir}')
        continue

    for file in files:
        if file.lower().endswith('.png'):
            png_path = os.path.join(subdir, file)
            webp_path = png_path[:-4] + '.webp'  # Replace .png with .webp
            
            # Open the image and convert it
            with Image.open(png_path) as img:
                img.save(webp_path, 'WEBP', quality=80)
            
            print(f'Converted {png_path} to {webp_path}')
