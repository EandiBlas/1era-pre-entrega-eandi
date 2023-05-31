import { useState, createContext } from 'react'

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const [total, setTotal] = useState(0);

    const [totalQuantity, setTotalQuantity] = useState(0);

    const addProduct = (item, amount) => {

        const checkProduct = cart.find(prod => prod.item.id === item.id)

        if (!checkProduct) {
            setCart(prev => [...prev, { item, amount }]);
            setTotalQuantity(prev => prev + amount);
            setTotal(prev => prev + (item.price * amount));
        } else {

            const cartUpdated = cart.map(prod => {

                if (prod.item.id === item.id) {
                    return { ...prod, amount: prod.amount + amount };
                } else {
                    return prod;
                }

            });

            setCart(cartUpdated);
            setTotalQuantity(prev => prev + amount);
            setTotal(prev => prev + (item.price * amount));
        }
    }

    const removeProduct = (id) => {
        const productRemove = cart.find(prod => prod.item.id === id)
        const cartUpdated = cart.filter(prod => prod.item.id !== id)
        setCart(cartUpdated);
        setTotalQuantity(prev => prev - productRemove.amount);
        setTotal(prev => prev - (productRemove.item.price * productRemove.amount));
    }

    const cartEmpty = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, cartEmpty, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )

}