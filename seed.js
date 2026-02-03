import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const products = [
    {
        name: 'Premium Wireless Headphones',
        description: 'Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions.',
        price: 299.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        stock: 45,
        isFeatured: true
    },
    {
        name: 'Smart Fitness Watch',
        description: 'Track your health and fitness with precision. Heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life.',
        price: 249.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        stock: 28,
        isFeatured: true
    },
    {
        name: 'Minimalist Leather Backpack',
        description: 'Crafted from genuine leather with modern design. Fits 15" laptops, water-resistant lining, and hidden anti-theft pocket.',
        price: 189.99,
        category: 'Clothing',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
        stock: 62
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Database Seeded!');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
