import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from '../utils/api'


export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState()
    const [products, setProducts] = useState()
    const [sliderImages, setSliderImages] = useState()
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartSubTotal, setCartSubTotal] = useState(0);



    useEffect(() => {

        getCategories();
        getProducts();
        getSliderImages();

        let count = 0;
        cartItems.map((item) => count += item.attributes.quantity);
        setCartCount(count)

        let subTotal = 0;
        cartItems.map((item) => subTotal += item.attributes.price * item.attributes.quantity);
        setCartSubTotal(subTotal);
    }, [cartItems])

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => { setCategories(res) })
    }
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => { setProducts(res) })
    }

    const getSliderImages = () => {
        fetchDataFromApi("/api/sliderBigs/?populate=*").then((res) => { setSliderImages(res) })
    }



    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems]
        let index = items.findIndex(p => p.id === product.id)
        if (index !== -1) {
            items[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity
            items = [...items, product]
        }
        setCartItems(items)
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id)
        setCartItems(items)
    }
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);

        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items)
    }


    return <Context.Provider value={{
        categories, setCategories, products, setProducts, cartItems, setCartItems, cartCount, setCartCount, cartSubTotal, setCartSubTotal, handleAddToCart, handleRemoveFromCart, handleCartProductQuantity, sliderImages, setSliderImages
    }} > {children} </Context.Provider>
}

export default AppContext;