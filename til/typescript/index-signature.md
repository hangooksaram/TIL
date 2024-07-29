# Index Signature

```ts
type Fruit = {
  name: string
  color: string
  mass: number
}
 
type Dict<T> = { [k: string]: T } // <- index signature
 
const fruitCatalog: Dict<Fruit> = {}
fruitCatalog.apple
              
Fruit
```