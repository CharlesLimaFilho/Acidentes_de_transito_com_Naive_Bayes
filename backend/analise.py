import joblib
import numpy as np
import cv2
from skimage.feature import hog

model = joblib.load('./modelo/modelo.pkl')
scaler = joblib.load('./modelo/scaler.pkl')

def preprocessar_imagem_avancado(image_bytes):
    import io

    img_array = np.frombuffer(image_bytes, np.uint8)

    img = cv2.imdecode(img_array, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError("Não foi possível decodificar a imagem")

    img = cv2.resize(img, (128, 128))

    features_hog = hog(
        img,
        orientations=9,
        pixels_per_cell=(8, 8),
        cells_per_block=(2, 2),
        visualize=False
    )

    edges = cv2.Canny(img, 100, 200)
    densidade_bordas = np.array([np.sum(edges > 0) / edges.size])

    features = np.hstack([features_hog, densidade_bordas])

    features = scaler.transform([features])

    return features

def analisar(image_bytes):
    imagem = preprocessar_imagem_avancado(image_bytes)

    classe = model.predict(imagem)[0]
    probabilidades = model.predict_proba(imagem)[0]

    idx_classe = list(model.classes_).index(classe)
    certeza = float(probabilidades[idx_classe])

    return classe, certeza
