from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import time

app = FastAPI(title="MOC AI Assistant API", version="1.0.0")

# Allow requests from the Mobile App and Admin Portal
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    user_id: str
    message: str
    language: str = "en" # 'en' or 'ar'

class ChatResponse(BaseModel):
    response: str
    action_intent: str = None
    confidence: float

# Dummy Knowledge Base extracted from the PRD
KNOWLEDGE_BASE = {
    "book fair": "The Doha International Book Fair runs from May 10 to May 20, 2026 at the DECC.",
    "appointment": "You can book an appointment through the E-Services section on the app. I can also help you start that process.",
    "complaint": "To submit a complaint, use the 'Capture & Send' feature on the homepage. You can attach a photo and GPS coordinates.",
    "pearl diving": "The Traditional Pearl Diving Exhibition is happening on June 5 at the Qatar National Museum."
}

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "MOC AI Assistant"}

@app.post("/api/v1/chat", response_model=ChatResponse)
async def chat_with_assistant(request: ChatRequest):
    msg = request.message.lower()
    
    # Simple keyword-based mock routing (In production: LangChain + LLM + RAG)
    response_text = "I'm sorry, I couldn't find information about that in the Ministry's databases. Can I help you with anything else?"
    action_intent = None
    
    for key, val in KNOWLEDGE_BASE.items():
        if key in msg:
            response_text = val
            if key == "appointment":
                action_intent = "NAVIGATE_TO_APPOINTMENTS"
            break
            
    # Simulate processing delay
    time.sleep(1)
    
    return ChatResponse(
        response=response_text,
        action_intent=action_intent,
        confidence=0.95
    )


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
