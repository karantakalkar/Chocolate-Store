from flask_restful import Resource, reqparse
from models.chocolate import ChocolateModel


class Chocolate(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('price',
                        type=float,
                        required=True,
                        help="This field cannot be left blank!"
                        )

    def get(self, name):
        chocolate = ChocolateModel.find_by_name(name)
        if chocolate:
            return chocolate.json()
        return {'message': 'Chocolate not found'}, 404

    def post(self, name):
        if ChocolateModel.find_by_name(name):
            return {'message': "An chocolate with name '{}' already exists.".format(name)}, 400

        data = Chocolate.parser.parse_args()

        chocolate = ChocolateModel(name, **data)

        try:
            chocolate.save_to_db()
        except:
            return {"message": "An error occurred inserting the chocolate."}, 500

        return chocolate.json(), 201

    def delete(self, name):
        chocolate = ChocolateModel.find_by_name(name)
        if chocolate:
            chocolate.delete_from_db()
            return {'message': 'Chocolate deleted.'}
        return {'message': 'Chocolate not found.'}, 404

    def put(self, name):
        data = Chocolate.parser.parse_args()

        chocolate = ChocolateModel.find_by_name(name)

        if chocolate:
            chocolate.price = data['price']
        else:
            chocolate = ChocolateModel(name, **data)

        chocolate.save_to_db()

        return chocolate.json()


class ChocolateList(Resource):
    def get(self):
        return {'chocolates': list(map(lambda x: x.json(), ChocolateModel.query.all()))}