from PIL import Image, ImageOps

def make_transparent(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for r, g, b, a in datas:
        lum = (r + g + b) / 3.0
        if lum > 230:
            new_data.append((r, g, b, 0))
        else:
            alpha = 255
            if lum > 190:
                alpha = int(255 * (230 - lum) / 40.0)
            
            # Boost the color slightly to compensate for the white background removal
            new_data.append((r, g, b, alpha))
            
    img.putdata(new_data)
    
    # Crop the image to remove excess transparent padding
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(out_path, "PNG")

make_transparent("public/om_sacred_symbol.png", "public/om_sacred_symbol_transparent.png")
print("Image made transparent.")
