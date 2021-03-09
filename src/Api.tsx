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

export function FetchSushi(): Promise<SushiType> {
    return fetch('http://localhost:3001/sushi')
        .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
                .then(data => data as SushiType)
          })
}