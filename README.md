# Каталог и корзина Суши-магазина
## https://react-ts-sushishop.herokuapp.com/

## Как это работает:
1. [Каталог](#catalog)
    1. [Список блюд](#list)
    2. [Категории](#categories)
    3. [Сортировка](#sort)
3. [Корзина](#cart)

## TODO:
1. Сделать нормальный адаптив для категорий
2. Сделать нормальную решётку для элементов каталога

### Каталог <a name="catalog"></a>
На этой странице выводится список блюд, которые хранятся в формате .json локально (/public/db.json)
Этот файл "хостится" фейковым json-сервером (библиотека json-server)

#### Список блюд <a name="list"></a>
Этот компонент выводит список блюд, получаемый запросом к json-серверу:
```tsx
const SushiList = () => {
    const dispatch = useDispatch()
    const { items, isLoading, error }: SushiStateType = useSelector(sushiSelector)
    const category: number = useSelector(categorySelector)
    const sortBy: string = useSelector(sortBySelector)
    const onAddSushi = useCallback((obj: any) => { 
        dispatch(addSushiToCart(obj)) 
    }, [])
    React.useEffect(() => {
        dispatch(FetchSushiThunk({category, sortBy}))
    }, [category, sortBy])
    console.log('SushiList rerendered!')

    return (
        <div className="content__items">
            {
                (error)
                    ? <h1>{error} Что-то пошло не так!</h1>
                    : (isLoading)
                        ? [...Array(12)].map((value, index: number) => <SushiPlaceholder key={index}/>)
                        : items && items.map((item) => (<SushiBlock key={item.id} {...item} onAddSushi={onAddSushi}/>))
            }
        </div>
    )
}
```
Сам запрос выглядит вот так:
```tsx
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
```
URL запроса выглядит весьма запутанным, но он сводится к трём параметрам:
1. Категория (при наличии)
2. Сортировка по признаку (при наличии)
3. Порядок сортировки (при наличии сортировки)

#### Категории <a name="categories"></a>
Компонент выводит список категорий, к которым относятся блюда. 
При клике на отдельную категорию, она фиксируется в state как текущая категория.
При этом, происходит новый запрос к json-серверу, с фильтром по категории.
```tsx
const Categories: React.FC<CategoriesPropsType> = ({ items }) => {
    const dispatch = useDispatch()
    const ActiveItem: number = useSelector(categorySelector)

    return (
        <div className="categories">
            <ul>
                {
                    items &&
                    items.map((item, index) =>
                        <li
                            key={`${item}_${index}`}
                            className={(ActiveItem === index) ? 'active' : ''}
                            onClick={() => dispatch(setCategory(index))}
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
```
#### Сортировка <a name="sort"></a>
Компонент выводит доступные варианты параметров, по которым можно отсортировать блюда из списка.
(Цена, Алфавитный порядок, Популярность)
При клике, фиксирует в state актуальную сортировку, при этом производя новый запрос к серверу
```tsx
const Sort: React.FC<SortPropsType> = ({ items }) => {
    const dispatch = useDispatch()
    const ActiveItem: string = useSelector(sortBySelector)
    const [isPopup, setPopup] = useState(false)
    const sortRef = useRef<HTMLDivElement>(null)
    const setActiveItemAndClosePopup = (type: string) => {
        dispatch(setSortBy(type))
        setPopup(!isPopup)
    }
    const handleClick = (e: MouseEvent) => {
        //@ts-ignore
        if (!e.composedPath().includes(sortRef.current)) {
            setPopup(false)
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', handleClick)
    }, [])

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label" onClick={() => setPopup(!isPopup)}>
                <img src={SortArrow} alt="Arrow" className={!isPopup ? 'rotated' : ''} />
                <b>Сортировка по:</b>
                <span>{items.find((e) => e.type === ActiveItem)?.name}</span>
            </div>
            {
                isPopup &&
                <div className="sort__popup">
                    <ul>
                        {
                            items &&
                            items.map((item, index) =>
                                <li
                                    key={`${item.type}_${index}`}
                                    className={(ActiveItem === item.type) ? 'active' : ''}
                                    onClick={() => setActiveItemAndClosePopup(item.type)}
                                >
                                    {item.name}
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    )
}
```
### Корзина <a name="cart"></a>
Этот компонент отрисовывает содержимое массива объектов items. 
Каждый объект в массиве - добавленное блюдо из списка.
```tsx
const CartList = () => {
    const dispatch = useDispatch()
    const items = useSelector(itemsSelector)
    const priceCount = useSelector(totalPriceSelector)
    const itemsCount = useSelector(totalCountSelector)
    const dispatchPlusTotalPrice = (num: number) => {dispatch(plusTotalPrice(num))}
    const dispatchMinusTotalPrice = (num: number) => {dispatch(minusTotalPrice(num))}
    const dispatchPlusTotalCount = (num: number) => {dispatch(plusTotalCount(num))}
    const dispatchMinusTotalCount = (num: number) => {dispatch(minusTotalCount(num))}
    const dispatchAbortCart = () => {dispatch(abortCart())}
    const dispatchAbortCartItem = (num: number) => {dispatch(abortCartItem(num))}
    const dispatchSetCartItemAddedQuantity = (orderId: number, addedQuantity: number) => {dispatch(setCartItemAddedQuantity({orderId, addedQuantity}))}
    

    if (items.length !== 0) {
        return (
            <>
                <div className="cart__top">
                    <h2 className="content__title">
                        <CartLogo />
                            Корзина
                        </h2>
                    <div className="cart__clear" onClick={() => {dispatchAbortCart()}}>
                        <TrashLogo />
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    {
                        items.map ((e: any, key: number) => (
                            <CartItem 
                                key={key} 
                                {...e}
                                dispatchPlusTotalPrice={dispatchPlusTotalPrice}
                                dispatchMinusTotalPrice={dispatchMinusTotalPrice}
                                dispatchPlusTotalCount={dispatchPlusTotalCount}
                                dispatchMinusTotalCount={dispatchMinusTotalCount}
                                dispatchAbortCartItem = {dispatchAbortCartItem}
                                dispatchSetCartItemAddedQuantity = {dispatchSetCartItemAddedQuantity}
                                orderId = {key}
                            />
                        ))
                    }
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего роллов: <b>{itemsCount} шт.</b> </span>
                        <span> Сумма заказа: <b>{priceCount} ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <Link to="/" className="button button--outline button--add go-back-btn">
                            <ToLeftArrow />
                            <span>Вернуться назад</span>
                        </Link>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <EmptyCart/>
    }
}
```
Реализована проверка на добавленное количество блюд, подсчёт количества добавленных позиций, общая цена заказа.
Реализовано удаление отдельных позиций, и очищение всей корзины. (на все эти вещи можно посмотреть в reducer'е cartSlice.tsx)
