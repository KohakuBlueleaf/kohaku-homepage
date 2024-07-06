import os
from PIL import Image


def resize_to_max_size(image, max_size):
    """Resize the image to a maximum size while preserving the aspect ratio."""
    width, height = image.size
    aspect_ratio = width / height
    if width > max_size or height > max_size:
        if width > height:
            new_width = max_size
            new_height = int(max_size / aspect_ratio)
        else:
            new_width = int(max_size * aspect_ratio)
            new_height = max_size
        return image.resize((new_width, new_height))
    return image


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
                if 'gallery' in subdir:
                    img = resize_to_max_size(Image.open(png_path), 1024)
                img.save(webp_path, 'WEBP', quality=80)

            print(f'Converted {png_path} to {webp_path}')
