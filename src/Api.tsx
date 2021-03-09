export type SushiBlockType = {
    id: number
    imageUrl: string
    name: string
    types: Array<number>
    quantity: Array<number>
    price: number
    category: number
    rating: number
}
export type SushiType = Array<SushiBlockType>

export function FetchSushi(category: number): Promise<SushiType> {
    let request = ''
    if (category === 0) {
        request = `http://localhost:3001/sushi`
    } else {
        request = `http://localhost:3001/sushi?category=${category}`
    }
    return fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
                .then(data => data as SushiType)
        })
}