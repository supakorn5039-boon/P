import cv2
import pickle

width, height = 70, 27

def checkParkingSpace(imgPro):
    for pos in posList:
        x, y = pos
        cv2.rectangle(imgPro, pos, (x + width, y + height), (255, 0, 255), 2)
        
        imgCrop = imgPro[y:y + height, x:x + width]
        if imgCrop.shape[0] > 0 and imgCrop.shape[1] > 0:
            cv2.imshow(f"Parking Space at ({x}, {y})", imgCrop)


# video feed
cap = cv2.VideoCapture('carPark.mp4')

with open('carParkPos', 'rb') as f:
    posList = pickle.load(f)

while True:
    if cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

    success, img = cap.read()

    if not success:
        # End of video or video cannot be read.
        break

    img_copy = img.copy()  # Create a copy of the frame to draw rectangles on the copy.
    
    # Preprocess the image - Convert to HSV and threshold on the saturation channel
    img_hsv = cv2.cvtColor(img_copy, cv2.COLOR_BGR2HSV)
    saturation = img_hsv[:, :, 1]  # Saturation channel
    _, imgThreshold = cv2.threshold(saturation, 100, 255, cv2.THRESH_BINARY)

    checkParkingSpace(imgThreshold)  # Pass imgThreshold as an argument

    cv2.imshow("Image", img_copy)
    cv2.imshow("Threshold", imgThreshold)

    # Wait