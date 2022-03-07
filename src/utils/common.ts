import path from 'path';
import _ from 'lodash';
import { Modal } from 'antd';

// 空函数
function emptyFn() { };

export function getSnapshot(t: number) {
  return `x-oss-process=video/snapshot,t_${t},ar_auto`
}

// 是否为图片地址
export function isImgUrl(url: string) {
  if (typeof url !== 'string') return console.error('isImgUrl need a string type url');
  const ext = _.lowerCase(path.extname(url).replace('.', ''))
  if (ext == 'jpg' || ext == 'jpeg' || ext == 'png') {
    return true
  } else {
    return false
  }
}

// 跳转新页面
export function openNewPage(url: string) {
  window.open(url, '_black');
}


// 当前页面跳转
export function goTo(url: string) {
  const ori = window.location.origin;
  if (url.includes('http')) {
    window.location.href = url;
  } else {
    window.location.href = `${ori}/${url}`;
  }
}


export const createPromiseOutside = (index: any) => {
  let onload
  let onerror
  const tmp_promise: any = new Promise((resolve) => {
    onload = () => resolve({ status: 'success' })
    onerror = (msg: any) => resolve({ stauts: 'failed', msg })
  })
  tmp_promise.onload = onload
  tmp_promise.onerror = onerror
  tmp_promise.then((res: any) => {
    console.log('itemRender in modiEditor loaded', index, res)
  })
  return tmp_promise
}

export function urlParams(search: string) {
  const para = search.replace("?", "");

  try {
    return para.split('&')
      .map(item => item.split('='))
      .reduce((prev: any, cur: string[]) => (prev[cur[0]] = cur[1], prev), {});
  } catch {
    return {}
  }
}

export function isAlpha(): boolean {
  let host = window.location.host;
  return host.startsWith("local") || host.startsWith("alpha");
}

export const compressionImage = ({ url = '', width = 0 }: { url: string, width: number }) => {
  const source = url.split('?')[0];
  return source + '?x-oss-process=image/resize,m_fill,w_' + width;
}

export function getNumber(min, max, num: number): number {
  if (num > max) num = max
  // if(num < min) 
  return num
}