import gradio as gr
import random

# Predefined dataset
thoughtful_ai_data = {
    "questions": [
        {
            "question": "What does the eligibility verification agent (EVA) do?",
            "answer": "EVA automates the process of verifying a patient's eligibility and benefits information in real-time, eliminating manual data entry errors and reducing claim rejections."
        },
        {
            "question": "What does the claims processing agent (CAM) do?",
            "answer": "CAM streamlines the submission and management of claims, improving accuracy, reducing manual intervention, and accelerating reimbursements."
        },
        {
            "question": "How does the payment posting agent (PHIL) work?",
            "answer": "PHIL automates the posting of payments to patient accounts, ensuring fast, accurate reconciliation of payments and reducing administrative burden."
        },
        {
            "question": "Tell me about Thoughtful AI's Agents.",
            "answer": "Thoughtful AI provides a suite of AI-powered automation agents designed to streamline healthcare processes. These include Eligibility Verification (EVA), Claims Processing (CAM), and Payment Posting (PHIL), among others."
        },
        {
            "question": "What are the benefits of using Thoughtful AI's agents?",
            "answer": "Using Thoughtful AI's Agents can significantly reduce administrative costs, improve operational efficiency, and reduce errors in critical processes like claims management and payment posting."
        }
    ]
}

def find_best_match(user_question, questions):
    best_match = None
    highest_score = 0

    for q in questions:
        score = sum(word in user_question.lower() for word in q['question'].lower().split())
        if score > highest_score:
            highest_score = score
            best_match = q

    return best_match if highest_score > 0 else None

def thoughtful_ai_agent(message, history):
    best_match = find_best_match(message, thoughtful_ai_data["questions"])
    
    if best_match:
        return best_match["answer"]
    else:
        generic_responses = [
            "I'm sorry, I don't have specific information about that. Is there anything else I can help you with regarding Thoughtful AI's agents?",
            "That's an interesting question, but it's outside my current knowledge base. Can I assist you with any information about EVA, CAM, or PHIL?",
            "I'm afraid I don't have a specific answer for that. Would you like to know more about the benefits of using Thoughtful AI's agents?",
        ]
        return random.choice(generic_responses)

# Create the Gradio interface
iface = gr.ChatInterface(
    thoughtful_ai_agent,
    chatbot=gr.Chatbot(height=300),
    textbox=gr.Textbox(placeholder="Ask me about Thoughtful AI's agents...", container=False, scale=7),
    title="Thoughtful AI Customer Support Agent",
    description="I can answer questions about Thoughtful AI's agents like EVA, CAM, and PHIL.",
    theme="soft",
    examples=[
        "What does EVA do?",
        "Tell me about CAM",
        "How does PHIL work?",
        "What are the benefits of Thoughtful AI's agents?",
    ],
    cache_examples=True,
)

# Launch the interface
iface.launch()