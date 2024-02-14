from flask import Flask, request, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database configuration
db_host = 'localhost'
db_user = 'your_username'
db_password = 'your_password'
db_name = 'testimonials_db'

# Create a connection to the database
db = pymysql.connect(host=db_host, user=db_user, password=db_password, database=db_name)
cursor = db.cursor()

# Ensure the table 'testimonials' exists
cursor.execute('''
    CREATE TABLE IF NOT EXISTS testimonials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        content TEXT NOT NULL
    )
''')
db.commit()

@app.route('/api/testimonials', methods=['POST'])
def submit_testimonial():
    data = request.json
    print(data),

    if 'name' not in data or 'content' not in data:
        return jsonify({'error': 'Name and content are required fields.'}), 400

    new_testimonial = {
        'name': data['name'],
        'content': data['content']
    }

    # Insert the new testimonial into the database
    cursor.execute('INSERT INTO testimonials (name, comment) VALUES (%s, %s)', (new_testimonial['name'], new_testimonial['content']))
    db.commit()

    print('New testimonial submitted:', new_testimonial)

    return jsonify({'message': 'Testimonial submitted successfully.'}), 201

@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    # Fetch all testimonials from the database
    cursor.execute('SELECT * FROM testimonials')
    testimonials = cursor.fetchall()
    print(testimonials)
    # Convert the results to a list of dictionaries
    testimonials_list = [{'id': row[0], 'name': row[1], 'content': row[2]} for row in testimonials]

    return jsonify(testimonials_list)

if __name__ == '__main__':
    app.run(debug=True)
