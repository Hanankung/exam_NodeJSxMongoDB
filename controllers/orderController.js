const Order = require('../models/orders');

exports.getOrders = async (req ,res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    }catch (err){
        res.status(500).json({message :err.message});
    }
};

exports.getOrder = async(res ,req)=> {
    try {
        const order = await Order.findById(req.params.id);
        if(!order) return res.status(404).json({message: 'Order not found'});
        res.json(order);
    }catch (err){
        res.status(500).json({message : err.message});
    }
};

exports.createOrder = async(req,res) => {
    const{customer_name ,product , quantity , order_date ,status } = req.body;
    const order = new Order({customer_name ,product , quantity , order_date ,status });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({message :err.message});
    }
};

exports.updateOrder = async (req,res)=> {
    try {
        const{customer_name ,product , quantity , order_date ,status }= req.body;
        const updateOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {customer_name ,product , quantity , order_date ,status },{new: true}
        );
        if(!updateOrder) return res.status(404).json({message: 'Order not found'});
        res.json(updateOrder);
    }catch (err ){
        res.status(400).json({message: err.message});
    }
};

exports.deleteOrder = async(req,res)=> {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if(!order) return res.status(404).json({message: 'Order notnfound'});
        res.json({message: 'Order deleted'});
    }catch (err){
        res.status(500).json({message: err.message});
    }
}
