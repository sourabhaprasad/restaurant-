from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)

# Replace these with your MySQL database credentials
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = ''
DB_NAME = 'testimonials_db'

# Connect to MySQL
connection = pymysql.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME,
    cursorclass=pymysql.cursors.DictCursor
)

@app.route('/place-order', methods=['POST'])
def place_order():
    try:
        # Assuming you receive the order as a JSON array in the request body
        order_data = request.json

        # Process the order and save it to the database
        with connection.cursor() as cursor:
            # Create a new order in the 'orders' table
            insert_order_query = "INSERT INTO orders (item_name, price) VALUES (%s, %s)"
            for item in order_data:
                cursor.execute(insert_order_query, (item['name'], item['price']))

        # Commit the changes to the database
        connection.commit()

        # Return a success response
        return jsonify({"message": "Order placed successfully"}), 200
    except Exception as e:
        print("Error placing order:", str(e))
        return jsonify({"message": "Error placing order"}), 500
    finally:
        # Close the database connection
        connection.close()

@app.route('/get-menu', methods=['GET'])
def get_menu():
    try:
        with connection.cursor() as cursor:
            # Retrieve menu items from the 'menu' table
            cursor.execute("SELECT * FROM menu")
            menu_items = cursor.fetchall()

        return jsonify({"menu": menu_items}), 200
    except Exception as e:
        print("Error retrieving menu:", str(e))
        return jsonify({"message": "Error retrieving menu"}), 500
    finally:
        # Close the database connection
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)
