const stripe=require("stripe")
const Stripe = stripe("sk_test_51PDORlRomicKT5CpETH2EnqXYiPeLyCLskI8CZ4K3fJKgHc4h7pQGSiHyaeFU0iDC0wFio8R5uLPQxCPTwNWBICD0032oFfMhp")
exports.paiment=async(req,res)=>{
    console.log(req.body)
    const line_items=req.body.panier.map(e=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: e.book.title,
                        images : [e.book.image],

                        description: e.book.description,
                        metadata:{
                            id:e.book._id
                        }
                    },
                    unit_amount: e.book.price*100,
                },
                quantity: 1
            }

    })
    const session = await Stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.send({url:session.url });
}