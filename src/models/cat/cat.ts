import { Item } from '../items/items';

export interface Cat {
    category_id: Number,
    id: Number,
    items: Item[],
    name: String,
    photo: String,
}