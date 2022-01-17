import React from 'react'

interface OperationChainProps {

}
function OperationChain(props: OperationChainProps) {

    // Boolean值：以下均为false
    console.log(Boolean(''));
    console.log(Boolean(0));
    console.log(Boolean(null));
    console.log(Boolean(undefined));
    console.log(Boolean(NaN));

    // || 和 ？ 三元符 都取决于布尔值,布尔值是false -> 取符号后的数值,和&&完全对立
    console.log('0?', 0 ? "前" : "后");
    console.log('empty string?', "" ? "前" : "后");
    console.log('null?', null ? "前" : "后");
    console.log('undefined?', undefined ? "前" : "后");
    console.log('NaN?', NaN ? "前" : "后");
    console.log("------------------------");

    console.log('0||', 0 || "后");
    console.log('empty string||', "" || "后");
    console.log('null||', null || "后");
    console.log('undefined||', undefined || "后");
    console.log('NaN||', NaN || "后");
    console.log("------------------------");

    // &&,前面Boolean是false就显示前面的，前面是true显示后面的,和 || ? 完全对立
    console.log('0&&', 0 && "后");
    console.log('empty string&&', "" && "后");
    console.log('null&&', null && "后");
    console.log('undefined&&', undefined && "后");
    console.log('NaN&&', NaN && "后");
    console.log('true&&', true && '后');
    console.log("------------------------");

    // 不取决于boolean，取决于是否存在。?? 只有null和undefined会取后的值
    console.log('0??', 0 ?? "后");
    console.log('empty string??', '' ?? "后");
    console.log('null??', null ?? "后");
    console.log('undefined??', undefined ?? "后");
    console.log('NaN??', NaN ?? "后");
    console.log("------------------------");

    return (
        <div>
            Operation Chain<br />
            <div>--------------------</div>
            <div>? :</div>
            {true ? 0 : 1}
            {false ? 0 : 1}
            <div>--------------------</div>
            ||
            {true || 0}
            {false || 1}
            <div>--------------------</div>
            <div>{'&&'}</div>
            {0 && <div>后面</div>}
            {'' && <div>后面</div>}
            {null && <div>后面</div>}
            {undefined && <div>后面</div>}
            {NaN && <div>后面</div>}
            {true && <div>后面</div>}
            <div>--------------------</div>
            {0 || <div>后面</div>}
            {'' || <div>后面</div>}
            {null || <div>后面</div>}
            {undefined || <div>后面</div>}
            {false || <div>后面</div>}
            <div>--------------------</div>
            {0 ?? <div>后面</div>}
            {'' ?? <div>后面</div>}
            {null ?? <div>后面</div>}
            {undefined ?? <div>后面</div>}
            {false ?? <div>后面</div>}
        </div>
    )
}

export default OperationChain;