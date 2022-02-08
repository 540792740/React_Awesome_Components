/* eslint-disable no-extend-native */
import React, { useEffect } from 'react'
interface PantonProps {

}
function BasicTs(props: PantonProps) {

    useEffect(() => {
        let output = identity<string>("myString");  // output: string
        console.log(output);

    }, []);

    // generics 泛型
    function identity<Type>(arg: Type): Type {
        return arg;
    }

    // 函数没有返回值 void 
    function noReturn<Type>(arg: Type): void {
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

export default BasicTs;