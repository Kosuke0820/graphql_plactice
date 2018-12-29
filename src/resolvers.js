import Product from './api/product/product.model';

export const resolvers = {
  Query: {
    async allProducts() {
      return await Product.find();
    },
    async getProduct(_, { _id }) {
      return await Product.findById(_id);
    }
  },
  Mutation: {
    async createProduct(_, { input }) {
      return await Product.create(input);
    },
    async updateProduct(_, { _id, input }) {
      return await Product.findOneAndUpdate({ _id }, input, { new: true });
    },
    async deleteProduct(_, { _id }) {
      return await Product.findByIdAndDelete(_id);
    }
  },
  Product: {
    _id(parent) {
      if (parent._id) {
        return  parent._id.toString();
      }
    }
  }
}