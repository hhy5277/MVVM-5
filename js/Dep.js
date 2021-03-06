// 订阅器

export class Dep {
    constructor() {
        this.subs = [];
    }
    // 将watcher添加进来
    _addSub(sub) {
        this.subs.push(sub);
    }
    // 更新视图
    _notify(newVal) {
        this.subs.forEach(val => {
            val.value = newVal;
            val._update();
        })
    }
}