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

export function FetchSushi(category: number, sortBy: string): Promise<SushiType> {
    console.log(`Request: category = ${category}, sortBy = ${sortBy}`)
    return fetch(`/sushi?${(category === 0) ? '_' : `category=${category}&_`}sort=${sortBy}&_order=${(sortBy === 'name') ? 'asc' : 'desc'}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
                .then(data => data as SushiType)
        })
}