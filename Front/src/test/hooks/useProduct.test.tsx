import { rest } from "msw";
import { setupServer } from "msw/node";
import { TProduct } from "../../App";
import { renderHook, act } from '@testing-library/react-hooks'
import useProduct from "../../hooks/useProduct";

const server = setupServer(
    rest.get(
        "http://localhost:8000/api/products",
        (req, res, ctx) => {
            return res(
                ctx.json([{ "id": 1, "name": "Rick Sanchez", "price": "15", "quantity": 70, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/1.jpeg" },
                { "id": 2, "name": "Morty Smith", "price": "15", "quantity": 2, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/2.jpeg" },
                { "id": 3, "name": "Summer Smith", "price": "9,99", "quantity": 2, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/3.jpeg" },
                { "id": 4, "name": "Beth Smith", "price": "15", "quantity": 30, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/4.jpeg" },
                { "id": 5, "name": "Jerry Smith", "price": "20", "quantity": 70, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/5.jpeg" },
                { "id": 6, "name": "Abadango Cluster Princess", "price": "16.50", "quantity": 2, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/6.jpeg" },
                { "id": 7, "name": "Abradolf Lincler", "price": "16.50", "quantity": 2, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/7.jpeg" },
                { "id": 8, "name": "Adjudicator Rick", "price": "8", "quantity": 5, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/8.jpeg" },
                { "id": 9, "name": "Agency Director", "price": "15", "quantity": 20, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/9.jpeg" },
                { "id": 10, "name": "Alan Rails", "price": "8", "quantity": 0, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/10.jpeg" },
                { "id": 11, "name": "Albert Einstein", "price": "16.50", "quantity": 70, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/11.jpeg" },
                { "id": 12, "name": "Alexander", "price": "9,99", "quantity": 30, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/12.jpeg" },
                { "id": 13, "name": "Alien Googah", "price": "15", "quantity": 2, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/13.jpeg" },
                { "id": 14, "name": "Alien Morty", "price": "20", "quantity": 5, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/14.jpeg" },
                { "id": 15, "name": "Alien Rick", "price": "9,99", "quantity": 2, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/15.jpeg" },
                { "id": 16, "name": "Amish Cyborg", "price": "20", "quantity": 2, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/16.jpeg" },
                { "id": 17, "name": "Annie", "price": "8", "quantity": 0, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/17.jpeg" },
                { "id": 18, "name": "Antenna Morty", "price": "16.50", "quantity": 30, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/18.jpeg" },
                { "id": 19, "name": "Antenna Rick", "price": "16.50", "quantity": 70, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/19.jpeg" },
                { "id": 20, "name": "Ants in my Eyes Johnson", "price": "8", "quantity": 30, "image": "https:\/\/rickandmortyapi.com\/api\/character\/avatar\/20.jpeg" }])
            )
        }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("create product", async () => {
    const product: TProduct = {
        id: 11, name: '', price: "0", quantity: 10, image: ""
    };
    const { result } = renderHook(() => useProduct(product));
    const { loading } = result.current;
    expect(loading).toEqual(false);
    expect(result.current.quantity).toEqual(1);
});

jest.setTimeout(100000);
test("save product to cart", async () => {
    const product: TProduct = {
        id: 11, name: '', price: "0", quantity: 10, image: ""
    };
    const { result } = renderHook(() => useProduct(product));
    const { loading, addProduct } = result.current;
    expect(loading).toEqual(false);
    await act(async () => {
        await addProduct()
    });
    expect(result.current.message).toContain('Enregistré');
});

test("set quantity product", async () => {
    const product: TProduct = {
        id: 11, name: '', price: "0", quantity: 10, image: ""
    };
    const { result } = renderHook(() => useProduct(product));
    const { setQuantity } = result.current;
    expect(result.current.quantity).toEqual(1);
    setQuantity(11);
    expect(result.current.quantity).toEqual(11);
})