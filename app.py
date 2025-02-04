from PIL import Image
import numpy as np

def remove_white_background(image_path, output_path):
    # 打開圖像
    img = Image.open(image_path)
    
    # 確保圖像有 alpha 通道（透明度）
    img = img.convert("RGBA")
    
    # 將圖像轉換為 numpy 陣列
    data = np.array(img)

    # 設定白色區域的條件：所有 R, G, B 值都接近 255（白色）
    white_threshold = 240
    white_areas = np.all(data[:, :, :3] >= white_threshold, axis=-1)

    # 將白色區域的 alpha 通道設為 0（透明）
    data[white_areas] = [255, 255, 255, 0]

    # 將修改後的數據轉換回圖像
    new_img = Image.fromarray(data, "RGBA")

    # 保存處理後的圖像
    new_img.save(output_path, format="WEBP")

# 使用範例
remove_white_background("333.webp", "334.webp")
