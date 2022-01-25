/* eslint-disable no-extend-native */
import React, { useEffect } from 'react'
interface PantonProps {

}
function Panton(props: PantonProps) {

    useEffect(() => {
        reduceExample();
        arrayTransfer();
        countTimes();
        groupBy();
        avoidDuplicate();
        runPromiseInSequence();
    }, []);

    // 累加器
    const reduceExample = () => {
        var total = [0, 1, 2, 3].reduce(
            (acc, cur) => acc + cur,
            0
        );
        console.log({ total });


        var initialValue = 0;
        var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.x;
        }, initialValue)
        console.log({ sum }) // logs 6

    }

    // 二维数组变成一维数组
    const arrayTransfer = () => {
        let arr = [[0, 1], [2, 3], [4, 5]];
        let res = arr.reduce((acc, cur) => acc.concat(cur), []);
        console.log({ res });
    }

    // 计算出现次数
    const countTimes = () => {
        var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
        let countName = names.reduce((allNames: any, name: string) => {
            if (name in allNames) allNames[name]++
            else allNames[name] = 1;
            return allNames;
        }, {});
        console.log(countName);
    }

    // 按属性对object分类
    const groupBy = () => {
        let people = [
            { name: 'Alice', age: 21 },
            { name: 'Max', age: 20 },
            { name: 'Jane', age: 20 }
        ];

        let groupBytype = (type: string) => {
            return people.reduce((acc: any, obj: any) => {
                var key = obj[type];
                if (!acc[key]) acc[key] = []
                else acc[key].push(obj);
                return acc;
            }, {})
        }
        console.log(groupBytype('age'));
    }

    // 数组去重:set 会更快
    const avoidDuplicate = () => {
        let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
        let noDuplicateArr = myArray.reduce((acc: any, str: string) => {
            if (acc.indexOf(str) === -1) acc.push(str)
            return acc
        }, []);

        let orderedArray = Array.from(new Set(myArray))
        console.log(noDuplicateArr, orderedArray);
    }

    // 按顺序运行Promise
    const runPromiseInSequence = () => {
        // promise function 1
        function p1(a: number) {
            return new Promise((resolve, reject) => {
                resolve(a * 5);
            });
        }

        // promise function 2
        function p2(a: number) {
            return new Promise((resolve, reject) => {
                resolve(a * 2);
            });
        }

        // function 3  - will be wrapped in a resolved promise by .then()
        function f3(a: number) {
            return a * 3;
        }

        // promise function 4
        function p4(a: number) {
            return new Promise((resolve, reject) => {
                resolve(a * 4);
            });
        }

        const promiseArr = [p1, p2, f3, p4];
        let res = promiseArr.reduce(
            (promiseChain: any, currentFunction) => promiseChain.then(currentFunction),
            Promise.resolve(10)
        );
        res.then((resolve: any) => console.log(resolve))
        return res
    }


    // 使用 reduce实现map
    // const countTimes = () => {

    //     console.log();
    // }



    return (
        <div>
            Js Basic
        </div>
    )
}

export default Panton;