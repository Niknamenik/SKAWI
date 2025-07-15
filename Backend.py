from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return send_from_directory( 'index.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    language = data.get('lenguage')

    if not name or not email or not phone or not language:
        return jsonify({'error': 'Недостатньо даних'}), 400

    try:
        send_email(name, email, phone, language)
        return jsonify({'message': 'Дані успішно надіслані!'}), 200
    except Exception as e:
        print("SMTP Error:", e)
        return jsonify({'error': 'Помилка при відправці'}), 500

def send_email(name, email, phone, language):
    sender = "iswwimm@gmail.com"
    password = "liifqbxeenngzrdo "
    recipient = "iswwimm@gmail.com"

    content = f"""
    📥 Нове повідомлення з сайту:

    Ім'я: {name}
    Email: {email}
    Телефон: {phone}
    Обрана мова: {language}
    """

    msg = MIMEText(content)
    msg['Subject'] = "📩 Нова заявка з форми Skawi"
    msg['From'] = sender
    msg['To'] = recipient

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(sender, password)
        server.sendmail(sender, recipient, msg.as_string())

if __name__ == '__main__':
    app.run(debug=True)
