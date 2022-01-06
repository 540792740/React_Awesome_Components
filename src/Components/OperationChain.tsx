import React from 'react'

interface OperationChainProps {

}
function OperationChain(props: OperationChainProps) {

    // 以下均为false
    console.log(Boolean(''));
    console.log(Boolean(0));
    console.log(Boolean(null));
    console.log(Boolean(undefined));
    console.log(Boolean(NaN));

    // || 和 ？ 三元符 都取决于布尔值
    console.log('0', 0 ? 0 : 1);
    console.log('empty string', "" ? "" : 1);
    console.log('null', null ? null : 1);
    console.log('undefined', undefined ? undefined : 1);
    console.log('NaN', NaN ? NaN : 1);
    console.log("------------------------");

    console.log('0', 0 || 1);
    console.log('empty string', "" || 1);
    console.log('null', null || 1);
    console.log('undefined', undefined || 1);
    console.log('NaN', NaN || 1);
    console.log("------------------------");

    // 只有null和undefined会取后面的值
    console.log('0', 0 ?? 1);
    console.log('empty string', "" ?? 1);
    console.log('null', null ?? 1);
    console.log('undefined', undefined ?? 1);
    console.log('NaN', NaN ?? 1);

    return (
        <div>
            Operation Chain
        </div>
    )
}

export default OperationChain;