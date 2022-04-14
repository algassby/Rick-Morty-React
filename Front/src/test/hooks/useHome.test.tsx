import { rest } from "msw";
import { setupServer } from "msw/node";
import { TProduct } from "../../App";
import { renderHook, act } from '@testing-library/react-hooks'
import useHome from "../../hooks/useHome";

jest.setTimeout(100000);
test("load product", async () => {
    const { result } = renderHook(() => useHome());
    const { loading, loadProducts } = result.current;
    await act(async () => {
        await loadProducts()
    });
    const { products } = result.current;
    expect(products.length).toBeGreaterThan(0);
})