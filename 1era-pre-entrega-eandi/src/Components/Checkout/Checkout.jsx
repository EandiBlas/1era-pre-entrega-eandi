import './Checkout.css'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const Checkout = () => {

    const { cart, cartEmpty, total } = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [cellphone, setCellphone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");

    const HandleForm = (event) => {
        event.preventDefault();

        if (!name || !lastname || !cellphone || !email || !emailConfirmation) {
            setError("Por favor complete todos los campos requeridos");
            return;
        }

        if (email !== emailConfirmation) {
            setError("Los campos requeridos por el email no coinciden")
            return;
        }

        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                amount: product.amount,
            })),
            total: cart.reduce((total, product) => total + product.item.price * product.amount, 0),
            name,
            lastname,
            cellphone,
            email,
            fecha: new Date(),
        };


        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, "products", productOrder.id);
                const productDoc = await getDoc(productRef);
                const actualyStock = productDoc.data().stock;
                await updateDoc(productRef, {
                    stock: actualyStock - productOrder.amount,
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "OrderClients"), order)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        cartEmpty();
                    })
                    .catch((error) => {
                        console.error("Error al crear la orden", error);
                        setError("Se produjo un error al cargar la orden");
                    })
            })
            .catch((error) => {
                console.error("error al actualizar stock", error)
                setError("Se produjo un error al actualizar el stock");
            })
    }

    return (
        <div className="myform-design">
            <h2>Verificacion de pago</h2>
            <form onSubmit={HandleForm} className="form">
                {cart.map(product => (
                    <div className="form" key={product.item.id}>
                        <p> {product.item.name} </p>
                        <p> Cantidad: {product.amount} </p>
                        <p> Precio: ${product.item.price} </p>
                        <hr />
                    </div>
                ))}
                <p>Total Compra: ${total} </p>
                <p>Este tipo de verificacion es totalmente de simulación los precios no son reales y el stock es ficticio.</p>
                <hr />
                <div className="form-group">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input type="text" required value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Telefono</label>
                    <input type="number" required value={cellphone} onChange={(e) => setCellphone(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" required value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>

                {error && <strong> {error} </strong>}
                <button type="submit" className="myButton"> Finalizar Compra </button>
                <hr/>
            </form>

            {
                orderId && (
                    <div className="ordenCompras"><p>¡Gracias por comprar en nuestra tienda! Tu número de orden es el siguiente:</p> <strong>{orderId}</strong> </div>
                )
            }

        </div>
    )
}

export default Checkout