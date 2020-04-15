# 数组 Array

## 1.数组去重

```
function noRepeat(arr) {
  return [...new Set(arr)]
}
```

## 2.查找数组最大

```
function arrayMax(arr) {
  return Math.max(...arr);
}
```

## 3.查找数组最小

```
function arrayMin(arr) {
  return Math.min(...arr);
}
```

## 4.返回已size为长度的数组分割的原数组

```
function chunk(arr, size = 1) {
  return Array.from({
    length: Math.ceil(arr.length / size)
  }, (v, i) => arr.slice(i * size, i * size + size));
}
```

## 5.检查数组中某元素出现的次数

```
function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}
```

## 6.扁平化数组

```
function flatten(arr, depth = -1) {
  if (depth === -1) {
    return [].concat(...arr.map(v => Array.isArray(v) ? this.flatten(v) : v))
  }
  if (depth === 1) {
    return arr.reduce((a, v) => a.concat(v), []);
  }
  return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v), [])
}
```

## 7.对比两个数组并且返回其中不同的元素

```
function diffrence(arrA, arrB) {
  return arrA.filter(v => !arrB.includes(v))
}
```

## 8.返回两个数组中相同的元素

```
function intersection(arr1, arr2) {
  return arr2.filter(v => arr1.includes(v))
}
```

## 9.从右删除n个元素

```
function dropRight(arr, n = 0) {
  return n < arr.length ? arr.slice(0, arr.length - n) : [];
}
```

## 10.截取第一个符合条件的元素及其以后的元素

```
function dropElements(arr, fn) {
  while (arr.length && !fn(arr[0])) arr = arr.slice(1);
  return arr;
}
```

## 11.返回数组中下标间隔nth的元素

```
function everyNth(arr, nth) {
  return arr.filter((v, i) => i % nth === nth - 1)
}
```

## 12.返回数组中第n个元素

```
function nthElement(arr, n = 0) {
  return (n >= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]
}
```

## 13.返回数组头元素

```
function head(arr) {
  return arr[0]
}
```

## 14.返回数组末尾元素

```
function last(arr) {
  return arr[arr.length - 1]
}
```

## 15.数组乱排

```
function shuffle(arr) {
  let array = arr
  let index = array.length

  while (index) {
    index -= 1
    let randomInedx = Math.floor(Math.random() * index)
    let middleware = array[index]
    array[index] = array[randomInedx]
    array[randomInedx] = middleware
  }

  return array
}
```

## 16.递归

```
function flat1 (arr) {
    let result = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flat1(element))
        } else {
            result.push(element)
        }
    });
    return result
}
```
## 17.toString

```
function flat2 (arr) {
    // 有缺陷，toString 后无法保持之前的类型
    return arr.toString().split(',')
}
```

## 18.reduce

```
function flat3 (arr) {
    // 本质和 flat1 一样的，都是递归
    return arr.reduce((pre, next) => {
        return pre.concat(Array.isArray(next) ? flat3(next) : next)
    }, [])
}
```

## 19.rest运算符

```
function flat4 (arr) {
    while (arr.some(item => Array.isArray(item))) {
        // 相当于 [].concat('1', 2, [3, 4])
        // concat 方法本身就会把参数中的数组展开
        arr = [].concat(...arr);
    }
    return arr;
}
```