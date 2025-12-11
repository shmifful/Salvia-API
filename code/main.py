from typing import Union
from fastapi import FastAPI, HTTPException
from contextlib import asynccontextmanager
import joblib
import numpy as np
from pathlib import Path

SENTIMENT_MODEL_PATH = Path("sentiment_classifier.pkl")
sentiments = ["negative", "neutral", "positive"]

# Lifespan event handler
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Loading model...")
    sentiment_model = joblib.load(SENTIMENT_MODEL_PATH)  

    # attach it to app.state so endpoints can use it
    app.state.sentiment_model = sentiment_model

    print("Model loaded.")
    yield

    # Shutdown logic here if needed
    print("Shutting down...")


app = FastAPI(lifespan=lifespan)

@app.get("/sentiment/{s}")
def read_item(s: Union[str, None] = None):
    """
    Analyze the sentiment of a given text string.

    Parameters:
        s (str): The input text to analyze.

    Returns:
        dict: {
            "sentiment": "positive" | "negative" | "neutral",
            "confidence": float  # between 0 and 1
        }

    Raises:
        400: No input text provided.
        503: Model is not loaded and ready.
    """
    if not s:
        raise HTTPException(status_code=400, detail="No input text provided.")

    if app.state.sentiment_model is None:
        raise HTTPException(status_code=503, detail="Model failed to load.")
    
    print("Received: ", s)

    score = app.state.sentiment_model.decision_function([s])[0]
    pred = 1 / (1 + np.exp(-score))
    confidence = pred.max()
    response = {
        "sentiment": sentiments[pred.argmax()],
        "confidence": round(confidence, 2)
    }
    return response
